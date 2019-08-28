var levelCollisionGroup;
var worldMaterial;
var level;
var playerMat;

//var hintTextStyle;
//var runText, jumpText, dashText, wallJumpText;
var playerTutorialSprites;

//boolean
//var showTextHints = false;


function createLevel(game){
    
    // hintTextStyle = {
    //     font: "40px Hind",
    //     fill: "#221122", //"#ffffff",
    //     align: "center",
    //     shadowColor: 'rgba(0.2,0.2,0.2,0.5)',  //"#333333"
    //     shadowOffsetX: 3, shadowOffsetY: 3, shadowBlur: 8,
    //     shadowFill: true, shadowStroke: false        
    //     }; 
 
    level = game.add.sprite(3500,700,'level');
    game.physics.p2.enable(level, true);
    level.body.static = true;
    level.body.clearShapes();
    level.body.loadPolygon('physicsData', 'full_level1');
    level.body.updateCollisionMask();
    worldMaterial = game.physics.p2.createMaterial('worldMaterial');
    playerMat = game.physics.p2.createMaterial('playerMaterial');
    var contactMaterial = game.physics.p2.createContactMaterial(playerMat, worldMaterial);
    contactMaterial.restitution = 1;
    game.physics.p2.setWorldMaterial(worldMaterial,true,true,true,true);
    //level.setWorld
    //level.body.setMaterial(worldMaterial);
    //console.log(level.contactMaterial);
    level.body.debug = false;
    

    levelCollisionGroup = game.physics.p2.createCollisionGroup();
    //function controlling text hints at bottom
    //inGameTextHints(showTextHints, game);
    playerTutorialSprites = game.add.sprite(489,848,'player_tutorial');
    playerTutorialSprites.alpha = 0;
}

function setUpLevelColliders(game){
    level.body.setCollisionGroup(levelCollisionGroup);
    level.body.collides([levelCollisionGroup, playerCollisionGroup]);
    level.body.setMaterial(worldMaterial);
    
    
}

function initializeLevel(game){
    game.physics.p2.updateBoundsCollisionGroup();
    game.physics.p2.frictionStiffness = 0.0;
    game.physics.p2.friction = 0.0;

}

// function inGameTextHints(showHints, game){
//     if (showHints){ //update these coordinates, they are from an old graybox level
//          runText = game.add.text(100,980,'<< Use L and R arrow keys to move >>',hintTextStyle);
//          jumpText = game.add.text(170,1000,'  << Use Z or SPACE to jump >>',hintTextStyle);
//          dashText = game.add.text(705,980,'   << Use X to dash\nHint: Hold R or L arrow >>',hintTextStyle); 
//          wallJumpText = game.add.text(420,900,'<< Try to jump up a wall!\nHint: Hold R or L arrow >>',hintTextStyle);
//          runText.scale.setTo(0.2,0.2);
//          jumpText.scale.setTo(0.2,0.2);
//          dashText.scale.setTo(0.2,0.2);
//          wallJumpText.scale.setTo(0.2,0.2);
//     }       
// }