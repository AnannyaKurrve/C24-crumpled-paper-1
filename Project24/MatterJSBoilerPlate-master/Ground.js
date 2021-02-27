class Paper
{
    constructor(x,y,w,h)
    {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.body=Bodies.circle(x,y,w,h,options);
        World.add(world,this.body);
    }
    display()
    {
        var groundpos=this.body.position;
        push()
        translate(paperpos.x, paperpos.y);
        rectMode(CENTRE)
        strokeweight(4);
        fill(255,255,0)
        rect(0,0,this.w,this.h);
        pop()
    }
}