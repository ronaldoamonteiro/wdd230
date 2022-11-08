// let daynames = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
    
// ];

// let months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December"
// ];

// let d = new Date();
// let dayName = daynames[d.getDay()];
// let monthName = months[d.getMonth()];
// let fulldate = daynames[d.getDay()] + ", " + months[d.getMonth()] + " " + d.getDate() + ", " +
// d.getFullYear();
const currentdate = new Date();
const formatted = new Intl.DateTimeFormat('en-US', {dateStyle: "full"}).format(currentdate);

document.getElementById('currentDate').innerHTML = formatted;