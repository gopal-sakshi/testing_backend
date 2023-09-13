const express = require("express");
const app = express();

app.get("/getfibonacci", (req, res) => {
  const startTime = new Date();
  const result = fibonacci(parseInt(req.query.number))
  const endTime = new Date();
  res.json({
    number: parseInt(req.query.number),
    fibonacci: result,
    time: endTime.getTime() - startTime.getTime() + "ms",
  });
});

const fibonacci = n => {
  if (n <= 1) { return 1 }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

app.listen(7922, () => console.log("listening on port 7922"))

// http://localhost:7922/getfibonacci?number=66
// It'll take lot of time


/*

    NodeJS provides three ways - for time taking requests
    a) child process
        separate memory for each child process (time/resource overhead)
    b) cluster
        scale up a nodeJS application --> instead of singleCore, we use all 6 cores of CPU
        it is built on top of child process
        cluster module, internally child_process.fork()              
    c) worker threads
        difference b/w child process & worker threads === same as difference b/w process & thread


*/