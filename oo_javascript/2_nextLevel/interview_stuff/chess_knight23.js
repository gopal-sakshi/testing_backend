var knightPosition = process.argv[2];                                               // node chess_knight23.js a1
var xAxis = knightPosition?.substring(0,1).charCodeAt(0) - 96;
var yAxis = parseInt(knightPosition?.substring(1,2));
if(xAxis > 8 || xAxis < 0 || yAxis > 8 || yAxis < 0 || !xAxis || !yAxis) {
    console.log('wrong input, exiting'); process.exit(1)
}
// console.log(xAxis, '_', yAxis);             // 74

// find all possible knight moves
var blah = [
    {x:2, y:1}, {x:2, y:-1}, {x:-2, y:1}, {x:-2, y:-1},             // move two squares along x-axis
    {x:1, y:2}, {x:1, y:-2}, {x:-1, y:2}, {x:-1, y:-2}              // move two squares along y-axis
]
var allKnightPositions = [];
for(var i=0; i<8; i++) {
    var newPosition = {x: xAxis+blah[i].x, y: yAxis+blah[i].y}
    allKnightPositions.push(newPosition);
}
// console.log(allKnightPositions);

// find valid chess positions
var validKnightMoves = [];              // e5
for(i=0; i<8; i++) {
    if(
        allKnightPositions[i].x <= 8 && allKnightPositions[i].x > 0 &&
        allKnightPositions[i].y <= 8 && allKnightPositions[i].y > 0
    ) {
        // console.log(allKnightPositions[i]);
        var xPosition = String.fromCharCode(96 + parseInt(allKnightPositions[i].x));
        var yPosition = (allKnightPositions[i].y);
        var chessPosition = `${xPosition}${yPosition}`;        
        validKnightMoves.push(chessPosition);
    }
}
console.log(validKnightMoves);

