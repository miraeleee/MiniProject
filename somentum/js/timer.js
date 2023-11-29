timer.js
/*
2023.11.22
소멘텀 메인에 뜨는 시계
*/

//시간
const clock = document.getElementById("clock");
const change = document.querySelector(".change");

function getClock(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");

    if (clock.classList.contains("change")) {
        let hour2 = hour > 12 ? hour - 12 : hour;
        clock.innerHTML = `${String(hour2).padStart(2, "0")} : ${String(minute).padStart(2, "0")} : ${String(second).padStart(2, "0")}`;
    } else {
        clock.innerHTML = `${String(hour).padStart(2, "0")} : ${String(minute).padStart(2, "0")} : ${String(second).padStart(2, "0")}`;
    }
}
getClock();
setInterval(getClock, 1000);

change.addEventListener("click",function(){
    clock.classList.toggle("change");
});

