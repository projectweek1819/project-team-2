function gem(color) {
  this.color = color;

  this.show = function(x,y){
    fill(color);
    ellipse(x,y,30,30);
  }
}
