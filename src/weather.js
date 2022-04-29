document.getElementById('test').addEventListener('click', a);
// load the weather infomation 
// getData();
function a(){

    getData();
}
async function getData() {
    try{
        const locationrespose = await fetch('https://geolocation-db.com/json/1');
        if (locationrespose.ok){
            const locationdata = await locationrespose.json();  
            // get the location  from geocation
            const respose = await fetch('https://goweather.herokuapp.com/weather/' + locationdata.city);
            if (respose.ok){
            const data = await respose.json();
            // get the weather information from weather api
            updateWeather(locationdata.city, data.description, data.temperature)
            } else {
                throw new Error (respose.statusText);
            }
        } else {
            throw new Error(respose.statusText);
        }
    } catch (error) {
        console.log(error.message);
    }

}

function updateWeather(city, weather, temperature) {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    document.getElementById('weather').innerHTML = `
    <div>${city}</div>
    <div>${weather} ${temperature}</div>
    <div>${date}</div>`
}
