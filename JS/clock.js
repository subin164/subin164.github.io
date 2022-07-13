const clock = document.querySelector("h2#clock");

function getColck() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2,"0");
  const minute = String(date.getMinutes()).padStart(2,"0");
  clock.innerText = `${hour}:${minute}`;

}

getColck();
setInterval(getColck, 3000);