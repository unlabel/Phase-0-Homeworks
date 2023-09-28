/*

Создайте функцию, которая принимает в качестве аргументов 2 неотрицательных числа,
 а возвращает сумму всех целых чисел в диапазоне между ними.

Первое число может больше второго!

Пример: (5, 3) => 12

*/

const sumOfIntegers = (start, end) => {
  let result = 0;
  if (end >= start) {
    for (let i = start; i <= end; i++) {
      result += i;
    }
    return result;
  } else {
    for (let j = start; j >= end; j--) {
      result += j;
    }
    return result;
  }
};

module.exports = sumOfIntegers;
