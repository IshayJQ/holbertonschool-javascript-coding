#!/usr/bin/node
// Import the request module
const request = require('request');
// Import the fs module
const fs = require('fs');

// Parse command-line arguments to get the URL and file path
const url = process.argv[2];
const filePath = process.argv[3];

// Check if both URL and file path are provided
if (!url || !filePath) {
  console.error('Please provide both a URL and a file path.');
  process.exit(1); // Exit with error code 1
}

// Send a GET request to the URL
request.get(url, (error, response, body) => {
  // Handle error, if any
  if (error) {
    console.error('Error:', error);
    return;
  }

  // Write the body response to the file
  fs.writeFile(filePath, body, 'utf-8', (err) => {
    // Handle error, if any
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }

    console.log('Webpage content saved to file successfully.');
  });
});
