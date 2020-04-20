# Project Description


> The Weather Journal is an app that can perform a call to Open Weather API to retrieve data based on the ZIP code of yoour location.
> On top of that, the app offers a field that can gather human feelings, that after keyed in, will display aling with the weather results.
> Weather conditions displayed are Humidity and Temperature.
> Current date and feelings are also displayed.

## What is this tool?

> The purpose of the app is to demonstrate how to perform an 
> The tool is powered by a third party, open-source API called Open Weather API API (check the credit section for more info).

## How do I install it?

1. Clone this repo

2. cd into your local cloned repo:

`npm install or yarn install`

3. Create a new .env file and containing the following environment variables for the Aylien API:

`API_ID` goes into `const APP_ID = '&APPID=';` in app.js

4. Run: `npm run start or yarn run start`

5. Open athe browser at:

`http://localhost:3000/`

# Credits

OPEN WEATHER API

 - The [OPEN WEATHER API](https://docs.aylien.com/textapi/#getting-started) is an open API that allows you to fetch data from ant location and based on different parameters.

 # License

 This repo is open source software [licensed as MIT](https://github.com/Memnoc/Weather-Journal-App-V1/blob/master/LICENSE).