import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=af7ab8fc6fac19829190bd8831c51e85&units=metric';

const openWeatherMap = {
    getTemp(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestURL).then(
            function(res) { // Success
                if(res.data.cod && res.data.message) {
                    throw new Error(res.data.message);
                } else {
                    return {
                        temp: res.data.main.temp,
                        location: `${res.data.name}, ${res.data.sys.country}`
                    };
                }
            },
            function (res) { // Error
                throw new Error(res.message);
            }
        );
    }
}

export default openWeatherMap;
