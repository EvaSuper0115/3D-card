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
kimonoContainer.addEventListener("mousemove", (event) => {
  let xAxis = (window.innerWidth / 2 - event.pageX) / 40;
  let yAxis = (window.innerHeight / 2 - event.pageY) / 40;
  console.log(xAxis);

  circle.style.transform = `rotateY(${yAxis}deg) rotate(${xAxis}deg) `;
});
