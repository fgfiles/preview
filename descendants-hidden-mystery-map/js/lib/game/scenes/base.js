ig.module(
	'lib.game.scenes.base'
)
.requires(
	'lib.impact.scene',

	'lib.game.entities.misc'
)
.defines(function()
{
	ig.Scene.Base = ig.Scene.extend(
	{
		currentStateId : -1,
		lastStateId : -1,
		stateId : 
		{
			transit : 0,
			loadStart : 1,
			loadEnd : 2,
			loadComplete : 3,
			game : 4,
			title : 5,
			directions : 6,
			intro : 7,
			end : 8,
			otherGame : 9,
			cancel : 10
		},

		init : function() {},

		update : function(e)
		{
			if ( this.currentStateId == this.stateId.directions )
				this.highlightObject(false);

			this.parent(e)
		},

		switchState : function(newStateId)
		{
			var w = ig.system.fixedWidth,
				h = ig.system.fixedHeight,
				w2 = w * 0.5,
				h2 = h * 0.5,
				currentStateId = this.currentStateId;

			// 
			if ( newStateId == this.stateId.otherGame )
			{
				this.lastStateId = currentStateId;

				// for the travel guide
				if ( this.lastStateId === this.stateId.transit )
					this.lastStateId = this.stateId.game;

				this.spawnEntity(ig.Entity.Misc, 0, 0, { name : 'bg', zIndex : 999999 });
				var conObj = this.spawnEntity(ig.Entity.Misc, 0, -100, { name : 'text-confirm', zIndex : 9999999 });

				// get the hieght
				var y = -100 + conObj.disObj.getMeasuredHeight();

				this.spawnEntity(ig.Entity.Misc, -90, 60 + y, { name : 'btn-back', stateIds : [newStateId], zIndex : 9999999 });
				this.spawnEntity(ig.Entity.Misc, 90, 60 + y, { name : 'btn-check', stateIds : [newStateId], zIndex : 9999999 });

				createjs.Tween.get({}).wait(800).call(function()
				{
					this.currentStateId = newStateId
				}, null, this);
			}

			else if ( newStateId == this.stateId.cancel )
			{
				createjs.Tween.get({}).wait(400).call(function()
				{
					this.currentStateId = this.lastStateId
				}, null, this);
			}

			// tell the entities the scene has switched states
			for ( var i = 0, ent; i < ig.scene.entities.length; i++ )
			{
				ent = ig.scene.entities[i];
				ent.switchState && ent.switchState(newStateId, this.currentStateId);

				// this is a safety check to make sure no entities were removed
				if ( ent !== ig.scene.entities[i] )
					i--;
			}

			// it switched!
			this.currentStateId = this.stateId.transit;
		}
	})
});