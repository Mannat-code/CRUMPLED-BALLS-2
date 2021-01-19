class paper
{
    constructor(x,y,r)
    {
        var options=
        {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options);
        this.image = loadImage("images/paper.png")
        World.add(world,this.body);
        
     
        
    }

    display()
    {
        var paperpos=this.body.position;
        push();
        translate(paperpos.x,paperpos.y);
        imageMode(RADIUS);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}