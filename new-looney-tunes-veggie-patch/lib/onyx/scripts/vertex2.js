export class Vertex2 {
	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}

	set (arr = []){
		this.x = arr[0] || 0;
		this.y = arr[1] || 0;
	}
	
	copy (vertex2){
		if(!vertex2){
			vertex2 = new Vertex2(this.x, this.y);
		}else{
			vertex2.x = vertex2.x;
			vertex2.y = vertex2.y;
		}

		return vertex2;
	}
}