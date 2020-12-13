const faker = require('faker');
const fs = require('fs');

let data = [];
const MAKE_DATA = 100

for (let i = 0; i < MAKE_DATA; i++) {
    const uuid = faker.random.uuid();
    const productName = faker.commerce.productName();
    const price = faker.commerce.price();
    const date = faker.date.past();
    data.push({
        uuid,
        productName,
        price,
        date,
    });
}

const jsonData = {
    user: data
}
let fakeData = JSON.stringify(jsonData);
fs.writeFileSync('db.json', fakeData);
