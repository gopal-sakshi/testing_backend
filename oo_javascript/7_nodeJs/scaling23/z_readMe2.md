https://www.freecodecamp.org/news/scaling-node-js-applications-8492bd8afadc/


Three different things we can do to scale an application:
- Cloning
- Decomposing
- Splitting


`Cloning`
- clone the application multiple times 
- have each cloned instance handle part of the workload
- less cost, effective way
- use nodeJs in-built <cluster> module to implement cloning strategy on a single server


`Decomposing`
- decomposing the application based on functionalities & services. 
- means having multiple, different applications with different code bases...
    each code base have their own dedicated databases and User Interfaces. 
- commonly associated with the term microservices



`Splitting`
- split the application into multiple instances 
- where each instance is responsible for only a part of the application’s data. 
- This strategy is often named <horizontal partitioning> or <sharding>
- Data partitioning requires a lookup step before each operation 
    to determine which instance of the application to use. 
    For example, maybe we want to partition our users based on their country or language. 
    We need to do a lookup of that information first.


Successfully scaling a big application should eventually implement all three strategies
-----------------------------------------------------------------------------------------------------------------------

# cluster module 
- enable load balancing over an environment’s multiple CPU cores
- based on the child_process module's fork method
- allows us to fork the main application process as many times as we have CPU cores
- cluster module then takes over 
    and load balance <all requests to the main process> across <all forked processes>
- Useful ===> 
    when we have only one big machine... 
    easier & cheaper to add more resources to one machine rather than adding new machines
- Internals
    We create a master process 
    that master process forks a number of worker processes and manages them. 
    Each worker process represents an instance of the application that we want to scale. 
    All incoming requests are handled by the master process
    master process decides which worker process should handle an incoming request.
    master process ===> uses a round-robin algorithm to pick a worker process
        distributes the load evenly across all available processes on a rotational basis.
    

    


