/*
    (A) extends keyword ---> see ecommerce_ui_lib (or) some angular Repo
    (B) callable signature
    (C) index signatures = allow the interface to have unlimited number of properties
*/
var logger;
var logger_a = (function (message) {
    console.log("logged by callable ===>", message);
});
logger_a.log = function (message) {
    console.log("logged by logFn ===> ", message);
};
logger_a.invokedBy = "gopal23";
logger_a("idi callable dwara print autundi");
logger_a.log("idi log function dwaaara");
console.log("evaru invoke chesaaru ===> ", logger_a.invokedBy);
var data1 = {
    fieldA: "valueA",
    fieldB: "valueB",
    fieldC: "valueC"
};
var data2 = {
    fieldA: "evevo properties",
    club: "RMA",
    manager: "Ancelotti"
};
console.log("keys ===> ", data1.fieldA, data2.club);
