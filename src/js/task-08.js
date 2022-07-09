const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onformSubmit);

function onformSubmit(event) {
  event.preventDefault();
  const mail = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  if (mail === "" || password === "") {
    return alert("Please fill in all the fields!");
  }
  const formProp = {
    mail,
    password,
  };

  console.log(formProp);
  event.currentTarget.reset();
}
