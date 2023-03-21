const container = document.querySelector(".container");
let i = 0;
let text = "We Love Programming!";

autoType();

function autoType() {
  const interval = setInterval(() => {
    insertLetters();
  }, 100);

  function insertLetters() {
    container.innerHTML = container.innerHTML + text[i];
    i++;
    if (i == text.length) {
      clearInterval(interval);
    }
  }
}
