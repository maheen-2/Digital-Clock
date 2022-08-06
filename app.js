// Linking html elements in JS.
const hours = document.querySelector(".hr");
const minutes = document.querySelector(".min");
const seconds = document.querySelector(".sec");
const ampm = document.querySelector(".ampm");
const days = document.querySelector(".day");
const months = document.querySelector(".month");
const dayNum = document.querySelector(".dayNo");
const years = document.querySelector(".year");

function updateClock(){
let h = new Date().getHours(); // 0 - 23
let m = new Date().getMinutes(); // 0 - 59
let s = new Date().getSeconds(); // 0 -59
let meridiem = "AM"; // am or pm
let d = new Date().getDay(); // d out of below daysOfWeek:
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let munths = new Date().getMonth(); // munths out of below monthsOfYear:
let monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let dn = new Date().getDate();
let y = new Date().getFullYear();

// Convert 24hr clock to 12hr clock:
if(h > 12){
    h = h - 12;
    meridiem = "PM";
}
// Add 0 before single digit number:
if(h < 10){
    h = "0" + h;
}
if(m < 10){
    m = "0" + m;
}
if(s < 10){
    s = "0" + s;
}

hours.innerHTML = h;
minutes.innerHTML = m;
seconds.innerHTML = s;
ampm.innerHTML = meridiem;
days.innerHTML = `${daysOfWeek[d]}`;
months.innerHTML = `${monthsOfYear[munths]}`;
dayNum.innerHTML = dn;
years.innerHTML = y;

// Sets a timer which executes a function or specified piece of code once the timer (in ms) expires:
setTimeout("updateClock()", 1000); 
}
// Run the function:
updateClock();