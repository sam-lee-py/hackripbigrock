getWeather();

async function getWeather() {
    try{
        const locationrespose = await fetch('https://geolocation-db.com/json/1');
        if (locationrespose.ok){
            const locationdata = await locationrespose.json();  
            // get the location  from geocation
            console.log(locationdata);

            const weatherrespose = await fetch('https://goweather.herokuapp.com/weather/' + locationdata.city);
            if (weatherrespose.ok){
            const weatherData = await weatherrespose.json();
            // get the weather information from weather api
            console.log(weatherData);

            updateWeather(locationdata.city, weatherData.description, weatherData.temperature);

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
    if (weather && temperature) {
        tem = Number(temperature.match(/\d/g).join(''));
        var feeling = "Emmmmmmmmmmmmmmmmm~";
        if (tem && tem > 28){
            feeling = "HOT~!";
        } else if (tem && tem < 16) {
            feeling = "COLD~!";
        } else if (tem) {
            feeling = "not bad.";
        } else {
            feeling = "Oh no, I cant read it."
        }

        var text = [
            ``,
            `Hello. I'm Big Rock...`,
            `Today is ${date}`,
            `${city} is ${weather} today.`,
            `Temperature is ${temperature}`,
            `Feels ${feeling}`,
        ];
    } else {
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