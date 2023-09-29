const toogles = document.getElementsByClassName("js-toggle");

for (let i = 0; i < toogles.length; i += 1) {
  toogles[i].addEventListener("click", (event) => {
    const checkbox = event.target;
    if (checkbox.checked) {
      confetti();
    }
  });
}