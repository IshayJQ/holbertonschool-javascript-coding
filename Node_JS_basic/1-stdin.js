// Create a readable stream to read input from the command line
const readline = require('readline');
const { spawn } = require('node:child_process');
const rl = spawn(readline.createInterface({
  input: process.stdin,
  output: process.stdout
}));

// Display the initial message
console.log('Welcome to Holberton School, what is your name?');

// Listen for user input
rl.on('line', (input) => {
  // Display the user's name
  console.log(`Your name is: ${input}`);

  // Close the readline interface
  rl.close();
});

// Listen for the close event of readline interface
rl.on('close', () => {
  // Display closing message
  console.log('This important software is now closing');
});
