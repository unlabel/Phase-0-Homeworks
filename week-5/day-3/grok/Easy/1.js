/*

Создайте функцию, которая принимает в качестве аргументов массив из слов,
 а возвращает созданное из этих слов предложение.  

Пример: ['I', 'am', 'groot'] => 'I am groot'

*/

const toSentence = (arr) => {
  return arr.join(" ");
};

module.exports = toSentence;
