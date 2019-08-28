var doorList = [];
var doorSprites = [];
var numOfDoors = 15;

var doorSpriteList = [];
var doorSpriteSheet = 'doors';
var scaleX = 1.05;
var scaleY = 1.05;

var doorCollisionGroup;

function createDoors(game){
    
    doorList = [];
    doorSprites = [];
    numOfDoors = 15;
    
    doorSpriteList = [];
    doorSpriteSheet = 'doors';
    scaleX = 1.05;
    scaleY = 1.05;
    
    //[[door 1 open, door 1 closed],[door 2 open, door 2 closed],...]
    for (var i = 0; i < 13; i++){
        doorSpriteList.push([2 * i, 2 * i + 1]);
    }
    //24x46
    //[opened boolean, posX, posY, doorSprite number]
    //Shack
    var tempXOffset = 10;
    addDoor(true,681 + tempXOffset,1033,1);
    addDoor(false,559 + tempXOffset,1033,1);
    //First building
    addDoor(false,954 + tempXOffset,873,3);
    addDoor(false,956 + tempXOffset,793,3);
    addDoor(false,1052 + tempXOffset,793,6);
    addDoor(false,1048 + tempXOffset,1033,4);
    addDoor(false,1159 + tempXOffset,953,5);
    addDoor(true,1271 + tempXOffset,953,6);
    //Second building
    addDoor(true,1578 + tempXOffset,793,7);
    addDoor(false,1578 + tempXOffset,713,8);
    addDoor(false,1689 + tempXOffset,1033,9);
    addDoor(false,1916 + tempXOffset,1033,10);
    addDoor(false,1992 + tempXOffset,1033,11);
    addDoor(false,1781 + tempXOffset,953,12);
    addDoor(false,2281 + tempXOffset,1209,10);
    
    addDoor(false,2810 + tempXOffset,1033,4);
    addDoor(false,4227 + tempXOffset,1033,0);
    addDoor(false,3820 + tempXOffset,1033,10);
    addDoor(false,3514 + tempXOffset,1033,2);
    addDoor(false,3596 + tempXOffset,1033,6);
    addDoor(false,3355 + tempXOffset,1033,5);
    addDoor(false,3395 + tempXOffset,633,1);
    
    addDoor(false,4801 + tempXOffset,1033,0);
    addDoor(false,5837 + tempXOffset,728,10);
    
    for (var i = 0; i < doorList.length; i++){
        //Determines open or closed
        var spriteNum = 1;
        if(doorList[i][0]){
            spriteNum = 0;
        }
        doorSprites.push(
            game.add.sprite(
                doorList[i][1],
                doorList[i][2],
                doorSpriteSheet, 
                doorSpriteList[doorList[i][3]][spriteNum]
            )
        );
        doorSprites[i].scale.set(1.05,1.05);
        game.physics.p2.enable(doorSprites[i],false);
        doorSprites[i].body.setRectangle(5,50,-11,0);
        if(doorList[i][0]){
            doorSprites[i].body.clearShapes();
        }
        doorSprites[i].body.static = true;
        //doorSprites[i].body.debug = true;
    }
    doorCollisionGroup = game.physics.p2.createCollisionGroup();
}

function setUpDoorColliders(){
    for (var i = 0; i < doorList.length; i++){
        doorSprites[i].body.setCollisionGroup(doorCollisionGroup);
        doorSprites[i].body.collides([doorCollisionGroup, playerCollisionGroup]);
    }
}

function addDoor(open,posX,posY,spriteNum){
    doorList.push([open,posX,posY,spriteNum]);
}

//door = sprite object
function openDoor(door,direction,shakeOrNo){
    doorSprites[door].frame = doorSpriteList[doorList[door][3]][0];
    if(direction == -1){
        doorSprites[door].scale.set(-scaleX,scaleY);
        doorSprites[door].body.x -= 24;
    }
    doorList[door][0] = true;
    doorSprites[door].body.clearShapes();
    if(shakeOrNo){
        playSound('doorBreak');
        shakePlayer();
    }
    else{
        playSound('doorOpen');
    }
}