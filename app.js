let locationTimezone = document.querySelector(".location-timezone");
let temperatureDegree = document.querySelector(".temperature-degree");
let temperatureDesciption = document.querySelector(".temperature-description");
let degreeSection = document.querySelector(".degree-section");
let tempSpan = document.querySelector(".degree-section span");
window.addEventListener("load", function() {
  let long;
  let lat;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      let api = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=a05e202da04d4432a742b43238169bcc`;
      fetch(api)
        .then(res => res.json())
        .then(result => {
          let { app_temp, timezone, weather } = result.data[0];
          let { description, icon } = weather;
          temperatureDegree.textContent = app_temp;
          temperatureDesciption.textContent = description;
          locationTimezone.textContent = timezone;

          degreeSection.addEventListener("click", function() {
            let celcius = ((app_temp - 32) * 5) / 9;
            if (tempSpan.textContent === "F") {
              tempSpan.textContent = "C";
              temperatureDegree.textContent = celcius.toFixed(2);
            } else {
              tempSpan.textContent = "F";
              temperatureDegree.textContent = app_temp;
            }
          });
        });
    });
  } else {
    alert("Geolocation isnt supported");
  }
});
