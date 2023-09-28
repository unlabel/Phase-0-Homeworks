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
create("Выбросить мусор");

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

function logTasks(allTasks) {
  if (!Array.isArray(allTasks) || allTasks.length === 0) {
    console.log("Пока задач нет. Запланируй что-нибудь!");
    return;
  }
  let result = "";
  for (let i = 0; i < allTasks.length; i++) {
    if (allTasks[i].isDone === true) {
      result += `☑ ${allTasks[i].text}`;
    } else {
      result += `☐ ${allTasks[i].text}`;
    }
    if (i < allTasks.length - 1) {
      result += "\n";
    }
  }
  return result;
}
console.log(logTasks());
