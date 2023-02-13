# Node 18
- one of the most important Node updates


`Features`
- global fetch API
    no need of external packages
    fetch only rejects when a network error is encountered. 
    It does not reject on HTTP errors. 
    Therefore, the response needs to check response.ok to know whether the fetch is successful or not.
    client side ====> fetch is supported by all broswers (except IE)
    server side ====> fetch API only works above node 18
- Web Streams API
    previously ===> wait for the whole file to download
    breaking a resource into small chunks 
    and processing it little by little
- test runner module
    till now, we relied on Jest (external tool)
- V8 engine upgrade
- 