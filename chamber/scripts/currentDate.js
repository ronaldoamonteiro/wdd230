const currentdate = new Date();
const formatted = new Intl.DateTimeFormat('en-US', {dateStyle: "full"}).format(currentdate);

document.getElementById('currentDate').innerHTML = formatted;


if (currentdate.getDay() === 1 || currentdate.getDay() === 2){
    document.getElementById('banner').innerHTML = "Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
} else {
    // document.getElementsByClassName('banner-top')[0].style.display = "none";
}


