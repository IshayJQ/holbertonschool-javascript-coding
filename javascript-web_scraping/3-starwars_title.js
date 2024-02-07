#!/usr/bin/node
// Import the request module
const request = require('request');

// Parse command-line argument to get the movie ID
const movieId = process.argv[2];

// Check if movie ID is provided
if (!movieId) {
  console.error('Please provide a movie ID.');
  process.exit(1); // Exit with error code 1
}

// Construct the URL for the SWAPI endpoint
const url = `https://swapi-api.hbtn.io/api/films/${movieId}`;

// Send a GET request to the SWAPI endpoint
request.get(url, (error, response, body) => {
  // Handle error, if any
  if (error) {
    console.error('Error:', error);
    return;
  }

  // Parse the JSON response body
  const movieData = JSON.parse(body);

  // Display the title of the movie
  console.log(`${movieData.title}`);
});

