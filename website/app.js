let appId = '&APPID=3a834efe29e097a21b0d01f86439e5ee';
let units = '&units=metric';
let searchMethod = 'zip=';
let searchTerm;
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?';
let temperatureElement = document.getElementById('temperature');
let humidityLevel = document.getElementById('humidity');
const fetchURL = "http://localhost:3000/all";

document.getElementById('generate').addEventListener('click', performAction);

// Capture the search method and update getAnimal() with it
function performAction(e) {
    // Get the ZIP value
    const newSearch = document.getElementById('zip').value;
    // Get the feeling value
    const feelings = document.getElementById('feelings').value;

    getAnimal(baseURL, searchMethod, newSearch, appId, units)
        .then(function(data) {
            console.log(data);
            postData('/addWeather', { temperature: data.main.temp, humidity: data.main.humidity, feelings: feelings })

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
        temperatureElement.innerHTML = allData[0].humidity;
        humidityLevel.innerHTML = allData[0].temperature;
        document.getElementById('feelingz').innerHTML = allData[0].feelings;

    } catch (error) {
        console.log("error", error);
    }
}

// postData('/addWeather', { temperature: data.temp, humidity: data.humidity, fact: favFact });
// postData('/addMovie', { movie: ' the shore ', score: 2 });
// postData('/addMovie', { movie: ' the shore ', score: 2 });

// Just another random route for testing
// postData('/add', { movie: ' Armageddon ', score: 5 });
// postData('/add', { movie: ' Jaws ', score: 2 });
// postData('/add', { movie: ' The Shore ', score: 2 });