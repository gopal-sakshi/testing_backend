function MyObject1(formalParameter) {
    this.testNumber = formalParameter;
}

function MyObject2(formalParameter) {
    this.testString = formalParameter;    
}

MyObject2.prototype = new MyObject1( 8 );
/*
    Now MyObject2 contains this stuff
        testNumber = 8      
            //because, MyObject2 is inherited from MyObject1... it will contain all those properties that exist in MyObject1
            // meaning testNumber belongs to MyObject1
    
*/

console.log(MyObject2)                                  
    /*
        prints an object... 
        - this object's prototype points to MyObject1
        - MyObject1 prototype points to generic object
        - generic object prototype points to Null
        
        // check in browser
        - MyObject2.__proto__                                 // points to MyObject1
        - MyObject2.__proto__.__proto__                   // points to generic object
        - MyObject2.__proto__.__proto__.__proto         // points to NULL
    */


console.log(MyObject2.testNumber);
// prints undefined
// Because, at this point MyObject2 is still not created... 

/********************************************************************************************************************* */
var objectRef = new MyObject2( "String_Value" );
/*  
    objectRef =====>
        testString
        testNumber
*/
console.log(objectRef);
// console.log(objectRef.MyObject1.testNumber);
console.log(objectRef.testNumber);

/*
    The instance of MyObject2 referred to by the "objectRef variable" has a prototype chain
    
    prototypeChain of "object Ref variable" ------> 
        MyObject1 ---> Object.prototype ---> null

    

*/