// To get a random number between a max and a min, use the below code:

function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// If you want a pure function that returns the same output given its input, you can use the // below variation. This allows you to specify and pass in a number to use as the random number, // and if you dont it will use Math.random() as the default argument for the random number.

function getRandomBetween(min, max, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
}