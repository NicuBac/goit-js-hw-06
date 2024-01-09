const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const formElements = loginForm.elements;
  const formData = {
    email: formElements.email.value,
    password: formElements.password.value,
  };

  if (formData.email === "" || formData.password === "") {
    alert("Toate câmpurile trebuie completate!");
    return;
  }

  console.log(formData);
  loginForm.reset();
});
