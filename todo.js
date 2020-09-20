const toDoForm = document.querySelector(".js-form-toDo");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");
let toDoArr = [];

function deleteToDo(event) {
  event.preventDefault();
  //get id.
  const clickedLi = event.target.parentNode;
  //remove the id at frontend
  toDoList.removeChild(clickedLi);
  //make clean array -> save it to local
  const cleanArray = toDoArr.filter((todo) => {
    return todo.id !== parseInt(clickedLi.id);
  });
  saveToDos(cleanArray);
}
function paintToDo(text) {
  //make element in front
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  delBtn.innerHTML = "x";
  delBtn.addEventListener("click", deleteToDo);
  span.innerHTML = text;
  li.id = toDoArr.length + 1;
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
  //make one todo into an object and push it to array
  const toDoObj = {
    id: toDoArr.length + 1,
    text: text,
  };
  toDoArr.push(toDoObj);
  //save it to local
  saveToDos(toDoArr);
}
function saveToDos(arr) {
  localStorage.setItem("toDos", JSON.stringify(arr));
}
function handleInput(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  toDoInput.value = "";
  paintToDo(currentValue);
  saveToDos(toDoArr);
}
function loadToDos() {
  const stored = localStorage.getItem("toDos");
  if (stored !== null) {
    const parsed = JSON.parse(stored);
    parsed.forEach((toDo) => {
      paintToDo(toDo.text);
    });
  }
}
function init() {
  //if things are stored, do sth
  loadToDos();
  //when user input sth, handle.
  toDoForm.addEventListener("submit", handleInput);
}

init();
