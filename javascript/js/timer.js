/**
 * 2023.11.22
 * 소멘텀 메인에 뜨는 시계
 */
//시간 <h2 id="clock">00:00:00</h2>
const clock = document.getElementById("clock");

function getClock(){
    const date = new Date();
    clock.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
}
getClock();
setInterval(getClock, 1000);