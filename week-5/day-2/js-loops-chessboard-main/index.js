// Release 1
// function generateChessboard(size) {
//   let board = "";
//   if (!Number.isInteger(size) || size % 2 === 1) {
//     throw new Error("Размер доски должен быть целым чётным числом");
//   }
//   for (let i = 1; i <= size; i++) {
//     if (i % 2 === 0) {
//       board += "░";
//     } else {
//       board += "▓";
//     }
//   }
//   return board;
// }
// console.log(generateChessboard(4));

function generateChessboard(size) {
  let board = "";
  if (!Number.isInteger(size) || size % 2 === 1) {
    throw new Error("Размер доски должен быть целым чётным числом");
  }

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if ((i + j) % 2 === 0) {
        board += "⬜";
      } else {
        board += "⬛";
      }
    }
    board += "\n";
  }
  return board;
}

console.log(generateChessboard(4));
