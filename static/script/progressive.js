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
    messages.push('Email is required');
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorEmail.innerText = messages.join(', ');
  }
});

// password
form.addEventListener('submit', (e) => {
  let messages = [];
  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters');
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters');
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorPassword.innerText = messages.join(', ');
  }
});