class SecretiveClass {
    constructor() {
        const secret = "I am a lie!";
        this.spillTheBeans = function () {
            console.log(secret);
        }
    }
    looseLips() {
        console.log(secret);
    }
}

const liar = new SecretiveClass();
try {
    console.log(liar.secret);
}
catch (e) {
    console.log(e); // TypeError: SecretiveClass.secret is not defined
}
liar.spillTheBeans(); // "I am a lie!"

