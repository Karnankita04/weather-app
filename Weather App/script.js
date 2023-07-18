const APIKey = "53c6c37a581738f79ca56fc3649ff57f" ;
const APIUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=" ;
const Searchbox = document.querySelector(".search input");
const Searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(APIUrl + city + `&appid=${APIKey}`);
    let data = await response.json()
    console.log(data) ;

    document.querySelector(".city").innerHTML = data.name ;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c" ;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%" ;
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr" ;

    if(data.weather[0].main == "Clouds")
    {
        weatherIcon.src = "weather-app-img/images/clouds.png" ;
    }
    else if(data.weather[0].main == "Clear")
    {
        weatherIcon.src = "weather-app-img/images/clear.png" ;
    }
    else if(data.weather[0].main == "Drizzle")
    {
        weatherIcon.src = "weather-app-img/images/drizzle.png" ;
    }
    else if(data.weather[0].main == "Mist")
    {
        weatherIcon.src = "weather-app-img/images/mist.png" ;
    }
    document.querySelector(".weather").style.display = "block" ;
    
}

Searchbtn.addEventListener("click",()=>{
    checkWeather(Searchbox.value) ;
})  
