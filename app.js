window.addEventListener("load", function() {
  let long;
  let lat;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      console.log(long, lat);
      let api = `https://api.weatherbit.io/v2.0/current?lat=${lat}long=${long},NC&key=a05e202da04d4432a742b43238169bcc`;
      fetch(api)
        .then(res => res.json())
        .then(data => {
          console.log(data);
        });
    });
  }
});
