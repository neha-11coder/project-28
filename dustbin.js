class Dustbin{

    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,200,200,options);
        this.width=200;
        this.height=200;
        this.image=loadImage("images/dustbin.png");
        World.add(world,this.body);
    }
    display(){
    var pos=this.body.position;
    rectMode(CENTER);
    //fill ("black")
    //rect(pos.x,pos.y,this.width,this.height)
    //rect(700,320,20,200);
    //rect(900,320,20,200);
    imageMode(CENTER);
    
    image( this.image,1200,280,this.width,this.height);
}
}