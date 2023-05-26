var axios = require('axios');

async function fetchUserNames() {
    const resp = await axios.get('https://api.github.com/users?per_page=2');
    return resp.data
}

async function fetchJokes() {
    // const resp = await axios.get('https://official-joke-api.appspot.com/jokes/programming/random');
    const resp = await axios.get('https://official-joke-api.appspot.com/jokes/programming/random', {
        headers: { 'Accept-Encoding': 'application/json' }
    });
    return resp.data
}

(async function fn() {
    console.log(await fetchUserNames());
    console.log(await fetchJokes());
})();