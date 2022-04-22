var atob = require('atob');
var str44 = 'eyJ1c2VyTmFtZSI6Iis5MTc3MzA4NzA0MDMiLCJwYXNzd29yZCI6IjkxMzAyMCIsInNlc3Npb25JZCI6IiIsInR5cGUiOiJtb2JpbGUifQ==';

function getFromLocal(key, decode = true) {

    let jsonString = str44;    
    if (jsonString && decode) {
      const res = atob(jsonString);
      console.log(res);
    }    
}

getFromLocal();