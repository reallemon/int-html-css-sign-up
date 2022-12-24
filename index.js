// Get pw 1 & 2
// Check if they are equal
// Display warning if not
// Check if they meet each part of the pw criteria
// Style any criteria green if the user has met it

const pwd = document.querySelector('#password');
const pwdValidate = document.querySelector('#password + .error');
const pwdMatchingError = document.querySelector('.matching');

const pwd2 = document.querySelector('#pwd-confirm');
const pwd2Validate = document.querySelector('#pwd-confirm + .error');

const lowerReg = /(?=.*[a-z]).*/;
const upperReg = /(?=.*[A-Z]).*/;
const numberReg = /(?=.*[0-9]).*/;
const symbolReg = /(?=.*[!@#$%,.^&*()_+=-]).*/;
const lengthReg = /[A-Za-z0-9!@#$,.%^&*()_+=-]{8,}/;

function verifyPasswordsMatch() {
  const password = pwd.value;
  const password2 = pwd2.value;

  if (password === password2) {
    pwdMatchingError.style.display = 'none';
  } else {
    pwdMatchingError.style.display = 'block';
  }
}

function styleValidationErrors(element, password) {
  const lower = element.querySelector('.lower');
  const upper = element.querySelector('.upper');
  const number = element.querySelector('.number');
  const special = element.querySelector('.special');
  const length = element.querySelector('.length');
  const pass = password.value;

  lower.style.color = lowerReg.test(pass) ? 'green' : 'red';
  upper.style.color = upperReg.test(pass) ? 'green' : 'red';
  number.style.color = numberReg.test(pass) ? 'green' : 'red';
  special.style.color = symbolReg.test(pass) ? 'green' : 'red';
  length.style.color = lengthReg.test(pass) ? 'green' : 'red';
}

pwd.addEventListener('input', () => {
  verifyPasswordsMatch();
  styleValidationErrors(pwdValidate, pwd);
});
pwd2.addEventListener('input', () => {
  verifyPasswordsMatch();
  styleValidationErrors(pwd2Validate, pwd2);
});
