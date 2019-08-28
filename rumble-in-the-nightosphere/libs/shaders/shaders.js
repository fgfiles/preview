function GameBoy() {
	var vertexShader = null;
	var fragmentShader = shaders.gameboy;
  PIXI.Filter.call(this,
		vertexShader,
		fragmentShader
	);
	this.pixelSize = 3.;
}
GameBoy.prototype = Object.create(PIXI.Filter.prototype);
GameBoy.prototype.constructor = GameBoy;
Object.defineProperties(GameBoy.prototype, {
    pixelSize: {
        get: function ()
        {
            return this.uniforms.pixelSize;
        },
        set: function (value)
        {
            this.uniforms.pixelSize = value;
        }
    }
})



function Bloom() {
    var vertexShader = null;
    var fragmentShader = shaders.bloom;
  PIXI.Filter.call(this,
        vertexShader,
        fragmentShader
    );
}
Bloom.prototype = Object.create(PIXI.Filter.prototype);
Bloom.prototype.constructor = Bloom;