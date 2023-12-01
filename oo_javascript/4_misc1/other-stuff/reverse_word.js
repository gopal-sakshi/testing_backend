var ip1 = 'welcome to rio';
// var op1 = 'emoclew ot oir';

var op1 = '';

var temp1 = ip1.split(' ');
console.log(temp1);

for (let i=0; i<temp1.length; i++) {
    let temp2 = '';
    for(let j=temp1[i].length-1; j>=0; j--) {
        temp2 = temp2 + temp1[i][j];
    }
    console.log(temp2);
    op1 = op1 + temp2 + ' ';
}
console.log(op1);