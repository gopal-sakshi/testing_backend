function FooWithBar() {
}
(function (FooWithBar) {
    function bar() {
    }
    FooWithBar.bar = bar;
})(FooWithBar || (FooWithBar = {}));
var foo11 = function () {
    console.log("this if FooWithBar Fn");
};
foo11 = function (acceptParam) {
    console.log("hammayya, based on param, ee fn call ayindi le ", acceptParam);
};
foo11.bar = function () {
    console.log("someone invoked barFn");
};
foo11();
foo11(23);
foo11.bar();
