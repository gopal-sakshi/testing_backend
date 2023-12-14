var requestPromise = require('request-promise');
let body = {
    text: "Click on\\nthe options below To gain further insights into Cardio:",
    dest_lg: "hi"
}
const options11 = {
    uri    : `https://webapp.transflowtms.com/translate2`,
    method : 'POST',
    json   : true,
    body: body,
    headers: {
        'Content-Type' : 'application/json',
        Authorization: 'b5afcf1c-e9fb-982f-1526-50d109f55f69'
    },
    resolveWithFullResponse:true
}

const options12 = {
    url:`https://en.wikipedia.org/w/api.php?action=opensearch&search=gopal`,
    method:"GET",
    headers: {
        "Content-Type": "application/json"
    },
    json:true,
    params: {
        action:"opensearch",
        search:"gopal"
    },
    resolveWithFullResponse:true
}

async function function23() {
    var resp23 = await requestPromise(options11);
    // var resp23 = await requestPromise(options12);
    console.log(resp23);
    // console.log(resp23.headers);
    // console.log(resp23.statusCode);
    // console.log(resp23.body);
    return resp23;
};

function23().then().catch();
