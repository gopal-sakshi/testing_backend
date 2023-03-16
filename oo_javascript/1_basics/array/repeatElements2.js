const arr12 = [1,1,3,2,4,3,2,4,5,3,2,1,2,1];
var results = [];
for(var i=0; i<arr12.length; i++) {    
    if(!results.find(item => item.element == arr12[i])) {
        var blah = arr12.filter(item => item == arr12[i]);
        results.push({ element: arr12[i], count23: blah.length});
    }
    
}

console.log(results);