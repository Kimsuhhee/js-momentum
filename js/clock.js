const clock = document.querySelector(".clock");

function displayTime() {
  const date = new Date();
  const currentHours = String(date.getHours()).padStart(2, "0");
  const currenMinutes = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${currentHours}:${currenMinutes}`;
}
setInterval(displayTime, 1000);
