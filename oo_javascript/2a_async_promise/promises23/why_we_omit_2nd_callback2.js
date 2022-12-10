// EXAMPLE I =============> 
// save().then(
//     handleSuccess,
//     handleError
// );


// But what happens if handleSuccess() throws an error? 
// The promise returned from .then() will be rejected, but there’s nothing there to catch the rejection — 
// meaning that an error in your app gets swallowed


// For that reason, some people consider the code above to be an anti-pattern, and recommend the following, instead:
// EXAMPLE II =================> .catch() will handle rejections from either save(), or handleSuccess().
// save()
//     .then(handleSuccess)
//     .catch(handleError)
// ;