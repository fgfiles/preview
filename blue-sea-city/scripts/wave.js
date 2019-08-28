var waveSprite;
var waterSprite;
var waveSensor;
//var waveSpeed = 40;
var waveSpeed = 50;
var waveVar = 0.01;

var waveCollisionGroup;
var deadWaveGroup;
var deathTest = false;

function createWave(game){
    
    waveSpeed = 50;
    waveVar = 0.01;
    
    deathTest = false;
    
    //waveSprite = game.add.sprite(-600,702,'wave1');
    //waveSprite = game.add.sprite(-600,702,'wave-animation');
    waveSprite = game.add.sprite(-1000,702,'wave-animation_down');
    //waveSprite = game.add.sprite(-1000,702,'wave-animation_down');
    waveSprite.animations.add('main-wave',[0,1,2,3,4,5,6,7],10, true);
    waveSprite.animations.add('still-wave',[0],1,true);
    waveSprite.animations.play('main-wave');
    waveSprite.scale.set(2,2);
    game.physics.p2.enable(waveSprite,true);
    waveSprite.body.clearShapes();
    waveSensor = waveSprite.body.loadPolygon('waveData', 'waveP');

    //waveSensor = waveSprite.body.addRectangle(400,2000,0,0);
    waveSprite.body.static = true;
    waveSensor.sensor = true;
    waveSprite.alpha = 0.88;
    waveSprite.body.debug = false;
    
    //waveSprite.body.velocity.x = waveSpeed;
    /*
    waterSprite = game.add.sprite(1879.8,1650,'wave');
    waterSprite.scale.setTo(4.88,1.0);
    waterSprite.alpha = 0.2;
    game.physics.p2.enable(waterSprite,true);
    waterSprite.body.static = true;
    
    waveSprite.body.debug = false;
    */

    waveCollisionGroup = game.physics.p2.createCollisionGroup();
    deadWaveGroup = game.physics.p2.createCollisionGroup();

}

function setUpWaveCollider()
{
    waveSprite.body.setCollisionGroup(waveCollisionGroup);
    waveSprite.body.collides([waveCollisionGroup, playerCollisionGroup]);
    
}

function updateWave(game)
{
    waveSpeed = waveVar * (playerSprite.body.x - waveSprite.body.x);
    
    if(waveSpeed < 20 && deathTest == false)
        waveSpeed = 20;
    if(deathTest == true)
    {
        
        waveSprite.body.velocity.x = 0;
    }
}

function unpauseWave(){
    if(waveSprite.animations.currentAnim == 'still-wave'){
        waveSprite.animations.play('main-wave');
    }
}

function pauseWave(){
if(waveSprite.animations.currentAnim == 'main-wave'){
        waveSprite.animations.play('still-wave');
    }
}

function restartGame(game)
{
    game.state.restart();
}