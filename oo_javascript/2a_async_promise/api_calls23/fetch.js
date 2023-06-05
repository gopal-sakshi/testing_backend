async function fetchUserNames() {
    const resp = await fetch('https://api.github.com/users?per_page=5');            // fetches first 5 users from GitHub
    const users = await resp.json();
    const names = users.map(({ login }) => login);
    return names;
}

async function getData() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos/111');            // fetches first 5 users from GitHub
    // console.log(resp.headers);
    console.log(resp.headers.get('content-type'));
    return resp.json();   
}

async function postData() {    
    const todoObject = { userId: 111, title: "JinGChak", completed: false };
    const options = { 
        method: 'POST', 
        body: JSON.stringify(todoObject), 
        headers: { 'Content-Type': 'application/json' } 
    }
    const url = 'https://jsonplaceholder.typicode.com/todos';
    return (await fetch(url, options)).json();
}

async function streamResponse23() {
    const url = 'https://httpbin.org/stream/4';
    const data = await fetch(url);
    for await (chunk of data.body) {
        console.log('New Stream Received: ', Buffer.from(chunk).toString());
    }
    return 'this_is_fetch_with_streams';
}



(async function fn() {
    console.log(await fetchUserNames());
    console.log(await postData());
    console.log(await getData());
    console.log(await streamResponse23());
    var blah1 = await fetch('http://dummy.restapiexample.com/api/v1/employees');
    var blah2 = await blah1.json();
    console.log(blah2);    
})();
