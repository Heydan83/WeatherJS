class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.pressure = document.getElementById('w-pressure');
    this.tempmin = document.getElementById('w-temp-min');
    this.tempmax = document.getElementById('w-temp-max');
    this.wind = document.getElementById('w-wind');

    // Fill Country and city fields
    this.countryList = document.getElementById('countryList');

    let output = '';

    utils.fillCountryAndCity()
      .then(countries => {
        let i;

        for (i = 0; i < countries.length; i++) {
          output += `
            <option value="${countries[i].alpha2Code}">${countries[i].name}</option>
          `;
        }
        countryList.innerHTML = output;
    });
  }

  paint(weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.desc.textContent = utils.capitalizeFirstLetter(weather.weather[0].description);
    this.string.textContent = `${weather.main.temp} ${'\u00B0'}C `;
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.humidity.textContent = `Humedad: ${weather.main.humidity}%`;
    this.pressure.textContent = `Presión: ${weather.main.pressure}hPa`;
    this.tempmin.textContent = `Temp Min: ${weather.main.temp_min}${'\u00B0'}`;
    this.tempmax.textContent = `Temp Max: ${weather.main.temp_max}${'\u00B0'}`;
    this.wind.textContent = `Vientos: ${weather.wind.speed} meter/sec`;
  }

  loadCities(country) {
    this.cityList = document.getElementById('cityList');

    let output = '';

    utils.lookForCities(country)
      .then(cities => {
        let i;

        cities.sort(utils.sortComparingName);

        for (i = 0; i < cities.length; i++) {
          output += `
              <option value="${cities[i].name}">${cities[i].name}</option>
            `;
        }
        this.cityList.innerHTML = output;
      });
  }
}