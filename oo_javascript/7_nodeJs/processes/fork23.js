const http = require('http');


// HOW TO RUN
    // open this file in integrated terminal
    // node fork23.js
    // open localhost:3069/compute -----------------------> it takes very long time to respond... 
                                                            // server wont accept any new requests
    // node fork24.js ====> open localhost:3070/compute --> it takes very long time to respond... 
                                                            // but server is not blocked, it accepts & responds to other requests even before 1st request is completed
const longComputation1 = () => {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  };
  return sum;
};

const longComputation2 = () => {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
      sum += i;
    };
    return sum;
};

const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/compute') {
    const sum1 = longComputation1();
    const sum2 = longComputation1(); 
    const sum3 = longComputation1();
    const sum4 = longComputation1();
    const sum5 = longComputation1();
    const sum6 = longComputation1();
    const sum7 = longComputation1();
    const sum8 = longComputation2();
    return res.end(`Sum is ${(sum1 + sum2 + sum3 + sum4) - (sum5 + sum6 + sum7 + sum8) + 1 }`);
  } else if(req.url === '/quick-api') {    
    res.end('reponse time pattindi kada... coz, 1st request ayyake deeni response vastundi');
  } else if(req.url === '/inspect23') {
    res.end('learning --inspect flag');
    throw new Error(`urike phattu chesaa`);    
  } else {
    res.end('eh path enter chesaav raa')
  }
});

server.listen(3069);
console.log('server listening on 3069');