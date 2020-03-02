var Particle = function (image, x, y, xVel, yVel, drag, shrink, gravity, fade, spin) {
  PIXI.Container.call(this);

  this.image = CC.Utility.pixiAtlasSprite(image);
  this.addChild(this.image);

  if (shrink > 0) {
    this.scale.x = this.scale.y = 1.5;
  }

  this.x = x;
  this.y = y;

  this.vel = new Vector2(xVel, yVel);
  this.drag = drag;
  this.shrink = shrink;

  this.gravity = gravity;
  this.fade = fade;
  this.spin = spin;
};

Particle.prototype = Object.create(PIXI.Container.prototype);
Particle.prototype.constructor = Particle;

Particle.prototype.update = function () {	
  // simulate drag
  this.vel.x *= this.drag; 
  this.vel.y *= this.drag;
  
  // add gravity force to the y velocity 
  this.vel.y += this.gravity; 
  
  // and the velocity to the position
  this.x += this.vel.x;
  this.y += this.vel.y; 
  
  // shrink the particle
  this.scale.x *= this.shrink;
  this.scale.y *= this.shrink;
  
  // and fade it out
  this.alpha *= this.fade; 	
  if(this.alpha<0) this.alpha = 0; 
  
  // rotate the particle by the spin amount. 
  this.rotation += this.spin; 
}
