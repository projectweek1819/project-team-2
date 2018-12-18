var rows = 10;
var cols = 10;

function make2DArray(cols, rows){
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++){
    arr[i] = new Array(rows);
  }
  return arr;
}

function setup() {
  let w = width/rows;
  createCanvas(400,400);
  gems = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++){
    for (let j = 0; j < rows; j++){
      gems[i][j] = rect(i*w, j*w, w, w);
    }
  }
}

function draw() {
  for (let i = 0; i < cols; i++){
    for (let j = 0; j < rows; j++){
      var c = color(255,204,0);
      fill(c);
      stroke(51);
      gems[i][j];
    }
  }
}
