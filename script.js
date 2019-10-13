window.onload = function(){
  display();
  getLocation();
  FindQuote();
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
  document.getElementById("loc").innerHTML = "Coordinates - Latitude: " + position.coords.latitude.toFixed(2) +
  " Longitude: " + position.coords.longitude.toFixed(2);
}

//----------------------------------------------------------------------------

function FindQuote() {
  var quotionary = ['Bike whenever possible to improve excise habits and to cut car emissions.',
          'Compost your food scraps.', 'Use a resusable bag.', 'Try resusable toilet paper.',
          'Washing your clothing less often can minimize harmful microfibers that enter the ecosystem, expecially denim.',
          'heheh hi dubhacks! :3. (UwU), ˄·͈༝·͈˄₍˄·͈༝·͈˄( ͒ ु•·̫• ू ͒)˄·͈༝·͈˄₎˄·͈༝·͈˄₎'
  ];

  var seachTerms = ['bikingigood for health and environment', 'composting food waste',
  'reusable bags', 'reusable toilet paper', 'washing clothing less', 'weebaboo'];

 var random = Math.floor(Math.random() * quotionary.length);
 var quote = quotionary[random];
 var search = seachTerms[random];

  document.getElementById("quoteID").innerHTML = quote;
  document.getElementById("searchID").onclick = function () {
    window.open("https://www.google.com/search?q="+search);
  }
}

//----------------------------------------------------------------------------


