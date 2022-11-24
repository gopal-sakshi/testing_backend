const replacer23 = (key, value) => {
    if (typeof(value) == "string") {
        return undefined;
      }
      return value;
}

var str23 = {
    foundation: "Mozilla", 
    model: "box", 
    week: 45, 
    transport: "car", 
    month: 7 
};

// var output23 = JSON.stringify(str23, null, 4);
var output23 = JSON.stringify(str23, replacer23, 4);
console.log(output23);


// 2nd param = 
    // replacer function

// 3rd param = 
    // to insert white space into the output JSON string for readability purposes. 
    // If this is a Number, it indicates the number of space characters to use as white space;