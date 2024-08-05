interface FooWithBar {
    ():void;
    (num1:number): number;
    bar():void;
}

function FooWithBar() {
    
}

module FooWithBar { 
    export function bar() {  
    }
}

let foo11:FooWithBar = function() {
    console.log("this if FooWithBar Fn")
} as FooWithBar;

foo11 = function(acceptParam:number) {
    console.log("hammayya, based on param, ee fn call ayindi le ", acceptParam)
} as FooWithBar;

foo11.bar = function() {
    console.log("someone invoked barFn");
};

foo11();
foo11(23);                  // think in terms of function overloading ===> typescript
foo11.bar();