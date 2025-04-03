function updateTime() {
    // Los Angeles
    let losAngelesElement = document.querySelector("#los-angeles");
    if (losAngelesElement) {
      let losAngelesDateElement = losAngelesElement.querySelector(".date");
      let losAngelesTimeElement = losAngelesElement.querySelector(".time");
      let losAngelesTime = moment().tz("America/Los_Angeles");
  
      losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM	Do YYYY");
      losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");
    }
  
    // Paris
    let parisElement = document.querySelector("#paris");
    if (parisElement) {
      let parisDateElement = parisElement.querySelector(".date");
      let parisTimeElement = parisElement.querySelector(".time");
      let parisTime = moment().tz("Europe/Paris");
  
      parisDateElement.innerHTML = parisTime.format("MMMM	Do YYYY");
      parisTimeElement.innerHTML = parisTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    } 

    // Sydney
    let sydneyElement = document.querySelector("#sydney");
    if (sydneyElement) {
      let sydneyDateElement = sydneyElement.querySelector(".date");
      let sydneyTimeElement = sydneyElement.querySelector(".time");
      let sydneyTime = moment().tz("Australia/Sydney");
  
      sydneyDateElement.innerHTML = sydneyTime.format("MMMM	Do YYYY");
      sydneyTimeElement.innerHTML = sydneyTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }

    // Dubai
    let dubaiElement = document.querySelector("#dubai");
    if (dubaiElement) {
      let dubaiDateElement = dubaiElement.querySelector(".date");
      let dubaiTimeElement = dubaiElement.querySelector(".time");
      let dubaiTime = moment().tz("Asia/Dubai");
  
      dubaiDateElement.innerHTML = dubaiTime.format("MMMM	Do YYYY");
      dubaiTimeElement.innerHTML = dubaiTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
}
  
let cityInterval;
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  function updateTime() {
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = 
    `<div class="city">
      <div>
        <div class="city-header">
          <h2>${cityName}</h2>
          <img src="">
        </div>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
    </div>
    <a href="/" class="back-link"> Back to all cities</a>`;
  }
  if (cityInterval) {
    clearInterval(cityInterval);
  }
  updateTime();
  cityInterval = setInterval(updateTime, 1000);
}
  
updateTime();
setInterval(updateTime, 1000);
  
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);