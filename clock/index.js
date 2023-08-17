const hourE1 = document.querySelector(".hour");
const minuteE1 = document.querySelector(".minute");
const secondE1 = document.querySelector(".second");

function updateClock() {
    const currentDate = new Date();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    const hourDeg = (hour / 12) * 360 + (minute / 60) * 30; // Adding minute-based rotation
    hourE1.style.transform = `rotate(${hourDeg}deg)`;

    const minuteDeg = (minute / 60) * 360 + (second / 60) * 6; // Adding second-based rotation
    minuteE1.style.transform = `rotate(${minuteDeg}deg)`;

    const secondDeg = (second / 60) * 360;
    secondE1.style.transform = `rotate(${secondDeg}deg)`;
}

// Call the updateClock function every second
setInterval(updateClock, 1000);

// Initial call to set the clock to the correct position
updateClock();
