import { mat4, vec3, vec4 } from '../lib/gl-matrix-master/src/gl-matrix.js';
import { Transform } from './main.js';

let tMatrix = mat4.create();

let _id = 0;

export class Component {
	constructor({ id = "Component_" + (_id++), enabled = true, transform = new Transform(), visible = true } = {}){
		this.id = id;
		this.enabled = enabled;
		this.transform = transform;
		this.visible = visible;
	}
	
	update(dt, scene, entity){
		
	}
	
	render(dt, scene, viewport, camera, stack, viewMatrix, modelMatrix, materialOverride){
		
	}
}