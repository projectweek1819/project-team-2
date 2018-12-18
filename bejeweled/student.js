// Schrijf hier je code
function width(grid){
  return grid[0].length;
}

function height(grid){
  return grid.length;
}

function isInside(grid, position){
  return position.x >= 0 && position.x <= grid.length;
}

function swap(grid, p, q){
  let temp = grid[p.y][p.x];
  grid[p.y][p.x] = grid[q.y][q.x];
  grid[q.y][q.x] = temp;
}

function horizontalChainAt(grid, position){
  let count = 0;
  for(let i = 0; i !== grid[0].length; i++){
    if(grid[position.y][position.x] === grid[position.y][i]){
      count++;
    }
  }
  return count;
}

function verticalChainAt(grid, position){
  let count = 0;
  for(let i = 0; i !== grid.length; i++){
    if(grid[position.y][position.x] === grid[i][position.x]){
      count++;
    }
  }
  return count;
}
