// This function is used to avoid the issues with using async await in loops that take a callback
// function (see journal notes). It is based off of Eslint and Wes Bos recommendations, and 
// although an array is specified as a parameter as the main use case, it can take other 
// collections of data.
// https://eslint.org/docs/rules/no-await-in-loop


async function asyncMap(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(array));   // Good, all asynchronous operations are immediately started.
  }
  return newResults(await Promise.all(results));  // wait till after all async operations finish running to return newResults
}