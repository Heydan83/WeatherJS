// Init storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.country, weatherLocation.city);

// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Add event onchange for the country input to calculate cities
document.getElementById('country').addEventListener('input', changeCities);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const country = document.getElementById('country').value;
  const city = document.getElementById('city').value;

  // Change location
  weather.changeLocation(country, city);

  // Set location in LS
  storage.setLocationData(country, city);

  // Get and display weather
  getWeather();

  // Close modal
  $('#locModal').modal('hide');
});

function getWeather() {
  weather.getWeather()
  .then(results => {
    // console.log(results);
    ui.paint(results);
  })
  .catch(err => console.log(err));
}

function changeCities() {
  document.getElementById('city').value = '';
  ui.loadCities(document.getElementById('country').value);
}