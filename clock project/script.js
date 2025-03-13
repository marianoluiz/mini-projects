
const timer = document.querySelector(".time");

const updateTime =() => {
  const date = new Date();
  let hrs = date.getHours();
  const mins = date.getMinutes();
  const secs = date.getSeconds();
  let meridiemIndicator = '';

  if (hrs > 12 ) {
    meridiemIndicator = 'PM'
    hrs = hrs - 12;
  } else {
    meridiemIndicator = "AM";
  }

  timer.textContent = `${hrs} : ${mins} : ${secs} ${meridiemIndicator}`;
}

window.onload = () => {
  setInterval(updateTime, 1000);
  updateTime();
}