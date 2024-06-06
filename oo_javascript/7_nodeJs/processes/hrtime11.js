// find the execution time of async function using hrtime

var start_time = process.hrtime.bigint(); 
console.log("startTime23 ====> ", start_time); 


setTimeout(function () {
	var end_time = process.hrtime.bigint(); 
	console.log("endtime && timetaken23 ====> ", end_time, end_time - start_time); 
}, 2000); 
