let id = 0;
function generateId() {
  return (id += 1);
}

const allTasks = [];

function create(task) {
  const obj = {};
  obj.id = generateId();
  obj.text = task;
  obj.isDone = false;
  return allTasks.push(obj);
}
