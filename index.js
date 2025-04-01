const apiKey = "d611bd3dea5df12032d0ea8f56b53ab1"; 

async function fetchWeather() {
    const city = document.getElementById("cityInput").value.trim() || "Jimma";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    document.getElementById("loading").style.display = "block"; 
    document.getElementById("errorMsg").style.display = "none";

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found!");

        const data = await response.json();
        console.log("Weather Data:", data);

        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temp").innerText = `${Math.round(data.main.temp)}°C`;
       document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        document.getElementById("description").innerText = data.weather[0].description;
        document.getElementById("humidity").innerText = `${data.main.humidity}%`;
        document.getElementById("wind").innerText = `${data.wind.speed} m/s`;

        document.getElementById("weather").classList.add("active");
    } catch (error) {
        console.error("Fetch error:", error);
        document.getElementById("errorMsg").innerText = error.message;
        document.getElementById("errorMsg").style.display = "block";
        document.getElementById("weather").classList.remove("active");
    } finally {
        document.getElementById("loading").style.display = "none";
    }
}


window.onload = fetchWeather;
