# Shared state
- is any variable, object, memory space 
- that exists in a shared scope
- A shared scope can include global scope (or) closure scopes. 
- Often, in object oriented programming, objects are shared between scopes by adding properties to other objects.
    A computer game might have a master game object, with characters and game items stored as properties owned by that object.



Functional programming avoids shared state
— instead relying on immutable data structures and pure calculations to derive new data from existing data.
- how functional software might handle application state
    Read this ---> https://medium.com/javascript-scene/10-tips-for-better-redux-architecture-69250425af44


The problem with shared state is 
- in order to understand the effects of a function, 
- you have to know the entire history of every shared variable that the function uses or affects.
- Example 01
    saveUser() ==> updating new profile Pic
    imagine user does this twice... 1st he changes profile pic... while its in progress, he changes profile pic again
    imagine ===> 2nd response comes first, user sees latest pic... but now 1st response is returned... now user sees the 1st profile pic he chosen
    "race condition" ===> commonly associated with sharedState
- Example 02
    changing the order in which functions are called ===> failures because functions which act on shared state are timing dependent:
-------------------------------------------------------------------------------------------------
