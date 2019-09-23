    // Init utils
    const utils = new Utils();

    class Storage {
        constructor() {
            this.country;
            this.city;
            this.defaultCountry = 'MX';
            this.defaultCity = 'Guadalajara';
        }

        getLocationData() {
            if (localStorage.getItem('country') === null) {
                this.country = this.defaultCountry;
            } else {
                this.country = localStorage.getItem('country');
            }

            if (localStorage.getItem('city') === null) {
                this.city = this.defaultCity;
            } else {
                this.city = localStorage.getItem('city');
            }

            return {
                country: this.country,
                city: this.city
            }
        }

        setLocationData(country, city) {
            localStorage.setItem('country', country);
            localStorage.setItem('city', city);
        }
    }