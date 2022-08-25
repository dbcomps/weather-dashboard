var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#cityname");
var citySearchTerm = document.querySelector("#city-search-term")
var weather1ContainerEl = document.querySelector("#day1-weather-container");
var weather1TempEl = document.querySelector("#weather1-data-temp");
var weather1HumidityEl = document.querySelector("#weather1-data-humidity");
var weather1WindEl = document.querySelector("#weather1-data-wind");

var weather2ContainerEl = document.querySelector("#day2-weather-container");
var weather2TempEl = document.querySelector("#weather2-data-temp");
var weather2HumidityEl = document.querySelector("#weather2-data-humidity");
var weather2WindEl = document.querySelector("#weather2-data-wind");

var weather3ContainerEl = document.querySelector("#day3-weather-container");
var weather3TempEl = document.querySelector("#weather3-data-temp");
var weather3HumidityEl = document.querySelector("#weather3-data-humidity");
var weather3WindEl = document.querySelector("#weather3-data-wind");

var weather4ContainerEl = document.querySelector("#day4-weather-container");
var weather4TempEl = document.querySelector("#weather4-data-temp");
var weather4HumidityEl = document.querySelector("#weather4-data-humidity");
var weather4WindEl = document.querySelector("#weather4-data-wind");

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
	var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityname + "&cnt=5&APPID=e3e03c31e123f88451ad6f252c161273&units=imperial";

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
	//weatherContainerEl.textContent = "";
	citySearchTerm.textContent = "5-Day Forecast for " + searchTerm;
	
	// Get first day set of data to display
	var weather1Temp = weatherData.list[1].main.temp;
	var weather1Humidity = weatherData.list[1].main.humidity;
	var weather1WindSpeed = weatherData.list[1].main.speed;
	
	weather1TempEl.textContent = "Temperature: " + weather1Temp + " F";
	weather1HumidityEl.textContent = "Humidity: " + weather1Humidity + "%";
	weather1WindEl.textContent = "Wind: " + weather1WindSpeed + " MPH";
	// Display second day set of data
	var weather2Temp = weatherData.list[2].main.temp;
	var weather2Humidity = weatherData.list[2].main.humidity;
	var weather2WindSpeed = weatherData.list[2].main.speed;
	
	weather2TempEl.textContent = "Temperature: " + weather2Temp + " F";
	weather2HumidityEl.textContent = "Humidity: " + weather2Humidity + "%";
	weather2WindEl.textContent = "Wind: " + weather2WindSpeed + " MPH";
	// Display third day set of data	
	var weather3Temp = weatherData.list[3].main.temp;
	var weather3Humidity = weatherData.list[3].main.humidity;
	var weather3WindSpeed = weatherData.list[3].main.speed;
	
	weather3TempEl.textContent = "Temperature: " + weather3Temp + " F";
	weather3HumidityEl.textContent = "Humidity: " + weather3Humidity + "%";
	weather3WindEl.textContent = "Wind: " + weather3WindSpeed + " MPH";
	// Display fourth day set of data		
	var weather4Temp = weatherData.list[4].main.temp;
	var weather4Humidity = weatherData.list[4].main.humidity;
	var weather4WindSpeed = weatherData.list[4].main.speed;
	
	weather4TempEl.textContent = "Temperature: " + weather4Temp + " F";
	weather4HumidityEl.textContent = "Humidity: " + weather4Humidity + "%";
	weather4WindEl.textContent = "Wind: " + weather4WindSpeed + " MPH";
	
	console.log(weatherTemp);
	console.log(weatherHumidity);
	console.log(weatherWindSpeed);
	console.log(weatherData);
	
}


cityFormEl.addEventListener("submit", formSubmitHandler);