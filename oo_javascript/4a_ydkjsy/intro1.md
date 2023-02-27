`You Dont Know JS Yet`

alert("Hello, JS!");
- alert() function is not included in the JS
- but it is in all <web JS environments>

Various JS environments (browsers, NodeJS) 
- they add APIs into the global scope of your JS programs 
- that give you `environment-specific capabilities`
- some webAPIs
    fetch(), 
    getCurrentLocation()
    getUserMedia()
    console.log()
- NodeJS APIs
    various built-in modules ====> fs.write()
    console.log()
- So alert(), console.log() are not defined by JS. But they look like JS.
    They are functions (or) object methods... they obey JS syntax rules. 
    The behaviors/implementation behind them are controlled by the environment running the JS engine


