var _ = require('lodash');
var message = {
    interactive: {
        type: "list",
        header: {
            type: "text",
            text: ""
        },
        body: {
            type: "text23",
            text1: "*Select option*\n \nfrom *Main Menu*\nsomething",
            text: ""
        }
    }
}

let wholeMsg = _.get(message, 'interactive.body.text1') || "";
// let headerText = wholeMsg.substring(0,wholeMsg.indexOf('\n'));
// let bodyText = ['33'];

let [headerText, ...bodyText] = wholeMsg.split('\n') ? wholeMsg.split('\n') : [];
_.set(message, 'interactive.header.text', headerText ? headerText : 'SelectOption23');
_.set(message, 'interactive.body.text', bodyText.join('\n'));

console.log(message)