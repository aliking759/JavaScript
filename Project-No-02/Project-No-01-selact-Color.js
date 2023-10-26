// Generate a random color
const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]; // Fix the random number generation
    }
    return color;
}

let intervalId;

const startChargingColor = function () {
    intervalId = setInterval(backgroundColor, 1000); // Assign the interval ID to the variable
    function backgroundColor() {
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChargingColor = function () {
    clearInterval(intervalId);
    intervalId = null; // Set the intervalId to null when stopping
}

document.getElementById('start').addEventListener('click', startChargingColor);
document.getElementById('stop').addEventListener('click', stopChargingColor);
