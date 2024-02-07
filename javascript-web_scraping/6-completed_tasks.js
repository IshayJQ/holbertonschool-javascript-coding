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

// Send a GET request to the API URL
request.get(apiUrl, (error, response, body) => {
  // Handle error, if any
  if (error) {
    console.error('Error:', error);
    return;
  }

  // Parse the JSON response body
  const todos = JSON.parse(body);

  // Initialize an object to store the number of completed tasks for each user ID
  const completedTasksByUserId = {};

  // Iterate through each todo
  for (const todo of todos) {
    // Check if the task is completed
    if (todo.completed) {
      // Increment the count of completed tasks for the user ID
      completedTasksByUserId[todo.userId] = (completedTasksByUserId[todo.userId] || 0) + 1;
    }
  }
  // Create an array to store objects with 'userId' and 'completedTasksByUserId'
  const obj = {};

  // Iterate through the completedTasksByUserId object and construct the desired format
  for (const userId in completedTasksByUserId) {
    obj[userId] = completedTasksByUserId[userId];
  }

  // Print the result
  console.log(obj);
});
