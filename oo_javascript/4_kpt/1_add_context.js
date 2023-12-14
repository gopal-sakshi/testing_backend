// add context as extra parameter, so callback can be moved out

var fs = require("fs");

function readFileAsJson(r, e) {
	fs.readFile(r, "utf8", (function naPeruCb (r, f) {
		if (r) return e(r);
		try {
			var n = JSON.parse(f);
			e(null, n)
		} catch (r) {
			e(r)
		}
	}))
}

readFileAsJson('./1_input23.txt', (err, data) => {
    console.log(data);
});

/*
    Here the callback passed to fs.readFile is called naPeruCb
    It cannot be moved out of readFileAsJson as it is creating a closure over the unique variable callback
    What bluebird did is ======> usage of an explicit plain object to hold contextual data. 
*/

// // Create a new API/package/library -----> fs-modified
                // var fs = require("fs-modified");

                // function internalReadFileCallback(e, i) {
                // 	if (e) return this(e);
                // 	try {
                // 		this(null, JSON.parse(i))
                // 	} catch (e) {
                // 		this(e)
                // 	}
                // }

// function readFileAsJson(e, i) {
// 	fs.readFile(e, "utf8", internalReadFileCallback, i)
// }