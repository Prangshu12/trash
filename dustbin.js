class dustbin
{ 
    constructor(x,y,)
    { 
    var options={ 
        isStatic:true			
    }
        this.x=x;
		this.y=y;
        this.image=loadImage("dustbingreen.png");
        this.body=Bodies.rectangle(x, y,options);
        World.add(world, this.body);
    }
 
 display()
   {		
    var dustbinpos =this.body.position;		
    push()
    translate(dustbinpos.x, dustbinpos.y);
    rectMode(CENTER)
    //strokeWeight(4);
    fill(255,0,255)
    imageMode(CENTER);
    image(this.image, 1356,500)
    //ellipse(0,0,this.r, this.r);
    pop()
    }
}