const toogles = document.getElementsByClassName("js-toggle");

for (let i = 0; i < toogles.length; i++) {
  toogles[i].addEventListener("click", (event) => {
    const checkbox = event.target;
    if (checkbox.checked) {
      confetti();
    }
  });
}