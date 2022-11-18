var a="RMA", b="FCB";
console.log(`[a,b]=[${a}, ${b}]`);  
a=a+b;
b=a.replace(b,'');
a=a.replace(b,'');
console.log(`[a,b]=[${a}, ${b}]`);  