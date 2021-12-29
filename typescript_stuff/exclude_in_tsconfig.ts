/*
    this is just to check this...

    whether, this file's .js file will get emitted by tsc compiler
    because in tsconfig.json file... I added a property - exclude which contains this folder path
        meaning all ts files inside this folder wont have their js emitted...

*/

/*

        it seems, it worked... 
        the .js of this file didnt get created in compiledJS folder...
*/

let test24 = {
    name: "testing4",
    age: 25
}

console.log(test24);