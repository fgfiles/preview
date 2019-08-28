ig.module(
	'lib.plugins.createjs.impact'
)
.requires(
	'lib.plugins.createjs.preload', 
	'lib.plugins.createjs.tween', 
	'lib.plugins.createjs.sound', 
	'lib.plugins.createjs.easel'
)
.defines(function()
{
	// all display objects have a zIndex for easier sorting purposes
	createjs.DisplayObject.prototype.zIndex = 0;

	// by default, we disable the mouse event to all display objects
	createjs.DisplayObject.prototype.mouseEnabled = false;

	// custom some of the createjs stage methods
	var p = createjs.Stage.prototype;
	p.parentAddChild = p.addChild;
	p.addChild = function()
	{
		this.parentAddChild.apply(this, arguments);
		this.sortChildren();
	};

	// add a sort children method
	p.sortChildren = function()
	{
		var count = this.children.length;

		this.children.sort(function(a, b) 
		{ 
			// we need to set an zIndex
			if ( a.zIndex === 0 ) 
				a.zIndex = count;
			else if ( b.zIndex === 0 )
				b.zIndex = count;

			return a.zIndex - b.zIndex 
		})
	};
});