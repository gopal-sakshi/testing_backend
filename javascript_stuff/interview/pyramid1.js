var length23=4;

for(let i=0;i<length23;i++) {    
    // console.log(' '.repeat((length23-1)-i),'*'.repeat(2*i+1), (length23-1)-i);              // with levels
    console.log(' '.repeat((length23-1)-i),'*'.repeat(2*i+1));                              // without levels
}
for(let i=0;i<length23;i++) { 
    printLine(i+1, length23);           // printLine(1,4); printLine(2,4)
}
function printLine(lineNo, totalLines) {
    for(let i=totalLines; i>lineNo; i--) {
        process.stdout.write(' ');
    }
    for(let i=0;i<2*lineNo-1; i++) {
        process.stdout.write('*');
    }
    process.stdout.write('\n');
};