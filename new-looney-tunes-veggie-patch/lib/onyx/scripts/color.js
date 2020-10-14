export class Color {
	get red(){ return this.color[0] }
	get green(){ return this.color[1] }
	get blue(){ return this.color[2] }
	get alpha(){ return this.color[3] }
	set red(val){ return this.color[0] = val }
	set green(val){ return this.color[1] = val }
	set blue(val){ return this.color[2] = val }
	set alpha(val){ return this.color[3] = val }
	
	constructor(red = 0.0, green = 0.0, blue = 0.0, alpha = 1.0) { 
		this.set.apply(this, arguments);

		this._color3Float32Array = new Float32Array(3);
		this._color4Float32Array = new Float32Array(4);
	}

	set(red = 0.0, green = 0.0, blue = 0.0, alpha = 1.0){
		if(typeof red === "string"){
			let rgba = this.parseHex(red)
			this.color = new Float32Array([rgba[0], rgba[1], rgba[2], rgba[3]]);
		}else if(red instanceof Array){
			if(red[3] === undefined) red[3] = 1.0;

			this.color = new Float32Array([red[0], red[1], red[2], red[3]]);
		}else{
			this.color = new Float32Array([red, green, blue, alpha]);
		}
	}
	
	toArray() {
		return this.color; 
	}

	toVec3Array() {
		this._color3Float32Array.set([this.color[0], this.color[1], this.color[2]]);
		
		return this._color3Float32Array; 
	}

	toRGBAArray() {
		this._color4Float32Array.set([this.color[0] * 255, this.color[1] * 255, this.color[2] * 255, this.color[3]]);

		return this._color4Float32Array; 
	}

	// #http://stackoverflow.com/a/5624139
	parseHex(hex) {
		// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
		var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
		hex = hex.replace(shorthandRegex, function(m, r, g, b) {
			return r + r + g + g + b + b;
		});

		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

		if(result){
			this.color[0] = parseInt(result[1], 16) / 255;
			this.color[1] = parseInt(result[2], 16) / 255;
			this.color[2] = parseInt(result[3], 16) / 255;
		}

		return this;
	}

	adjustHSL(deltaH, deltaS, deltaL){
		var hslColor = this.rgbToHsl();
		hslColor[0] += (deltaH || 0) / 100;
		hslColor[1] += (deltaS || 0) / 100;
		hslColor[2] += (deltaL || 0) / 100;
		
		if(hslColor[0] < 0) hslColor[0] = 0;
		if(hslColor[1] < 0) hslColor[1] = 0;
		if(hslColor[2] < 0) hslColor[2] = 0;
		
		if(hslColor[0] > 1) hslColor[0] = 1;
		if(hslColor[1] > 1) hslColor[1] = 1;
		if(hslColor[2] > 1) hslColor[2] = 1;
		
		hslColor = this.hslToRgb(hslColor[0], hslColor[1], hslColor[2]);

		this.set(hslColor[0], hslColor[1], hslColor[2], this.alpha);

		return this;
	}

	adjustHue(delta){
		var hslColor = this.rgbToHsl();
		hslColor[0] += (delta || 0) / 100;
		hslColor = this.hslToRgb(hslColor[0],hslColor[1],hslColor[2]);

		this.set(hslColor[0],hslColor[1],hslColor[2], this.alpha);

		return this;
	}

	adjustSaturation(delta){
		var hslColor = this.rgbToHsl();
		hslColor[1] += (delta || 0) / 100;
		hslColor = this.hslToRgb(hslColor[0], hslColor[1], hslColor[2]);

		this.set(hslColor[0], hslColor[1], hslColor[2], this.alpha);

		return this;
	}

	adjustLightness(delta){
		var hslColor = this.rgbToHsl();
		hslColor[2] += (delta || 0) / 100;
		hslColor = this.hslToRgb(hslColor[0], hslColor[1], hslColor[2]);

		this.set(hslColor[0], hslColor[1], hslColor[2], this.alpha);

		return this;
	}

	rgbToHsl(r, g, b){
		if(r == undefined){
			r = this.red;
			g = this.green;
			b = this.blue;
		}

		// r /= 255, g /= 255, b /= 255;
		var max = Math.max(r, g, b), min = Math.min(r, g, b);
		var h, s, l = (max + min) / 2;

		if(max == min){
			h = s = 0; // achromatic
		}else{
			var d = max - min;
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
			switch(max){
				case r: h = (g - b) / d + (g < b ? 6 : 0); break;
				case g: h = (b - r) / d + 2; break;
				case b: h = (r - g) / d + 4; break;
			}
			h /= 6;
		}

		return [h, s, l];
	}

	hslToRgb(h, s, l){
		var r, g, b;

		if(h == undefined){
			return [this.red, this.green, this.blue];
		}

		if(s == 0){
			r = g = b = l; // achromatic
		}else{
			var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
			var p = 2 * l - q;
			r = this.hue2rgb(p, q, h + 1/3);
			g = this.hue2rgb(p, q, h);
			b = this.hue2rgb(p, q, h - 1/3);
		}

		return [Math.round(r), Math.round(g), Math.round(b)];
	}

	hue2rgb(p, q, t){
		if(t < 0) t += 1;
		if(t > 1) t -= 1;
		if(t < 1/6) return p + (q - p) * 6 * t;
		if(t < 1/2) return q;
		if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
		return p;
	};

}