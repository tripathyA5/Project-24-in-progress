class Paper {
    constructor(x,y,r){
    var options={
        restitution:0.3,
        fricton:0.5,
        density:1.2,
        isStatic:false
        
    }
    this.r=r;
    this.body=Bodies.circle(x,y,this.r,options);
    World.add(world,this.body);
    }
    display(){
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
    }

}