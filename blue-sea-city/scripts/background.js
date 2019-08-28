var backgroundSprite_1;
var backgroundSprite_2;
var backgroundSprite_3;
var foregroundSprite_1;

/*
var lowestAnchorY = 1.09;
var highestAnchorY = 0.6;
var lowestCameraY = 2397;
var highestCameraY = 300;
*/
//var lowestAnchorY = 1.09;
var lowestAnchorY = 1.11;
var highestAnchorY = 0.6;
var lowestCameraY = 2050;
var highestCameraY = 100;

var lowestAnchorX = 0.065;
var highestAnchorX = 0.823;
var lowestCameraX = 0;
var highestCameraX = 15000;

var anchorYSlope = (lowestAnchorY - highestAnchorY) / (lowestCameraY - highestCameraY);
var anchorYB = lowestAnchorY - anchorYSlope * lowestCameraY;
var anchorXSlope = (lowestAnchorX - highestAnchorX) / (lowestCameraX - highestCameraX);
var anchorXB = lowestAnchorX - anchorXSlope * lowestCameraX;

var dontUpdateBackground = 0;


function createBackground(game){
    
    lowestAnchorX = 0.065;
    highestAnchorX = 0.823;
    lowestCameraX = 0;
    highestCameraX = 15000;
    
    anchorYSlope = (lowestAnchorY - highestAnchorY) / (lowestCameraY - highestCameraY);
    anchorYB = lowestAnchorY - anchorYSlope * lowestCameraY;
    anchorXSlope = (lowestAnchorX - highestAnchorX) / (lowestCameraX - highestCameraX);
    anchorXB = lowestAnchorX - anchorXSlope * lowestCameraX;
    
    dontUpdateBackground = 0;
    
    backgroundSprite_1 = game.add.sprite(300,950,'background_1');
    //background_1_blur1
    
    game.physics.p2.enable(backgroundSprite_1, true);
    backgroundSprite_1.body.static = true;
    backgroundSprite_1.body.clearShapes();
    backgroundSprite_1.body.debug = true;
    backgroundSprite_1.scale.set(2,2);
    //backgroundSprite_1.scale.set(0.5,0.5);
    backgroundSprite_1.fixedToCamera = true;
    backgroundSprite_1.anchor.y = lowestAnchorY;
    backgroundSprite_1.anchor.x = lowestAnchorX;
    backgroundSprite_1.x = 414;
    backgroundSprite_1.y = 1228;
    /*
    console.log("------Background Create------");
    console.log(backgroundSprite_1.x + ', ' + backgroundSprite_1.y);
    console.log(backgroundSprite_1.anchor.x + ', ' + backgroundSprite_1.anchor.y);
    */
    catWinSprite = game.add.sprite(0,0,'hot_air_balloon');
    catWinSprite.alpha = 0;
}

function setupBackground(game){
    backgroundSprite_1.anchor.y = anchorYSlope * game.camera.y + anchorYB;
    backgroundSprite_1.anchor.x = anchorXSlope * game.camera.x + anchorXB;
    //backgroundSprite_1.anchor.y = 1.1075897;
    
    
    backgroundSprite_1.anchor.y = 1.1283077;
    //backgroundSprite_1.anchor.y = 1;
    
    
    //backgroundSprite_1.anchor.x = 0.109;
    /*
    console.log("------Background Setup------");
    console.log(backgroundSprite_1.x + ', ' + backgroundSprite_1.y);
    console.log(backgroundSprite_1.anchor.x + ', ' + backgroundSprite_1.anchor.y);
    */
}

function updateBackground(game){
    
    if(dontUpdateBackground < 1){
        dontUpdateBackground++;
    }
    else{
        backgroundSprite_1.anchor.y = anchorYSlope * game.camera.y + anchorYB;
        backgroundSprite_1.anchor.x = anchorXSlope * game.camera.x + anchorXB;
        /*
        console.log("------------");
        console.log(backgroundSprite_1.x + ', ' + backgroundSprite_1.y);
        console.log(backgroundSprite_1.anchor.x + ', ' + backgroundSprite_1.anchor.y);
        */
    }
}