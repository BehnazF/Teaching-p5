class balls{
    constructor(x,y,r){
        this.x=x;
        this.y=y;
        this.r=r;
        this.speedx= random (0,5);
        this.speedy= random (2,8);
    
    }

    display(){
        fill(255,255,0, random(50,150));
        noStroke();
        ellipse(this.x, this.y, this.r,this.r);
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