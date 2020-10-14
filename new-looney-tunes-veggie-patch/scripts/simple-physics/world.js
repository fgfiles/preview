import * as Onyx from '../../lib/onyx/scripts/main.js';

import SimplePhysicsBody2D from './body.js';

let _entities = [];

export default class SimplePhysicsWorld2D extends Onyx.Component {
	constructor({ gravity = 1.0, bounds = {left: -Infinity, right: Infinity, top: Infinity, bottom: -Infinity}}) {
		super();
		
		this.gravity = gravity;
		this.bounds = bounds;
	}
  
  	update( deltaTime, scene ) {
		super.update(...arguments);
		
		// Copy entities in case one is deleting during run
		_entities = [...scene.entities];

		for(var entityA of _entities){
			// let bodyA = entityA.componentMap.get(SimplePhysicsBody2D);
			let bodyA = entityA.body;
			if(!bodyA || !bodyA.enabled || !entityA.enabled) continue;
			
			this.applyGravity(bodyA);

			// Apply velocity to transform
			bodyA.applyVelocity();
			
			// Check collisions with floor
			if(bodyA.limitedToWorld && bodyA.velocity[1] <= 0 && entityA.transform.y + bodyA.bottom < this.bounds.bottom){

				// Throw event
				// entityA.emit('floor');
				if(!bodyA.onHitFloor && bodyA.velocity[1]){
					bodyA.isOnFloor = true;
					entityA.onHitFloor({bodyA: bodyA, entityA: entityA});
				}

				// Ricochet
				entityA.transform.y = this.bounds.bottom - bodyA.bottom;
				bodyA.velocity[1] = -bodyA.velocity[1] * bodyA.restitution; 

				// Friction
				bodyA.velocity[0] *= bodyA.friction;
				
			// Check collisions with floor
			}else if(bodyA.velocity[1] <= 0 && entityA.transform.y + bodyA.bottom < bodyA.bounds.bottom){
				// Throw event
				// entityA.emit('floor');
				if(!bodyA.onHitFloor && bodyA.velocity[1]){
					bodyA.isOnFloor = true;
					entityA.onHitFloor({bodyA: bodyA, entityA: entityA});
				}

				// Ricochet
				entityA.transform.y = bodyA.bounds.bottom - bodyA.bottom;
				bodyA.velocity[1] = -bodyA.velocity[1] * bodyA.restitution; 

				// Friction
				bodyA.velocity[0] *= bodyA.friction;
			}else{
				bodyA.isOnFloor = false;
			}

			// Check collisions with outer bounds
			if(bodyA.limitedToWorld && entityA.transform.x + bodyA.left < this.bounds.left){
				entityA.transform.x = this.bounds.left - bodyA.left;
				bodyA.velocity[0] = -bodyA.velocity[0] * bodyA.restitution;
			}else if(bodyA.limitedToWorld && entityA.transform.x + (bodyA.width + bodyA.left) > this.bounds.right){
				entityA.transform.x = this.bounds.right - (bodyA.width + bodyA.left);
				bodyA.velocity[0] = -bodyA.velocity[0] * bodyA.restitution;
			}
            
            // Check against other bodies
            for(var entityB of _entities){
                if(entityA === entityB || !entityB.enabled) continue;
                
                // let bodyB = entityB.componentMap.get(SimplePhysicsBody2D);
				let bodyB = entityB.body;
                if(!bodyB || !bodyB.enabled) continue;
                
                if(bodyA.collidable && bodyB.collidable && this.boxCollision(entityA.transform.x + bodyA.left, entityA.transform.y + bodyA.bottom, bodyA.width, bodyA.height, entityB.transform.x + bodyB.left, entityB.transform.y + bodyB.bottom, bodyB.width, bodyB.height)){
					let event = {
						entityA: entityA, 
						entityB: entityB, 
						bodyA: bodyA, 
						bodyB: bodyB,
						world: this,
						direction: {}
					};

					// Collision
					if(bodyA.solidBody && bodyB.solidBody && typeof entityA.transformPreviousFrame !== "undefined" && typeof entityB.transformPreviousFrame !== "undefined" && entityA.transformPreviousFrame && entityB.transformPreviousFrame){
						event.direction = this.getCollisionDirection(event);

						if(!bodyA.isSensor && !bodyB.isSensor){
							// Ricochet
							if(event.direction.left || event.direction.right) bodyA.velocity[0] = -bodyA.velocity[0] * bodyA.restitution;
							if(event.direction.top || event.direction.bottom) bodyA.velocity[1] = -bodyA.velocity[1] * bodyA.restitution;

							// Friction
							if(event.direction.left || event.direction.right) bodyA.velocity[0] *= bodyA.friction;;
							if(event.direction.top || event.direction.bottom) bodyA.velocity[1] *= bodyA.friction;;

							// Push out
							if(event.direction.left || event.direction.right){
								if(entityA.transform.x + bodyA.left + (bodyA.width / 2) > entityB.transform.x + bodyB.left + (bodyB.width / 2)){
									entityA.transform.x = (entityB.transform.x + bodyB.left + bodyB.width) - (bodyA.left); 
								}else if(entityA.transform.x + bodyA.left + (bodyA.width / 2) < entityB.transform.x + bodyB.left + (bodyB.width / 2)){
									entityA.transform.x = (entityB.transform.x + bodyB.left) - (bodyA.left + bodyA.width); 
								}
							}
							if(event.direction.top || event.direction.bottom){
								if(entityA.transform.y + bodyA.bottom + (bodyA.height / 2) > entityB.transform.y + bodyB.bottom + (bodyB.height / 2)){
									entityA.transform.y = (entityB.transform.y + bodyB.bottom + bodyB.height) - (bodyA.bottom); 
								}else if(entityA.transform.y + bodyA.bottom + (bodyA.height / 2) < entityB.transform.y + bodyB.bottom + (bodyB.height / 2)){
									entityA.transform.y = (entityB.transform.y + bodyB.bottom) - (bodyA.bottom + bodyA.height); 
								}
							}
						}
					}

					// entityA.emit('collision', event);
					if(entityA.onCollide) entityA.onCollide.bind(entityA)(event, entityB);
					if(entityB.onCollide) entityB.onCollide.bind(entityB)(event, entityA);
                }
            }
		}
		 
	}
	
	applyGravity( body ){
		if(body.solidBody) body.applyForce(0, -this.gravity * body.gravityScale );
	}
    
    boxCollision(aPosX, aPosY, aWidth, aHeight, bPosX, bPosY, bWidth, bHeight){
       	return !((aPosY + aHeight) <=  bPosY
       	|| aPosY >= (bPosY + bHeight)
       	|| aPosX >= (bPosX + bWidth)
       	|| (aPosX + aWidth) <= bPosX);
	}

	getCollisionDirection(event){
		// TODO: Is this solving only after collision?
		
		return {
			/*
			left: oldBoxRight < otherObj.Left && // was not colliding
					boxRight >= otherObj.Left,
			right: oldBoxLeft >= otherObj.Right && // was not colliding
					boxLeft < otherObj.Right,
			top: oldBoxBottom < otherObj.Top && // was not colliding
					boxBottom >= otherObj.Top,
			bottom: oldBoxTop >= otherObj.Bottom && // was not colliding
					boxTop < otherObj.Bottom 
			*/
			left: event.entityA.transformPreviousFrame.x + event.bodyA.left + event.bodyA.width <= event.entityB.transform.x + event.bodyB.left && // was not colliding
					event.entityA.transform.x + event.bodyA.left + event.bodyA.width > event.entityB.transform.x + event.bodyB.left,
			right: event.entityA.transformPreviousFrame.x + event.bodyA.left > event.entityB.transform.x + event.bodyB.left + event.bodyB.width && // was not colliding
					event.entityA.transform.x + event.bodyA.left <= event.entityB.transform.x + event.bodyB.left + event.bodyB.width,
			top: event.entityA.transformPreviousFrame.y + event.bodyA.bottom >= event.entityB.transform.y + event.bodyB.bottom + event.bodyB.height && // was not colliding
					event.entityA.transform.y + event.bodyA.bottom < event.entityB.transform.y + event.bodyB.bottom + event.bodyB.height,
			bottom: event.entityA.transformPreviousFrame.y + event.bodyA.bottom + event.bodyA.height < event.entityB.transform.y + event.bodyB.bottom && // was not colliding
					event.entityA.transform.y + event.bodyA.bottom + event.bodyA.height >= event.entityB.transform.y + event.bodyB.bottom
		}
	}
}