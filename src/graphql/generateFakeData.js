const { faker } = require('@faker-js/faker');
const { log } = require('console');

const generateFakeData = (counter) => {

    let data = [];

    for (let i = 1; i <= counter; i++) {
        data = [...data, {
            name: faker.company.name(),
            area: faker.location.country(),
            bed_count: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
            price: faker.commerce.price({ min: 10000.0, max: 1000000.0 }),
            imageUrl: faker.image.url(),
        }];

    }

    log(data);

    return data;
}

module.exports = generateFakeData