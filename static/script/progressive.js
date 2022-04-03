console.log('the client js is connected');

const form = document.getElementById('loginForm');
const email = document.getElementById('email');
const password = document.getElementById('password');

const errorEmail = document.getElementById('erroremail');
const errorPassword = document.getElementById('errorpassword');

// email
form.addEventListener('submit', (e) => {
  let messages = [];
  if (email.value === '' || email.value == null) {
    messages.push('Een email is vereist');
  }

  if (email.value.length <= 6) {
    messages.push('Email moet langer zijn dan 6 tekens');
  }

  if (email.value.length >= 20) {
    messages.push('Email mag niet langer zijn dan 20 karakters');
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorEmail.innerText = messages.join(', ');
  }
});

// password
form.addEventListener('submit', (e) => {
  let messages = [];
  if (password.value === '' || email.value == null) {
    messages.push('Een wachtwoord is vereist');
  }

  if (password.value.length <= 6) {
    messages.push('Wachtwoord moet langer zijn dan 6 tekens');
  }

  if (password.value.length >= 20) {
    messages.push('Wachtwoord mag niet langer zijn dan 20 karakters');
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorPassword.innerText = messages.join(', ');
  }
});