function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesEl = document.querySelector("#boxes");
const inputValue = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

createBtn.addEventListener("click", () => {
  createBoxes(Number(inputValue.value));
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
  inputValue.value = "";
});

function createBoxes(amount) {
  const boxesArray = [];
  let containerWidth = 30;
  let containerheight = 30;

  for (let i = 1; i <= amount; i += 1) {
    const containerEl = document.createElement("div");
    containerEl.classList = "box-container";
    containerEl.style.width = containerWidth + "px";
    containerEl.style.height = containerheight + "px";
    containerWidth += 10;
    containerheight += 10;
    containerEl.style.backgroundColor = getRandomHexColor();
    boxesArray.push(containerEl);
  }
  boxesEl.append(...boxesArray);
}

function destroyBoxes() {
  const boxcontainerEl = [...document.querySelectorAll(".box-container")];
  boxcontainerEl.map((el) => el.remove());
}
