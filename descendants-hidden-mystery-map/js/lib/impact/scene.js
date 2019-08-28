ig.module(
	'lib.impact.scene'
)
.defines(function()
{
	ig.Scene = ig.Class.extend(
	{
		entities : [],

		staticInstantiate : function()
		{
			ig.scene && ig.scene.dispose();
			ig.scene = this;
			return null
		},

		update : function(e)
		{
			for ( var i = 0, ent; ent = this.entities[i++]; )
				if ( !(ent.disObj instanceof createjs.DisplayObject) )
					ent.update(e);
		},

		draw : function()
		{
			for ( var i = 0, ent; ent = this.entities[i++]; )
				if ( !(ent.disObj instanceof createjs.DisplayObject) )
					ent.draw();
		},

		getEntityByName : function(name, entities, type) 
		{
			return this.getEntitiesByName(name, entities, type)[0] || null
		},

		getEntitiesByName : function(name, entities, type)
		{
			entities = entities || this.entities;

			for ( var i = 0, a = [], ent; ent = entities[i++]; )
				if ( (type && ent instanceof type && ent.name == name) || (!type && ent.name == name) )
					a.push(ent);

			return a
		},

		getEntityByType : function(type, entities) 
		{
			return this.getEntitiesByType(type, entities)[0] || null
		},
		
		getEntitiesByType : function(type, entities) 
		{
			entities = entities || this.entities;
				
			for ( var a = [], i = 0, ent; ent = entities[i++]; ) 
				if ( ent instanceof type )
					a.push(ent);

			return a
		},

		spawnEntity : function(type, x, y, settings)
		{				
			if ( !type )
				throw('Can\'t spawn entity of type ' + type);

			// init it
			var ent = new type(x, y, settings);

			// if display object, apply the tick event and add it to the stage
			if ( ent.disObj instanceof createjs.DisplayObject )
			{
				ent.disObj.on('tick', ent.update, ent);

				ent.disObj.x = ent.disObj.y = -999999;

				// set the zIndex automatically
				if ( ent.disObj.zIndex === 0 )
					ent.disObj.zIndex = ent.zIndex;

				// add to stage if that stage exists
				var stage = ig.game.stages[ent.stageIndex];
				if ( stage )
					stage.addChild(ent.disObj);
			}

			// push to array
			this.entities.push(ent);

			return ent
		},

		removeEntity : function(ent) 
		{
			// remove event listeners
			if ( ent.disObj instanceof createjs.DisplayObject )
			{
				ent.disObj.removeAllEventListeners();

				// remove it from the stage
				var stage = ig.game.stages[ent.stageIndex];
				stage && stage.removeChild(ent.disObj);
			}

			// remove from array
			this.entities.erase(ent)
		},

		sortEntities : function(stageIndex)
		{
			if ( ig.game && ig.game.stages )
			{
				stageIndex = typeof stageIndex == 'undefined' ? 0 : stageIndex;

				for ( var i = 0, stage; stage = ig.game.stages[i++]; )
				{
					if ( (stageIndex && i - 1 == stageIndex) || typeof stageIndex == 'undefined' )
						stage.sortChildren && stage.sortChildren();
				}
			}

			return this
		},

		dispose : function()
		{
			while ( this.entities.length )
				this.entities.pop().kill();

			this.entities.length = 0;

			ig.scene = null
		}
	})
});