const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.weatherstack.com/current?access_key=faa902240c37f3c5f4e3d73da8537997&query=${latitude},${longitude}&units=m`;

    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service!');
        }else if(body.error) {
            callback('Unable to find location');
        }else {
            callback(undefined, body.current.weather_descriptions[0] + `. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out. And the humidity is ${body.current.humidity}`);
        }
    });
};

module.exports = forecast;