const todoForm = document.querySelector(".todo-form");
const todo_input = todoForm.querySelector("input");
const todo_btn = todoForm.querySelector("button");
const todo_list = document.querySelector(".todo-list");

function addTodoItem(event) {
  event.preventDefault();
  const newTodo = todo_input.value;

  //빈값입력 -> 다시 입력받도록 리턴
  if (newTodo === "") return;

  todo_input.value = "";

  const todo_item = document.createElement("li");
  todo_item.className = "todo-item";
  todo_item.innerText = newTodo;
  todo_list.appendChild(todo_item);
}

todo_btn.addEventListener("click", addTodoItem);
