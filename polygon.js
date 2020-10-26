class Polygon{
    constructor(x,y,w,h){
        this.body = Bodies.rectangle(x,y,w,h);
        World.add(world, this.body);
        this.w = w;
        this.h = h;
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle);
        translate(pos.x,pos.y)
        fill("#fef102");
        circle(0,0,this.w,this.h)
        pop();
    }
}