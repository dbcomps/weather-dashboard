var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#cityname");
var citySearchTerm = document.querySelector("#city-search-term")
var weatherContainerEl = document.querySelector("#weather-container");

console.log(cityFormEl);
console.log(cityInputEl);

var formSubmitHandler = function(event) {
	event.preventDefault();
	
	// get value from input element
	var cityname = cityInputEl.value.trim();	
	
	if (cityname) {
		getCityWeatherData(cityname);
		// clear out old entry
		cityInputEl.value = "";
	} else {
		alert("Please enter a city name");
	}
	console.log(cityname);
};

var getCityWeatherData = function(cityname) {
	// format the openweather api url
	var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&APPID=e3e03c31e123f88451ad6f252c161273";

	// make a request to the url
	fetch(apiUrl).then(function(response) {
		// request was successful
		if (response.ok) {
			response.json().then(function(data) {
			displayWeatherData(data, cityname);
			});
		} else {
			alert("Error: City Not Found");
		}
	}).catch(function(error) {
		alert("Unable to connect to OpenWeather");
	});
};

var displayWeatherData = function(weatherData, searchTerm) {
	// check if api returned any data
	if(weatherData.length === 0) {
		weatherContainerEl.textContent = "No weather found.";
		return;
	}
	
	// clear old content
	weatherContainerEl.textContent = "";
	citySearchTerm.textContent = searchTerm;
	
	// Get one set of data to display to start
	
	
}


cityFormEl.addEventListener("submit", formSubmitHandler);