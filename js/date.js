function lastUpDated() {
    var updated = document.lastModified;
    document.getElementById("lastUpDatedDated").innerHTML = updated;
}
var fixed = setInterval(lastUpDated, onload);

function getYear(){
    var year = new Date().getFullYear();
    document.getElementById("currentYear").innerHTML = year;
}
var currentYear = setInterval(getYear, onload);