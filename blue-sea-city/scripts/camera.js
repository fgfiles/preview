var cameraLowerBound = 2000;
var shakeCutoff = 600;
var waveOffset = 0;
var playerWaveDist = 2000;
var shakeThreshold = 0.001;
var maxShake = 0.006;
var playerShake = 0;
var playerShakeValue = 0.01;
var currentShakeIntensity = 0.1;
var playerShakeTimer = 0;
var playerShakeDuration = 0.1;

var shakeActivated = true;
//var temp = 0;
var waveDeathTimer;

function createCamera(game){ 
    
    cameraLowerBound = 2000;
    shakeCutoff = 600;
    waveOffset = 0;
    playerWaveDist = 2000;
    shakeThreshold = 0.001;
    maxShake = 0.006;
    playerShake = 0;
    playerShakeValue = 0.01;
    currentShakeIntensity = 0.1;
    playerShakeTimer = 0;
    playerShakeDuration = 0.1;
    
    shakeActivated = true;
    
    //initialize all vars here
    //game.camera.x = playerSprite.body.x + 450;
    //game.camera.y = playerSprite.body.y + 1160;
    game.camera.x = playerSprite.body.x + 190;
    game.camera.y = playerSprite.body.y + 1160;
    game.camera.follow(playerSprite,Phaser.Camera.FOLLOW_PLATFORMER,0.1,0.1);
    game.camera.bounds = new Phaser.Rectangle(200,-100,6800,1200);
    //console.log(game.world.bounds);
    //CHANGE BACK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //game.camera.scale.x *= 0.7;
    //game.camera.scale.y *= 0.7;
    //game.camera.scale.x *= 1.7;
    //game.camera.scale.y *= 1.7;
    waveOffset = waveSprite.width/2 + 0;
    //game.camera.deadzone = new Phaser.Rectangle(500,500,-100,0);
    /*
    var w = game.camera.width / 8;
    var h = game.camera.height / 3;
    game.camera.deadzone = new Phaser.Rectangle((game.camera.width - w) / 2, (game.camera.width - h) / 2 - h * 0.25, w, h)
    */
}

function updateCamera(game){
    /*
    if(upDown){
        game.camera.unfollow();
        game.camera.y -= 150;
    }
    */
    if(shakeActivated){
        if(playerState != "win" && playerState != "wave"){
            updateWaveShake(game);
            if(currentShakeIntensity > shakeThreshold){
                //console.log("current shake");
                if(currentShakeIntensity <= maxShake){
                    game.camera.shake(currentShakeIntensity,50);
                }
            }
            else if(playerShake != 0){
                playerShakeTimer += timerMan.physicsElapsed;
                game.camera.shake(playerShake,50);
                if(playerShakeTimer > playerShakeDuration){
                    playerShake = 0;
                }
            }
        }
        else{
            if(playerState == 'wave'){
                if(currentShakeIntensity != 0){
                    game.camera.shake(currentShakeIntensity,50);
                    currentShakeIntensity -= waveDeathTimer.physicsElapsed/1000;
                    if(currentShakeIntensity < 0){
                        currentShakeIntensity = 0;
                    }
                }
            }
        }
    }
}

function updateCameraBounds(game){
    game.camera.bounds.y = -100;
    game.camera.bounds.height = 1200;
    exitedFullScreen = false;
}

function updateWaveShake(game){
    playerWaveDist = playerSprite.body.x - waveSprite.centerX - waveOffset;
    //console.log(playerWaveDist);
    if (playerWaveDist < shakeCutoff){
        if(playerWaveDist >= 0){
            currentShakeIntensity = -maxShake / shakeCutoff * playerWaveDist + maxShake;
        }
        else if(deathTest == true)
        {
            if(currentShakeIntensity > 0)
            {
                currentShakeIntensity = currentShakeIntensity - 0.0001;
                //console.log(currentShakeIntensity);
            }
        }
        else{
            //currentShakeIntensity = maxShake / shakeCutoff * playerWaveDist + maxShake;
            currentShakeIntensity = maxShake;
        }
    }
}

function shakePlayer(){
    playerShake = playerShakeValue;
    playerShakeTimer = 0;
}

function deathCamera(game){
    waveDeathTimer = new Phaser.Time(game);
    //game.camera.follow(null);
}