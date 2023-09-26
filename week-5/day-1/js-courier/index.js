const home = [151151, "Home", "Москва, ш. Рублевское, 1, 1"];

const work = [151151, "Elbrus", "Москва, ул. Твардовского, 2, 2"];

const gym = [295000, "Ironman", "Симферополь, ул. Пушкина, 1"];

const chill = [295000, "Playstation Club", "Симферополь, ул. Горького, 2"];

const locations = [];

function add(location) {
  const postalCode = location[0];

  if (!locations[postalCode]) {
    locations[postalCode] = [];
  }

  locations[postalCode].push(location); // Добавляем вложенный массив без почтового индекса
}

add(home);
add(work);
add(gym);
add(chill);
add([1551, "Home", "Севастополь, ш. Рублевское, 1, 1"]);

console.log(locations);
