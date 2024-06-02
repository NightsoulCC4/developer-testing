// Can be do it manually,

const { log } = require("console");
const config = require("../config");
const mysql = require("mysql2/promise");

const initDatabase = async () => {

    const con = await mysql.createConnection(config);

    try {

        // drop database if exist
        con.execute(`DROP TABLE IF EXISTS real_estate;`);
        con.execute(`DROP TABLE IF EXISTS image_gallery;`);

        // create database
        con.execute(`CREATE TABLE real_estate (
                        id_real_estate int NOT NULL AUTO_INCREMENT,
                        project_name varchar(45) NOT NULL,
                        area varchar(45) NOT NULL,
                        bed_count int NOT NULL,
                        price double NOT NULL,
                        short_description mediumtext NOT NULL,
                        type varchar(10) NOT NULL DEFAULT 'sale',
                        final_payment tinyint NOT NULL DEFAULT '0',
                        PRIMARY KEY (id_real_estate),
                        UNIQUE KEY id_idreal_estate_UNIQUE (id_real_estate)
                        ) ENGINE=InnoDB AUTO_INCREMENT=1046 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;`)
        con.execute(`CREATE TABLE image_gallery (
                        id_image_gallery int NOT NULL AUTO_INCREMENT,
                        imageUrl longtext NOT NULL,
                        id_real_estate int NOT NULL,
                        PRIMARY KEY (id_image_gallery),
                        UNIQUE KEY id_image_gallery_UNIQUE (id_image_gallery),
                        KEY real_estate_idx (id_real_estate),
                        CONSTRAINT id_real_estate FOREIGN KEY (id_real_estate) REFERENCES real_estate (id_real_estate)
                        ) ENGINE=InnoDB AUTO_INCREMENT=4921 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;`)

    } catch (e) {
        log(e);
    }

}

initDatabase();
