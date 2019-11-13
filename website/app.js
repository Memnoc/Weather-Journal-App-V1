let appId = '&APPID=';
let units = '&units=metric';
let searchMethod = 'zip=';
let searchTerm;
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?';
let temperatureElement = document.getElementById('temperature');
let humidityLevel = document.getElementById('humidity');
let currentDate = document.getElementById('datez');
const fetchURL = "http://localhost:3000/all";

document.getElementById('generate').addEventListener('click', performAction);

// Capture the search method and update getAnimal() with it
function performAction(e) {
    // Get the ZIP value
    const newSearch = document.getElementById('zip').value;
    // Get the feeling value
    const feelings = document.getElementById('feelings').value;
    // Get the date value
    // Create a new date instance
    let d = new Date();
    let date = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
    currentDate.value = date;

    getAnimal(baseURL, searchMethod, newSearch, appId, units)
        .then(function(data) {
            postData('/addWeather', { temperature: data.main.temp, humidity: data.main.humidity, feelings: feelings, date: date })
            console.log(date);

            // Update the UI with data
            updateUI();
        });

};

// GET call
const getAnimal = async(baseURL, searchMethod, searchTerm, appId, units) => {

    const res = await fetch(baseURL + searchMethod + searchTerm + appId + units)
    try {

        const data = await res.json();
        console.log(data)
            // console.log(data.main.temp)
        return data;
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}


// POST call
// Function to fetch data asynchronously
const postData = async(url = '', data = {}) => {
    console.log(data);
    // this is the POST route
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Turn the body of the request into JSON        
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}

const updateUI = async() => {
    const request = await fetch(fetchURL);
    try {
        const allData = await request.json();
        humidityLevel.innerHTML = "Humidity level at: " + allData[0].humidity;
        temperatureElement.innerHTML = "Temperature level at: " + allData[0].temperature + " C˚";
        document.getElementById('feelingz').innerHTML = "Today's feeling: " + allData[0].feelings;
        currentDate.innerHTML = "Today's date: " + allData[0].date;


    } catch (error) {
        console.log("error", error);
    }
}