// This reusable debounce function acts as a rate limiter for how often a function gets invoked, // by passing the function into the reusable debounce function. In the below example, the onInput // function is passed into the debounce function as an argument.

const debounce = (func, delay = 1000) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
};

/*
const onInput = debounce(event => {
        fetchData(event.target.value);
}, 500);
*/