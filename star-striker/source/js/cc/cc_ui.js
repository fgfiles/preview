/*cc screens utility framework
 *author: Jonathan 'JK' Kernick
 *description: the classes and functions that can help with building web appScreens
 */


CC.UI = {
    //trims a spriteHitArea
    trimSpriteHitArea: function(sprite)
	{
      	sprite.hitArea = new PIXI.Rectangle(
            sprite.texture.trim.x - (sprite.texture.trim.width * sprite.anchor.x),
            sprite.texture.trim.y - (sprite.texture.trim.height * sprite.anchor.y),
            sprite.texture.crop.width,
            sprite.texture.crop.height
      	);
      	return sprite;
	},
    //creates a standard button with a function to called when clicked or tapped
    //will use any pixi object
    createButton: function(button, func)
	{
        //sets interactive so pixi know whats what
		button.interactive = true;
        //if its a mobile asign the func to tap if not then to click
		if(CC.isMobile)
		{
			button.tap = func;
		}
		else
		{
			button.click = func;
		}
        //sets the button mode on so the pointer is shown
		button.buttonMode = true;
	},
    //creates a button that has a click down state requires a movieclip with atleast two frames
	createButtonHighlight: function(button, func)
	{
		button.interactive = true;
		if(CC.isMobile)
		{
			button.tap = func;
			button.touchstart = function()
			{
				button.gotoAndStop(1);
			}
			button.touchend  = function()
			{
				button.gotoAndStop(0);
			}
			button.touchendoutside  = function()
			{
				button.gotoAndStop(0);
			}
		}
		else
		{
			button.click = func;
			button.mousedown = function()
			{
				button.gotoAndStop(1);
			};
			button.mouseup  = function()
			{
				button.gotoAndStop(0);
			};
			button.mouseupoutside  = function()
			{
				button.gotoAndStop(0);
			};
		}
		button.buttonMode = true;
	}, 
	//creates a button that has hoverState for desktop and a click down state for mobile
	createButtonHover: function(button, func)
	{
		button.interactive = true;
		if(CC.isMobile)
		{
			button.tap = func;
			button.touchstart = function()
			{
				button.gotoAndStop(1);
			}
			button.touchend  = function()
			{
				button.gotoAndStop(0);
			}
			button.touchendoutside  = function()
			{
				button.gotoAndStop(0);
			}
		}
		else
		{
			button.click = func;
			button.mouseover = function()
			{
				button.gotoAndStop(1);
			}
			button.mouseout   = function()
			{
				button.gotoAndStop(0);
			}
		}
		button.buttonMode = true;
	},
	//creates a button that has hoverState show
	createButtonHoverShow: function(button, func,overFunc,outFunc)
	{
				button.alpha = 0;
		overFunc = overFunc || function(){};
		outFunc = outFunc || function(){};
		button.interactive = true;
		if(CC.isMobile)
		{
			button.tap = func;
			button.touchstart = function()
			{
				button.alpha = 1;
				overFunc();
			}
			button.touchend  = function()
			{
				button.alpha = 0;
				outFunc();
			}
			button.touchendoutside  = function()
			{
				button.alpha = 0;
				outFunc();
			}
		}
		else
		{
			button.click = func;
			button.mouseover = function()
			{
				button.alpha = 1;
				overFunc();
			}
			button.mouseout   = function()
			{
				button.alpha = 0;
				outFunc();
			}
		}
		button.buttonMode = true;
	},

	createButtonHold: function(button, func, startFunc, endFunc)
	{
		button.interactive = true;
		button.state = 0;
		button.currentFrame = 0;
		if(CC.isMobile)
		{

			button.tap = func;
			button.touchstart = function(mouseData)
			{
				if(startFunc)
				{
					startFunc(mouseData);
				}
				button.state = 1;
				if(button.gotoAndStop)
				{
					button.gotoAndStop(1);
				}
			}
			button.touchend  = function(mouseData)
			{
				if(endFunc)
				{
					endFunc(mouseData);
				}
				button.state = 0;
				if(button.gotoAndStop)
				{
					button.gotoAndStop(0);
				}
			}
			button.touchendoutside  = function(mouseData)
			{
				if(endFunc)
				{
					endFunc(mouseData);
				}
				button.state = 0;
				if(button.gotoAndStop)
				{
					button.gotoAndStop(0);
				}
			}
		}
		else
		{
			button.click = func;
			button.mousedown = function(mouseData)
			{
				if(startFunc)
				{
					startFunc(mouseData);
				}
				button.state = 1;
				if(button.gotoAndStop)
				{
					button.gotoAndStop(1);
				}
			}
			button.mouseup  = function(mouseData)
			{
				if(endFunc)
				{
					endFunc(mouseData);
				}
				button.state = 0;
				if(button.gotoAndStop)
				{
					button.gotoAndStop(0);
				}
			}
			button.mouseupoutside  = function(mouseData)
			{
				if(endFunc)
				{
					endFunc(mouseData);
				}
				button.state = 0;
				if(button.gotoAndStop)
				{
					button.gotoAndStop(0);
				}
			}
		}
		button.buttonMode = true;
	},
	createButtonHolding: function(button, func, startFunc, endFunc, moveFunc)
	{
		button.interactive = true;
		button.state = 0;
		button.currentFrame = 0;
		if(CC.isMobile)
		{

			button.tap = func;
			button.touchstart = function(mouseData)
			{
				if(startFunc)
				{
					startFunc(mouseData);
				}
				button.state = 1;
				if(button.gotoAndStop)
				{
					button.gotoAndStop(1);
				}
			}
			button.touchend  = function(mouseData)
			{
				if(endFunc)
				{
					endFunc(mouseData);
				}
				button.state = 0;
				if(button.gotoAndStop)
				{
					button.gotoAndStop(0);
				}
			}
			button.touchmove  = function(mouseData)
			{
				if(moveFunc)
				{
					mouseData.originalEvent.preventDefault()
					moveFunc(mouseData);
				}
			}
		}
		else
		{
			button.click = func;
			button.mousedown = function(mouseData)
			{
				if(startFunc)
				{
					startFunc(mouseData);
				}
				button.state = 1;
				if(button.gotoAndStop)
				{
					button.gotoAndStop(1);
				}
			}
			button.mouseup  = function(mouseData)
			{
				if(endFunc)
				{
					endFunc(mouseData);
				}
				button.state = 0;
				if(button.gotoAndStop)
				{
					button.gotoAndStop(0);
				}
			}
			button.mousemove  = function(mouseData)
			{
				if(moveFunc)
				{
					moveFunc(mouseData);
				}
			}
			button.mouseupoutside  = function(mouseData)
			{
				if(endFunc)
				{
					endFunc(mouseData);
				}
				button.state = 0;
				if(button.gotoAndStop)
				{
					button.gotoAndStop(0);
				}
			}
		}
		button.buttonMode = true;
	},
    //creates a button that has a toggle state requires a movieclip with atleast two frames
	createButtonToggle: function(button, func)
	{
		button.interactive = true;
		if(CC.isMobile)
		{
			button.tap = function()
			{
				if(button.currentFrame === 1)
				{
					button.gotoAndStop(0);
				}
				else
				{
					button.gotoAndStop(1);
				}
				func();
			}
			
		}
		else
		{
			button.click = function()
			{
				if(button.currentFrame)
				{
					button.gotoAndStop(0);
				}
				else
				{
					button.gotoAndStop(1);
				}
				func();
			}
		}
		button.buttonMode = true;
	},
    //creates a button that has a toggle state, and also is used in concert with a group of them to declick them once clicked
    //requires a movieclip with atleast two frames
	createButtonRadial: function(button,otherButtons, func)
	{
		button.interactive = true;
		if(CC.isMobile)
		{
			button.tap = function()
			{
				button.gotoAndStop(1);
				for(var i = 0; i < otherButtons.length; ++i)
				{
					if(otherButtons[i] !== button)
					{
						otherButtons[i].gotoAndStop(0);
					}
				}
				func();
			}
			
		}
		else
		{
			button.click = function()
			{
				button.gotoAndStop(1);
				for(var i = 0; i < otherButtons.length; ++i)
				{
					if(otherButtons[i] !== button)
					{
						otherButtons[i].gotoAndStop(0);
					}
				}
				func();
			}
		}
		button.buttonMode = true;
	},
    //utilit function really but is required for creating a sliding button must have CC.Geometry loaded so remeber that!
	_magToLine: function(pos,end)
	{
		var normal = CC.Geometry.normaliseVector(end);
		var length = CC.Geometry.vectorLength(end);
		var dot = CC.Geometry.dotProduct2D(pos,normal);
		dot = Math.min(length,Math.max(0,dot));
		return {value:dot/length,position:CC.Geometry.scaleVector(normal,dot)}
	},
    //creates a sliding button really needs CC.Geomtry to work though
	createSlidingButton: function(button, func,endPos, beginPos,updateFunc)
	{
		
		var container = new PIXI.Container();
		var sliderInUse = false;
		var slideAmount = beginPos;
		button.position.x = endPos.x*beginPos;
		button.position.y = endPos.y*beginPos;
		button.interactive = true;
		if(isMobile)
		{
			button.touchstart = function()
			{
				sliderInUse = true;
			}
			button.touchmove = function(mouseData)
			{
				if(sliderInUse)
				{
					var relativePosition = mouseData.getLocalPosition(container);
					var sliderDetails = Screens.magToLine(relativePosition,endPos)
					slideAmount = sliderDetails.value;
					button.position.x = sliderDetails.position.x;
					button.position.y = sliderDetails.position.y;
					
					updateFunc(slideAmount)
				}
			}
			button.touchend = function()
			{
				sliderInUse = false;
				func(slideAmount)
			}
			button.touchendoutside = button.touchend;
		}
		else
		{
			button.mousedown = function()
			{
				sliderInUse = true;
			}
			button.mousemove = function(mouseData)
			{
				if(sliderInUse)
				{
					var relativePosition = mouseData.getLocalPosition(container);
					var sliderDetails = Screens.magToLine(relativePosition,endPos)
					slideAmount = sliderDetails.value;
					button.position.x = sliderDetails.position.x;
					button.position.y = sliderDetails.position.y;
					updateFunc(slideAmount)
				}
			}
			button.mouseup = function()
			{
				sliderInUse = false;
				func(slideAmount)
			}
			button.mouseupoutside = button.mouseup;
		}
		button.buttonMode = true;
		container.addChild(button);
		return container;
	},
}