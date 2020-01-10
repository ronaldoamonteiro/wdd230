function lastUpDated() {
    var updated = document.lastModified;
    document.getElementById("lastUpDatedDated").innerHTML = updated;
}
var fixed = setInterval(lastUpDated, onload);