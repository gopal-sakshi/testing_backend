var array23 = ["gopal", "hello", "subbarao", "apparao"]

array23.forEach((element, index) => {    
    console.log(element);
    if(element == "subbarao") {
        process.exit(1);
    }
})