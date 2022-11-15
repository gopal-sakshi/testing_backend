interface salaryObjectIndexSignature {
    [key:string] : number
}
/********************************************* VALID dataTypes *********************/
var sal1:salaryObjectIndexSignature = {
    'salary' : 23000
}

var sal2:salaryObjectIndexSignature = {
    'Salary' : 24000
}

var sal1:salaryObjectIndexSignature = {
    'remuneration' : 20000,
    'bonus' : 5000
}
/******************************************************************/

/********************************************* INVALID dataTypes *********************/
// var sal1:salaryObjectIndexSignature = {
//     'salary' : '24000'
// }
/*****************************************************************/