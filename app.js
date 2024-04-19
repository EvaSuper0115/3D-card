//can only select date from 3 days later and 90 days max
//get today's date
const today = new Date();
//get 3 days later by initialising today's date and modify it
const threeDaysLater = new Date(today);
threeDaysLater.setDate(today.getDate() + 3);
function getThreeDayslater() {
  return threeDaysLater.toISOString().split("T")[0];
}
//get 90 days later
const ninetyDaysLater = new Date(today);
ninetyDaysLater.setDate(today.getDate() + 90);
function getNinetyDayslater() {
  return ninetyDaysLater.toISOString().split("T")[0];
}
document.getElementById("dateInput").setAttribute("min", getThreeDayslater());
document.getElementById("dateInput").setAttribute("max", getNinetyDayslater());
//click date form to select date
const selectDate = document.getElementById("dateInput");
function submitDate(event) {
  const selectedDate = event.target.value;
  console.log(selectedDate);
}
selectDate.addEventListener("change", submitDate);

//movement animation
const card = document.querySelector(".card");
const container = document.querySelector(".container");
const kimonoContainer = document.querySelector(".kimono-showcase-container");
const kimono = document.querySelector(".kimono");
const circle = document.querySelector(".circle");

//make movement mouse sentitive
card.addEventListener("mousemove", (event) => {
  let xAxis = (window.innerWidth / 2 - event.pageX) / 30;
  let yAxis = (window.innerHeight / 2 - event.pageY) / 30;
  console.log(xAxis);
  circle.style.transform = `rotateY(${xAxis}deg) rotate(${yAxis}deg) `;
  //kimono move more then the circle
  kimono.style.transform = `rotateY(${xAxis * 1.5}deg) rotate(${
    yAxis * 1.5
  }deg) `;
});

//make animation pop back to original position when mouse not on the kimono
card.addEventListener("mouseenter", (event) => {
  kimono.style.transition = "none";
});

card.addEventListener("mouseleave", (event) => {
  circle.style.transform = `rotateY(0deg) rotateX(0deg)`;
  kimono.style.transform = `rotateY(0deg) rotateX(0deg)`;
  kimono.style.transition = "all 0.5s ease";
});
//make kimono bigger when mouse enters the kimono
//kimonoContainer.addEventListener("mouseenter", (event) => {
// kimono.style.height = `300%`;
// kimono.style.transition = "all 0.5s ease";
//});
//kimonoContainer.addEventListener("mouseleave", (event) => {
// kimono.style.height = `180%`;
//kimono.style.transition = "all 0.5s ease";
//});

//switch to kimono's back when mouse enter the kimonoContainer
kimonoContainer.addEventListener("mouseenter", (event) => {
  kimono.src = `./yellow_kimono_back.png`;
});
kimonoContainer.addEventListener("mouseleave", (event) => {
  kimono.src = `./yellow_kimono.png`;
});
