let id = 0;
function generateId() {
  return (id += 1);
}

const allTasks = [];

function create(task) {
  const obj = {
    id: generateId(),
    text: task,
    isDone: false,
  };
  allTasks.push(obj);
  return obj;
}
create("Купить хлеб");
create("Выгулять пса");

function toggleById(allTasks, numIdentificator) {
  for (let i = 0; i < allTasks.length; i++) {
    if (numIdentificator === allTasks[i].id) {
      allTasks[i].isDone = true;
      return allTasks[i];
    }
  }
  return "Задача с таким номером отсутствует";
}
toggleById(allTasks, 1);
toggleById(allTasks, 2);
console.log(allTasks);
