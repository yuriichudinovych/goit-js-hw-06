function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesEl = document.querySelector("#boxes");
const inputValue = document.querySelector("#controls input");
console.log(inputValue);
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

let containerWidth = 30;
let containerheight = 30;

createBtn.addEventListener("click", () => {
  createBoxes(Number(inputValue.value));
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
  inputValue.value = "";
});

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const containerEl = document.createElement("div");
    containerEl.classList = "box-container";
    containerEl.style.width = containerWidth + "px";
    containerEl.style.height = containerheight + "px";
    containerWidth += 10;
    containerheight += 10;
    containerEl.style.backgroundColor = getRandomHexColor();
    boxesEl.append(containerEl);
  }
}

function destroyBoxes() {
  const boxArray = [...boxesEl.children];
  boxArray.map((el) => el.remove());
  containerWidth = 30;
  containerheight = 30;
}
