const fs = require("fs");

fs.readFile("./__englishMovies.json", "utf8", (err, response) => {
  if (err) {
    console.error(err);
    return;
  }
  const data = JSON.parse(response);
  console.log(data.length);
});


// https://awesomeopensource.com/