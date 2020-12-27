class Paper {
    constructor(x,y,radius){
    var options = {
        isStatic : true,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2
    };
    this.body = Bodies.circle(x,y,radius,options); 
    this.radius = radius;
    Matter.World.add(world22, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        ellipse(pos.x,pos.y,this.radius);
        pop();
    }
}