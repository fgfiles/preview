var Tools = Tools || {};

Tools.random = function (min, max) {
    // Note: includes both min and max
    return Math.round(Math.random() * (max - min) + min);
};

Tools.randomf = function (min, max) {
    // Note: includes both min and max
    return (Math.random() * (max - min) + min);
};

Tools.randomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

Tools.randomIntWithException = function(options) {
  var options = options || {};
  var imExempt = options.exempt || null;
  var maxNum = options.maxNumber || 0; // capture the maximum number to randomize
  var minNum = options.minNumber || 0;
  var rand_no = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum; // run the random numbers

  if (imExempt != null) { // check to see if there are any exempt numbers
    imExempt = imExempt.toString(); // turn the exemptions into a string
    for (i = 0; i <= maxNum; i++) { // loop throught the set number
      if (imExempt.search(rand_no) != -1) { // check for exempt numbers			
        return Tools.getRandomIntWithException({
          exempt: imExempt,
          maxNumber: maxNum,
          minNumber: minNum
        }); // start over 
      }
    }
  }
  return rand_no; // return the new random number
};

// create new skeletal animation
Tools.createNewAnimation = function(jsonFile, initialAnimation, container) {
    var sprAnim = ccs.load(jsonFile);
    sprAnim.action.play(initialAnimation);
    sprAnim.node.runAction(sprAnim.action);
    container.addChild(sprAnim.node);
    return sprAnim;
};

Tools.createSpritesheetAnimation = function(prefix, startFrame, endFrame, interval, repeatForever) {
    repeatForever = (repeatForever || false);
    
    var frames = [];
    if (startFrame < endFrame) {
        for (var i = startFrame; i <= endFrame; i++) {
            var frame = cc.spriteFrameCache.getSpriteFrame(prefix + i + ".png");
            frames.push(frame);
        }
    } else {
        for (var i = startFrame; i >= endFrame; i--) {
            var frame = cc.spriteFrameCache.getSpriteFrame(prefix + i + ".png");
            frames.push(frame);
        }
    }
    
    var action = cc.animate(new cc.Animation(frames, interval));
    if (repeatForever) {
        action = action.repeatForever();
    }
    
    return action;
};

Tools.createFramesAnimation = function (prefix, interval, start, end) {
	var frames = [];
		
	if (start < end) {
		for (var i = start; i <= end; i++) {
			var frame = cc.spriteFrameCache.getSpriteFrame(prefix + i + ".png");
			frames.push(frame);
		}
	} else {
		for (var i = start; i >= end; i--) {
			var frame = cc.spriteFrameCache.getSpriteFrame(prefix + i + ".png");
			frames.push(frame);
		}
	}
	
	return cc.animate(new cc.Animation(frames, interval));
};

Tools.createFramesAnimationLooping = function (prefix, interval, start, end, loops) {
	var frames = [];
		
	if (start < end) {
		for (var i = start; i <= end; i++) {
			var frame = cc.spriteFrameCache.getSpriteFrame(prefix + i + ".png");
			frames.push(frame);
		}
	} else {
		for (var i = start; i >= end; i--) {
			var frame = cc.spriteFrameCache.getSpriteFrame(prefix + i + ".png");
			frames.push(frame);
		}
	}
	return cc.animate(new cc.Animation(frames, interval, loops));
};

Tools.circlesIntersect = function (obj1, obj2) {
    var distance = cc.pDist(ob1.getPosition(), ob2.getPosition());
	
    // NOTE: Create obj radius function that returns the object radius
    if (distance < obj1.radius() + obj2.radius()) {
        return true;
    }
    return false;
};

Tools.rectIntersect = function (obj1, obj2) {
    // NOTE: Create obj rect function that returns the object collision box
    var aRect = obj1.collideRect();
    var bRect = obj2.collideRect();
    return cc.rectIntersectsRect(aRect, bRect);
};

Tools.createText = function(parent, posX, posY, scale, anchor, desc, font) {
  	var text = new cc.LabelBMFont(desc, font);
    text.setPosition(posX, posY);
    text.setScale(scale);
    text.setAnchorPoint(anchor);
    parent.addChild(text,4);
    return text;
};

Tools.createSprite = function(p_parent, p_img, p_pos, p_scale, p_anchor, p_zIndex){
	  var sprite = new cc.Sprite(p_img);
    sprite.setScale(p_scale);
    sprite.setAnchorPoint(p_anchor);
    sprite.setPosition(p_pos); 
    p_parent.addChild(sprite, p_zIndex);

    return sprite;
};

Tools.createCollider = function (obj, width, height) {
    var collider = new cc.DrawNode();
    var origin = cc.p(0, 0);
    var destination = cc.p(width, height);
    collider.drawRect(origin, destination, cc.color(0, 0, 0, 64));
    return collider;
};

Tools.playSFX = function(audio, loop) {
    return cc.audioEngine.playEffect(audio, loop);
};

Tools.stopSFX = function(audio) {
    cc.audioEngine.stopEffect(audio);
};

Tools.playBGM = function(audio, loop) {
    cc.audioEngine.playMusic(audio, loop);
};

Tools.addSoundHandler = function(target)
{
    var listenerHideGame = cc.EventListener.create({
        event: cc.EventListener.CUSTOM,
        eventName: "game_on_hide",
        callback: function(event){
          cc.audioEngine.setEffectsVolume(0.0);   
          cc.audioEngine.setMusicVolume(0.0);
        }            
    });    
    cc.eventManager.addListener( listenerHideGame, target );

    var listenerShowGame = cc.EventListener.create({
        event: cc.EventListener.CUSTOM,
        eventName: "game_on_show",
        callback: function(event){
          if( GC.ENABLE_SFX ) {
		       cc.audioEngine.setEffectsVolume(1.0);   
		       cc.audioEngine.setMusicVolume(1.0);
		    	}
        }           
    });    
    cc.eventManager.addListener( listenerShowGame, target );
};

Tools.showBorder = function(x) {
    var line = new cc.DrawNode();
    line.height = GC.SCREEN.SIZE.HEIGHT;
    line.width = 2;
    line.setAnchorPoint(0,0);
    line.setPosition(0,0);
    var origin = cc.p(x,0);
    var end = cc.pAdd(origin, cc.p(line.width, line.height));
    line.drawRect(origin, end, cc.color(0, 0, 0, 255));
    return line;
};

Tools.addGrid = function(node, x, y, w, h) {
    var origin = cc.p(x, y);
    var end = cc.p(w, h);
    node.drawRect(origin, end, cc.color(0, 0, 0, 64), 0, cc.color(0, 0, 0, 0));
};

Tools.addCenter = function(node, center) {
    // center, radius, angle, segments, drawLineToCenter, lineWidth, color
    node.drawCircle(center, 5, 360, 8, false, 0, cc.color(0, 0, 0, 100));
};