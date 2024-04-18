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
const selectDate = document.querySelector(".dateForm");
function submitDate() {}
selectDate.addEventListener("change", submitDate());
