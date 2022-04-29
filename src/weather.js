document.getElementById('test').addEventListener('click', a);
// load the weather infomation 
// getData();
hideSpinner();

function a(){

    getData();
    
}
async function getData() {
    try{
        const locationresponse = await fetch('https://geolocation-db.com/json/1');
        showSpinner();
        if (locationresponse.ok){
            const locationdata = await locationresponse.json();  
            // get the location  from geocation
            const response = await fetch('https://goweather.herokuapp.com/weather/' + locationdata.city);
            if (response.ok){
            const data = await response.json();
            // get the weather information from weather api
            updateWeather(locationdata.city, data.description, data.temperature)
            hideSpinner();
            } else {
                throw new Error (response.statusText);
            }
        } else {
            throw new Error(response.statusText);
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

// Function to hide the Spinner
function hideSpinner() {
    document.getElementById('spinner')
            .style.display = 'none';
} 

// Function to show the Spinner
function showSpinner() {
    document.getElementById('test').addEventListener('click', a);
    document.getElementById('spinner')
            .style.display = 'flex';
} 