async function getData() {
    return await new Promise ((resolve, reject) => {
        resolve('I made it!');
    })
}

(async () => { 
    const data = await getData();
    console.log(data); 
})();
