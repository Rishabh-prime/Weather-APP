const apikey = "7eb3a21d0f7a542ef533a7dca1982e48";
const searchBar= document.getElementById("name");
const searchButton=document.getElementById("search-btn");


// ! Taking the element which we want to cahnge with help of api 

const temperature = document.getElementById("temp");
const City = document.getElementById("city");
// ! taking hold of umidity and wind
const humidity = document.getElementById("humidity");
// ! wind
const wind = document.getElementById("wind");
// ! take hold of whether icon
const weathericon = document.getElementById("weather-icon");

async function getweather(name) {

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apikey}&units=metric`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}


searchButton.addEventListener("click", async () => {
    const value = searchBar.value.trim().toLowerCase();
    if (value) {
        try{
            const result = await getweather(value);
        
            if (result.cod === 200 && result.weather[0].main === "Clouds") {
                temperature.innerHTML = `${result.main.temp} °C`;
                City.innerHTML = result.name;
                humidity.innerHTML = `${result.main.humidity}%`;
                wind.innerHTML = `${result.wind.speed} m/s`;
                weathericon.src = "images/clouds.png";

            }
             else if (result.cod === 200 && result.weather[0].main === "Clear") {
                temperature.innerHTML = `${result.main.temp} °C`;
                City.innerHTML = result.name;
                humidity.innerHTML = `${result.main.humidity}%`;
                wind.innerHTML = `${result.wind.speed} m/s`;
                weathericon.src = "images/clear.png";
            }
            else if (result.cod === 200 && result.weather[0].main === "Rain") {
                temperature.innerHTML = `${result.main.temp} °C`;
                City.innerHTML = result.name;
                humidity.innerHTML = `${result.main.humidity}%`;
                wind.innerHTML = `${result.wind.speed} m/s`;
                weathericon.src = "images/rain.png";
            }
          else if (result.cod === 200 && result.weather[0].main === "Drizzle") {
                    temperature.innerHTML = `${result.main.temp} °C`;
                    City.innerHTML = result.name;
                    humidity.innerHTML = `${result.main.humidity}%`;
                    wind.innerHTML = `${result.wind.speed} m/s`;
                    weathericon.src = "images/drizzle.png";
                }   
         else if (result.cod === 200 && result.weather[0].main === "Mist") {
                        temperature.innerHTML = `${result.main.temp} °C`;
                        City.innerHTML = result.name;
                        humidity.innerHTML = `${result.main.humidity}%`;
                        wind.innerHTML = `${result.wind.speed} m/s`;
                        weathericon.src = "images/mist.png";
                    }
        else if (result.cod === 200 && result.weather[0].main === "Snow") {
                            temperature.innerHTML = `${result.main.temp} °C`;
                            City.innerHTML = result.name;
                            humidity.innerHTML = `${result.main.humidity}%`;
                            wind.innerHTML = `${result.wind.speed} m/s`;
                            weathericon.src = "images/snow.png";
                        }
            
            else {
                City.innerHTML = "City not found";
                humidity.innerHTML = "";
                wind.innerHTML = "";
                temperature.innerHTML = "";
            }
            
    }catch (error) {
            console.error("Error fetching data:", error);  
        }
    }
    else {
        console.log("Please enter a city name ");
    }
});