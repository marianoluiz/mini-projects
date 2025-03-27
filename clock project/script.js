// update time function
const timer = document.querySelector(".time");

// toggle variables
const boolToggleInput = document.querySelector(".toggle");
const slider = document.querySelector(".slider");
const body = document.querySelector("body");
const timeContainer = document.querySelector(".time__container");
const timeText = document.querySelector(".time");

// onload
window.onload = () => {
  setInterval(updateTime, 1000);

  // if it is am, on the toggle (morning)
  // if its pm , off the toggle (night)
  // return if am or pm
  const meridiemIndicator = updateTime();

  if (meridiemIndicator === "AM") {
    boolToggleInput.checked = false;
  } else {
    boolToggleInput.checked = true;
  }

  toggleThemeFunc();
};

const updateTime = () => {
  const date = new Date();
  let hrs = date.getHours();
  const mins = date.getMinutes();
  const secs = date.getSeconds();
  let meridiemIndicator = "";

  if (hrs > 12) {
    meridiemIndicator = "PM";
    hrs = hrs - 12;
  } else {
    meridiemIndicator = "AM";
  }

  timer.textContent = `${hrs} : ${mins} : ${secs} ${meridiemIndicator}`;

  return meridiemIndicator;
};

// check theme based on toggle func
const toggleThemeFunc = () => {
  if (boolToggleInput.checked === true) {
    // move the slider
    slider.classList.add("toggled");

    //change the bg
    body.classList.add("night");

    // time container
    timeContainer.classList.add("night");

    // time
    timeText.classList.add("night");
  } else {
    slider.classList.remove("toggled");

    //change the bg
    body.classList.remove("night");

    // time container
    timeContainer.classList.remove("night");

    // time
    timeText.classList.remove("night");
  }
};

boolToggleInput.addEventListener("click", toggleThemeFunc);
