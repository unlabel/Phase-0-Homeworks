// const evenHouses = [];
// const oddHouses = [];

// function generateHouses(street, count, startNumber) {
//     for (let i = 1; i <= count; i++) {
//         const houseNumber = startNumber + i - 1;
//         const houseName = `${street}, д.${houseNumber}`;

//         if (houseNumber % 2 === 0) {
//             evenHouses.push(houseName);
//         } else {
//             oddHouses.push(houseName);
//         }
//     }
// }

// generateHouses('ул. Тестовая', 4, 99);
// console.log(evenHouses);
// console.log(oddHouses);

const evenHouses = [];
const oddHouses = [];

function generateHouses(street, count, startNumber) {
  if (startNumber % 2 === 0) {
    for (let i = 1; i <= count; i++) {
      const evenHousesNumber = startNumber + 2 * i;
      const evenHouseName = `${street}, ${evenHousesNumber}`;
      evenHouses.push(evenHouseName).trim();
    }
    return evenHouses;
  } else {
    for (let j = 1; j <= count; j++) {
      const oddHousesNumber = startNumber + 2 * j - 1;
      const oddHouseName = `${street}, ${oddHousesNumber}`;
      oddHouses.push(oddHouseName).trim();
    }
    return oddHouses;
  }
}

console.log(generateHouses("Pushkina", 4, 42));
console.log(generateHouses("Tolstogo", 3, 41));
