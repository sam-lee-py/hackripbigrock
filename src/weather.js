getWeather();
const apiKey = "32cfde07acd5578cca8cddf7e359f883";

async function getWeather() {
    try{
        const locationrespose = await fetch('https://geolocation-db.com/json/1');
        if (locationrespose.ok){
            const locationdata = await locationrespose.json();  
            // get the location  from geocation
            console.log(locationdata);

            const weatherrespose = await fetch('http://api.weatherstack.com/current?access_key='+ apiKey +'&query=' + locationdata.city)
            if (weatherrespose.ok){
            const weatherData = await weatherrespose.json();
            // get the weather information from weather api
            console.log(weatherData);
            console.log(weatherData.current.weather_descriptions[0])
            console.log(weatherData.current.temperature)

            updateWeather(locationdata.city, weatherData.current.weather_descriptions[0], weatherData.current.temperature);

            } else {
                throw new Error("weatherrespose");
            }
        } else {
            throw new Error("locationrespose"); 
        }
    } catch (err) {
        console.log(err);
    }
}

function updateWeather(city, weather, temperature) {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    try{
        var text = [
            ``,
            `Hello. I'm Big Rock...`,
            `Today is ${date}`,
            `${city} is ${weather} today.`,
            `Temperature is ${temperature}`,
        ];
    } catch (e) {
        var text = [
            ``,
            `Hello. I'm Big Rock...`,
            `Today is ${date}`, 
            `I am in ${city}`,
            `It's a great day.`
        ];
    }
    var typed = new Typed('.weather', {
        //wait then type
        strings: text,
        typeSpeed: 50,
        backSpeed: 10,
        loop: true,
        showCursor: false,
    });
}