var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#cityname");
var citySearchTerm = document.querySelector("#city-search-term")

console.log(cityFormEl);
console.log(cityInputEl);

var formSubmitHandler = function(event) {
	event.preventDefault();
	
	// get value from input element
	var cityname = cityInputEl.value.trim();
	console.log(cityname);
	console.log(citySearchTerm.textContent)
	citySearchTerm.textContent = cityname;
};



cityFormEl.addEventListener("submit", formSubmitHandler);