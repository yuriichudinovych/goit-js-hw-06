const formEl = document.querySelector("#validation-input");
const lengthEl = document.querySelector('[data-length = "6"]');
const sinbolQeuantity = Number(lengthEl.dataset.length);

formEl.addEventListener("change", onInputLength);

function onInputLength(event) {
  if (event.currentTarget.value.length === sinbolQeuantity) {
    formEl.classList.remove("invalid");
    formEl.classList.add("valid");
  } else {
    formEl.classList.remove("valid");
    formEl.classList.add("invalid");
  }
}
