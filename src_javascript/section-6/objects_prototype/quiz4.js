function SecretiveProto() {
    const secret = "The Class is a lie!"
    this.spillTheBeans = function () {
        console.log(secret)
    }
}

const blabbermouth = new SecretiveProto();
// console.log(blabbermouth.secret);
// blabbermouth.spillTheBeans(); // "The Class is a lie!"
/*************************************************************************************************************** */

