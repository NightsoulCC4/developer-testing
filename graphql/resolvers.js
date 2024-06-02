const mysql = require("mysql2/promise");
const config = require("./config");
const { log } = require("console");

const resolvers = {
    Query: {
        real_estates: async () => {
            const con = await mysql.createConnection(config);
            let rows;

            try {
                const [result] = await con.execute(
                    `SELECT *
                        FROM fazwaz.real_estate
                        WHERE fazwaz.real_estate.final_payment = 0;`
                );

                if (result.length > 0) {
                    rows = result;

                    rows = rows.map(async (el) => {

                        try {
                            const [images] = await con.execute(
                                `SELECT * FROM fazwaz.image_gallery WHERE fazwaz.image_gallery.id_real_estate = ?;`,
                                [el.id_real_estate]
                            );

                            if (images.length > 0) {
                                el = {
                                    ...el,
                                    images,
                                };
                            }

                            return el;
                        } catch (e) {
                            log(e);
                        }
                    });

                    return rows;
                }
            } catch (e) {
                log(e);
            }
        },
        search_real_estates: async (_, args) => {
            const { type, min_price, max_price, bed_count, area } = args;
            const con = await mysql.createConnection(config);

            let array = [];
            let query = `SELECT * FROM fazwaz.real_estate WHERE fazwaz.real_estate.final_payment = 0 `;

            if (type != null) {
                query += `AND fazwaz.real_estate.type = ? `;
                array.push(type);
            }

            if (min_price != 0 && max_price != 0) {
                query += `AND fazwaz.real_estate.price BETWEEN ? AND ? `;
                array.push(min_price);
                array.push(max_price);
            }
            else if (min_price === 0 && max_price != 0) {
                query += `AND fazwaz.real_estate.price <= ? `;
                array.push(max_price);
            }
            else if (min_price != 0 && max_price === 0) {
                query += `AND fazwaz.real_estate.price >= ? `;
                array.push(min_price);
            }

            if (bed_count != null) {
                if (bed_count === 4) {
                    query += `AND fazwaz.real_estate.bed_count >= 4 `;
                }
                else if (bed_count !== 4) {
                    query += `AND fazwaz.real_estate.bed_count = ? `;
                    array.push(bed_count);
                }
            }

            if (area != null) {
                query += `AND fazwaz.real_estate.area LIKE ? `;
                array.push(`%${area}%`);
            }

            query += `;`;

            try {
                let rows;
                const [result] = await con.execute(query, array);

                if (result.length > 0) {
                    rows = result;

                    rows = rows.map(async (el) => {

                        try {
                            const [images] = await con.execute(
                                `SELECT * FROM fazwaz.image_gallery WHERE fazwaz.image_gallery.id_real_estate = ?;`,
                                [el.id_real_estate]
                            );

                            if (images.length > 0) {
                                el = {
                                    ...el,
                                    images,
                                };
                            }

                            return el;
                        } catch (e) {
                            log(e);
                        }
                    });

                    return rows;

                };
            } catch (e) {
                log(e);
            };

        },
    },
};

module.exports = {
    resolvers
}