`Node 12`
- Diagnostic Reports
- Threads (they are stable now)
    worker_threads
- ES modules support
- flat, flatMap
- optional catch binding... no need to specify catch(err){}; just catch {} will do
- Object.fromEntries
    to create an object either from <Map> or from a <key/value array>


`Node 14`
- use of new V8 engine (V8 8.1)
    Promise.any
    error aggregation
    replaceAll
    new logical operators – &&=, ||=, ??=
- some junk


`Node 16`
- released on <April 2021>
- new V8 engine (V8 9.0)
- stable timers promises API        ===> timer functions that return promise objects


`Node 18`
- released on <Apr 2022>
- Experimental fetch API
- Web Streams API
- HTTP Timeouts
- Experimental test runner
- V8 engine updated to V8 10.1

`Node 19`
- node --watch  (no more nodemon)
    automatically restarting the application when file changes are detected
- HTTP timeout something
- WebCrypto API is stable
    build systems using cryptography
--------------------------------------------------------------------------------------
`Node releases`
- Node.js major release is updated every six months. 
- The new release becomes the <Current release> for six months
    which gives library authors time to add support for them. 
- After six months
    odd-numbered releases, such as 15, become <unsupported> 
    even-numbered releases, such as 16, move to the <Active LTS (long-term support)> status
- LTS release typically guarantees that critical bugs will be fixed for a total of 30 months. 
- Production applications should only use Active LTS or Maintenance LTS releases.

--------------------------------------------------------------------------------------

`ES modules support`
- ES modules are currently the way to go in JS
- we are using ES modules in frontend, desktop, mobile apps
    but in node, we are stuck with common.js modules
- 
--------------------------------------------------------------------------------------

https://www.reddit.com/r/node/comments/10x8giq/would_you_want_to_bundle_your_node_backend_code/
https://dev.to/midnqp/bundling-nodejs-into-single-executable-binary-l3g
