const { faker } = require("@faker-js/faker");
const { log } = require("console");
const config = require("./config");
const mysql = require("mysql2/promise");

const generateFakeData = async (counter) => {
    let data, imageUrl = [];
    const con = await mysql.createConnection(config);

    for (let i = 1; i <= counter; i++) {
        data = {
            project_name: faker.company.name(),
            short_description: faker.lorem.sentences(),
            area: faker.location.country(),
            bed_count: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
            price: faker.commerce.price({ min: 10000.0, max: 1000000.0 }),
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
                    (project_name,
                    area,
                    bed_count,
                    price,
                    short_description)
                    VALUES
                    (?, ?, ?, ?, ?);`,
                [
                    data.project_name,
                    data.area,
                    data.bed_count,
                    data.price,
                    data.short_description,
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

            log("generated data success!!");
        } catch (e) {
            log(e);
            return e;
        }
    };
}

generateFakeData(100000);
