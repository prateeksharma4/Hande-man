function OnLoad()
{
    var foo = document.getElementById('issueInput');
    foo.onmouseover = function () { this.style.borderColor = '#000000'; this.style.color = '#000000'; this.style.borderWidth = "5px"; }
    foo.onmouseout = function () { this.style.borderColor = '#888888'; this.style.color = '#888888'; this.style.borderWidth = "2px"; }
    foo.onclick = function () { this.style.borderColor = '#000000'; this.style.color = '#000000'; this.style.borderWidth = "4px"; }
    var foo2 = document.getElementById('issueInput2');
    foo2.onmouseover = function () { this.style.borderColor = '#000000'; this.style.color = '#000000'; this.style.borderWidth = "5px"; }
    foo2.onmouseout = function () { this.style.borderColor = '#888888'; this.style.color = '#888888'; this.style.borderWidth = "2px"; }
    foo2.onclick = function () { this.style.borderColor = '#000000'; this.style.color = '#000000'; this.style.borderWidth = "4px"; }
    
}

function initialize() {
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
        center: new google.maps.LatLng(44.5403, -78.5463),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)
}


function OnMouseOverMenu(x)
{
    if (x.className === "level14" || x.className === "level141" ||x.className === "level142" ||x.className === "level143") {
        el = document.getElementsByClassName("level141")
        el[0].style.backgroundColor = "black";
    }
    else if (x.className === "level15" || x.className === "level151" || x.className === "level152" || x.className === "level153") {
        el = document.getElementsByClassName("level151")
        el[0].style.backgroundColor = "black";
    }
    else if (x.className === "level13" || x.className === "level131" || x.className === "level132" || x.className === "level133") {
        el = document.getElementsByClassName("level131")
        el[0].style.backgroundColor = "black";
    }
}

function OnMouseOutMenu(x) {
    if (x.className === "level14") {
        el = document.getElementsByClassName("level141")
        el[0].style.backgroundColor = "#4d3434";
    }
    else if (x.className === "level15") {
        el = document.getElementsByClassName("level151")
        el[0].style.backgroundColor = "#4d3434";
    }
    else if (x.className === "level13") {
        el = document.getElementsByClassName("level131")
        el[0].style.backgroundColor = "#4d3434";
    }
}

function OnSearchButtonClick(p) {
    el = document.getElementsByClassName("level2");
    /*var i = 0;
    for (i = 200000; i >= 100000; i--) {
        el[0].style.top = ( i/10000)+"%";
    }*/
    el[0].style.top = "8%";
    //el[0].style.backgroundColor = "black";
    el = document.getElementById("ResultSet1");
    el.style.visibility = "visible";
}