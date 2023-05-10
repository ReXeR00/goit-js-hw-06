
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', e => {
  e.preventDefault(); // Zatrzymanie domyślnej akcji przesyłania formularza (odświeżania strony)

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (!emailInput.value || !passwordInput.value) {
    alert('Please fill in all fields');
    return;
  }

  const formData = {
    email: emailInput.value,
    password: passwordInput.value
  };

  console.log(formData);
  loginForm.reset();
});
