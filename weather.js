//api key bara inke back maro beshnase

//api.openweathermap.org/data/2.5/weather?q={city name}&appid=7b5273c275c4f855ddb6a69b537bf2a3&units=metric
// khat aval bara inke che enter zad che btn ro zad amal kone .
const form  = document.querySelector(".top-banner form");
const input  = document.querySelector(".container--input");
const msg  = document.querySelector(".msg");
const list  = document.querySelector(".cities");

const apiKey = "7b5273c275c4f855ddb6a69b537bf2a3";
form.addEventListener("submit", evt => {
    evt.preventDefault();
    let inputValue = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
          const {main,name,sys,weather} = data
            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`
            const li = document.createElement("li");
          li.classList.add("city");
            console.log(data)
          const markup = `
          <h2 class="city-name" data-name = ${name},${sys.country}>
<span>${name}</span>
<span>${sys.country}</span>
</h2>
<div class="city-temp">${Math.round(main.temp)}</div>
<figure>
    <img src="${icon}" alt="city" class="city-icon">
    <figcaption>
        ${weather[0]["description"]}
    </figcaption>
</figure>
          `;
            li.innerHTML = markup;
            list.append(li);
        })

})