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
const data = [];

// GET route
app.get('/all', getData)

// Callback to the get route
function getData(request, response) {
    response.send(data)
}


// POST route
app.post('/addWeather', addWeather);

// Callback to the route to receive the client data and store it into an object entry
function addWeather(request, response) {
    console.log(request.body);
    newEntry = {
        date: request.body.date,
        humidity: request.body.humidity,
        temperature: request.body.temperature,
        feelings: request.body.feelings
    }

    data.push(newEntry)
    response.send(data)
}