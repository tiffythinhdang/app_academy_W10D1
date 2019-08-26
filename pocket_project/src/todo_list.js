let todos = [];
const ul = document.querySelector(".todos");
const todoForm = document.querySelector(".add-todo-form");

if (localStorage.getItem("todos")) {
  todos = JSON.parse(localStorage.getItem("todos"));
  populateList(todos);
} 

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo() {
  // debugger
  let input = document.getElementsByName("add-todo")[0];
  let todoItem = {};
  todoItem.text = input.value;
  todoItem.done = false;
  
  todos.push(todoItem);
  input.value = "";
  let stringTodos = JSON.stringify(todos);
  localStorage.setItem("todos", stringTodos);
  
  populateList(todos);
}
// debugger
let checkboxes = document.querySelectorAll("input[type=checkbox]");

checkboxes.forEach((ele) => {
  ele.addEventListener('click', (e) => {
    debugger
    if (e.target.checked) {
      // e.target.textContent = "testing";
      e.target.checked = true;
      e.target.dataset.done = true;
    } else {
      // e.target.textContent = "testing";
      e.target.checked = false;
      e.target.dataset.done = false;
    }
  });
});



function populateList(array) {
  let newArr = [];

  ul.innerHTML = "";
  array.forEach( (item) => {
    let label = document.createElement("label");
    label.textContent = item.text;
    // label.setAttribute("done", item.done);
    let input = document.createElement("input");
    input.type = "checkbox";
    // input.data("done", item.done);
    input.dataset.done = item.done;
    input.checked = item.done;
    let li = document.createElement("li");
    li.append(input, label);
    ul.append(li);
  });
}

