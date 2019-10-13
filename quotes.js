window.onload = function(){
  FindQuote();
}

function FindQuote() {
	var quotionary = ['Bike whenever possible to improve excise habits and to cut car emissions.',
					'Compost your food scraps.', 'Use a resusable bag.', 'Try resusable toilet paper.',
					'Washing your clothing less often can minimize harmful microfibers that enter the ecosystem, expecially denim.',
					'heheh hi dubhacks! :3. (UwU), ˄·͈༝·͈˄₍˄·͈༝·͈˄( ͒ ु•·̫• ू ͒)˄·͈༝·͈˄₎˄·͈༝·͈˄₎'
	]

	var random = Math.floor(Math.random() * quotionary.length());
	var quote = quotionary[random];

	document.getElementById("quoteID").innerHTML = "heelo?";
}

/*document.getElementById("search").onclick = function() {
	window.open('https://www.google.com/search?q='+quote);
}*/



