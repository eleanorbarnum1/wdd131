let temp = 40;
let wSpeed = 10;

function calculateWindChill(temp,wSpeed){
    var windChill = Math.round(35.74 + (0.6215 * temp) - (35.75 * Math.pow(wSpeed, 0.16)) + (0.4275 * temp * Math.pow(wSpeed, 0.16)));
    return windChill;
}

if (temp <= 50 && wSpeed > 3) {
    var result = calculateWindChill(temp,wSpeed);
    document.getElementById("wChill").innerText = result + " °F";
}else{
    document.getElementById("wChill").innerText = "N/A";
}