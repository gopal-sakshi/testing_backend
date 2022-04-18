function MyObject1(formalParameter){
    this.testNumber = formalParameter;
}

function MyObject2(formalParameter){
    this.testString = formalParameter;    
}

MyObject2.prototype = new MyObject1( 8 );

var objectRef = new MyObject2( "String_Value" );
console.log(objectRef);
console.log(objectRef.testNumber);

/*
    The instance of MyObject2 referred to by the "objectRef variable" has a prototype chain
    
    prototypeChain of "object Ref variable" ------> 
        MyObject1 ---> Object.prototype ---> null


*/