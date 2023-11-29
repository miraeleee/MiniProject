weather.js
/*
2023.11.22
소멘텀 메인에 뜨는 날씨
날씨 api사용
*/


function onSucces(position){
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);

    const latitude=position.coords.latitude;
    const longitude=position.coords.longitude;
    const API_KEY = '8bb7e3fc9ab54d7c4bd3f623dc0ffe9a'

    console.log(`위도 : ${latitude}, 경도 : ${longitude}`);


    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`

    fetch(url).then(response => response.json()).then(data=>{
        console.log(data.name, data.weather[0].description, data.main.temp);
        const weather = document.querySelector("#weather span:nth-child(1)");
        const temperature = document.querySelector("#weather span:nth-child(3)")
        const city = document.querySelector("#weather span:nth-child(5)");
        weather.innerText=data.weather[0].description;
        temperature.innerText = (data.main.temp-273).toFixed(2);
        city.innerHTML=data.name;

        //(32°F − 32) × 5/9 = 0°C

    })
}
function onFail(){
    console.log("위치를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onSucces, onFail);