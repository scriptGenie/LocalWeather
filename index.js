function fetchData() {
    return new Promise( function(resolve, reject) {
        // console.log('promise created')
        fetch('https://api.weather.gov/gridpoints/PHI/58,52/forecast')
            .then(response => response.json())
            .then(data => resolve(data.properties.periods[0].detailedForecast))
    })
};


function displayDataWeather(weather) {
    // console.log('promise resolved')
    console.log(weather);
};


fetchData()
    .then(displayDataWeather)