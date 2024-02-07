#!/usr/bin/node
// Import the request module
const request = require('request');

// Parse command-line argument to get the URL
const url = process.argv[2];

// Check if URL is provided
if (!url) {
  console.error('Please provide a URL.');
  process.exit(1); // Exit with error code 1
}

// Send a GET request to the URL
request.get(url, (error, response) => {
  // Handle error, if any
  if (error) {
    console.error('Error:', error);
    return;
  }

  // Display the status code of the response
  console.log(`code: ${response.statusCode}`);
});
 
