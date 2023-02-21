// keyword "async" placed before the function definition ====> creates an asynchornous function
async function fetchUserNames() {
    const resp = await fetch('https://api.github.com/users?per_page=5');            // fetches first 5 users from GitHub
    const users = await resp.json();
    const names = users.map(({ login }) => login);
    console.log(names);
}

// The asynchronous callback function is executed in a "non-blocking manner" by the higher-order function. 
// But the asynchronous function "pauses its execution" while waiting for promises (await <promise>) to resolve.

// We transform asyncFn ====> asyncCallback
// const button = document.getElementById('fetchUsersButton');
// button.addEventListener('click', fetchUserNames);                now fetchUserNames became asyncCallback