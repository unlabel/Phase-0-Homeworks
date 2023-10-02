document.addEventListener("DOMContentLoaded", function () {
  const textInput = document.getElementById("textToTranslate");
  const addButton = document.getElementById("addButton");
  const leftTableBody = document.querySelector("#leftTable tbody");
  const rightTableBody = document.querySelector(".rightTable tbody");
  const clearButton = document.querySelector(".clearButton");

  let currentNumber = 1;

  // Функция для транслитерации текста
  function transliterate(text) {
    const translitMap = {
      а: "a",
      б: "b",
      в: "v",
      г: "g",
      д: "d",
      е: "e",
      ё: "yo",
      ж: "zh",
      з: "z",
      и: "i",
      й: "j",
      к: "k",
      л: "l",
      м: "m",
      н: "n",
      о: "o",
      п: "p",
      р: "r",
      с: "s",
      т: "t",
      у: "u",
      ф: "f",
      х: "h",
      ц: "c",
      ч: "ch",
      ш: "sh",
      щ: "sch",
      ъ: "",
      ы: "y",
      ь: "",
      э: "e",
      ю: "yu",
      я: "ya",
      А: "A",
      Б: "B",
      В: "V",
      Г: "G",
      Д: "D",
      Е: "E",
      Ё: "YO",
      Ж: "ZH",
      З: "Z",
      И: "I",
      Й: "J",
      К: "K",
      Л: "L",
      М: "M",
      Н: "N",
      О: "O",
      П: "P",
      Р: "R",
      С: "S",
      Т: "T",
      У: "U",
      Ф: "F",
      Х: "H",
      Ц: "C",
      Ч: "CH",
      Ш: "SH",
      Щ: "SCH",
      Ъ: "",
      Ы: "Y",
      Ь: "",
      Э: "E",
      Ю: "YU",
      Я: "YA",
    };

    return text
      .split("")
      .map((char) => translitMap[char] || char)
      .join("");
  }

  addButton.addEventListener("click", function (event) {
    event.preventDefault();

    const text = textInput.value;

    if (text.trim() !== "") {
      // Добавляем текст в левую таблицу
      const leftTableRow = leftTableBody.insertRow();
      const leftNumberCell = leftTableRow.insertCell(0);
      const leftTextCell = leftTableRow.insertCell(1);
      leftNumberCell.textContent = currentNumber;
      leftTextCell.textContent = text;

      // Транслитерируем текст и добавляем его в правую таблицу
      const transliteratedText = transliterate(text);
      const rightTableRow = rightTableBody.insertRow();
      const rightTranslationCell = rightTableRow.insertCell(0);
      const rightDeleteCell = rightTableRow.insertCell(1);
      rightTranslationCell.textContent = transliteratedText;
      rightDeleteCell.innerHTML =
        '<button class="deleteButton">Удалить</button>';

      currentNumber++;

      textInput.value = "";
    }
  });

  clearButton.addEventListener("click", function () {
    leftTableBody.innerHTML = "";
    rightTableBody.innerHTML = "";
    currentNumber = 1;
  });

  // Добавляем обработчик события на удаление
  rightTableBody.addEventListener("click", function (event) {
    if (event.target.classList.contains("deleteButton")) {
      const rowToDelete = event.target.closest("tr");
      leftTableBody.deleteRow(rowToDelete.rowIndex - 1);
      rightTableBody.deleteRow(rowToDelete.rowIndex - 1);
    }
  });
});
