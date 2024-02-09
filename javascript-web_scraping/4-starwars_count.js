#!/usr/bin/node
// Import the request module
const request = require('request');

// Parse command-line argument to get the API URL
const apiUrl = process.argv[2];

// Check if API URL is provided
if (!apiUrl) {
  console.error('Please provide the API URL.');
  process.exit(1); // Exit with error code 1
}

// Send a GET request to the SWAPI endpoint
request.get(apiUrl, (error, response, body) => {
  // Handle error, if any
  if (error) {
    console.error('Error:', error);
  }

  // Parse the JSON response body
  const filmsData = JSON.parse(body);

  // Initialize count of movies with "Wedge Antilles" present
  let moviesWithWedgeAntilles = 0;

  // Iterate through each film
  for (const film of filmsData.results) {
    // Check if "Wedge Antilles" is present in the characters array
    if (film.characters.includes('https://swapi-api.hbtn.io/api/people/18/')) {
      moviesWithWedgeAntilles++;
    }
  }

  // Print the number of movies with "Wedge Antilles" present
  console.log(`${moviesWithWedgeAntilles}`);
});
