const fs = require("fs");

fs.readFile("./__nobelWinners.json", "utf8", (err, response) => {
  if (err) {
    console.error(err);
    return;
  }
  const data = JSON.parse(response);
  console.log(data.prizes.length);
  for (prize of data.prizes) {
    if(!prize.laureates) {
      console.log(prize);
      break;
    }
  }
});


