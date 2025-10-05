const textbox = document.getElementById('textbox');
const toFarenheit = document.getElementById("toFarenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert() {
    if(toFarenheit.checked) {
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F"; //toFixed(1) will give you 1 point decimal
    }
    else if(toCelsius.checked) {
        temp = Number(textbox.value);
        temp = (temp - 32) * (5 /9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else {
        result.textContent = "Select a Unit"
    }
}