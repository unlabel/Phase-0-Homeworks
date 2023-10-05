document.addEventListener("DOMContentLoaded", function () {
  const textInput = document.getElementById("textToTranslate");
  const addButton = document.getElementById("addButton");
  const leftTableBody = document.querySelector("#leftTable tbody");
  const rightTableBody = document.querySelector(".rightTable tbody");
  const clearButton = document.querySelector(".clearButton");

  let currentNumber = 1;

  function transliterate(text) {
    const translitMap = {
      а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "yo", ж: "zh", з: "z",
      и: "i", й: "j", к: "k", л: "l", м: "m", н: "n", о: "o", п: "p", р: "r", с: "s",
      т: "t", у: "u", ф: "f", х: "h", ц: "c", ч: "ch", ш: "sh", щ: "sch", ъ: "",
      ы: "y", ь: "'", э: "e", ю: "yu", я: "ya", А: "A", Б: "B", В: "V", Г: "G",
      Д: "D", Е: "E", Ё: "YO", Ж: "ZH", З: "Z", И: "I", Й: "J", К: "K", Л: "L",
      М: "M", Н: "N", О: "O", П: "P", Р: "R", С: "S", Т: "T", У: "U", Ф: "F",
      Х: "H", Ц: "C", Ч: "CH", Ш: "SH", Щ: "SCH", Ъ: "", Ы: "Y", Ь: "'", Э: "E",
      Ю: "YU", Я: "YA"
    };

    return text.split("").map((char) => translitMap[char] || char).join("");
  }

  const initialText = "Привет 👋";
  const transliteratedText = transliterate(initialText);

  const leftTableRow = leftTableBody.insertRow();
  const leftNumberCell = leftTableRow.insertCell(0);
  const leftTextCell = leftTableRow.insertCell(1);
  currentNumber = leftTableBody.rows.length;
  leftNumberCell.textContent = currentNumber;
  leftTextCell.textContent = initialText;

  const rightTableRow = rightTableBody.insertRow();
  const rightTranslationCell = rightTableRow.insertCell(0);
  const rightDeleteCell = rightTableRow.insertCell(1);
  rightTranslationCell.textContent = transliteratedText;
  rightTranslationCell.classList.add("transliteration-right");
  rightDeleteCell.innerHTML = '<img src="./img/Delete.svg" class="deleteButton" alt="Delete">';

  if (currentNumber === 1) {
    const deleteButton = rightDeleteCell.querySelector(".deleteButton");
    deleteButton.disabled = true;
  }

  addButton.addEventListener("click", function (event) {
    event.preventDefault();
    const text = textInput.value;

    if (text.trim() !== "") {
      const leftTableRow = leftTableBody.insertRow();
      const leftNumberCell = leftTableRow.insertCell(0);
      const leftTextCell = leftTableRow.insertCell(1);
      currentNumber = leftTableBody.rows.length;
      leftNumberCell.textContent = currentNumber;
      const textElement = document.createElement("div");
      textElement.textContent = text;
      textElement.className = "mnogabukv";
      leftTextCell.appendChild(textElement);
      const transliteratedText = transliterate(text);
      const rightTableRow = rightTableBody.insertRow();
      const rightTranslationCell = rightTableRow.insertCell(0);
      const rightDeleteCell = rightTableRow.insertCell(1);
      rightTranslationCell.textContent = transliteratedText;
      rightTranslationCell.classList.add("transliteration-right");
      rightDeleteCell.innerHTML = '<img src="./img/Delete.svg" class="deleteButton" alt="Delete">';
      textInput.value = "";
      applyEllipsisToLongText(textElement);
    }
  });

  textInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const text = textInput.value.trim();

      if (text !== "") {
        const leftTableRow = leftTableBody.insertRow();
        const leftNumberCell = leftTableRow.insertCell(0);
        const leftTextCell = leftTableRow.insertCell(1);
        currentNumber = leftTableBody.rows.length;
        leftNumberCell.textContent = currentNumber;
        const textElement = document.createElement("div");
        textElement.textContent = text;
        textElement.className = "mnogabukv";
        leftTextCell.appendChild(textElement);
        const transliteratedText = transliterate(text);
        const rightTableRow = rightTableBody.insertRow();
        const rightTranslationCell = rightTableRow.insertCell(0);
        const rightDeleteCell = rightTableRow.insertCell(1);
        rightTranslationCell.textContent = transliteratedText;
        rightTranslationCell.classList.add("transliteration-right");
        rightDeleteCell.innerHTML = '<img src="./img/Delete.svg" class="deleteButton" alt="Delete">';
        textInput.value = "";
        applyEllipsisToLongText(textElement);
      }
    }
  });

  clearButton.addEventListener("click", function () {
    while (leftTableBody.rows.length > 1) {
      leftTableBody.deleteRow(1);
      rightTableBody.deleteRow(1);
    }
  });

  rightTableBody.addEventListener("click", function (event) {
    if (event.target.classList.contains("deleteButton")) {
      const rowToDelete = event.target.closest("tr");

      if (rowToDelete.rowIndex === 1) {
        return;
      }

      leftTableBody.deleteRow(rowToDelete.rowIndex - 1);
      rightTableBody.deleteRow(rowToDelete.rowIndex - 1);

      const leftTableRows = leftTableBody.querySelectorAll("tr");
      leftTableRows.forEach((row, index) => {
        const leftNumberCell = row.cells[0];
        leftNumberCell.textContent = index + 1;
      });
    }
  });
});

function applyEllipsisToLongText() {
  const leftElementsToCheck = document.querySelectorAll("#leftTable .mnogabukv");
  const rightElementsToCheck = document.querySelectorAll(".transliteration-right");

  leftElementsToCheck.forEach((element) => {
    if (element.textContent.length > 7) 
      element.addEventListener("mouseenter", () => {
        const tooltip = document.querySelector(".tooltip");
        tooltip.textContent = element.textContent;
        tooltip.style.left = element.getBoundingClientRect().left - 10 + "px";
        tooltip.style.top = element.getBoundingClientRect().top - 40 + "px";
        tooltip.style.display = "block";
      });

      element.addEventListener("mouseleave", () => {
        const tooltip = document.querySelector(".tooltip");
        tooltip.style.display = "none";
      });
  });

  rightElementsToCheck.forEach((element, index) => {
    if (element.textContent.length > 7 && index !== 0) {
      element.addEventListener("mouseenter", () => {
        const tooltip = document.querySelector(".tooltip");
        tooltip.textContent = element.textContent;
        tooltip.style.left = element.getBoundingClientRect().left - 10 + "px";
        tooltip.style.top = element.getBoundingClientRect().top - 40 + "px";
        tooltip.style.display = "block";
      });

      element.addEventListener("mouseleave", () => {
        const tooltip = document.querySelector(".tooltip");
        tooltip.style.display = "none";
      });
    }
  });
}