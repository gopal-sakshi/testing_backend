const getData = () => { 
    fetch('https://catfact.ninja/fact')
    .then((response) => { console.log('response.body =', response.body); return response.body; })
    .then((responseBody) => {
        const reader = responseBody.getReader();
        console.log('reader =', reader);
        return new ReadableStream({
            start(controller) {
                console.log('controller =', controller);
                function push() {
                    reader.read().then(({ done, value }) => {
                        if (done) { console.log('done =', done); controller.close(); return; }
                        controller.enqueue(value);
                        console.log(done, value);                            
                        push();
                    });
                }
                push();
            },
        });
    })
    .then((stream) => {
        console.log('stream =', stream);
        return new Response(stream, { headers: { 'Content-Type': 'text/html' }, }).text();
    }).then((result) => { console.log('result =', result); });
};

getData();