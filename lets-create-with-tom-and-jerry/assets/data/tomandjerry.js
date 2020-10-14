"use strict"

define( function(require){

    var exports = {} ;

    exports.savePrefix = "tomandjerry_" ;

    exports.menuDockedY = -477 ;
    exports.titlePlayButtonY = 180 ;
    exports.edgeButtonPadding = { x: 10, y: 10 } ;
    exports.compositeFrameOffset = { x: 105, y: 110 } ;

    exports.audioTable = [ // this table configures sound collections contained within the 'main' (common) audio sprite

        { id:"ui_canvas_over", sources:[ "splat", "boing", "twang", "glass1", "glass2" ] },

        { id:"sfx_tj_eraser", sources:[ "sfx_tj_eraser" ] },
        { id:"sfx_tj_tnt", sources:[ "sfx_tj_tnt-1" ] },
        { id:"sfx_tj_blower", sources:[ "sfx_tj_blower-1"] },
        { id:"sfx_tj_balloon", sources:[ "sfx_tj_balloon-1" , "sfx_tj_balloon-2"] },
        { id:"sfx_tj_present", sources:[ "sfx_tj_present"] },
        { id:"sfx_tj_tyke", sources:[ "sfx_tj_tyke"] },
        { id:"sfx_tj_candle", sources:[ "sfx_tj_candle"] },
        { id:"sfx_tj_banana", sources:[ "sfx_tj_banana"] },
        { id:"sfx_tj_mousetrap", sources:[ "sfx_tj_mousetrap-1", "sfx_tj_mousetrap-2", "sfx_tj_mousetrap-3"] },
        { id:"sfx_tj_fryingpan", sources:[ "sfx_tj_fryingpan-1", "sfx_tj_fryingpan-2", "sfx_tj_fryingpan-3"] },
        { id:"sfx_tj_tom", sources:[ "sfx_tj_tom-1", "sfx_tj_tom-2", "sfx_tj_tom-3", "sfx_tj_tom-4"] },
        { id:"sfx_tj_jerry", sources:[ "sfx_tj_jerry"] },
        { id:"sfx_tj_fish", sources:[ "sfx_tj_fish"] },
        { id:"sfx_tj_icecream", sources:[ "sfx_tj_icecream"] },
        { id:"sfx_tj_icecream-trail", sources:[ "sfx_tj_icecream-trail"] },
        { id:"sfx_tj_sprinkles", sources:[ "sfx_tj_sprinkles"] },
        { id:"sfx_tj_sprinkles-explode", sources:[ "sfx_tj_sprinkles-explode"] },
        { id:"sfx_tj_chocolate-stars", sources:[ "sfx_tj_chocolate-stars"] },
        { id:"sfx_tj_cherry", sources:[ "sfx_tj_cherry"] },
        { id:"sfx_tj_silver", sources:[ "sfx_tj_silver-1", "sfx_tj_silver-2"] },
        { id:"sfx_tj_bacon", sources:[ "sfx_tj_bacon-1", "sfx_tj_bacon-2"] },
        { id:"sfx_tj_tomato", sources:[ "sfx_tj_tomato-1", "sfx_tj_tomato-2"] },
        { id:"sfx_tj_cheese", sources:[ "sfx_tj_cheese-1", "sfx_tj_cheese-2"] },
        { id:"sfx_tj_egg", sources:[ "sfx_tj_egg-1", "sfx_tj_egg-2"] },
        { id:"sfx_tj_paintbrush", sources:[ "sfx_tj_paintbrush"] },
        { id:"sfx_tj_brush", sources:[ "sfx_tj_brush"] },
        { id:"sfx_tj_cheese", sources:[ "sfx_tj_cheese-1"] },
        { id:"sfx_tj_splooge", sources:[ "sfx_tj_splooge" ] },
        { id:"sfx_tj_fur", sources:[ "sfx_tj_fur" ] },

        { id:"game_music", sources:[ "game_music" ] },
        { id:"menu_music", sources:[ "menu_music" ] }
    ];

    var toolbank = { // tool configuration

        null: { type: 'Null' },

        eraser_medium: { type: 'Eraser', flibId:'flib/application.flib', icon: 'Icon_Eraser_Medium', hideSelectedCursor: true, sprite:'Brush_Eraser', soundFX:'sfx_eraser' },

        pencil_orange: { type: 'Crayon', colour:'#ff9d04', flibId:'flib/application.flib', icon: 'Icon_Pencil', hideSelectedCursor: true, sprite:'Brush_Crayon', motionScaleData: {minScale:0.3, maxScale: 0.8, maxMag: 50}, tintRange: 0.09, soundFX:'sfx_tj_brush' },
        pencil_blue: { type: 'Crayon', colour:'#13b4fe', flibId:'flib/application.flib', icon: 'Icon_Pencil', hideSelectedCursor: true, sprite:'Brush_Crayon', motionScaleData: {minScale:0.3, maxScale: 0.8, maxMag: 50}, tintRange: 0.09, soundFX:'sfx_tj_brush' },
        pencil_brown: { type: 'Crayon', colour:'#752B02', flibId:'flib/application.flib', icon: 'Icon_Pencil', hideSelectedCursor: true, sprite:'Brush_Crayon', motionScaleData: {minScale:0.3, maxScale: 0.8, maxMag: 50}, tintRange: 0.09, soundFX:'sfx_tj_brush' },
        pencil_green: { type: 'Crayon', colour:'#48df1f', flibId:'flib/application.flib', icon: 'Icon_Pencil', hideSelectedCursor: true, sprite:'Brush_Crayon', motionScaleData: {minScale:0.3, maxScale: 0.8, maxMag: 50}, tintRange: 0.09, soundFX:'sfx_tj_brush' },
        pencil_yellow: { type: 'Crayon', colour:'#ffff03', flibId:'flib/application.flib', icon: 'Icon_Pencil', hideSelectedCursor: true, sprite:'Brush_Crayon',  motionScaleData: {minScale:0.3, maxScale: 0.8, maxMag: 50}, tintRange: 0.09, soundFX:'sfx_tj_brush' },
        pencil_red: { type: 'Crayon', colour:'#B6382C', flibId:'flib/application.flib', icon: 'Icon_Pencil', hideSelectedCursor: true, sprite:'Brush_Crayon', motionScaleData: {minScale:0.3, maxScale: 0.8, maxMag: 50}, tintRange: 0.09, soundFX:'sfx_tj_brush' },
        pencil_pink: { type: 'Crayon', colour:'#FFAEAC', flibId:'flib/application.flib', icon: 'Icon_Pencil', hideSelectedCursor: true, sprite:'Brush_Crayon', motionScaleData: {minScale:0.3, maxScale: 0.8, maxMag: 50}, tintRange: 0.09, soundFX:'sfx_tj_brush' },
        pencil_dark_purple: { type: 'Crayon', colour:'#7429ff', flibId:'flib/application.flib', icon: 'Icon_Pencil', hideSelectedCursor: true, sprite:'Brush_Crayon', motionScaleData: {minScale:0.3, maxScale: 0.8, maxMag: 50}, tintRange: 0.09, soundFX:'sfx_tj_brush' },

        paintbrush_orange: { type: 'PaintBrush', colour:'#FFAB03', flibId:'flib/application.flib', icon: 'Icon_PaintBrush', hideSelectedCursor: true, sprite:'Brush_PaintBrush', plotResolution: 7, motionScaleData: {minScale:0.35, maxScale:1, maxMag: 50}, tintRange: 0.09, soundFX:'sfx_tj_paintbrush' },
        paintbrush_yellow: { type: 'PaintBrush', colour:'#ffff03', flibId:'flib/application.flib', icon: 'Icon_PaintBrush', hideSelectedCursor: true, sprite:'Brush_PaintBrush', plotResolution: 7, motionScaleData: {minScale:0.35, maxScale:1, maxMag: 50}, tintRange: 0.09, soundFX:'sfx_tj_paintbrush'  },
        paintbrush_red: { type: 'PaintBrush', colour:'#B6382C', flibId:'flib/application.flib', icon: 'Icon_PaintBrush', hideSelectedCursor: true, sprite:'Brush_PaintBrush', plotResolution: 7, motionScaleData: {minScale:0.35, maxScale:1, maxMag: 50}, tintRange: 0.09, soundFX:'sfx_tj_paintbrush'  },
        paintbrush_redorange: { type: 'PaintBrush', colour:'#ff9d04', flibId:'flib/application.flib', icon: 'Icon_PaintBrush', hideSelectedCursor: true, sprite:'Brush_PaintBrush', plotResolution: 7, motionScaleData: {minScale:0.35, maxScale:1, maxMag: 50}, tintRange: 0.09, soundFX:'sfx_tj_paintbrush'  },
        paintbrush_green: { type: 'PaintBrush', colour:'#48df1f', flibId:'flib/application.flib', icon: 'Icon_PaintBrush', hideSelectedCursor: true, sprite:'Brush_PaintBrush', plotResolution: 7, motionScaleData: {minScale:0.35, maxScale:1, maxMag: 50}, tintRange: 0.07, soundFX:'sfx_tj_paintbrush'  },
        paintbrush_lightblue: { type: 'PaintBrush', colour:'#13b4fe', flibId:'flib/application.flib', icon: 'Icon_PaintBrush', hideSelectedCursor: true, sprite:'Brush_PaintBrush', plotResolution: 7, motionScaleData: {minScale:0.35, maxScale:1, maxMag: 50}, tintRange: 0.09, soundFX:'sfx_tj_paintbrush'  },
        paintbrush_pink: { type: 'PaintBrush', colour:'#ff28a1', flibId:'flib/application.flib', icon: 'Icon_PaintBrush', hideSelectedCursor: true, sprite:'Brush_PaintBrush', plotResolution: 7, motionScaleData: {minScale:0.35, maxScale:1, maxMag: 50}, tintRange: 0.09, soundFX:'sfx_tj_paintbrush'  },
        paintbrush_lightpink: { type: 'PaintBrush', colour:'#FFAEAC', flibId:'flib/application.flib', icon: 'Icon_PaintBrush', hideSelectedCursor: true, sprite:'Brush_PaintBrush', plotResolution: 7, motionScaleData: {minScale:0.35, maxScale:1, maxMag: 50}, tintRange: 0.09, soundFX:'sfx_tj_paintbrush'  },
        paintbrush_greyblue: { type: 'PaintBrush', colour:'#2C6075', flibId:'flib/application.flib', icon: 'Icon_PaintBrush', hideSelectedCursor: true, sprite:'Brush_PaintBrush', plotResolution: 7, motionScaleData: {minScale:0.35, maxScale:1, maxMag: 50}, tintRange: 0.09, soundFX:'sfx_tj_paintbrush'  },
        paintbrush_grey: { type: 'PaintBrush', colour:'#726749', flibId:'flib/application.flib', icon: 'Icon_PaintBrush', hideSelectedCursor: true, sprite:'Brush_PaintBrush', plotResolution: 7, motionScaleData: {minScale:0.35, maxScale:1, maxMag: 50}, tintRange: 0.09, soundFX:'sfx_tj_paintbrush'  },
        paintbrush_brown: { type: 'PaintBrush', colour:'#752B02', flibId:'flib/application.flib', icon: 'Icon_PaintBrush', hideSelectedCursor: true, sprite:'Brush_PaintBrush', plotResolution: 7, motionScaleData: {minScale:0.35, maxScale:1, maxMag: 50}, tintRange: 0.09, soundFX:'sfx_tj_paintbrush'  },
        paintbrush_turq: { type: 'PaintBrush', colour:'#0acd8c', flibId:'flib/application.flib', icon: 'Icon_PaintBrush', hideSelectedCursor: true, sprite:'Brush_PaintBrush', plotResolution: 7, motionScaleData: {minScale:0.35, maxScale:1, maxMag: 50}, tintRange: 0.09, soundFX:'sfx_tj_paintbrush'  },
        paintbrush_purple: { type: 'PaintBrush', colour:'#7429ff', flibId:'flib/application.flib', icon: 'Icon_PaintBrush', hideSelectedCursor: true, sprite:'Brush_PaintBrush', plotResolution: 7, motionScaleData: {minScale:0.35, maxScale:1, maxMag: 50}, tintRange: 0.09, soundFX:'sfx_tj_paintbrush'  },


        picturehose_fur1: { type: 'PictureHose', flibId:'flib/application.flib', icon: 'Icon_PictureHose_Fur1', sprite:'Brush_Fur1', sparsity: 8, scaleMin: 0.2, scaleMax: 1, rotateMode:'RANDOM', spread:{ x: 18, y:18 }, soundFX:'sfx_tj_fur' },
        picturehose_fur2: { type: 'PictureHose', flibId:'flib/application.flib', icon: 'Icon_PictureHose_Fur2', sprite:'Brush_Fur2', sparsity: 8, scaleMin: 0.4, scaleMax: 1.1, rotateMode:'RANDOM', spread:{ x: 20, y:20 } ,soundFX:'sfx_tj_fur' },
        picturehose_tnt: { type: 'PictureHose', flibId:'flib/application.flib', icon: 'Icon_PictureHose_TNT', sprite:'Brush_Explosion', sparsity: 8, scaleMin: 0.4, scaleMax: 1.1, rotateMode:'RANDOM', spread:{ x: 35, y:35 }, soundFX:'sfx_tj_tnt' },
        picturehose_cheese: { type: 'PictureHose', flibId:'flib/application.flib', icon: 'Icon_PictureHose_Cheese', sprite:'Brush_Cheese', sparsity: 8, scaleMin: 0.4, scaleMax: 1.1, rotateMode:'RANDOM', spread:{ x: 38, y: 38 }, soundFX:'sfx_tj_cheese' },
        picturehose_splat: { type: 'PictureHose', flibId:'flib/application.flib', icon: 'Icon_PictureHose_Splat', sprite:'Brush_Splat', sparsity: 8, scaleMin: 0.4, scaleMax: 1.1, rotateMode:'RANDOM', spread:{ x: 38, y: 38 }, soundFX:'sfx_tj_icecream-trail' },
        picturehose_balloon: { type: 'PictureHose', flibId:'flib/application.flib', icon: 'Icon_PictureHose_Balloon', sprite:'Brush_Balloon', sparsity: 8, scaleMin: 0.8, scaleMax: 1, rotateMode:'NONE', spread:{ x: 35, y:35 }, soundFX:'sfx_tj_balloon' },
        picturehose_sprinkles: { type: 'PictureHose', flibId:'flib/application.flib', icon: 'Icon_PictureHose_Sprinkles', sprite:'Brush_Sprinkles', sparsity: 3, scaleMin: 0.8, scaleMax: 1, rotateMode:'RANDOM', spread:{ x: 25, y:25 }, soundFX:'sfx_tj_sprinkles' },

        sticker_mousetrap: { type: 'Sticker', flibId:'flib/application.flib', icon: 'Icon_Sticker_MouseTrap', sprite:'Brush_Sticker_MouseTrap', soundFX:'sfx_tj_mousetrap', staticFrame: 6 },
        sticker_pan: { type: 'Sticker', flibId:'flib/application.flib', icon: 'Icon_Sticker_Pan', sprite:'Brush_Sticker_Pan', soundFX:'sfx_tj_fryingpan' },
        sticker_tom: { type: 'Sticker', flibId:'flib/application.flib', icon: 'Icon_Sticker_Tom', sprite:'Brush_Sticker_Tom', soundFX:'sfx_tj_tom' },
        sticker_jerry: { type: 'Sticker', flibId:'flib/application.flib', icon: 'Icon_Sticker_Jerry', sprite:'Brush_Sticker_Jerry', soundFX:'sfx_tj_jerry' },
        sticker_candle: { type: 'Sticker', flibId:'flib/application.flib', icon: 'Icon_Sticker_Candle', sprite:'Brush_Sticker_Candle', soundFX:'sfx_tj_candle' },
        sticker_pup: { type: 'Sticker', flibId:'flib/application.flib', icon: 'Icon_Sticker_Pup', sprite:'Brush_Sticker_Pup', soundFX:'sfx_tj_tyke' },
        sticker_gift: { type: 'Sticker', flibId:'flib/application.flib', icon: 'Icon_Sticker_Gift', sprite:'Brush_Sticker_Gift', soundFX:'sfx_tj_present' },
        sticker_tomato: { type: 'Sticker', flibId:'flib/application.flib', icon: 'Icon_Sticker_Tomato', sprite:'Brush_Sticker_Tomato', soundFX:'sfx_tj_tomato' },
        sticker_star: { type: 'Sticker', flibId:'flib/application.flib', icon: 'Icon_Sticker_Star', sprite:'Brush_Sticker_Star', soundFX:'sfx_tj_chocolate-stars' },
        sticker_fightpan: { type: 'Sticker', flibId:'flib/application.flib', icon: 'Icon_Sticker_FightPan', sprite:'Brush_Sticker_FightPan', soundFX:'sfx_tj_fryingpan', rotateMode:'NONE' },
        sticker_fish: { type: 'Sticker', flibId:'flib/application.flib', icon: 'Icon_Sticker_Fish', sprite:'Brush_Sticker_Fish', soundFX:'sfx_tj_fish', rotateMode:'NONE' },
        sticker_fishfight: { type: 'Sticker', flibId:'flib/application.flib', icon: 'Icon_Sticker_FishFight', sprite:'Brush_Sticker_FishFight', soundFX:'sfx_tj_fish', rotateMode:'NONE' },
        sticker_cherry: { type: 'Sticker', flibId:'flib/application.flib', icon: 'Icon_Sticker_Cherry', sprite:'Brush_Sticker_Cherry', soundFX:'sfx_tj_cherry' },
        sticker_silver: { type: 'Sticker', flibId:'flib/application.flib', icon: 'Icon_Sticker_Silver', sprite:'Brush_Sticker_Silver', soundFX:'sfx_tj_silver' },
        sticker_bacon: { type: 'Sticker', flibId:'flib/application.flib', icon: 'Icon_Sticker_Bacon', sprite:'Brush_Sticker_Bacon', soundFX:'sfx_tj_bacon' },
        sticker_icecream: { type: 'Sticker', flibId:'flib/application.flib', icon: 'Icon_Sticker_IceCream', sprite:'Brush_Sticker_IceCream', soundFX:'sfx_tj_icecream', rotateMode:'NONE' },
        sticker_partyhorn: { type: 'Sticker', flibId:'flib/application.flib', icon: 'Icon_Sticker_PartyHorn', sprite:'Brush_Sticker_PartyHorn', soundFX:'sfx_tj_blower' },
        sticker_sprinkles: { type: 'Sticker', flibId:'flib/application.flib', icon: 'Icon_Sticker_Sprinkles', sprite:'Brush_Sticker_Sprinkles', particle: 'Particle_Sprinkles', soundFX:'sfx_tj_sprinkles-explode', staticFrame: 10, enableParticles: true },
        sticker_egg: { type: 'Sticker', flibId:'flib/application.flib', icon: 'Icon_Sticker_Egg', sprite:'Brush_Sticker_Egg', staticFrame: 8, soundFX:'sfx_tj_egg' },

        squeezebottle_red: { type: 'SqueezeBottle', colour:'#BD202E', flibId:'flib/application.flib', icon: 'Icon_SqueezeBottle', hideSelectedCursor: true, sprite:'Brush_SqueezeBottle', plotResolution: 4, spread:{ x: 2, y:2 }, tintRange: 0, soundFX:'sfx_tj_splooge', enableParticles: true },

        icing_blue: { type: 'Icing', colour:'#13b4fe', flibId:'flib/application.flib', icon: 'Icon_Icing', hideSelectedCursor: true, sprite:'Brush_Icing', rotateMode:'ANGLE', plotResolution: 2, soundFX:'sfx_tj_splooge' },
        icing_brown: { type: 'Icing', colour:'#752B02', flibId:'flib/application.flib', icon: 'Icon_Icing', hideSelectedCursor: true, sprite:'Brush_Icing', rotateMode:'ANGLE', plotResolution: 2, soundFX:'sfx_tj_splooge' },
        icing_green: { type: 'Icing', colour:'#73AE50', flibId:'flib/application.flib', icon: 'Icon_Icing', hideSelectedCursor: true, sprite:'Brush_Icing', rotateMode:'ANGLE', plotResolution: 2, soundFX:'sfx_tj_splooge' },
        icing_yellow: { type: 'Icing', colour:'#ffff03', flibId:'flib/application.flib', icon: 'Icon_Icing', hideSelectedCursor: true, sprite:'Brush_Icing', rotateMode:'ANGLE', plotResolution: 2, soundFX:'sfx_tj_splooge' },
        icing_pink: { type: 'Icing', colour:'#ff28a1', flibId:'flib/application.flib', icon: 'Icon_Icing', hideSelectedCursor: true, sprite:'Brush_Icing', rotateMode:'ANGLE', plotResolution: 2, soundFX:'sfx_tj_splooge' }
    };

    var canvasbank = { // canvas configuration
        birthday:
        {
            id:"birthday",
            thumb:"assets/canvases/birthday_thumb.png",
            canvas:"assets/canvases/birthday.png",
            frame:"assets/canvases/default_frame.png",
            tools: [
                toolbank.squeezebottle_red,
                toolbank.paintbrush_lightblue,
                toolbank.paintbrush_pink,
                toolbank.paintbrush_purple,
                toolbank.paintbrush_yellow,
                toolbank.paintbrush_green,
                toolbank.eraser_medium,
                toolbank.picturehose_fur2,
                toolbank.picturehose_fur1,
                toolbank.picturehose_tnt,
                toolbank.picturehose_balloon,
                toolbank.sticker_partyhorn,
                toolbank.sticker_gift,
                toolbank.sticker_pup,
                toolbank.sticker_candle
            ]
        },
        cupcake:
        {
            id:"cupcake",
            thumb:"assets/canvases/cupcake_thumb.png",
            canvas:"assets/canvases/cupcake.png",
            frame:"assets/canvases/default_frame.png",
            tools: [
                toolbank.squeezebottle_red,
                toolbank.null,
                toolbank.icing_pink,
                toolbank.null,
                toolbank.icing_blue,
                toolbank.null,
                toolbank.icing_yellow,
                toolbank.eraser_medium,
                toolbank.picturehose_fur2,
                toolbank.picturehose_fur1,
                toolbank.picturehose_sprinkles,
                toolbank.sticker_sprinkles,
                toolbank.sticker_star,
                toolbank.sticker_cherry,
                toolbank.sticker_silver
            ]
        },
        chase:
        {
            id:"chase",
            thumb:"assets/canvases/chase_thumb.png",
            canvas:"assets/canvases/chase.png",
            frame:"assets/canvases/default_frame.png",
            tools: [
                toolbank.squeezebottle_red,
                toolbank.paintbrush_redorange,
                toolbank.paintbrush_turq,
                toolbank.paintbrush_purple,
                toolbank.paintbrush_pink,
                toolbank.paintbrush_lightblue,
                toolbank.eraser_medium,
                toolbank.picturehose_fur2,
                toolbank.picturehose_fur1,
                toolbank.picturehose_tnt,
                toolbank.picturehose_splat,
                toolbank.sticker_mousetrap,
                toolbank.sticker_fightpan,
                toolbank.sticker_fishfight,
                toolbank.sticker_icecream
            ]
        },
        foodfight:
        {
            id:"foodfight",
            thumb:"assets/canvases/foodfight_thumb.png",
            canvas:"assets/canvases/foodfight.png",
            frame:"assets/canvases/default_frame.png",
            tools: [
                toolbank.squeezebottle_red,
                toolbank.pencil_yellow,
                toolbank.pencil_green,
                toolbank.pencil_pink,
                toolbank.pencil_dark_purple,
                toolbank.pencil_blue,
                toolbank.eraser_medium,
                toolbank.picturehose_fur2,
                toolbank.picturehose_fur1,
                toolbank.picturehose_tnt,
                toolbank.picturehose_cheese,
                toolbank.sticker_egg,
                toolbank.sticker_fish,
                toolbank.sticker_bacon,
                toolbank.sticker_tomato
            ]
        },
        blank: {
            id:"blank",
            thumb:"assets/canvases/blank_thumb.png",
            canvas:"assets/canvases/blank.png",
            frame:"assets/canvases/default_frame.png",
            tools: [
                toolbank.squeezebottle_red,
                toolbank.pencil_dark_purple,
                toolbank.pencil_orange,
                toolbank.pencil_green,
                toolbank.paintbrush_pink,
                toolbank.paintbrush_lightblue,
                toolbank.paintbrush_yellow,
                toolbank.eraser_medium,
                toolbank.picturehose_fur2,
                toolbank.picturehose_fur1,
                toolbank.picturehose_tnt,
                toolbank.sticker_mousetrap,
                toolbank.sticker_pan,
                toolbank.sticker_tom,
                toolbank.sticker_jerry
            ]
        }
    };

    exports.canvases = [ // canvases deployed in the app
        canvasbank.birthday,
        canvasbank.cupcake,
        canvasbank.chase,
        canvasbank.foodfight,
        canvasbank.blank
    ];

    return exports ;

});
