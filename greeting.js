// const formEl = document.querySelector(".js-form"),
//   input = formEl.querySelector("input"),
//   greetingEl = document.querySelector(".js-form-greetings");

// const USER_LS = "currentUser";
// const SHOWING_CN = "showing";

// function paintGreeting(text) {
//   formEl.classList.remove(SHOWING_CN);
//   greetingEl.classList.add(SHOWING_CN);
//   greetingEl.innerText = `Hello ${text}`;
// }
// function handleSubmit(event) {
//   event.preventDefault();
//   const currentValue = input.value;
//   paintGreeting(currentValue);
//   localStorage.setItem("currentUser", currentValue);
// }
// function askForName() {
//   formEl.classList.add(SHOWING_CN);
//   formEl.addEventListener("submit", handleSubmit);
// }
// function loadName() {
//   const currentUser = localStorage.getItem(USER_LS);
//   if (currentUser === null) {
//     //she is not
//     askForName();
//   } else {
//     //she is
//     paintGreeting(currentUser);
//   }
// }
const USER_LS = "currentUser";
const SHOWING = "showing";
const greetingEl = document.querySelector(".js-form-greetings");
const formEl = document.querySelector(".js-form");
const inputEl = formEl.querySelector(".js-input");

function sayHello(name) {
  greetingEl.classList.add(SHOWING);
  greetingEl.innerText = `Hello ${name}`;
  formEl.classList.remove(SHOWING);
  inputEl.classList.remove(SHOWING);
}
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = inputEl.value;
  sayHello(currentValue);
  localStorage.setItem("currentUser", currentValue);
}
function askForName() {
  greetingEl.classList.remove(SHOWING);
  formEl.classList.add(SHOWING);
  inputEl.classList.add(SHOWING);
  formEl.addEventListener("submit", handleSubmit);
}
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    //when she is not
    askForName();
  } else {
    //when she is
    sayHello(currentUser);
  }
}

function init() {
  loadName();
}

init();
