class Utils {
  capitalizeFirstLetter(stringData) {
    return stringData.charAt(0).toUpperCase() + stringData.slice(1);
  }

  secondsTotime(timeInSeconds) {
    const pad = function (num, size) { return ('000' + num).slice(size * -1); },
      
    time = parseFloat(timeInSeconds).toFixed(3),
    hours = Math.floor(time / 60 / 60),
    minutes = Math.floor(time / 60) % 60,
    seconds = Math.floor(time - minutes * 60),
    milliseconds = time.slice(-3);

    return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2);
  }

  async fillCountryAndCity() {
    const response = await fetch('https://restcountries.eu/rest/v2/all');

    const responseData = await response.json();
    
    return responseData;
  }

  async lookForCities(country) {
    const response = await fetch('./city.list.json');

    const responseData = await response.json();

    const filterCities = responseData.filter(city => {
      return city.country === country;
    });

    return filterCities;
  }

  sortComparingName(objA, objB) {
    if (objA.name < objB.name)
      return -1;
    if (objA.name > objB.name)
      return 1;
    return 0;
  }
}