
// NODE_ENV=production favouriteClub=RealMadrid node 1.js
// favouriteClub=RealMadrid node 1.js


console.log(process.env);
console.log(process.env.NODE_ENV)

// process.env, however, is not available in a browser environment
// we use bundlers (webpack) for exposing envi variables in UI/frontEnd
    // built-in plugin EnvironmentPlugin in webpack

        // const { EnvironmentPlugin } = require('webpack');
        // plugins: [            
        //     new EnvironmentPlugin({
        //         NODE_ENV: 'development'
        //     })
        // ]



/*

    // use this command to run this line -------->      NODE_ENV=production favouriteClub=RealMadrid node 1.js

        NODE_ENV:                           'production',
        favouriteClub:                      'RealMadrid',                   // passed as command line argument
        SHELL:                              '/bin/bash',
        LANGUAGE:                           'en_IN:en',
        GNOME_SHELL_SESSION_MODE:           'ubuntu',
        PWD:                                '/home/vsspl/Desktop/backEnd/testing_backend/javascript_stuff/arguments',
        HOME:                               '/home/vsspl',
        USERNAME:                           'vsspl',
        LANG:                               'en_GB.UTF-8',
        NVM_DIR:                            '/home/vsspl/.nvm',
        USER:                               'vsspl',
*/
