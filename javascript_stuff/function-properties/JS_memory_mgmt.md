# Stack
- JavaScript uses to store static data. 
- Static data is data where the `engine knows the size at compile time`
    since the size wont change, JS engine allocates fixed amount of memory for each value
- examples of static data
    strings, numbers, booleans, 
    undefined, null 
    references      ----------> <THIS IS IMPORTANT>
- `even references`
    variables pointing to objects/functions are stored in `stack memory`
- <static memory allocation> ====> The process of allocating memory right before execution.


# HEAP
- The `heap memory` is a different space for storing data where JavaScript stores objects & functions.
- Unlike the stack, the engine doesn't allocate a fixed amount of memory for these objects. 
    Instead, more space will be allocated as needed.
- This way of allocating memory ===> `dynamic memory allocation`

https://felixgerschau.com/javascript-event-loop-call-stack/