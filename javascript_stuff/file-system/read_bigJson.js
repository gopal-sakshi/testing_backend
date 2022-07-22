const fs = require("fs");

// readFile() method is asynchronous
    // meaning, NodeJS will continue to execute your JavaScript code without waiting for the read process to finish.
fs.readFile("./__corrupt_rfq.json", "utf8", (err, response) => {
  if (err) {
    console.error(err);
    return;
  }
  const data = JSON.parse(response);
  console.log(data.quotations.length);
});
console.log('readfile is async... so, I get printed first');