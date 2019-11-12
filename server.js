/* Empty JS object to act as endpoint for all routes */
projectData = {};

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
/* Spin up the server*/
const server = app.listen(port, listening);

function listening() {
    // console.log(server);
    console.log(`running on localhost: ${port}`);
};

// First, store the data
const data = [];

// GET
// Respond with JS object when a GET request is made to the homepage
// This is the callback
app.get('/all', getData)

function getData(request, response) {
    response.send(data)
    console.log(data);
}


// POST
// Second, create post() route with a url path and a callback
app.post('/addWeather', addWeather);


// Third, write the callback function that receives the data
// at the targeted URL /addMovie
// and push the data received to an array data = []
function addWeather(request, response) {
    console.log(request.body);
    newEntry = {
        temperature: request.body.temperature,
        humidity: request.body.humidity,
        feelings: request.body.feelings
    }

    data.push(newEntry)
    response.send(data)
    console.log(data)
}

// Same as above, just using another URL /add
// and adding the received data to an object
// app.post('/add', function(request, response) {
//     let data = request.body;
//     projectData["movie"] = data.movie;
//     projectData["score"] = data.score;
//     console.log("called");
//     console.log(projectData);
// })