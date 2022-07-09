const rangeInput = document.querySelector('input[type="range"]');
const output = document.querySelector("#text");

rangeInput.addEventListener(
  "input",
  (e) => (output.style.fontSize = e.target.value + "px")
);
