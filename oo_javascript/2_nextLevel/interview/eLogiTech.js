var rows_columns;
var col_width; 
var row_width; 
var area_zero = 0;
var area_one = 0;
var area_two = 0;

var n1 = 100000;
var n2 = 10000;

process.stdin.on('data', (data) => {
    var lines = data.toString().split('\r\n');
    rows_columns = parseInt(lines[0]);
    col_width = Array.from(lines[1].replace(/ /g, '')).map(x => parseInt(x));
    col_width.unshift(0);
    row_width = Array.from(lines[2].replace(/ /g, '')).map(x => parseInt(x));
    row_width.unshift(0);
    findAreas();
});

function findAreas() {    
    for (var i=1; i<=rows_columns; i++) {
        for (var j=1; j<=rows_columns; j++) {
            if((i+j) % 3 == 0) { area_zero = area_zero + col_width[i] * row_width[j]; }
            else if ((i+j) % 3 == 1) { area_one = area_one + col_width[i] * row_width[j]; }
            else if ((i+j) % 3 == 2) { area_two = area_two + col_width[i] * row_width[j]; }
        }
    }
    console.log(area_zero, area_one, area_two);    
}