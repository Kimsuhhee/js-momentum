const todoForm = document.querySelector(".todo-form");
const todo_input = todoForm.querySelector("input");
const todo_btn = todoForm.querySelector("button");
const todo_list = document.querySelector(".todo-list");

let todoArray = [];

function saveToDo(newTodoObj) {
  localStorage.setItem("todo-list", JSON.stringify(todoArray));
}

function deleteToDo(event) {
  const target = event.target.parentElement;
  target.remove();
  todoArray = todoArray.filter((todo) => todo.id !== parseInt(target.id));
  saveToDo();
}

function addTodoItem(event) {
  event.preventDefault();
  const newTodo = todo_input.value;

  //빈값입력 -> 다시 입력받도록 리턴
  if (newTodo === "") return;

  todo_input.value = "";

  const newTodoObj = { todo: newTodo, id: Date.now() };
  todoArray.push(newTodoObj);
  saveToDo(newTodoObj);
  displayTodo(newTodoObj);
}

function displayTodo(newTodo) {
  const todo_item = document.createElement("li");
  const span = document.createElement("span");
  const delete_btn = document.createElement("button");
  todo_item.className = "todo-item";
  todo_item.id = newTodo.id;
  span.innerText = newTodo.todo;
  delete_btn.innerText = "❌";
  //todo 삭제 클릭 이벤트
  delete_btn.addEventListener("click", deleteToDo);
  todo_item.appendChild(span);
  todo_item.appendChild(delete_btn);
  todo_list.appendChild(todo_item);
}

todo_btn.addEventListener("click", addTodoItem);

const savedToDos = localStorage.getItem("todo-list");
//localstorage에 todo-list가 이미 존재한다면
if (savedToDos !== null) {
  const parsedTodos = JSON.parse(savedToDos);
  todoArray = parsedTodos;
  parsedTodos.forEach(displayTodo);
}
