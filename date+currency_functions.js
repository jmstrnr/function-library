// For formatting the date used for comments, posts, etc
// A utility function to calculate the time passed between two dates. Useful for blog posts or comments when you want to show that
// the post/comment was made yesterday/10 months ago/etc, by calculating the time passed between the current timestamp and the
// timestamp of when the post/comment was made

// Below one of the passed in dates is subtracted from the other, coercing them to a Number type in milliseconds
function calcMinutesPassed(date1, date2) {
  return Math.floor(Math.abs(date2 - date1) // Return absolute value so it doesnt matter which passed in date value is larger
  / (60000)); // divide and floor the milliseconds to return the number of minutes between the passed in dates
}

// Returns a formatted time since a comment/post was posted similar to facebook/reddits system, eg '6 hours ago'
function formatTimeSincePosted(date) {
  // Subtract the passed in date timestamp from the current timestamp and return minutes between them
  const minutesPassed = calcMinutesPassed(new Date(), date);  
  let formattedDate = ''; // Initialize formattedDate as empty string to be overwritted

  // Years ago
  if (minutesPassed >= 1051200) {
    const yearsPassed = Math.floor(minutesPassed / 525600);
    return formattedDate =  `${yearsPassed} years ago`;
  }
  if (minutesPassed >= 525600 && minutesPassed < 1051200) {
    return formattedDate = `1 year ago`;
  }

  // Months ago
  if (minutesPassed >= 87600 && minutesPassed < 525600) {
    const monthsPassed = Math.floor(minutesPassed / 43800);
    return formattedDate = `${monthsPassed} months ago`;
  }
  if (minutesPassed >= 43800 && minutesPassed < 87600) {
    return formattedDate = `1 month ago`;
  }

  // Days ago
  if (minutesPassed >= 2880 && minutesPassed < 43800) {
    const daysPassed = Math.floor(minutesPassed / 1440);
    return formattedDate = `${daysPassed} days ago`;
  }
  if (minutesPassed >= 1440 && minutesPassed < 2880) {
    return formattedDate = `Yesterday`;
  }

  // Hours ago
  if (minutesPassed >= 120 && minutesPassed < 1440) {
    const hoursPassed = Math.floor(minutesPassed / 60);
    return formattedDate = `${hoursPassed} hours ago`;
  }
  if (minutesPassed >= 60 && minutesPassed < 120) {
    return formattedDate = `1 hour ago`;
  }

  // Minutes ago
  if (minutesPassed >= 2 && minutesPassed < 60) {
    return formattedDate = `${minutesPassed} minutes ago`;
  }
  if (minutesPassed === 1) {
    return formattedDate = `1 minute ago`;
  }
  if (minutesPassed === 0) {
    return formattedDate = `Just now`;
  }  
};

// Example dates for testing, remember months are zero indexed
const date1 = new Date(2020, 11, 7, 12, 32, 11); // 2020/12/07 12:32:11
const date2 = new Date(2020, 11, 1); // 2020/12/01
const date3 = new Date(2020, 10, 1); // 2020/09/01
const date4 = new Date(2020, 2, 15); // 2020/03/15
const date5 = new Date(2015, 2, 15); // 2015/03/15

console.log(formatTimeSincePosted(date1));
console.log(formatTimeSincePosted(date2));
console.log(formatTimeSincePosted(date3));
console.log(formatTimeSincePosted(date4));
console.log(formatTimeSincePosted(date5));

// For formatting a date in the specified countrys format using the Internationalization Api. 
let localeCode = navigator.language; // Get the language code used by the browser

function formatInternationalisedDate(localeCode, date) {
  // For configuring the formatter
  const internationalFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};

  return new Intl.DateTimeFormat(localeCode, internationalFormatOptions).format(date);
}

// Examples of different internationally formatted dates
console.log(formatInternationalisedDate('en-GB', date1)); // 7 December 2020, 12:32
console.log(formatInternationalisedDate(localeCode, date1)); // December 7, 2020, 12:32 PM, my browsers using en-US


// For internationalizing numbers to match the specified currency
let num = 942424.1232;

function formatCurrency(localeCode, value, currency) {
  return new Intl.NumberFormat(localeCode, {
    style: 'currency',
    currency: currency,
  }).format(value);
}

console.log(formatCurrency('en-GB', num, 'USD')); // Prints US$942,424.12
console.log(formatCurrency(localeCode, num, 'EUR')); // Prints €942,424.12
