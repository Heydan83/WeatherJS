class Weather {
  constructor(country, city) {
    this.apiKey = '333fd99b9b0573e4f126d19b6f050538';
    this.country = country;
    this.city = city;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=333fd99b9b0573e4f126d19b6f050538&units=metric&lang=es`);

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(country, city) {
    this.country = country;
    this.city = city;
  }
}