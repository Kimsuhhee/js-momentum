const form = document.querySelector(".login-form");
const btn = form.querySelector("button");
const input = form.querySelector("input");
const h1 = document.querySelector(".greet");

const todo_form = document.querySelector(".todo-form");

function login(event) {
  event.preventDefault();
  if (input.value === "") return;

  //로그인 폼 안보이게
  form.classList.add("hidden");
  const userName = input.value;
  localStorage.setItem("username", userName);
  display();
}

function display() {
  h1.innerText = `Hello! ${localStorage.getItem("username")}`;
  //로그인 유저 -> todo리스트 작성 폼 보임
  todo_form.classList.remove("hidden");
}

//로컬스토리지 -> 로그인 유저 정보가 존재하지 않으면
if (localStorage.getItem("username") === null) {
  btn.addEventListener("click", login);
} else {
  //로그인 유저 -> 로그인 폼 안보이게
  form.classList.add("hidden");
  display();
}
