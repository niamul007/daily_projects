
let btn = document.querySelector("button");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let input = document.getElementById("city-input");
    let city = document.querySelector(".city");
    let country = document.querySelector(".country");
    let date = document.querySelector(".date");
    let tempC= document.querySelector(".tempC");
    let condition = document.querySelector(".condition");
    let humidity = document.querySelector(".humidity");
    let icon = document.querySelector(".icon");
    let cityName = input.value;

    fetch(`https://api.weatherapi.com/v1/current.json?key=ed4146785e6b49daa24161520240609&q=${cityName}&aqi=no`)
    .then((data)=>{
        if(!data.ok){
            throw new Error("something went wrong")
        }else{
            return data.json()
        }
    })
    .then((data)=>{
        city.innerHTML = data.location.name;
        country.innerHTML = data.location.country;
        date.innerHTML = data.location.localtime;
        tempC.innerHTML = `${data.current.temp_c}°C`;
        condition.innerHTML = data.current.condition.text;
        humidity.innerHTML = ` ${data.current.humidity} %`;
        icon.src = data.current.condition.icon;
        console.log(data)

        input.value =""

    })
    .catch((error)=>{
        console.error("Error is ", error.message);
    })

})

