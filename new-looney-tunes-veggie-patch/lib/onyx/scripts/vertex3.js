import { Vertex2 } from './main.js';

export class Vertex3 extends Vertex2 {
	constructor(x = 0, y = 0, z = 0) {
		super(x, y);
		
		this.z = z;
	}
	
	set (arr = []){
		this.x = arr[0] || 0;
		this.y = arr[1] || 0;
		this.z = arr[2] || 0;
	}
	
	copy (vertex3){
		if(!vertex3){
			vertex3 = new Vertex3(this.x, this.y, this.z);
		}else{
			vertex3.x = vertex3.x;
			vertex3.y = vertex3.y;
			vertex3.z = vertex3.z;
		}

		return vertex3;
	}
}