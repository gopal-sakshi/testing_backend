function myArray23() {
    languages23 = ["JS", "C++", "Python"];                //  created @ global level
    var jobs24 = ["Testing", "developer", "Architect"];          // bcoz we used var keyword... its function-scoped
                                                                // its not created @ global level
    {
        console.log('value of jobs24 inside a block ==> ', jobs24);     // CAN access "var" variable in another block
    }

}
myArray23();
console.log(languages23);
// console.log(jobs24);                 // ERROR: jobs24 is not defined