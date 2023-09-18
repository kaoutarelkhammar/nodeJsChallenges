const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// "/weather" endpoint
app.get('/weather', async (req, res) => {
  try {
    // Extract the city name from the query parameter
    const cityName = req.query.city;

    if (!cityName) {
      res.status(400).json({ error: 'City parameter is missing.' });
      return;
    }

    // Use the city name to retrieve weather temperature
    const temperature = await fetchWeatherTemperature(cityName);

    res.json({ city: cityName, temperature });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

async function fetchWeatherTemperature(cityName) {
  // Make a request to the weather API to get the temperature data
  // Replace 'YOUR_API_KEY' and 'YOUR_BASE_URL' with actual API details
  const apiKey = 'YOUR_API_KEY';
  const baseUrl = 'YOUR_BASE_URL';

  const url = `${baseUrl}?city=${cityName}&apiKey=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  if (!data || !data.temperature) {
    throw new Error('Weather data not found.');
  }

  return data.temperature;
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
