function test() {
    var test = document.getElementById("test");
    var xhttp = new XMLHttpRequest();
    var e = document.getElementsByTagName("*");
    var file = "";
    for (var i=0; i<e.length;i++) {
        file = e[i].getAttribute("include") != null ? e[i].getAttribute("include") : "";
    }
    if (file != "") {
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
    }
}