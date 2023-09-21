// const firstWord = 'Hello';
// const secondWord = 'world';
// const myConcatReversed = secondWord + firstWord;
// console.log(myConcatReversed.split('').reverse().join(''));


// function myConcatReversed(str1, str2) {
//     let firstStr = str1.split('').reverse().join('');
//     let secondStr = str2.split('').reverse().join('');
//     return firstStr + secondStr
// }
// console.log(myConcatReversed("Hello", "World")); // olleHdlrow


// String.prototype.myCamelCase = function() {
//     let arr = this.toLowerCase().split(" ");
//     let result = "";
//     for (let i = 0; i < arr.length; i++) {
//         if (i === 0) {
//             result += arr[i].toLowerCase();
//         } else {
//             result += arr[i][0].toUpperCase() + arr[i].slice(1, arr[i].length);
//         }
//     }
//     return result;
// }
// console.log('JS is so coooool!'.myCamelCase()); //jsIsSoCoooool!


// function myRandomText(number) {
//   let randomWords = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit", "harum"];
  
//   if (number > randomWords.length) {
//     return 'Недостаточно слов';
//   }
  
//   let shuffledWords = randomWords.slice().sort(() => Math.random() - 0.5);
//   let selectedWords = shuffledWords.slice(0, number);
//   let capitalizedWords = selectedWords.map((word, index) => {
//     if (index === 0) {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     } else {
//       return word;
//     }
//   });
  
//   let randomText = capitalizedWords.join(' ') + '.';
//   return randomText;
// }

// console.log(myRandomText(9));

function myRandomText(number) {
  let words = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit", "harum"];
  
  const uniqueWords = new Set();
  let result = "";

  while (uniqueWords.size < number) {
    const randomIndex = Math.floor(Math.random() * words.length);
    uniqueWords.add(words[randomIndex]);
  }

  const uniqueWordsArr = Array.from(uniqueWords);
  for (let i = 0; i < uniqueWordsArr.length; i++) {
    const word = uniqueWordsArr[i];
    if (i === 0) {
      result += word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      result += " " + word;
    }
  }

  return result + ".";
}
console.log(myRandomText(9));