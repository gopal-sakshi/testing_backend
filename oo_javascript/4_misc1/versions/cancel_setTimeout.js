// How can we cancel a promiseable setTimeout
// If our setTimeoutPromise function
    // instead of returning a promise function
    // returns an object that will contain two keys
        // the promise itself 
        // a function that we can call to cancel the timeout

/******************************************************************************************************/

    // SEe promisable_setTimeout.js             FOR BETTER UNDERSTANDING

/******************************************************************************************************/
function setTimeoutPromise_cancellable(cb, ms) {	
    let timeoutId;	
	const timeout = new Promise((resolve) => { timeoutId = setTimeout(() => resolve(cb()), ms); });	
	return { timeout, cancel: () => timeoutId && clearTimeout(timeoutId) };
}

const { timeout, cancel } = setTimeoutPromise_cancellable(() => 'default24', 2000);

const result = await Promise.any([
	getValueFromAPI(),
	timeout
]);

cancel();
/******************************************************************************************************/