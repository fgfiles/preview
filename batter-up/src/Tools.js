var Tools = Tools || {};

Tools.random = function (min, max) {
    // Note: includes both min and max
    return Math.round(Math.random() * (max - min) + min);
};

Tools.randomf = function (min, max) {
    // Note: includes both min and max
    return (Math.random() * (max - min) + min);
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

Tools.getCachedAnimation = function(animation, repeatForever) {
    repeatForever = (repeatForever || false);
    var action = cc.animate(animation);
    if (repeatForever) {
        action = action.repeatForever();
    }
    return action;
};

Tools.createAnimation = function(prefix, startFrame, endFrame, interval) {
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
    var animation = new cc.Animation(frames, interval);
    return animation;
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

Tools.playSFX = function(audio, loop) {
    return cc.audioEngine.playEffect(audio, loop);
};

Tools.stopSFX = function(audio) {
    cc.audioEngine.stopEffect(audio);
};

Tools.playBGM = function(audio, loop) {
    cc.audioEngine.playMusic(audio, loop);
};