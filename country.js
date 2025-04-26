const btn = document.getElementById("search-btn");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let input = document.getElementById("country-input");
    let inVal = input.value;
    let errorMsg = document.querySelector(".error-message");
    let flag = document.querySelector(".flag");
    let countryName = document.querySelector(".country-name");
    let capital = document.querySelector(".capital");
    let region = document.querySelector(".region");
    let subregion = document.querySelector(".subregion");
    let population = document.querySelector(".population");
    let currency = document.querySelector(".currency");
    let languages = document.querySelector(".languages");

    fetch(`https://restcountries.com/v3.1/name/${inVal}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Something went wrong!");
        } else {
            return response.json();
        }
    })
    .then((data) => {
        let countryData = data[0]; 
        flag.src = countryData.flags.png;
        countryName.innerHTML = countryData.name.common;
        capital.innerHTML = countryData.capital ? countryData.capital[0] : "N/A";
        region.innerHTML = countryData.region;
        subregion.innerHTML = countryData.subregion;
        population.innerHTML = countryData.population;

        // Dynamically get currency
        // let currencyKey = Object.keys(countryData.currencies)[0];
        // currency.innerHTML = countryData.currencies[currencyKey].name;
        let currencyKey = Object.keys(countryData.currencies)[0];
        currency.innerHTML = countryData.currencies[currencyKey].name;
        // Dynamically get languages
        // let languagesList = Object.values(countryData.languages).join(", ");
        // languages.innerHTML = languagesList;

        let languagesList = Object.values(countryData.languages).join(",");
        languages.innerHTML = languagesList;

        console.log(data);

        input.value = "";

        errorMsg.innerHTML = ""; // Clear error if previously shown
    })
    .catch((error) => {
        console.error("Fetch error:", error.message);
        errorMsg.innerHTML = error.message;
        alert("Unable to fetch country data. Please try again later.");
    });
});
