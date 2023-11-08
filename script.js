document.getElementById("convert").addEventListener("click", function() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    
    if (!isNaN(temperature)) {
        if (unit === "celsius") {
            const fahrenheit = (temperature * 9/5) + 32;
            document.getElementById("converted").textContent = `${temperature}°C is ${fahrenheit.toFixed(2)}°F`;
        } else if (unit === "fahrenheit") {
            const celsius = (temperature - 32) * 5/9;
            document.getElementById("converted").textContent = `${temperature}°F is ${celsius.toFixed(2)}°C`;
        }
    } else {
        document.getElementById("converted").textContent = "Please enter a valid temperature.";
    }
});
