var blah23 = ["gopal", "priya", "sahasra", "sakshi"];
var res8 = [].slice.call(blah23);
console.log(res8);

var res9 = blah23.slice(1);             
console.log(res9);



// slice(start, end); 
    // default values =         
        // start: 0
        // end: endPosition
    // slice(1) translates into
        // slice(1,4)
    // slice(2) translates into
        // slice(2,4)

/*
    converting a DOM NodeList into a regular array
    https://stackoverflow.com/questions/2125714/explanation-of-slice-call-in-javascript

    [].slice.call(document.querySelectorAll('a'), 0);
        you call slice() as if it was a function of NodeList using call()

*/