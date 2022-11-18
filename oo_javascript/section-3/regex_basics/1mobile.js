var reg1 = /^(7|8|9)\d{9}$/ ;
var reg2 = /^[789]\d{9}$/   ;
var reg3 = /^[7-9]\d{9}$/   ;
// reg1, reg2, reg3 are all equal
    //      ^        the string MUST start with either 7 (or) 8 (or) 9
    //      \d{9}    there must be exactly 9 \d characters... \d is nothing but 0-9