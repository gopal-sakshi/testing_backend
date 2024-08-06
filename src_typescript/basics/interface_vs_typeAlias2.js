var name34 = "Gopal";
var p23 = { x: 8, y: 4 };
// TS - Union ---> Variable text23 can now be either string or string array
function print23(text23) {
    if (typeof text23 === 'string') {
        return text23;
    }
    return text23.join('__');
}
console.log("text ip ====> ", print23("GopAL"));
console.log("array ip ===> ", print23(["i", "like", "madrid"]));
/*************************************************************************************/ 
