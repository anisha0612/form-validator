const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordMatch = false;

const checkPasswordFormat = () => {
  const regexpPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const regexp = /^[0-9a-zA-Z]+$/;
  // check if the password contains at least 1 uppercase, 1 number and 1 lowercase and is minimum 8 characters.
  if (!regexpPassword.test(password1El)) {
    password1El.style.borderColor = "red";
    password2El.style.borderColor = "red";
    message.textContent =
      "Please check if the password is min. 8 characters long and contains at least 1 number, 1 uppercase and 1 lowercase ";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }
};

const formValidation = () => {
  isValid = form.checkValidity();
  // Main message error styling
  if (!isValid) {
    message.textContent = "Please fill out all fields";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }

  //  check password match
  if (password1El.value === password2El.value) {
    passwordMatch = true;
    password1El.style.borderColor = "green";
    password2El.style.borderColor = "green";
  } else {
    passwordMatch = false;
    password1El.style.borderColor = "red";
    password2El.style.borderColor = "red";
    message.textContent = "Passwords don't match.Please the passwords!";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }

  // If form is valid and passwords match
  if (isValid && passwordMatch) {
    message.textContent = "Successfully Registered!";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
  }
};

const storeData = () => {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    password: form.password.value,
  };
  console.log(user);
};

const formSubmit = (e) => {
  e.preventDefault();
  // to validate form
  formValidation();
  // to user data
  if (isValid && passwordMatch) {
    storeData();
  }
};

form.addEventListener("submit", formSubmit);
