IN ES6, built-in modules were finally introduced. 
In ES6, Everything inside modules are private by default and it runs in a strict mode.

Before ES6, developers used external libraries like CommonJS for modules. 
----------------------------------------------------------------------------------------------------------------
Benefits of using modules
- Code can be splitted into smaller files of similar functionality.
- Modules can be shared across number of applications.

----------------------------------------------------------------------------------------------------------------

import and export statements are hoisted
- which acts like it's executed at the top of the program.

33 key js concepts
https://dev.to/moyedx3/series/16268

----------------------------------------------------------------------------------------------------------------
CommonJS vs ES6 modules
- ES6 modules first parses, looks for imports, load and then exectues. 
- CommonJS loads dependency on demand while executing.

So basically, by default, in ES6, import keyword is static. 
However, there is a way to use import dynamically.
Dynamic import returns promise object of request module which is creted after fetching and evaluating module's dependency and itself.
    It can enhance the performance of the program.
----------------------------------------------------------------------------------------------------------------

Open es6_import.html in browser (try CORS mode)
    executing es6_2.js
    executing es6_1.js
    hello world
Why CORS mode
- If you try to open a web-page locally, via file:// protocol, you’ll find that import/export directives don’t work. Use a local web-server
- Modules work only via HTTP(s), not locally
    https://javascript.info/modules-intro
    https://www.freecodecamp.org/news/modules-in-javascript/