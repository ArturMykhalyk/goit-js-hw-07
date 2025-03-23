const regForm = document.querySelector(".login-form");

regForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;

  const login = form.elements.email.value;

  const password = form.elements.password.value;

  if (!login || !password) {
    return alert("All form fields must be filled in");
  }
  const users = {
    email: login.trim(),
    password: password.trim(),
  };
  console.log(users);
  form.reset();
}
