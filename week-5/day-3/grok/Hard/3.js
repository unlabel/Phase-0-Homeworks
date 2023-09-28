/*

  Создайте функцию, которая убирает из строки символ "_", 
  а следующую за "_" букву делает заглавной

  Для начала пропиши аргументы функции.  

  Пример: 'elbrus_bootcamp' => 'elbrusBootcamp'

*/

const camelCase = (str) => {
  let newStr = str.split("_");
  let answer = "";
  for (let i = 0; i < newStr.length; i++) {
    if (i === 0) {
      answer += newStr[i];
    } else {
      answer += newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1);
    }
  }
  return answer;
};

module.exports = camelCase;
