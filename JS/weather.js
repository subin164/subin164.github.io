const weather = document.querySelector("#weather span:last-child");
const city = document.querySelector("#weather span:first-child");
const weatherfont = document.querySelector("#weather #weatherfont");
const body = document.querySelector("body");
const API_KEY ="f67d62faf88ae0ec58e0d6f738d444e5";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    const HIDDEN_CLASSNAME = "hidden";

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `/ ${data.weather[0].main}  / ${data.main.temp} 도`;
      weatherfont.classList.add(HIDDEN_CLASSNAME);
      changeBackground(`${data.weather[0].main}`);
    });}

    function onGeoError(){
    weatherfont.classList.remove(HIDDEN_CLASSNAME);
}

function changeBackground(data){
    console.log(data);
    switch(data){
        case 'Clouds':
            body.style.background = "url('../Img/scattered_cloud_1920.jpg')";
            break;
        case 'Rain':
            body.style.background = "url('../Img/rain_1920.jpg')";
            break;
        case 'Snow':
            body.style.backgroundImage = "url('../Img/snow_1920.jpg')";
            break;
        case 'Clean':
            body.style.backgroundImage = "url('../Img/clean_1920.jpg')";
            break;
        default :
        body.style.background = "url('../Img/background_1920.jpg')";
        break;

    }
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);