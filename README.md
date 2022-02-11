# Earthquake App

The earthquake app gives an insight and visual overview of the earthquakes detected in the past 24 hours by USGS.

## Setup & Installation
1. clone this repo
2. install dependencies `npm i`
3. start the server `npm run dev`
4. see the site on `localhost:3000`


## Features
* **Dashboard** with an overview of:
  * observation timeframe (24h)
  * total count of earthquakes detected
  * occurance of intensity levels (magnitudes)
* **Interactive diagram** that holds:
  * time of the occurance (y-axis)
  * intensity of the earthquake (x-axis and height/width of data)
  * info panel with detailed information to specific event (opens on click)


## Code / Frameworks
The app is written in JavaScript and built using React and Express.
Its main components are:
* `<App />` (holds all other components, fetches USGS data)
* `<Dashboard />` (for the dashboard overview)
* `<TimeIntensityScale />` (for the time/intensity diagram)
* `<EarthquakeFeature />` (for every single earthquake event)

Besides that there are two util function files:
* `convert-timestamp-to-string.js` (contains a function to generate a specific string from unix timestamp depending on specific argument inputs)
* `interpret-data.js` (contains multiple functions that take care of interpreting data, e.g. for calculating the earthquake features’ positions based on its time and magnitude data)
