class Bob{
    constructor(x, y,diameter) {
      var options = {
          'restitution':1,
          'friction':0,
          'density':0.8
      }
      this.body = Matter.Bodies.circle(x, y ,diameter, options);
      this.diameter=diameter;
    // this.setCollider("circle");
      World.add(world, this.body);
    }
    display(){

      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
     ellipseMode(RADIUS);
      fill("pink");
      ellipse(0,0, this.diameter,this.diameter);
      pop();
    }

  };