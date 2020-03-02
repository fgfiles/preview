//Create a "one by one" touch event listener (processes one touch at a time)
var DraggingListener = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    // When "swallow touches" is true, then returning 'true' from the onTouchBegan method will "swallow" the touch event, preventing other listeners from using it.
    swallowTouches: true,
    //onTouchBegan event callback function
    onTouchBegan: function (touch, event) {
        // event.getCurrentTarget() returns the *listener's* sceneGraphPriority node.
        var target = event.getCurrentTarget();

        //Get the position of the current point relative to the button
        var locationInNode = target.convertToNodeSpace(touch.getLocation());
        var s = target.getContentSize();
        var rect = cc.rect(0, 0, s.width, s.height);

        //Check the click area
        if (cc.rectContainsPoint(rect, locationInNode)) {
            // cc.log("sprite began... x = " + locationInNode.x + ", y = " + locationInNode.y);
            target.opacity = 180;
            return true;
        }
        return false;
    },
    //Trigger when moving touch
    onTouchMoved: function (touch, event) {
        //Move the position of current button sprite
        var target = event.getCurrentTarget();
        var delta = touch.getDelta();
        target.x += delta.x;
        target.y += delta.y;
    },
    //Process the touch end event
    onTouchEnded: function (touch, event) {
        var target = event.getCurrentTarget();
        // cc.log("sprite onTouchesEnded.. ");
        target.setOpacity(255);
    }
});

// swipe left/right
var SwipeListener = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    swallowTouches: true,

    onTouchBegan: function(touch, event) {
        var loc = touch.getLocation();
        self.touchStartPoint = {
            x: loc.x,
            y: loc.y
        };
        self.touchLastPoint = {
            x: loc.x,
            y: loc.y
        };
        return true;
    },

    onTouchMoved: function(touch, event) {
        var loc = touch.getLocation();
        var start = self.touchStartPoint;

        if( loc.x < start.x - GC.SWIPE_THRESHOLD ) {
            if( loc.x > self.touchLastPoint.x ) {
                start = self.touchStartPoint = {
                    x: loc.x,
                    y: loc.y
                };
                self.isSwipeLeft = false;
            } else {
                self.isSwipeLeft = true;
            }
        }

        if( loc.x > start.x + GC.SWIPE_THRESHOLD ) {
            if( loc.x < self.touchLastPoint.x ) {
                self.touchStartPoint = {
                    x: loc.x,
                    y: loc.y
                };
                self.isSwipeRight = false;
            } else {
                self.isSwipeRight = true;
            }
        }

        self.touchLastPoint = {
            x: loc.x,
            y: loc.y
        };
    },

    onTouchEnded: function(touch, event) {
        var target = event.getCurrentTarget();
        var loc = touch.getLocation();
        
        if (GC.STARTED) {
            if (self.isSwipeRight) {
                g_sharedGameplayLyr.changeLane("right");
            }
            else if (self.isSwipeLeft) {
                g_sharedGameplayLyr.changeLane("left");
            }
            else {
                if (g_Squeaks === null || g_Chicken === null || g_Player === null) {
                    return;
                }
                var dist = cc.pDistance(loc, g_Squeaks.getPosition());
                var chk = cc.pDistance(loc, g_Chicken.getPosition());
                if (dist <= 75 && g_Squeaks.allowTouch) {
                    g_Squeaks.allowThrow = true;
                    return;
                }
                else if (chk <= 50) {
                    g_Chicken.hide();
                    var feather = new Feather();
                    feather.setPosition(loc);
                    g_sharedGameplayLyr.addChild(feather);

                    Tools.playSFX(res.sfx_chickenStartle, false);
                    return;
                }
                else {
                    g_Player.whack();
                }
            }
        }
        else {
            if (g_sharedHUDLyr.introed)
                g_sharedHUDLyr.removeIntro();
        }
        
        self.isSwipeLeft = self.isSwipeRight = false;
    }
});

//Swipe left / Right / Up / Down
var GestureListener = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ALL_AT_ONCE,
    
    // When "swallow touches" is true, then returning 'true' from the onTouchBegan method will "swallow" the touch event, preventing other listeners from using it.
    swallowTouches: true,
    
    onTouchesBegan: function(touches, event) {
        
        // cc.log("Touch Began");
        
        var touch = touches[0];
        var loc = touch.getLocation();

        self.touchStartPoint = {
            x: loc.x,
            y: loc.y
        };

        self.touchLastPoint = {
            x: loc.x,
            y: loc.y
        };
    },

    onTouchesMoved: function(touches, event) {
        
        // cc.log("Touch moving");
        
        var touch = touches[0];
        var loc = touch.getLocation(),
            start = self.touchStartPoint;

        // check for left
        if( loc.x < start.x - GC.SWIPE_THRESHOLD ) {
            // if direction changed while swiping left, set new base point
            if( loc.x > self.touchLastPoint.x ) {
                start = self.touchStartPoint = {
                    x: loc.x,
                    y: loc.y
                };
                self.isSwipeLeft = false;
                // g_sharedGameplayLyr.changeLane("right");
            } else {
                self.isSwipeLeft = true;
                // g_sharedGameplayLyr.changeLane("left");
            }
            // g_sharedGameplayLyr.changeLane("left");
        }

        // check for right
        if( loc.x > start.x + GC.SWIPE_THRESHOLD ) {
            // if direction changed while swiping right, set new base point
            if( loc.x < self.touchLastPoint.x ) {
                self.touchStartPoint = {
                    x: loc.x,
                    y: loc.y
                };
                self.isSwipeRight = false;
            } else {
                self.isSwipeRight = true;
            }
            // g_sharedGameplayLyr.changeLane("right");
        }

        // check for down
        if( loc.y < start.y - GC.SWIPE_THRESHOLD ) {
            // if direction changed while swiping down, set new base point
            if( loc.y > self.touchLastPoint.y ) {
                self.touchStartPoint = {
                    x: loc.x,
                    y: loc.y
                };
                self.isSwipeDown = false;
            } else {
                self.isSwipeDown = true;
            }
        }

        // check for up
        if( loc.y > start.y + GC.SWIPE_THRESHOLD ) {
            // if direction changed while swiping right, set new base point
            if( loc.y < self.touchLastPoint.y ) {
                self.touchStartPoint = {
                    x: loc.x,
                    y: loc.y
                };
                self.isSwipeUp = false;
            } else {
                self.isSwipeUp = true;
            }
        }

        self.touchLastPoint = {
            x: loc.x,
            y: loc.y
        };
    },

    onTouchesEnded: function(touches, event){

        // cc.log("Touch ended");

        var target = event.getCurrentTarget();
        var touch = touches[0],
            loc = touch.getLocation();
        //var size = self.size;

        self.touchStartPoint = null;

        if( !self.isSwipeUp && !self.isSwipeLeft && !self.isSwipeRight && !self.isSwipeDown ) {
            if( loc.y > GC.SCREEN.SIZE.HEIGHT*0.25 && loc.y < GC.SCREEN.SIZE.HEIGHT*0.75 ) {
                if(loc.x <GC.SCREEN.SIZE.WIDTH*0.50)
                {
                    self.isTouchLeft = true;
                }
                else
                {
                    self.isTouchRight = true;
                }
            } else if( loc.y > GC.SCREEN.SIZE.HEIGHT*0.75 ) {
                self.isTouchUp = true;
            } else {
                self.isTouchDown = true;
            }
        }

        
        if (self.isSwipeRight) {
            g_sharedGameplayLyr.changeLane("right");
        }
        else if (self.isSwipeLeft) {
            g_sharedGameplayLyr.changeLane("left");
        }
        else {
            
            var dist = cc.pDistance(loc, g_Squeaks.getPosition());
            var chk = cc.pDistance(loc, g_Chicken.getPosition());
            if (dist <= 75 && g_Squeaks.allowTouch) {
                g_Squeaks.allowThrow = true;
                return;
            }
            else if (chk <= 50) {
                g_Chicken.hide();
                var feather = new Feather();
                feather.setPosition(loc);
                g_sharedGameplayLyr.addChild(feather);

                Tools.playSFX(res.sfx_chickenStartle, false);
                return;
            }
            else {
                g_Player.whack();
            }
        }

        self.isSwipeUp = self.isSwipeLeft = self.isSwipeRight = self.isSwipeDown = false;
    }
});

var KeyListener = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ALL_AT_ONCE,
    // TODO: For testing only.
    onKeyReleased: function(key, event){
        // TODO: For testing only. Disable this on launch
        if (key == cc.KEY.r) {
            // cc.log("Reload");
            reload();
        } else if (key == cc.KEY.space) {
            if (GC.PAUSED) {
                // cc.log("Resume");
                resume();
            } else {
                // cc.log("Pause");
                pause();
            }
        } else if (key == cc.KEY.m) {
            if (GC.ENABLE_SFX) {
                // cc.log("Mute");
                mute();
            } else {
                // cc.log("Unmute");
                unmute();
            }
        } 

        if (key === cc.KEY.a) {
            g_sharedGameplayLyr.changeLane("left");
        }
        if (key === cc.KEY.d) {
            g_sharedGameplayLyr.changeLane("right");
        }  
    }
});