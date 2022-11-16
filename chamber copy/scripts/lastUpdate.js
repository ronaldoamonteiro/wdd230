function getYear() {
    var year = new Date().getFullYear();
    document.getElementById("currentYear").innerHTML = year;
}
var currentYear = setInterval(getYear, onload);

function lastUpdate() {
    var updated = document.lastModified;
    document.getElementById("lastUpdate").innerHTML = updated;
}
var fixed = setInterval(lastUpdate, onload);