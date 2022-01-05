process.argv.forEach(function (val, index, array) {
    // 0th & 1st arguments = 
                    //  bin/node              
                    // regex_mobile.js
    if(index == 2) {
        //console.log(index + ': ' + val);
        console.log(val);
        validateMobile1(val);
        validateMobile2(val);
    }
});

/*
    The first digit should contain number between 7 to 9.
    The rest 9 digit can contain any number between 0 to 9.
    The mobile number can have 11 digits also by including 0 at the starting.
    The mobile number can be of 12 digits also by including 91 at the starting
*/
function validateMobile1(mobile) {    
    const regex_pattern = /(0|91)?[7-9][0-9]{9}/        
    if(mobile.match(regex_pattern)) {                       // SYNTAX ====> str23.match(regex)       
        console.log("valid mobile number");
    } else {
        console.log("invalid mobile number");
    }
}

function validateMobile2(mobile) {
    let pattern1 = new RegExp("^\\d{9}$");
    let pattern2 = /^\d{9}$/;
    let pattern3 = new RegExp("/\d{9}/");           // wrong way
                                                        // EITHER       /.../       without new keyword
                                                        // OR           "..."       with new keyword

    if (mobile.match(pattern1)) {
        console.log("valid mobile number");
    } else {
        console.log("invalid mobile number");
    }                                                        
}