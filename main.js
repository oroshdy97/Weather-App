var searchBox = document.querySelector(".search");
var daysOfTheWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
checkWeather()
async function checkWeather(city){
    var apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=92778f84cdff425185163520241801&q=${city || 'cairo'}&days=3`;
    var response = await fetch(apiUrl);
    var data = await response.json();
 
   
   displayWeather(data)
    
}


searchBox.addEventListener("input" , function () {
    checkWeather(searchBox.value);
})

function displayWeather(data){
    document.querySelector('.city').innerHTML = data.location.name;
    document.querySelectorAll(".day")[0].innerHTML = daysOfTheWeek[new Date().getDay()] == undefined ? daysOfTheWeek[0] : daysOfTheWeek[new Date().getDay()];
    document.querySelector(".date").innerHTML = data.forecast.forecastday[0].date;
    document.querySelector(".temp").innerHTML = data.current.temp_c; 
    document.querySelectorAll(".img-icon")[0].setAttribute('src', data.forecast.forecastday[0].day.condition.icon) ;  
    document.querySelector(".state").innerHTML = data.current.condition.text;         
    document.querySelector(".rain").innerHTML = data.forecast.forecastday[0].day.daily_chance_of_rain;  
    document.querySelector(".wind").innerHTML = data.forecast.forecastday[0].day.maxwind_mph;                     
    document.querySelector(".humidity").innerHTML = data.forecast.forecastday[0].day.avghumidity;                 

    document.querySelectorAll(".day")[1].innerHTML = daysOfTheWeek[new Date().getDay() + 1] == undefined ? daysOfTheWeek[0] : daysOfTheWeek[new Date().getDay() + 1];
    document.querySelector(".body2 .img-icon2").setAttribute('src', data.forecast.forecastday[1].day.condition.icon) ;  
    document.querySelector(".max-temp1").innerHTML = data.forecast.forecastday[1].day.maxtemp_c;
    document.querySelector(".min-temp1").innerHTML = data.forecast.forecastday[1].day.mintemp_c;
    document.querySelector(".state1").innerHTML = data.forecast.forecastday[1].day.condition.text;  


    document.querySelectorAll(".day")[2].innerHTML = daysOfTheWeek[new Date().getDay() + 2] == undefined ? daysOfTheWeek[0] : daysOfTheWeek[new Date().getDay() + 2] ;
    document.querySelector(".body3 .img-icon3").setAttribute('src', data.forecast.forecastday[2].day.condition.icon) ;  
    document.querySelector(".max-temp2").innerHTML = data.forecast.forecastday[2].day.maxtemp_c;
    document.querySelector(".min-temp2").innerHTML = data.forecast.forecastday[2].day.mintemp_c;
    document.querySelector(".state2").innerHTML = data.forecast.forecastday[2].day.condition.text;  


}


