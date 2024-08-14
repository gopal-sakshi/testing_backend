var romanToInt = function(s) {
    let convTable = { 'I' : 1, 'V' : 5, 'X' : 10, 'L' : 50, 'C' : 100, 'D' : 500, 'M' : 1000 };
    let number = 0;
    let map23 = new Map();
    map23.set("IV", 4);
    map23.set("IX", 9);
    map23.set("XL", 40);
    map23.set("XC", 90);
    map23.set("CD", 400);
    map23.set("CM", 900);
    let strLen = s.length;
    for (let i = strLen; i >= 0; i-- ) {
        // console.log(`${s[i-1]}${s[i]}`)
        if(map23.has(`${s[i-1]}${s[i]}`)) {
            number = number + map23.get(`${s[i-1]}${s[i]}`);
            s = s.slice()
        }
    }

    // console.log(s[s.length-1])
};

romanToInt("MCMXCIV")