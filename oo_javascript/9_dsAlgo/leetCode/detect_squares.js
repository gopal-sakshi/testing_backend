// SPENT HALF A DAY AND ITS NOT WOKING.....
// MAY BE I STILL NEED MORE TIME, knowledge to do leet code problems

var DetectSquares = function() {
    this.map23 = new Map();
    this.pointsDs = [];
};

DetectSquares.prototype.print23 = function() {
    console.log(this.map23);
}
DetectSquares.prototype.add = function(point) {
    let coordinate = `${point[0]}_${point[1]}`;
    if(this.map23.has(coordinate)) { 
        this.map23.set(coordinate, this.map23.get(coordinate) + 1)
    } else {
        this.map23.set(coordinate, 1);
        !this.pointsDs.includes(point) ? this.pointsDs.push(point) : '';
    }
    // console.log("map23 ====> ", this.map23, [...this.map23.keys()]);
};

DetectSquares.prototype.calculateSquare = function(point1, point2, point3, point4) {
    // point1 = queryPoint... wont be in the MAP
    // console.log('rcvd point ===> ', point1, point2, point3, point4)
    if(this.map23.has(`${point2[0]}_${point2[1]}`) && 
        this.map23.has(`${point3[0]}_${point3[1]}`) &&
        this.map23.has(`${point4[0]}_${point4[1]}`) ) {
            // all 4 points present in Map... calculate count
            let score = this.map23.get(`${point2[0]}_${point2[1]}`) * this.map23.get(`${point3[0]}_${point3[1]}`) * this.map23.get(`${point4[0]}_${point4[1]}`);
            // console.log("score ===> for point1 ===>", score, point1);
            return score
    } else {
        return 0
    }
}

// [ [3, 10] , [11, 2] , [3, 2] , [14, 8] ]      [11, 10]; [6,10]
DetectSquares.prototype.count = function(point) {
    let count23 = 0; let c1 = 0; let c2 = 0; let pointsDs = this.pointsDs;
    // console.log("processing point ====> ", point)
    // console.log("pointsDs ====> ", pointsDs)
    if(!pointsDs.includes(point)) {
        for(let i=0; i<pointsDs.length; i++) {
            // console.log("point elem ===> ", point)
            if( pointsDs[i][0] == point[0]) {
                let sideLen = Math.abs(pointsDs[i][1] - point[1]);                
                count23 = count23 + this.calculateSquare(point, pointsDs[i], [point[0] + sideLen, point[1]], [point[0] + sideLen, pointsDs[i][1]]);
                count23 = count23 + this.calculateSquare(point, pointsDs[i], [point[0] - sideLen, point[1]], [point[0] - sideLen, pointsDs[i][1]]);
            } else if(pointsDs[i][1] == point[1]) {  // point[0] = 6; point[1] = 10; 
                let sideLen = Math.abs(pointsDs[i][0] - point[0]);                
                count23 = count23 + this.calculateSquare(point, pointsDs[i], [point[0], point[1] + sideLen], [pointsDs[i][0], point[1] + sideLen]);
                count23 = count23 + this.calculateSquare(point, pointsDs[i], [pointsDs[i][0], point[1] - sideLen], [point[0], point[1] - sideLen]);
            }
        }
        // console.log("after for loop ===> ", c1, c2)
        return count23
    } else {
        // query point already exists in pointsDs
        return null
    }
};


var obj = new DetectSquares();
/*
    obj.add([3,10]);
    obj.add([11,2]);
    obj.add([3,2]);
    console.log("1st count ===> ", obj.count([11,10]));
    obj.count([14,8]);
    obj.add([11,2]);
    console.log("2nd count ===> ", obj.count([11,10]));
*/

let arr23 = [
    [[419,351], [798,351], [798,730], [419,730]],
    [[998,1], [0,999], [998,999], [0,1]],
    [[226,561], [269,561],[226,604],[269,604]],
    [[200,274],[200,793],[719,793],[719,274]],
    [[995,99],[146,948],[146,99],[995,948]],
    [[420,16],[962,558],[420,558],[962,16]],
    [[217,833],[945,105],[217,105],[945,833]],
    [[26,977], [26,7],[996,7],[996,977]],
    [[96,38], [96,483],[541,483], [541,38]],
    [[38,924], [961,1],[961,924],[38,1]],
    [[438,609],[818,609],[818,229],[438,229]]
]


let arr = [
    [[5,10],[10,5],[10,10],[5,5]],
    [[3,0],[8,0],[8,5],[3,5]],
    [[9,0],[9,8],[1,8],[1,0]],
    [[0,0],[8,0],[8,8],[0,8]],
    [[1,9],[2,9],[2,10],[1,10]],
    [[7,8],[2,3],[2,8],[7,3]],
    [[9,10],[9,5],[4,5],[4,10]],
    [[0,9],[4,5],[4,9],[0,5]],
    [[1,10],[10,1],[10,10],[1,1]],
    [[10,0],[2,0],[2,8],[10,8]],
    [[7,6],[4,6],[4,9],[7,9]],
    [[10,9],[10,0],[1,0],[1,9]],
    [[0,9],[8,1],[0,1],[8,9]],
    [[3,9],[10,9],[3,2],[10,2]],
]
for(let i=0; i<=13; i++) {
    obj.add(arr[i][0]);
    obj.add(arr[i][1]);
    obj.add(arr[i][2]);
    // obj.count(arr[i][3]);
    console.log("count for point ===> ", arr[i][3], obj.count(arr[i][3]));
}
// console.log(obj.print23())


// count for point ===>  [ 1, 9 ] 2         5
// count for point ===>  [ 8, 9 ] 4         6
// count for point ===>  [ 10, 2 ] 2        2
