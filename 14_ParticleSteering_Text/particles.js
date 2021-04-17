function particles(x,y){
this.pos= createVector(random(width), random(height));
this.target= createVector(x,y);
this.vel=  p5.Vector.random2D();
this.acc= createVector();
this.r= 5;
// this.val = slider.value();
this.maxSpeed= 2;
this.maxForce= 0.1;
}

particles.prototype.behaviors= function(){
    var seek= this.seek(this.target);
    this.applyForce(seek);
}
particles.prototype.applyForce= function(f){
    this.acc.add(f);
}
particles.prototype.arrive= function(){
    var desired= p5.Vector.sub(this.target,this.pos);
    var dsiatnce = desired.mag();
    var speed= this.maxSpeed;
    if(d<100){
        var speed= map(d,0,100,0,this.maxSpeed);
    }
    desired.setMag(speed);
    // desired.setMag(this.maxSpeed);
    var steer= p5.Vector.sub(desired,this.vel);
    steer.limit(this.maxForce);
    return steer;
}

particles.prototype.seek= function(){
    var desired= p5.Vector.sub(this.target,this.pos);
    desired.setMag(this.maxSpeed);
    var steer= p5.Vector.sub(desired,this.vel);
    steer.limit(this.maxForce);
    return steer;
}
particles.prototype.update= function(){
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
}

particles.prototype.show= function(){
    stroke(0,255,0);
    strokeWeight(10);
    point(this.pos.x,this.pos.y);
}

