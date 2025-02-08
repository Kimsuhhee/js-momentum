const clock = document.querySelector(".clock");

function displayTime() {
  const date = new Date();
  const currentHours = date.getHours();
  const currenMinutes = date.getMinutes();
  clock.innerText = `${currentHours}:${currenMinutes}`;
}
setInterval(displayTime, 1000);
