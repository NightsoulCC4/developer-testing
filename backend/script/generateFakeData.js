const { faker } = require("@faker-js/faker");
const { log } = require("console");
const config = require("../graphql/config");
const mysql = require("mysql2/promise");

const generateFakeData = async (counter) => {
    let data, imageUrl = [];
    const con = await mysql.createConnection(config);

    for (let i = 1; i <= counter; i++) {

        let type;

        if (i % 2 === 0)
            type = "sale";
        else
            type = "rent";

        data = {
            project_name: faker.company.name(),
            short_description: faker.lorem.sentences(),
            area: faker.location.country(),
            bed_count: faker.number.int({ min: 1, max: 10 }),
            price: faker.commerce.price({ min: 10000.0, max: 1000000.0 }),
            type: type
        };

        imageUrl = [
            faker.image.url(),
            faker.image.url(),
            faker.image.url(),
            faker.image.url(),
            faker.image.url(),
        ];

        try {
            const [rows] = await con.execute(
                `INSERT INTO fazwaz.real_estate
                    (
                        project_name,
                        area,
                        bed_count,
                        price,
                        short_description,
                        type
                    )
                    VALUES
                    (?, ?, ?, ?, ?, ?);`,
                [
                    data.project_name,
                    data.area,
                    data.bed_count,
                    data.price,
                    data.short_description,
                    data.type,
                ]
            );

            imageUrl.forEach(async (imageUrl) => {
                try {
                    await con.execute(
                        `INSERT INTO fazwaz.image_gallery
                        (
                            imageUrl,
                            id_real_estate
                        )
                        VALUES
                        (?, ?);
                        `,
                        [imageUrl, rows.insertId]
                    );
                } catch (e) {
                    log(e);
                    return e;
                }
            });

            log("generated data ", i, " success!!");

        } catch (e) {
            log(e);
            return e;
        }
    };
}

generateFakeData(100000);
