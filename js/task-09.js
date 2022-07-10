function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector("body");
const btnChangeColor = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

btnChangeColor.addEventListener("click", addChangeColor);

function addChangeColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = bodyEl.style.backgroundColor;
}
