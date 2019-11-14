const APP_ID = '&APPID=3a834efe29e097a21b0d01f86439e5ee';
let units = '&units=metric';
let searchMethod = 'zip=';
let searchTerm;
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?';
let temperatureElement = document.getElementById('temp');
let humidityLevel = document.getElementById('humidity');
let currentDate = document.getElementById('date');
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

    getAnimal(baseURL, searchMethod, newSearch, APP_ID, units)
        .then(function(data) {
            try {
                postData('/addWeather', { temperature: data.main.temp, humidity: data.main.humidity, feelings: feelings, date: date })
                    // Update the UI with data
                updateUI();
            } catch (error) {
                console.log("error", error);
            }
        });

};

// GET call
const getAnimal = async(baseURL, searchMethod, searchTerm, APP_ID, units) => {
    const res = await fetch(baseURL + searchMethod + searchTerm + APP_ID + units)
    try {
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("error", error);
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
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}

// Update the UI with the information extracted from the API and the HTML elements
const updateUI = async() => {
    const request = await fetch(fetchURL);
    try {
        const allData = await request.json();
        humidityLevel.innerHTML = "Humidity level at: " + allData[0].humidity;
        temperatureElement.innerHTML = "Temperature level at: " + allData[0].temperature + " C˚";
        document.getElementById('content').innerHTML = "Today's feeling: " + allData[0].feelings;
        currentDate.innerHTML = "Today's date: " + allData[0].date;

    } catch (error) {
        console.log("error", error);
    }
}