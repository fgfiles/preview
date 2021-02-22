define(["PIXI",'orion/Game'],
function(PIXI,Game)
{
	var CreatePIXI = (function(canvas, width, height, stageColor, interactive)
	{
		// Create an new instance of a Pixi stage
		var stageColor = (stageColor != undefined) ? stageColor : 0x00aa00;
		var interactive = (interactive != undefined) ? interactive : true;
		var stage = new PIXI.Stage(stageColor, interactive);

		// Checking width and height equals something
		if (width == undefined) console.log("ERROR: Pixi width undefined");
		if (height == undefined) console.log("ERROR: Pixi height undefined");

		// Set up renderer
		var renderer = PIXI.autoDetectRenderer(width, height, { view:canvas, transparent:false, antialias: false, resolution:1 });

		// Add the renderer view element to the DOM
		renderer.render(stage);

		// Store references
		Game.getInstance().setCanvas(canvas);
		Game.getInstance().setRenderer(renderer);
		Game.getInstance().setStage(stage);
	});

	return CreatePIXI;
});