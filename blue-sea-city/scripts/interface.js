//LAST UPDATED TUES MAY 2

//camera coordinates
var centX;
var centY;
var endX;
var endY;
//UI items
var lootCountText;
var timerText;
// inventory-related items
var inventorySprites; //array of small loot images for inventory
var inventoryBackground; 

//helping vars
var movedBackAlready;
var inventoryXPos;
var inventoryDownPos, inventoryUpPos;
var lootStartX, lootStartY, Xinterval, Yinterval;
var testSprite;

//booleans to turn feature on or off
var addInventory = true;
var showSecTimer = true;
var showLootCount = true;

function createUI(game){
    
    addInventory = true;
    showSecTimer = true;
    showLootCount = true;
    
    centX = CameraProp.width/2;
    centY = CameraProp.height/2;
    endX = CameraProp.width;
    endY = CameraProp.height;
    
    //for testing
    // console.log("Camera width: " + CameraProp.width);
    // console.log("Camera height: " + CameraProp.height);
    
    
    //Game timer text - initialization (update is below in updateUI)
    if (showSecTimer){
        timerText = game.add.text(endX*(0.443),endY*(0.02), //0.42,0.02
            gameTimer.seconds/60 + ":" + Math.floor(gameTimer.seconds%60.0),
                textStyle);
        timerText.fixedToCamera = true;
        timerText.scale.setTo(0.4,0.4);
        timerText.alpha = 0;
    }
    
    //Background of inventory view (constant image)
    if (addInventory){
        
        var imageCache1 = game.cache.getImage('inventory');
        imageCache1.width = imageCache1.width*0.9;
        imageCache1.height = imageCache1.height*0.9;
        inventoryBackground = game.add.sprite(
            centX-imageCache1.width*(0.5)*(game.world.scale.x),endY*(0.89),'inventory');
        inventoryBackground.fixedToCamera = true;
        inventoryBackground.scale.setTo(0.9,0.9);
        //initialize variables for start of game
        inventoryBackground.alpha = 0.0; //this is initially 0 on restart, unless u override it somewhere
        movedBackAlready = true;
        showLootCount = true;
        
        //initialize variables for later updating of inventory location
        inventoryXPos = centX-inventoryBackground.width*(0.5)*(game.world.scale.x);
        inventoryDownPos = endY*(0.89);
        inventoryUpPos = centY-((inventoryBackground.height*1.11)*(0.5))*(game.world.scale.y);
        
        setupInventorySprites(game);
        inventoryBackground.cameraOffset.setTo(inventoryXPos,inventoryDownPos);
    }
    
    if (showLootCount) {
        //Text for number of loot collected
        lootCountText = game.add.text(endX*(0.876),endY*(0.94),lootCollected, textStyle);
        lootCountText.fixedToCamera = true;
        lootCountText.anchor.setTo(0.5,0.5);
        lootCountText.align = "center";
        lootCountText.scale.setTo(0.3,0.3);
        lootCountText.alpha = 0.0;
    }
}

function updateUI(game){ 
    
    if (needUpdateLootUI && showLootCount){
        lootCountText.setText(lootCollected);
        needUpdateLootUI = false;
    }
    
    if (showSecTimer){
        var gameSeconds = gameTimer.seconds;
        var secFormat = (Math.floor(gameSeconds%60)).toString();
        if (secFormat.length < 2) {
            secFormat = "0" + secFormat; 
        }
        var minFormat = (Math.floor(gameSeconds/60.0)).toString();
        timerText.setText(minFormat + ":"+ secFormat);
    }
    
    if (addInventory){        
        if (inventoryView && !dontShowInventory) { //C is held down on keyboard or Y on gamepad
            //move to centered position            
            lootCountText.alpha = 0.0;
            inventoryBackground.cameraOffset.setTo(inventoryXPos,inventoryUpPos);
            //fill inventory with items
            displayInventory();
            movedBackAlready = false;
        }
        else {
            if (!movedBackAlready){        
                if(playerState != 'win' && playerState != 'wave'){
                    lootCountText.alpha = 1.0;                
                }
                //loot images aren't shown anymore
                undisplayInventory();
                inventoryBackground.cameraOffset.setTo(inventoryXPos,inventoryDownPos);
                movedBackAlready = true;
            }
        }
    }
}   

function setupInventorySprites(game){
     var newLength;
     lootStartX = inventoryXPos + (74)*game.world.scale.x*(0.9);
     lootStartY =  inventoryUpPos + (61)*game.world.scale.y*(0.9);
     Xinterval = 92*game.world.scale.x*(0.9);
     Yinterval = 30*game.world.scale.y*(0.9);
     inventorySprites = new Array(0);
     objPosData.layers[2].objects.forEach(function(item){ //loot.js is defined before UI...make sure this works
        if (item.name != "nothing"){
            var tempX = lootStartX+(item.properties.LootIndex%4)*Xinterval;
            var tempY = lootStartY+Math.floor(item.properties.LootIndex/4)*Yinterval;
            if (item.properties.LootIndex != horsePosition){
                 newLength = inventorySprites.push(game.add.sprite(tempX,tempY,item.name));
                }
            else { //is the horse
                newLength = inventorySprites.push(game.add.sprite(tempX,tempY,'horse'));
            }
            //initial settings for the sprite images
             inventorySprites[newLength-1].cameraOffset.setTo(tempX,tempY);
             inventorySprites[newLength-1].fixedToCamera = true;
             inventorySprites[newLength-1].alpha = 0.0;
             inventorySprites[newLength-1].scale.setTo(0.9,0.9);
                        
        }                
    });     
}

function displayInventory(){
     //testSprite.alpha = 1.0;
     for (var i = 0; i < totalLoot; i++){
         if (lootBooleans[i]){ //picked up already
             inventorySprites[i].alpha = 1.0;
         } 
         else{ inventorySprites[i].alpha = 0.1; }
     }     
}

function undisplayInventory(){
     //testSprite.alpha = 0.0;
     inventorySprites.forEach(function(sprite){
         sprite.alpha = 0.0;
         });
}

/*
    MARIA NOTES FOR UI:
    
    UI unchanging 
        background images for inventory
        
    
    UI that needs updating
        Number of loot collected (changes when interact)(lower right)
        Time elapsed (all the time) (upper center)
        Loot inventory (changes visual when collect loot)
        Y location of loot inventory and loot count
        
    https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
    http://upshots.org/actionscript/jsas-understanding-easing
*/