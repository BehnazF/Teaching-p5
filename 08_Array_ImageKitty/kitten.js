class kittens{
    constructor(x,y,r,ang){
        this.x=x;
        this.y=y;
        this.r=r;
        this.speedx= random (0,5);
        this.speedy= random (2,8);
        let v = createVector(10.0, 20.0);
        // this.ang= v.rotate(HALF_PI);
    }

    display(){
        fill(255,255,0, random(50,150));
        noStroke();
        // ellipse(this.x, this.y, this.r,this.r);
        // translate(windowWidth/2,windowHeight/2);
        // this.ang =(HALF_PI/20);
        // let c = cos(this.ang);
        // rotate(c);
        image(Kitty,this.x,this.y,this.r,this.r);
    }

    move(){
        this.x += this.speedx;
        this.y += this.speedy;

        if(this.x >width || this.x< 0){
            this.speedx = - this.speedx;
        }
        if (this.y> height || this.y<0){
            this.speedy = - this.speedy;
        }
    }



}