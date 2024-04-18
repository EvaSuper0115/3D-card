//can only select date from 3 days later
//get today's date
const today = new Date();
//get 3 days later by initialising today's date and modify it
const threeDaysLater = new Date(today);
threeDaysLater.setDate(today.getDate() + 3);
function getThreeDayslater() {
  return threeDaysLater.toISOString().split("T")[0];
}
document.getElementById("dateInput").setAttribute("min", getThreeDayslater());

//click date form to select date
const selectDate = document.querySelector(".dateForm");
function submitDate() {}
selectDate.addEventListener("change", submitDate());
