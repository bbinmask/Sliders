let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");
let carousel = document.querySelector(".carousel");
let list = document.querySelector(".list");
let item = document.querySelectorAll(".item");
let runningTime = document.querySelector(".time-running");
const timeRunning = 3000;

const timeAutoNext = 7000;

nextBtn.onclick = () => {
  showSlider("next");
};
prevBtn.onclick = () => {
  showSlider("prev");
};

let runTimeOut;

let runNextAuto = setTimeout(() => {
  nextBtn.click();
}, timeAutoNext);

function resetAnimation() {
  runningTime.style.animation = "none";
  runningTime.offsetHeight; // trigger reflow
  runningTime.style.animation = null;
  runningTime.style.animation = "runningTime 7s linear 1 forwards";
}

function showSlider(type) {
  let sliderItemsDom = list.querySelectorAll(".carousel .list .item");

  if (type === "next") {
    list.appendChild(sliderItemsDom[0]);
    carousel.classList.add("next");
  } else {
    list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
    carousel.classList.add("prev");
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carousel.classList.remove("prev");
    carousel.classList.remove("next");
  }, timeAutoNext);

  clearTimeout(runNextAuto);

  runNextAuto = setTimeout(() => {
    nextBtn.click();
  }, timeAutoNext);
  resetAnimation();
}

// start the initial animation

resetAnimation();
