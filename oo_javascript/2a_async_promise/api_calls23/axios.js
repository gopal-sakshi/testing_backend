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

async function makeAxiosGetCall() {
    let options23 = {
        method: 'GET',
        url: `https://api.github.com/users`,
        json: true,
        'Content-type': 'application/json',
        params: {                           // request-promise uses qs; axios uses params
            per_page: 2
        }
    }

    return await axios(options23)
    .then(response => {
        // return JSON.stringify(response.data);
        return response.data;
    }).catch(error => { 
        console.log(error); 
        return 'phattu, enduko mari';
    });
}

async function makeAxiosPostCall() {
    let options23 = {
        method: 'POST',
        url: `https://jsonplaceholder.typicode.com/posts`,
        'Content-type': 'application/json',
        data: {
            title: 'na peru title',
            body: 'muscular & athletic'
        }
    }

    return await axios(options23)
    .then(response => {
        // console.log(response.data);
        return response.data;
    }).catch(error => { 
        console.log(error); 
        return 'phattu, enduko mari';
    });
}

async function makeWikiCall() {
    let options23 = {
        url: `https://en.wikipedia.org/w/api.php?action=opensearch&search=gopal`
    }
    let options24 = {
        url: 'https://en.wikipedia.org/w/api.php',
		method: 'GET',
		json: true,
        params: {
            action: 'query',
            list:'search',
            srsearch: 'real madrid',
            format: 'json'
        }
    }
    var p1 = await axios(options23)
    .then(response => {
        console.log('response headers ======> ', response.headers);
        return response.data;
    }).catch(error => { 
        console.log(error); 
        return 'phattu, enduko mari';
    });

    var p2 = await axios(options24)
    .then(resp23 => {
        console.log('query search =========> ', resp23.data.query.search);
        console.log('status ===============> ', resp23.status);
        console.log('statusText ===========> ', resp23.statusText);
        return resp23.data;
    }).catch(error => {
        console.log(error);
        return '2nd promise phattu'
    });

    return [p1, p2];


    /*
        wikipedia architecture & stuff
        https://www.quora.com/How-does-Wikipedia-store-back-up-its-data
        https://gerrit.wikimedia.org/r/plugins/gitiles/mediawiki/
        https://www.mediawiki.org/wiki/Manual:Database_layout
        https://www.mediawiki.org/wiki/Download/en
        https://www.mediawiki.org/w/index.php?title=Manual:Database_layout/diagram&action=render
        https://www.mediawiki.org/wiki/Topic:Vq6zxtrvigcn740x

    */
}

(async function fn() {
    // console.log(await fetchUserNames());
    // console.log(await fetchJokes());
    // console.log(await makeAxiosGetCall());
    console.log(await makeAxiosPostCall());
    // console.log(await makeWikiCall());
})();


// this sets headers globally
// axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
