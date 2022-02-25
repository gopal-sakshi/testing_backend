var blah23 = /** @class */ (function () {
    // private fullName2 = `sakshi_${this.name1}_${this.name2}`;
    function blah23(name2) {
        if (name2 === void 0) { name2 = 'krishna'; }
        this.name2 = name2;
        this.name1 = 'hgjhgj';
        this.fullName3 = "";
        this.name1 = "gopal";
        this.fullName3 = "sakshi_" + this.name1 + "_" + this.name2;
    }
    blah23.prototype.getName = function () {
        var fullName1 = "sakshi_" + this.name1 + "_" + this.name2;
        console.log(this.fullName3);
        // console.log(this.name1)
        return fullName1;
        // console.log(this.fullName2);
    };
    return blah23;
}());
var b1 = new blah23();
b1.getName();
