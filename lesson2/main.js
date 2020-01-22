function getYear() {
    var year = new Date().getFullYear();
    document.getElementById("currentYear").innerHTML = year;
}
var currentYear = setInterval(getYear, onload);