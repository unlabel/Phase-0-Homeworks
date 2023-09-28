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
console.log(create("Выгулять пса"));
