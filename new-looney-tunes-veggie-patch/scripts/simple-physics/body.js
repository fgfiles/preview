import * as Onyx from '../../lib/onyx/scripts/main.js';

export default class SimplePhysicsBody2D extends Onyx.Component {
	constructor({width = 128, height = 128, gravityScale = 2, restitution = 0.5, friction = 0.25, terminalVelocity = 100.0, limitedToWorld = true, collidable = true, solidBody = true, isSensor = false, bounds = {left: -Infinity, right: Infinity, top: Infinity, bottom: -Infinity}}) {
		super();
		
		this.gravityScale = gravityScale;
		this.terminalVelocity = terminalVelocity;
		this.velocity = [0,0,0];
		this.collidable = collidable; // Can collide with other solids?
		this.restitution = restitution;
		this.friction = friction;
		this.solidBody = solidBody;
		this.isSensor = isSensor;
        
        this.width = width;
        this.height = height;
		
		this.bottom = 0;
		this.left = 0;
		
		this.bounds = bounds;
		this.limitedToWorld = limitedToWorld;

		this.transformPreviousFrame = null;

		// TODO: This is hacky
		this.parentEntity = null;
	}
  
  	update( deltaTime, scene, entity ) {
		super.update(...arguments);

		if(!this.enabled) return;
		
		// Capture previous position for physics
		entity.transformPreviousFrame = {x: entity.transform.x, y: entity.transform.y, z: entity.transform.z}; // TODO: Is there a lighter way to do this?

		this.parentEntity = entity;
	}
	
	applyForce( x = 0, y = 0, z = 0 ) {
		this.velocity[0] += x;
		this.velocity[1] += y;
		this.velocity[2] += z;
	}
	
	applyImpulse( x = 0, y = 0, z = 0 ){
		// p = F * s (where p is the change of impulse, F a force and s the time, here dt)
	}

	applyVelocity(){
		// Limit velocity
		if(Math.abs(this.velocity[0]) > this.terminalVelocity) this.velocity[0] = this.terminalVelocity * ((this.velocity[0] < 0)?-1:1);
		if(Math.abs(this.velocity[1]) > this.terminalVelocity) this.velocity[1] = this.terminalVelocity * ((this.velocity[1] < 0)?-1:1);
		if(Math.abs(this.velocity[2]) > this.terminalVelocity) this.velocity[2] = this.terminalVelocity * ((this.velocity[2] < 0)?-1:1);

		// Apply velocity
		if(this.parentEntity){
			this.parentEntity.transform.x += this.velocity[0];
			this.parentEntity.transform.y += this.velocity[1];
			this.parentEntity.transform.z += this.velocity[2];
		}
	}
	
	setVelocity( x, y, z ){
		if(x == undefined) x = this.velocity[0];
		if(y == undefined) y = this.velocity[1];
		if(z == undefined) z = this.velocity[2];
		
		this.velocity = [x,y,z];
	}
}