var GridSprites = GridSprites || {};

GridSprites.Three = ["gobj_tj0", "gobj_tj1", "gobj_tj2"];
GridSprites.Four = ["gobj_tj3", "gobj_tj4", "gobj_tj5"];
GridSprites.Five = ["gobj_tj6", "gobj_tj7", "gobj_tj8", "gobj_tj9"];


var sharedGrid;

var Grid = cc.Node.extend({
	gridSize:null,
	nodeArray:null,
    hasTappedNode:null,
    currentNode:null,
    isActive:null,
    puzzleID:null,
    previewSprite:null,
    batch:null,
    offset: null,

    ctor:function() 
    {
        this._super();

        this.isActive = false;
    },
    reset:function() 
    {
    	if (this.batch) 
    	{
    		this.batch.removeFromParent();
	    	this.previewSprite.removeFromParent(true);
	    	this.previewSprite = null;
	    	this.nodeArray = [];
    	}
    },
    initialize:function(p_level) 
    {
    	this.reset();

    	if (p_level < 3) 
    	{
    		gridSize = 3;
    		this.batch = new cc.SpriteBatchNode(res.gobj_3x3_png);
    	}
    	else if (p_level > 2 && p_level < 6) 
    	{
    		gridSize = 4;
    		this.batch = new cc.SpriteBatchNode(res.gobj_4x4_png);
    	}
    	else if (p_level > 5 && p_level < 10) 
    	{
    		gridSize = 5;
    		this.batch = new cc.SpriteBatchNode(res.gobj_5x5_png);
    	}

    	this.addChild(this.batch);

    	puzzleID = p_level;

    	this.nodeArray = [];
    	this.hasTappedNode = false;

    	var spr = null;
    	var offset = cc.p(0, 0);

    	for (var i = 0; i < gridSize; i++) 
    	{
    		for (var j = 0; j < gridSize; j++) 
    		{

    			if (p_level < 3) 
    			{
		    		spr = GridSprites.Three[p_level];
		    		this.offset = cc.p(-1.5, -52.5);
		    	}
		    	else if (p_level > 2 && p_level < 6) 
		    	{
		    		spr = GridSprites.Four[p_level % 3];
		    		this.offset = cc.p(-21.5, -32.5);
		    	}
		    	else if (p_level > 5 && p_level < 9) 
		    	{
		    		spr = GridSprites.Five[p_level % 3];
		    		this.offset = cc.p(-33.7, -20.5);
		    	}
		    	else 
		    	{
		    		spr = GridSprites.Five[3];
		    		this.offset = cc.p(-33.7, -20.5);
		    	}

		    	var node = new GridNode("#" + spr + "_" + (i * gridSize + j).toString() + ".png");
    			node.setGridNodeID(i * gridSize + j);
    			node.spaceId = node.nodeID;
		    	node.setPosition((j * node.nodeWidth) + offset.x, (i * -node.nodeHeight) + offset.y);

		    	this.batch.addChild(node);
		    	this.nodeArray.push(node);
    		}
    	}
    	this.previewSprite = new cc.Sprite("#" + spr + ".png");
		this.previewSprite.setScale(0.8);
		this.addChild(this.previewSprite, previewLayerOrder);

        this.shuffleGrid();
    },
    init:function(p_gridSize, p_puzzleID)
    {
        //Initialize here
        
        gridSize = p_gridSize; //number of rows and columns are always equal.
        puzzleID = p_puzzleID;

        this.nodeArray = [];
        this.hasTappedNode = false;

        for(var i = 0; i < gridSize; i++)
        {
        	for(var j = 0; j < gridSize; j++)
        	{
        		var gridNodeEntry = new GridNode();

        		gridNodeEntry.setGridNodeID(i * gridSize + j);
        		gridNodeEntry.spaceId = gridNodeEntry.nodeID;

        		if(this.puzzleID > 0)
        		{
        			gridNodeEntry.initSprite(res.sample_tile_png);
        		}
        		else
        		{
        			gridNodeEntry.initSprite("#gobj_tj0_" + (i * gridSize + j).toString() + ".png");
        		}

        		gridNodeEntry.setPosition((j * gridNodeEntry.nodeWidth), (i * -gridNodeEntry.nodeHeight));

        		gridNodeEntry.spaceId = gridNodeEntry.nodeID;

        		this.addChild(gridNodeEntry);

        		this.nodeArray.push(gridNodeEntry);

        	}
        }

        this.previewSprite = new cc.Sprite("#gobj_tj0.png");

        this.addChild(this.previewSprite, previewLayerOrder);

        this.shuffleGrid();
    },

    initPreview:function()
    {
    	if (this.previewSprite)
    	{
	    	var secondPos = new cc.Point(this.previewSprite.getBoundingBox().width * 1.4315, this.previewSprite.getBoundingBox().height * -0.235);

	    	var sX = this.previewSprite.getScale() * 0.737;
	    	var sY = this.previewSprite.getScale() * 0.737;

	    	var previewXPos = (this.nodeArray[this.nodeArray.length - 1].getPositionX() - 0.5 + this.nodeArray[0].getPositionX())/2;
	        var previewYPos = (this.nodeArray[this.nodeArray.length - 1].getPositionY() + this.nodeArray[0].getPositionY())/2;
	        this.previewSprite.setPosition(previewXPos, previewYPos);

	        var delayAction = cc.DelayTime.create(1);
	        var scaleAction = cc.ScaleTo.create(0.5, sX, sY);
	        var moveAction	= cc.MoveTo.create(0.5, secondPos);

	        this.previewSprite.runAction(cc.Sequence.create(delayAction, scaleAction, moveAction.easing(cc.easeSineIn())));
	    }
    },



    getRandomInt:function(min, max) 
    {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	},

	shuffleGrid:function()
	{

		for(var i = 0; i < this.nodeArray.length; i++)
		{
			var randomIndex 		= this.getRandomInt(0, this.nodeArray.length - 1);

			var tempNode 			= this.nodeArray[randomIndex];

			var tmpNodeSpaceID		= tempNode.spaceId;

			this.nodeArray[randomIndex].spaceId		= this.nodeArray[i].spaceId;

			this.nodeArray[i].spaceId			= tmpNodeSpaceID;

			this.nodeArray[randomIndex] 			= this.nodeArray[i];
			

			this.nodeArray[i]					= tempNode;
		}

		var idCount = 0;

		for(var j = 0; j < gridSize; j++)
		{
			for(var k = 0; k < gridSize; k++)
			{
				var currentNode = this.nodeArray[idCount];
				currentNode.setPosition(((currentNode.nodeWidth) * k) + this.offset.x, ((currentNode.nodeHeight) * -j) + this.offset.y);

				idCount++;
			}
		}
	},

	setCurrentNode:function(p_gridNode)
	{
		this.currentNode = p_gridNode;
	},

	getCurrentNode:function()
	{
		return this.currentNode;
	},

	setHasTappedNode:function(p_bool)
	{
		this.hasTappedNode = p_bool;
	},

	getHasTappedNode:function()
	{
		return this.hasTappedNode;
	},

	swapNodes:function(p_first, p_second)
	{
		g_sharedGameplayLyr.disableGameInput();

		var firstNode	= p_first;
		var secondNode	= p_second;

		var tempNodeSpaceID = firstNode.spaceId;

		firstNode.spaceId = secondNode.spaceId;
		secondNode.spaceId = tempNodeSpaceID;

		var firstPosition = firstNode.getPosition();
		var secondPosition = secondNode.getPosition();

		firstNode.runAction(cc.MoveTo.create(0.25, secondPosition));
		secondNode.runAction(cc.MoveTo.create(0.25, firstPosition));

		firstNode.setNodeTapped(false);
		secondNode.setNodeTapped(false);
		this.hasTappedNode = false;

		this.runAction(cc.Sequence.create(cc.DelayTime.create(0.3), cc.CallFunc.create(this.checkCompletion, this)));;
	},

	checkCompletion:function()
	{
		var isComplete = false;

		for(var i = 0; i < this.nodeArray.length; i++)
		{
			var tmpNode = this.nodeArray[i];

			if(tmpNode.nodeID != tmpNode.spaceId)
			{
				isComplete = false;
				break;
			}
			else
			{
				isComplete = true;
			}
		}
		this.stopAllActions();
		if(isComplete == true)
		{
			g_sharedGameplayLyr.disableGameInput();
			this.runAction(cc.Sequence.create(cc.DelayTime.create(0.2), cc.CallFunc.create(this.runCompletionAnimation, this), cc.DelayTime.create(1), cc.CallFunc.create(g_sharedGameplayLyr.onLevelComplete, g_sharedGameplayLyr)));
		}
		else
		{
			g_sharedGameplayLyr.enableGameInput();
		}
	},

	runCompletionAnimation:function()
	{
		for(var i = 0; i < this.nodeArray.length; i++)
		{
			var l_node = this.nodeArray[i];

			l_node.runAction(cc.Sequence.create(cc.DelayTime.create(l_node.nodeID/50), cc.ScaleTo.create(0.05, 0, l_node.originalScale), cc.ScaleTo.create(0.05, l_node.originalScale)));
		}
	},

	activateGrid:function()
	{
		this.isActive = true;
		this.setVisible(true);

		this.setPosition(GC.SCREEN.SIZE.WIDTH/4.93, GC.SCREEN.SIZE.HEIGHT/1.59);

		this.initPreview();

        sharedGrid = this;
	},

	deactivateGrid:function()
	{
		this.isActive = false;
		this.setVisible(false);
		this.setPosition(GC.SCREEN.CENTER.X * 1000, GC.SCREEN.CENTER.Y * -1000);
		sharedGrid = null;
	}
	
});

var GridNode = cc.Sprite.extend({
	nodeSprite:null,
	nodeWidth:null,
	nodeHeight:null,
	nodeID:null,
	isTapped:null,
	nodeLayerColor:null,
	idLabel:null,
	spaceId:null,
    originalScale: null,

	ctor:function(p_spriteName)
	{
		this._super(p_spriteName);
		this.init();
	},

	init:function()
	{	
		this.setScale(0.8, 0.8);
		this.setAnchorPoint(0.5, 0.5);
		this.nodeWidth 		= this.getBoundingBox().width;
		this.nodeHeight 	= this.getBoundingBox().height;

		this.setScale(0.8, 0.8);
		this.originalScale = this.getScale();
	},

	initSprite:function(p_spriteName)
	{
		this.setSpriteFrame(cc.spriteFrameCache.getSpriteFrame(p_spriteName));

		this.nodeLayerColor =  cc.LayerColor.create(cc.color(255, 255, 255, 255), this.nodeWidth, this.nodeHeight);
		this.addChild(this.nodeLayerColor, 1);
		this.nodeLayerColor.setAnchorPoint(0.5, 0.5);
		this.nodeLayerColor.setPosition(this.nodeWidth * -0.5, this.nodeWidth * -0.5);

	},

	setGridNodeID:function(p_id)
	{
		this.nodeID = p_id;
	},

	setNodeTapped:function(p_isTapped)
	{
		this.isTapped = p_isTapped;

		if(p_isTapped == true)
		{
			this.setScale(0.95 * this.originalScale);
		}
		else
		{
			this.setScale(this.originalScale);
		}
	}

});