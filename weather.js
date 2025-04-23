let inputElement = document.getElementById("city-input");
let btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let inputValue = inputElement.value.toLowerCase();

    if (!inputValue) {
        alert("Please enter a city name.");
        return;
    }

    fetch(`https://api.weatherapi.com/v1/current.json?key=ed4146785e6b49daa24161520240609&q=${inputValue}&aqi=no`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            let city = document.querySelector(".city");
            let country = document.querySelector(".country");
            let date = document.querySelector(".date");
            let tempC = document.querySelector(".tempC");

            city.innerText = data.location.name;
            country.innerText = data.location.country;
            date.innerText = data.current.last_updated;
            tempC.innerText = `${data.current.temp_c}°C`;

            inputElement.value = "";
        })
        .catch((error) => {
            console.error("Fetch error:", error.message);
            alert("Unable to fetch weather data. Please try again later.");
        });
});
