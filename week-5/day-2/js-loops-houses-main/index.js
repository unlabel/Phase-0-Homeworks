const evenHouses = [];
const oddHouses = [];

function generateHouses(street, count, startNumber) {
    for (let i = 1; i <= count; i++) {
        const houseNumber = startNumber + i - 1;
        const houseName = `${street}, д.${houseNumber}`;

        if (houseNumber % 2 === 0) {
            evenHouses.push(houseName);
        } else {
            oddHouses.push(houseName);
        }
    }
}

generateHouses('ул. Тестовая', 4, 99);
console.log(evenHouses);
console.log(oddHouses);