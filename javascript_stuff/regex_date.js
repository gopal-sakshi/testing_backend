let date_regex = /^ ((0 ? [13578] | 10 | 12)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[01]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1}))|(0?[2469]|11)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[0]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1})))$/

/*
    M/D/YY, 
    M/D/YYY, 
    MM/DD/YY, 
    MM/DD/YYYY

*/

process.argv.forEach((item, index) => {
    if(index === 2) {
        validateDate1(item)
    }
})

function validateDate1(dateArgument) {
    console.log(dateArgument);
    if(dateArgument.match(date_regex)) {
        console.log("valid date ");
    }
}