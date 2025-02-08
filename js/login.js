const form = document.querySelector(".login-form");
const btn = form.querySelector("button");
const input = form.querySelector("input");
const h1 = document.querySelector(".greet");

function login(event) {
  event.preventDefault();

  //로그인 폼 안보이게
  form.classList.add("hidden");
  h1.innerText = `Hello! ${input.value}`;
}

btn.addEventListener("click", login);
