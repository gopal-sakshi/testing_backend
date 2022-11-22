function getUserInfo() {
    setTimeout(() => {
        console.log('user info after 3 sec');
    }, 3000);
}

function getUserDetails() {
    console.log('user details function');           // this gets printed first, even though getUserInfo() is called 1st...
}
getUserInfo();                          
getUserDetails();
/****************************************************************************************************** */