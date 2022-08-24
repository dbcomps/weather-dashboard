var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#cityname");

console.log(cityFormEl);
console.log(cityInputEl);

var formSubmitHandler = function(event) {
	event.preventDefault();
	
	// get value from input element
	var cityname = cityInputEl.value.trim();
	console.log(cityname);

};

cityFormEl.addEventListener("submit", formSubmitHandler);