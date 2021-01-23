class Icon {
    constructor(x,y,width,height){
      this.image = loadImage("icon.png");
      this.width = width;
      this.height = height;
    }
    display(){
      imageMode(CENTER);
      image(this.image,420,40,50,50)
    }
  }