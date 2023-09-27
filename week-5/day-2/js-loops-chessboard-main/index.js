// Release 1
function generateChessboard(size) {
  if (!Number.isInteger(size) || size % 2 === 1) {
    throw new Error("Размер доски должен быть целым чётным числом");
  }
}
try {
  console.log(generateChessboard(3));
} catch (error) {
  console.error(error.message);
}
