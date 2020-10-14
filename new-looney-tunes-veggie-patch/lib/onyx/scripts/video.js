import { Component, Mesh } from './main.js';

let face = new Float32Array([
              // Face
                0.0, 0.0,  0.0,
                1.0, 0.0,  0.0,
                1.0, 1.0,  0.0,
                0.0, 1.0,  0.0,
                0.0, 0.0,  0.0,
                1.0, 1.0,  0.0 
            ]);
            
let textureFace = new Float32Array([
                0, 0, //  left,    top, 
				1, 0, // right,    top, 
				1, 1, // right,  bottom, 
				0, 1, //  left,  bottom, 
				0, 0, //  left,    top, 
				1, 1  // right,  bottom, 
            ]);

export class Video extends Component {
	constructor(src, width = 32, height = 32) {
		super();
		this.width = width;
		this.height = height;
		
		this.unitScale = 1;
		this.centered = false;
		
		this.flipX = false;
		this.flipY = false;

		this.antiAliasing = true;
		
		this.mesh = new Mesh();
		this.mesh.addMaterial("video", face, { uvs: textureFace, texture: src });
		this.mesh.materials[0].textureLoad.then(() => {
		// textureCache.load(image).then((texture)=>{
		// 	this.mesh.materials[0].texture = texture;

			this.mesh.materials[0].texture.flipY = true;

			if(!this.antiAliasing){
				this.mesh.materials[0].texture.magFilter = "NEAREST";
				this.mesh.materials[0].texture.minFilter = "NEAREST";
			}
			
			width = this.width * this.unitScale;
			height = this.height * this.unitScale;
			
			this.mesh.materials[0].vertices[3] = width;
			this.mesh.materials[0].vertices[6] = width;
			this.mesh.materials[0].vertices[15] = width;
			
			this.mesh.materials[0].vertices[7] = height;
			this.mesh.materials[0].vertices[10] = height;
			this.mesh.materials[0].vertices[16] = height;

			if(this.centered){
				this.mesh.materials[0].vertices[0] -= width / 2;
				this.mesh.materials[0].vertices[3] -= width / 2;
				this.mesh.materials[0].vertices[6] -= width / 2;
				this.mesh.materials[0].vertices[9] -= width / 2;
				this.mesh.materials[0].vertices[12] -= width / 2;
				this.mesh.materials[0].vertices[15] -= width / 2;
				
				this.mesh.materials[0].vertices[1] -= height / 2;
				this.mesh.materials[0].vertices[4] -= height / 2;
				this.mesh.materials[0].vertices[7] -= height / 2;
				this.mesh.materials[0].vertices[10] -= height / 2;
				this.mesh.materials[0].vertices[13] -= height / 2;
				this.mesh.materials[0].vertices[16] -= height / 2;
			}
		});
	}
	
	update( entity, deltaTime ){
        
	}
	
	render( entity, camera, viewport ){
		this.mesh.render(entity, camera, viewport);
	}

	/**
	 * Called on every Entity render pick
	 */
	renderPick( entity, camera, viewport, entityId ) {
        this.mesh.renderPick(entity, camera, viewport, entityId);
	}

    play(){
        this.mesh.materials[0].texture.video.play();
    }
}