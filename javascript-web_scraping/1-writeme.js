#!/usr/bin/node
// Import the fs module
const fs = require('fs');

// Parse command-line arguments to get the file path and string to write
const filePath = process.argv[2];
const stringToWrite = process.argv[3];

// Check if file path and string to write are provided
if (!filePath || !stringToWrite) {
  console.error('Please provide both a file path and a string to write.');
  process.exit(1); // Exit with error code 1
}

// Write the string to the file
fs.writeFile(filePath, stringToWrite, 'utf-8', (err) => {
  // Handle error, if any
  if (err) {
    console.error(err);
    return;
  }

//  console.log('String written to the file successfully.');
});
