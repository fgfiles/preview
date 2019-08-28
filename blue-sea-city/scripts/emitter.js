//LAST UPDATED WED APRIL 12
//Functions associated with playing different types of particle emitters

var showPixieDust = true;

var particlesPerEmitter;

var lootEmitterArray;

function createLootEmitters(game){
    
    showPixieDust = true;
    
    if (showPixieDust){
        
        particlesPerEmitter = 7;
        lootEmitterArray = [];
        for (var i = 0; i < lootArray.length; i++) { 
            var dust = game.add.emitter(lootArray[i].centerX,lootArray[i].centerY,particlesPerEmitter);
            lootEmitterArray.push(dust);
            //Placed here so that these aren't called every time an emitter is started
            dust.makeParticles('pixieDust',[0,1,2,3,4,5,6,7,8,10,11,12,13]);
            //console.log("added Emitter to ARRAY: " + lootEmitterArray[i]);
            dust.gravity = -30; //need this
            dust.width = 15;
            dust.height = 15;
            dust.maxParticleAlpha = 1.0; 
            //for info: setScale(minX, maxX, minY, maxY, rate, ease, yoyo)
            dust.setScale(0.1,1.4,0.1,1.4,250);
            dust.setRotation(200,300); //spins each particle
            dust.maxParticleSpeed.setTo(10,10);
            dust.minParticleSpeed.setTo(-7,-7);
        }
        //console.log("length of lootEmitterArray AFTER adding emitters: " + lootEmitterArray.length);
    }
}
    
function playOnCollectEmitter(posX,posY,game){
    var poofEmitter = game.add.emitter(posX,posY); //max particles
    //for info: makeParticles(keys, frames, quantity, collide, collideWorldBounds)
    poofEmitter.makeParticles('poofDustRainbow',[1,2,3,4,5,6,8,9,10,11,12,13]);
    poofEmitter.gravity = 200;
    //for info: setScale(minX, maxX, minY, maxY, rate, ease, yoyo)
    poofEmitter.setScale(1.0,1.5,1.0,1.5,300);
    poofEmitter.maxParticleSpeed.setTo(50, 50);
    //for info: start(explode, lifespan, frequency, quantity, forceQuantity)
    poofEmitter.start(true, 400, 5, 7);
}

function playPixieDustEmitter(spriteIndex){ 
    if (showPixieDust){
        //console.log("Starting PLAYING PIXIEDUST for loot: " + (spriteIndex+1)+"\t(index " + spriteIndex + " in lootArray)\n\n");
        
        var emitter = lootEmitterArray[spriteIndex];
        
        //for info: start(explode, lifespan, frequency, quantity, forceQuantity)
        emitter.start(false, 500, 300);
        //emitter.visible = true;
    }   
}

function stopPixieDustEmitter(spriteIndex){
    if (showPixieDust){
        //console.log("Stopping PLAYING PIXIEDUST for loot: " + (spriteIndex+1)+"\t(index " + spriteIndex + " in lootArray)\n\n");
        lootEmitterArray[spriteIndex].kill();
        //emitter.visible = false;
    }    
}
