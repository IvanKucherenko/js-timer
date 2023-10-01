"use strict";

let date = new Date("Jan 1 2024 00:00:00");

function counts() {
    let now = new Date();
    // tpr - time period
    let tpr = date - now;

    let days = Math.floor(tpr / 1000 / 60 / 60 / 24);
    let hours = Math.floor(tpr / 1000 / 60 / 60) % 24;
    let min = Math.floor(tpr / 1000 / 60) % 60;
    let sec = Math.floor(tpr / 1000) % 60;

    if (tpr < 0) {
        document.getElementById("group").innerText = " Событие завершено";
        document.getElementById("group").style.grid = "none";
    } else {
        document.getElementById("d").innerText = days + " Дней";
        document.getElementById("h").innerText = hours + " Часов";
        document.getElementById("m").innerText = min + " Минут";
        document.getElementById("s").innerText = sec + " Секунд";
    }


}

counts();

setInterval(counts, 1000);