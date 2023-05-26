// var str = 'Hello, My name is Rama';
var strIn = 'Rama is name my Hello,';
function reverseWords(arr) {
    const length = arr.length-1;
    var outputStr = [];
    for(let i=0; i<length; i++) {
        // R a m a
        if(arr[i] != ' ') {
 
        }
    }
}

function breakWords(arr) {
    var retStr = [];
    var word1 = [];
    for(let i=0; i<arr.length-1; i++) {
        if(arr[i]!= ' ') {
            word1[i] = arr[i];
        } else {
            retStr.push(word1);
            word1 = [];
            console.log('ss ---', retStr);
        }
    }
    return retStr;
}

console.log(breakWords('hello gopal evening'));