/* Empty JS object to act as endpoint for all routes */
let projectData = {};

/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
    /* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('website'));

const port = 3000;
/* Start server*/
const server = app.listen(port, listening);

function listening() {
    console.log(`running on localhost: ${port}`);
};


// First, store the data
// const data = [];

// GET route
app.get('/all', getData)

// Callback to the get route
function getData(request, response) {
    response.send(projectData)
}


// POST route
app.post('/addWeather', addWeather);

// Callback to the route to receive the client data and store it into an object entry
function addWeather(request, response) {
    let responseData = request.body;

    projectData.temperature = request.body.temperature;
    projectData.date = request.body.date;
    projectData.feelings = request.body.feelings;
    projectData.humidity = request.body.humidity;

    response.send(projectData)
    console.log(projectData)
}