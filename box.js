class Boxes{
    constructor(x,y,w,h){
        var options={
            isStatic: false
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.w = w;
        this.h = h;


    }
    show(){
        var posA = this.body.position;
        fill(255);
        rect(posA.x,posA.y,this.w,this.h);
    }
}