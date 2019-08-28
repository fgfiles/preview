//LAST UPDATED TUES MAY 2

var objPosData;
var totalLoot;

// var shoes;  //0 -> item 1
// var doll;   //1 -> item 2, and so on
// var tv;     //2
// var fish;   //3
// etcetera...

var lootBooleans; //array to keep track of collected or not: still in game=false; collected=true;
var lootArray; //array; holds the sprite objects, in order in the game
var shadowArray;

var horsePosition;

var lootCollisionGroup;

var imageOffset;
var shadowOffset;

var distWhereVisible;


function createLoot(game){
    
    totalLoot = 29;
    
    lootBooleans = [];
    for (var i = 0; i < totalLoot; i++) {
        lootBooleans.push(false);  //at first, all loot still in game
    }
    
    imageOffset = game.cache.getImage('itemBox').width/2; //could use any of the loot sprites   
    shadowOffset = 0.3;
    
    horsePosition = 15;
    
    lootArray = new Array(0);
    shadowArray = new Array(0);
    
    //import from JSON file
        /*
        MARIA NOTES
        
        JSONFile.layers[2].objects[i].properties.LootIndex = an int
        JSONFile.layers[2].objects[i].name = string
        JSONFile.layers[2].objects[i].x = an int
        JSONFile.layers[2].objects[i].y = an int
                
        */
    objPosData = game.cache.getJSON('objectPosData');
    //console.log("READING JSON LOOT FILE");
    objPosData.layers[2].objects.forEach(function(item){
        if (item.name != "nothing"){
        // console.log("Object: "+item.name);
        // console.log("LootIndex: "+item.properties.LootIndex);
        // console.log("Pos: ("+item.x+","+item.y+")");
        shadowArray.push(game.add.sprite((item.x+imageOffset),(item.y+imageOffset),item.name));
        lootArray.push(game.add.sprite((item.x+imageOffset),(item.y+imageOffset),item.name));
        }
                
    });
    //console.log("shadowArray length: " + shadowArray.length);
    for (var i = 0; i < totalLoot; i++) {
        shadowArray[i].anchor.set(0.45);
        shadowArray[i].tint = 0x000000;
        shadowArray[i].alpha = 0.5;
        shadowArray[i].scale.setTo(1.1,1.1);
        if(i == horsePosition){
            shadowArray[i].alpha = 0; //no shadow on the horse
        }
    }
            
    // console.log("Object: "+objPosData.layers[2].objects[3].name);
    // console.log("LootIndex: "+objPosData.layers[2].objects[3].properties.LootIndex);
    // console.log("is index a number? "+ (typeof objPosData.layers[2].objects[4].properties.LootIndex === 'number'));
    

    /*
    x = game.add.sprite(950,120,'x');
    lootArray.push(x);
    */
    
    //console.log("length of lootArray AFTER adding objs: " + lootArray.length);
    
    game.physics.p2.enable(lootArray,false); //testing this with array
    
        
    /* original code lines for each object
    xSensor = x.body.setRectangle(25);
    xlockSensor.sensor = true;
    x.body.static = true;
    */
    
    // loop through objects currently in lootArray, create sensors for them in-game
    for (var objIndex = 0; objIndex < lootArray.length; objIndex++){
        //console.log("obj " + objIndex + ":  " + lootArray[objIndex].body); //uncomment if want to see how many times it loops
        var newSensor = lootArray[objIndex].body.setRectangle(25); //square shape
        newSensor.sensor = true;
        lootArray[objIndex].body.static = true;
    }
    
    
    lootCollisionGroup = game.physics.p2.createCollisionGroup();
    distWhereVisible = 270;
    
}

function setUpLootColliders(){
   
    /*  original code lines 
    x.body.setCollisionGroup(lootCollisionGroup);
    x.body.collides([lootCollisionGroup, playerCollisionGroup]);
    */
    //Loop through all objects currently added to lootArray; setup collider groups
    for (var objIndex = 0; objIndex < lootArray.length; objIndex++){
        lootArray[objIndex].body.setCollisionGroup(lootCollisionGroup);
        lootArray[objIndex].body.collides([lootCollisionGroup, playerCollisionGroup]);
    } 
}

function updateLootEmitters(game){
    if (showPixieDust){    
        for (var objIndex = 0; objIndex < lootArray.length; objIndex++){
            //console.log("\n\nlootArray["+objIndex+"].exists: " + lootArray[objIndex].exists);
            //console.log("lootEmitterArray["+objIndex+"].exists: "+lootEmitterArray[objIndex].exists);
            //console.log("emitter on BEFORE call: " +lootEmitterArray[objIndex].on);
            if (lootArray[objIndex].exists){ //if the loot is still in game
                var distFromPlayer = game.math.distance(playerSprite.body.x,playerSprite.body.y,
                                        lootArray[objIndex].centerX,lootArray[objIndex].centerY);
                //console.log("Dist of loot "+objIndex+" from player: "+distFromPlayer);
                
                if (distFromPlayer < distWhereVisible && lootEmitterArray[objIndex].on == false){
                    playPixieDustEmitter(objIndex);
                }
                else if (lootEmitterArray[objIndex].on == true && distFromPlayer > distWhereVisible){
                    stopPixieDustEmitter(objIndex);
                }
                
                else { 
                    //console.log("not within distance"); 
                }
                //console.log("emitter on AFTER call: " +lootEmitterArray[objIndex].on);
            }
            else { 
                //console.log("----Sprite didn't exist----");              
            }            
        }  
    }
}


