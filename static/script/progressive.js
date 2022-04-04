console.log('the client js is connected');

const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const username = document.getElementById('username');

const errorEmail = document.getElementById('erroremail');
const errorPassword = document.getElementById('errorpassword');
const errorUsername= document.getElementById('errorusername');

// email
form.addEventListener('submit', (e) => {
  let messages = [];
  if (email.value === '' || email.value == null) {
    messages.push('Een email is vereist');
  }

  if (email.value.length <= 6) {
    messages.push('Email moet langer zijn dan 6 tekens');
  }

  if (email.value.length >= 25) {
    messages.push('Email mag niet langer zijn dan 25 tekens');
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
    messages.push('Wachtwoord mag niet langer zijn dan 20 tekens');
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorPassword.innerText = messages.join(', ');
  }
});

// name
form.addEventListener('submit', (e) => {
  let messages = [];
  if (username.value === '' || username.value == null) {
    messages.push('Een gebruikersnaam is vereist');
  }

  if (username.value.length <= 6) {
    messages.push('Gebruikersnaam moet langer zijn dan 6 tekens');
  }

  if (username.value.length >= 15) {
    messages.push('Gebruikersnaam mag niet langer zijn dan 15 tekens');
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorUsername.innerText = messages.join(', ');
  }
});