"use strict";

require.config(
{
	baseUrl: "scripts/pussinboots/thief",
	paths:
	{
		backbone: "../../vendor/backbone",
		jquery: "../../vendor/jquery-2.0.0.min",
		keypress: '../../vendor/keypress-2.0.2.min',
		underscore: "../../vendor/underscore-min",
		tweenmax: "../../vendor/TweenMax.min",
		PIXI: "../../vendor/pixi.dev",
		box2D: "../../vendor/Box2dWeb-2.1.a.3.min",
		preloadjs: "../../vendor/preloadjs-0.4.1.min",
		soundjs: "../../vendor/soundjs-0.5.2.min",
		numeral: "../../vendor/numeral.min",
		orion: "../../vendor/orion",
		classlist: "../../bower/classlist/classList"
	},
	shim: {
		"underscore": { exports: "_" },
		"backbone": {
			 deps: [
				"underscore",
				"jquery"
			],
			exports: "Backbone"
		},
		"tweenmax": {
			exports: "TweenMax"
		},
		"box2D": {
			exports: "Box2D"
		},
		"pixi": {
			exports: "PIXI"
		},
		"orion": {
			exports: "orion"
		}
	},
	deps: ["jquery","backbone","PIXI","tweenmax","classlist"]
});

require(['game/GameNotifications', 'game/GameConfig', 'Main', '../../site/holder/main' ], function (GameNotifications, GameConfig, Main, Site )
{
	// Declaring Dance Commander namespace object
	window.tcat = {};
	window.tcat.GameNotifications = GameNotifications;
	window.tcat.GameConfig = GameConfig;

	var main = new Main();
	new Site();
});