const form = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

form.addEventListener("input", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  nameOutputEl.textContent =
    event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value;
}
