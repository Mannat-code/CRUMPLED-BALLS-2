class dustbin
{
    constructor(x,y,width,height)
    {
        var option={
            isStatic:true
        }
        this.dustbinObject=Bodies.rectangle(x,y,width,height,option);
        this.image = loadImage("images/dustbingreen.png")
        World.add(world,this.dustbinObject);
        this.width=width;
        this.height=height;
    }

    display()
    {
       

        imageMode(CENTER);
        image(this.image,this.dustbinObject.position.x,this.dustbinObject.position.y,this.width,this.height);

    }
}