const request = require('request')

const url = 'https://api.weatherstack.com/current?access_key=5484bf504b8c4cee76f935aa571c37f3';


request({ url: url, json: true }, (error, response) => {
    console.log(response.body);

});