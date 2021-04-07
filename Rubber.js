class Rubber {
	constructor(x, y) {
	  var options = {
		'density':1,
		'friction': 5,
		'restitution':0.3
	  };
	  this.body = Bodies.circle(200,100,20);
	  World.add(world, this.body);
	};
	display(){
	  var pos = this.body.position;
	  var angle = this.body.angle;
  
	  push();
	  fill('white')
	  ellipseMode(RADIUS)
	  ellipse(this.body.position.x,this.body.position.y,20,20)
	  pop();
	};

}
