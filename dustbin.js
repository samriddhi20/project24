class Dustbin{
constructor(x,y,width,height){
var options={
isStatic:false,
friction:0.5
}
this.body = Bodies.rectangle(x,y,width,height)
this.width = width;
this.height = height;
World.add(world, this.body);
}
display(){
 var pos =this.body.position;
rectMode(CENTER);
fill("yellow");
rect(pos.x, pos.y, this.width, this.height);
}
}