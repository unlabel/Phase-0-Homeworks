// const pendingTasks = [];
// function create(task) {
//   pendingTasks.push(task);
// }

// create("Купить хлеб");
// create("Выгулять пса");
// create("Полить цветок");

// function createUrgent(importantTask) {
//   pendingTasks.unshift(importantTask);
// }
// createUrgent("Вызвать сантехника");
// createUrgent("Перекрыть воду на кухне");

// function readByIndex(index) {
//   if (index === undefined) {
//     return pendingTasks[0];
//   } else if (index >= 0 && index < pendingTasks.length) {
//     return pendingTasks[index];
//   } else if (index < 0) {
//     return pendingTasks[pendingTasks.length + index];
//   }
// }

// // Release 3
// const pendingTasks = [
//   "Зарядить телефон",
//   "Изучить метод splice",
//   "Доделать задачу",
//   "Изучить push/pop",
//   "Изучить unshift/shift",
//   "Сделать два релиза",
// ];
// const completedTasks = [];

// function completeFirst() {
//   const completeTask = pendingTasks.splice(0, 1);
//   completedTasks.push(completeTask[0]);
// }
// completeFirst();

// function completeLast() {
//   const completeTask = pendingTasks.pop();
//   completedTasks.push(completeTask);
// }
// completeLast();

// console.log(pendingTasks);
// console.log(completedTasks);

// function completeByIndex(index) {
//   if (index >= 0 && index < pendingTasks.length) {
//     const completedTask = pendingTasks.splice(index, 1);
//     completedTasks.push(completedTask[0]);
//     return completedTasks;
//   }
// }
// console.log(completeByIndex(3));
// console.log(completeByIndex(5));

// console.log(pendingTasks);
// console.log(completedTasks);

// Release 4-6
const pendingTasks = [
  "Зарядить телефон",
  "Изучить метод splice",
  "Доделать задачу",
  "Изучить push/pop",
  "Изучить unshift/shift",
  "Сделать два релиза",
];
const completedTasks = [];

// function completeByIndex(index) {
//   if (index >= 0 && index < pendingTasks.length) {
//     const completedTask = pendingTasks.splice(index, 1);
//     completedTasks.push(completedTask[0]);
//     return completedTasks;
//   }
// }
// completeByIndex(0);
// completeByIndex(0);
// completeByIndex(0);

// function getStats() {
//   return `Статистика по задачам:
//   ☑︎ выполнено ${completedTasks.length} из ${
//     pendingTasks.length + completedTasks.length
//   }
//   ☐ осталось сделать ${pendingTasks.length}`;
// }
// console.log(getStats());

// function deleteByIndex(index) {
//   if (index < 0 || !Number.isInteger(index)) {
//     throw new Error("Индекс должен быть целым и положительным числом");
//   }

//   if (index >= 0 && index < pendingTasks.length) {
//     const deletedTask = pendingTasks.splice(index, 1);
//     return deletedTask[0];
//   }
// }
// try {
//   console.log(deleteByIndex(5));
//   console.log(deleteByIndex(-1));
// } catch (error) {
//   console.error(error.message);
// }

function updateByIndex(index, editTask) {
  if (index >= 0 && index < pendingTasks.length) {
    const updateTask = pendingTasks.splice(index, 1);
    return pendingTasks.splice(index, 0, editTask);
  }
}
console.log(updateByIndex(0, "Зарядить планшет"));
console.log(pendingTasks);
