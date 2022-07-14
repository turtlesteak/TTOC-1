function localTime() {
    a = new Date();
    document.getElementById("local").innerHTML = a;
}

function UTC() {
    document.getElementById("utc").innerHTML = a.toUTCString();
}
setInterval(localTime, 1000);
setInterval(UTC, 1000);