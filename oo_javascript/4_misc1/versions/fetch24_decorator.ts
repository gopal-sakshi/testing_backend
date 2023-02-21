// STEP I ========> declare an abstract interface
type ResponseWithData = Response & { data?: any };
interface Fetcher {
    run(input: RequestInfo, init?: RequestInit): Promise<ResponseWithData>; // run() is same like fetch ===> accepts one URL, returns promise    
} 

// STEP II ======> implementing the "Fetcher" class 
class BasicFetcher implements Fetcher {
    run(input: RequestInfo, init?: RequestInit): Promise<ResponseWithData> {
        return fetch(input, init);
    }
}


// STEP IIA ===> workhorse of the decorator pattern is the decorator class.
class JsonFetcherDecorator implements Fetcher {
    private decoratee: Fetcher;
    constructor (decoratee: Fetcher) { this.decoratee = decoratee; }
    async run(input: RequestInfo, init?: RequestInit): Promise<ResponseWithData> {
        const response = await this.decoratee.run(input, init);
        const json = await response.json();
        response.data = json;
        return response;
    }
}


// STEP III ========> use the Fetcher class
// const fetcher = new BasicFetcher();                     // BasicFetcher is useless as it doesnt do any .json() thingy
const fetcher = new JsonFetcherDecorator(new BasicFetcher());
const decoratedFetch = fetcher.run.bind(fetcher);

async function executeRequest() {
  const response1 = await decoratedFetch('https://catfact.ninja/fact');
  const response2 = await fetch('https://catfact.ninja/fact');
  const { data } = await response1;              // no need to .json() the response in decorated fetch
  console.log(data);
  const moviesJson2Data = await response2.json();  
  console.log(moviesJson2Data);

}
executeRequest(); 
/*********************************************************************************************/

// request timeout decorator

const TIMEOUT = 8000;
class TimeoutFetcherDecorator implements Fetcher {
    private decoratee: Fetcher;
    constructor(decoratee: Fetcher) { this.decoratee = decoratee; }
    async run(input: RequestInfo, init?: RequestInit): Promise<ResponseWithData> {
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), TIMEOUT);
        const response = await this.decoratee.run(input, { ...init, signal: controller.signal });
        clearTimeout(id);
        return response;
    }
}

const fetcher_timeout = new TimeoutFetcherDecorator(new JsonFetcherDecorator(new BasicFetcher()));
const decoratedFetch_timeout = fetcher.run.bind(fetcher_timeout);
async function executeRequest_timeout() {
    try {
        const { data } = await decoratedFetch('/movies.json');
        console.log(data);
    } catch (error) {
        console.log(error.name);            // Timeouts if the request takes longer than 8 seconds
    }
}
executeRequest_timeout(); 
/*********************************************************************************************/

// Now the basic fetcher is wrapped in 2 decorators
    // one extracts the JSON object
    // another timeouts the request in 8 seconds