//Create a "one by one" touch event listener (processes one touch at a time)
var DraggingListener = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    // When "swallow touches" is true, then returning 'true' from the onTouchBegan method will "swallow" the touch event, preventing other listeners from using it.
    swallowTouches: true,
    //onTouchBegan event callback function
    onTouchBegan: function (touch, event) 
    {
        var target = event.getCurrentTarget();

        //Get the position of the current point relative to the button
        var locationInNode = target.convertToNodeSpace(touch.getLocation());
        var s = target.getContentSize();
        var rect = cc.rect(0, 0, s.width, s.height);

        //Check the click area
        if (cc.rectContainsPoint(rect, locationInNode)) 
        {
            cc.log("sprite began... x = " + locationInNode.x + ", y = " + locationInNode.y);
            target.opacity = 180;
            return true;
        }
        return false;
    },
    //Trigger when moving touch
    onTouchMoved: function (touch, event) 
    {
        //Move the position of current button sprite
        var target = event.getCurrentTarget();
        var delta = touch.getDelta();
        target.x += delta.x;
        target.y += delta.y;
    },
    //Process the touch end event
    onTouchEnded: function (touch, event) 
    {
        var target = event.getCurrentTarget();
        cc.log("sprite onTouchesEnded.. ");
        target.setOpacity(255);
    }
});

var hasActiveNode = false;

//Swipe left / Right / Up / Down
var GestureListener = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ALL_AT_ONCE,
    
    // When "swallow touches" is true, then returning 'true' from the onTouchBegan method will "swallow" the touch event, preventing other listeners from using it.
    swallowTouches: true,
    
    onTouchesBegan: function(touches, event) 
    {
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

        if(g_sharedGameplayLyr.inputEnabled == true)
        {
             var target = event.getCurrentTarget();
             var locationInNode = sharedGrid.convertToNodeSpace(touch.getLocation());

             for(var index = 0; index < sharedGrid.nodeArray.length; index++)
             {
                var gridNodeRect = new cc.rect(sharedGrid.nodeArray[index].x - sharedGrid.nodeArray[index].nodeWidth * 0.5, sharedGrid.nodeArray[index].y  - sharedGrid.nodeArray[index].nodeHeight * 0.5, sharedGrid.nodeArray[index].nodeWidth, sharedGrid.nodeArray[index].nodeHeight);

                if(cc.rectContainsPoint(gridNodeRect , locationInNode))
                {

                    if(sharedGrid.getHasTappedNode())
                    {
                        sharedGrid.swapNodes(sharedGrid.getCurrentNode(), sharedGrid.nodeArray[index]);
                        sharedGrid.setCurrentNode(null);
                        sharedGrid.setHasTappedNode(false);
                    }
                    else
                    {
                        if(sharedGrid.nodeArray[index].isTapped)
                        {
                            sharedGrid.setHasTappedNode(false);
                            sharedGrid.setCurrentNode(null);
                            sharedGrid.nodeArray[index].setNodeTapped(false);                        
                        }
                        else
                        {
                            sharedGrid.setHasTappedNode(true);
                            sharedGrid.setCurrentNode(sharedGrid.nodeArray[index]);
                            sharedGrid.nodeArray[index].setNodeTapped(true);
                        }
                    }

                    return true;
                }
            }
        }

        if(g_sharedGameplayLyr.isLevelComplete)
        {
            g_sharedGameplayLyr.startNextLevel();
        }
    },

    onTouchesMoved: function(touches, event) 
    {
        var touch = touches[0];
        var loc = touch.getLocation(),
            start = self.touchStartPoint;

        self.touchLastPoint = {
            x: loc.x,
            y: loc.y
        };
    },

    onTouchesEnded: function(touches, event)
    {

        var target = event.getCurrentTarget();
        var touch = touches[0],
            loc = touch.getLocation();
    }
});


var SimpleListener = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ALL_AT_ONCE,
    
    // When "swallow touches" is true, then returning 'true' from the onTouchBegan method will "swallow" the touch event, preventing other listeners from using it.
    swallowTouches: true,
    
    onTouchesBegan: function(touches, event) 
    {
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

        g_sharedGameOverLyr.replayGame();
    }
});

var KeyListener = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ALL_AT_ONCE,
    // TODO: For testing only.
    onKeyReleased: function(key, event){
        // TODO: For testing only. Disable this on launch
        if (key == cc.KEY.r) 
        {
            cc.log("Reload");
            reload();
        } 
        else if (key == cc.KEY.space) 
        {
            if (GC.PAUSED) 
            {
                cc.log("Resume");
                resume();
            } 
            else 
            {
                cc.log("Pause");
                pause();
            }
        } 
        else if (key == cc.KEY.m) 
        {
            if (GC.ENABLE_SFX) 
            {
                cc.log("Mute");
                mute();
            } 
            else 
            {
                cc.log("Unmute");
                unmute();
            }
        }
        else if(key == cc.KEY.s)
        {
            sharedGrid.shuffleGrid();
        }
        else if(key == cc.KEY.x)
        {
            g_sharedGameplayLyr.playIntroAnimation();
        }   
    }
});