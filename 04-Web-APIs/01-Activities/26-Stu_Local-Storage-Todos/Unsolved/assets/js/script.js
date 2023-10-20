var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// TODO: What is the purpose of this function?
function renderTodos() {
    // to retrieve data, put on the screen, and create elements
  todoList.innerHTML = "";
   //clearing out all elements of to do list
  todoCountSpan.textContent = todos.length;
  
  // TODO: Describe the functionality of the following `for` loop.
     // process arrays to dos to create elements
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
    //set global todos using localStorage, call renderTodos
function init() {
  // TODO: What is the purpose of the following line of code?
      //retrieving the data that is an array
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // TODO: Describe the functionality of the following `if` statement.
      //checking if i have stored, i want to set to dos to stored value
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code.
      //calls/executing the function renderTodos
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
      //storing JSON string that represents an array
  localStorage.setItem("todos", JSON.stringify(todos));
}
// TODO: Describe the purpose of the following line of code.
    //when you submit the values its being entered
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
      //reading an input field
  if (todoText === "") {
    return;
  }
 // TODO: Describe the purpose of the following lines of code.
    //adding to an array
  todos.push(todoText);
  todoInput.value = "";
 
  // TODO: What will happen when the following functions are called?
      //store the new values in local storgae. calling & rendering storeTodos and renderTodos to the page
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
    //when to do is submitted, it reads data, adds a todo, and calls store and render
todoList.addEventListener("click", function(event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
      //
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
        //remove 
    storeTodos();
    renderTodos();
      //saving again (for new values) and rendering again
  }
});


init();