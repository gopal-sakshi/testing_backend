const fs = require('fs')

// fs.writeFileSync('notes.txt', 'I live in Philadelphia')

fs.appendFile('fs_module26_file1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

fs.open('fs_module26_file2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

fs.readFile('notes.txt', function(err, data) {
  console.log('opened notes');
  console.log(data);
})

/*
  Pure JavaScript is Unicode friendly, but it is not so for binary data. 
While dealing with TCP streams or the file system, it's necessary to handle octet streams.
Hence, we use Buffer class

var buf = new Buffer(10);										//create buffer of 10 octets (octet = set of 8 bits)
var buf = new Buffer("Simply Easy Learning", "utf-8");
		//now simply easy learning string is converted into buffer (8 bits wise)
		//utf-8 is the encoding type
buf.write(str1 [, offset] [, length] [, encoding])
	// str1 = the string to be written onto buf
buf.toString([encoding][, start][, end])
	// buf has some data... it is converted into string; this string is the return value of the buf.toString() function
buf.toJSON()
	// converts the data in buffer into JSON format... returns the JSON representation
compare, concatenate, slice buffers ---------> methods available for all those

buf.length;											//returns size of buffer in bytes

------------------------> Buffers - streams - filesystem (just skipped over)

-----------------------------------------------------------------------------------------

*/