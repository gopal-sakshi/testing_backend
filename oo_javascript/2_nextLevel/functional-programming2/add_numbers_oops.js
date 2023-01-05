class inputField {
    constructor(id) {  this.id = id; }
    getNumber() {
        const value = document.getElementById(this.id).value;
        return parseInt(value);
    }
}

class Form {
    static outputField = document.getElementById('sum');
    static addNumbers(firstNumber, secondNumber) { return firstNumber + secondNumber; }
    static displaySum(value) { this.outputField.textContent = value + '_oops'; }
}

const firstInput = new inputField('firstNum');
const secondInput = new inputField('secondNum');

function handler() {
    const res = Form.addNumbers(firstInput.getNumber(), secondInput.getNumber());
    Form.displaySum(res);
}

/*
    OOPS
    - everything revolves around objects. 
    - At the center of the code are “things” 
        — for example, a person, a database connection, an input field. 
    - The “things” we can actually work with are called instances.
    - All instances have a blueprint — classes


    If the app will stay the same as it is now (just add 2 numbers)
    — then a separate Form class is overkilling

    If the code will become much more complicated
    — then it would be appropriate for more order
    - like to transfer the handler function into the Form class.

*/