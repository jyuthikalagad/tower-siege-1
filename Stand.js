class Stand{
    constructor(x,y,width,height){
        var options ={
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,heigt,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.positions.x,this.body.positions.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}