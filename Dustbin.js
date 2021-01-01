class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("sprites/dustbin.png");

    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("white");
      image(this.image,1200,530);
    }
  };