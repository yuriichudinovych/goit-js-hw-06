function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesEl = document.querySelector("#boxes");
const inputValue = document.querySelector("#controls input");
console.log(inputValue);
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

inputValue.addEventListener("change", () => {
  createBoxes(Number(inputValue.value));
});
let containerWidth = 30;
let containerheight = 30;

function createBoxes(amount) {
  console.log(amount);

  createBtn.addEventListener("click", (event) => {
    for (let i = 1; i <= amount; i += 1) {
      const containerEl = document.createElement("div");
      containerWidth += 10;
      containerheight += 10;
      containerEl.classList = "box-container";
      containerEl.style.width = containerWidth + "px";
      containerEl.style.height = containerheight + "px";
      containerEl.style.backgroundColor = getRandomHexColor();
      boxesEl.append(containerEl);
    }
    destroyBoxes();
  });
}

function destroyBoxes() {
  destroyBtn.addEventListener("click", () => {
    const boxArray = [...boxesEl.children];
    boxArray.map((el) => el.remove());
    containerWidth = 30;
    containerheight = 30;
  });
}
