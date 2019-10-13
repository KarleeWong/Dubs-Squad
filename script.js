//---------------------------------------------------------------------------------------
window.onload = function(){
  display();
  getLocation();
}

function display() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("timed").innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(function(){display()}, 500);
}

function checkTime(i) {//adjusts for 10 display
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

//----------------------------------------------------------------------------
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("loc").innerHTML = "Geolocation isn't supported by this browser.";
  }
}

function showPosition(position) {
  document.getElementById("loc").innerHTML = "Coordinates - Latitude: " + position.coords.latitude +
  " Longitude: " + position.coords.longitude;
}
