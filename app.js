let todos = [];

function yuklashTodos() {
  const data = localStorage.getItem("todos");
  if (data) {
    todos = JSON.parse(data);
  }
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function displayTodos() {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = "list-item";

    const span = document.createElement("span");
    span.textContent = todo.title;
    if (todo.completed) {
      span.className = "completed";
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;

    checkbox.addEventListener("change", () => {
      todos[index].completed = checkbox.checked;
      saveTodos();
      displayTodos();
    });

    li.appendChild(span);
    li.appendChild(checkbox);
    todoList.appendChild(li);
  });
}

function addTodo() {
  const input = document.getElementById("todo-input");
  const title = input.value.trim();

  if (title) {
    todos.push({ title, completed: false });
    saveTodos();
    displayTodos();
    input.value = "";
  } else {
    alert("Vazifa nomini kiriting!");
  }
}

document.getElementById("add-todo-btn").addEventListener("click", addTodo);

yuklashTodos();
displayTodos();
