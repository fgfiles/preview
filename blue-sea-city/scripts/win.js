var winCollisionGroup;
var winSprite;
var playerOnSpot = true;
var cameraMovedForWin = false;
var playerWinSpot = 6040;
var winTitleSprite;
var catWinSprite;
var birdCountWinText = '';
var dashCountWinText = '';
var jumpCountWinText = '';
var lootCountWinText = '';
var timeWinText = '';
var winTextFadeTiming = 500;
var winStuffInitiated = false;
var dontShowInventory = false;

function createWin(game){
    
    playerOnSpot = true;
    cameraMovedForWin = false;
    playerWinSpot = 6040;
    birdCountWinText = '';
    dashCountWinText = '';
    jumpCountWinText = '';
    lootCountWinText = '';
    timeWinText = '';
    winTextFadeTiming = 500;
    winStuffInitiated = false;
    dontShowInventory = false;
    
    winSprite = game.add.sprite(6040,296,'player-main',15);
    winSprite.scale.set(1.05,1.05);
    game.physics.p2.enable(winSprite,false);
    winSprite.body.clearShapes();
    winSprite.body.addRectangle(200,20,0,0).sensor = true;
    //winSprite.body.debug = true;
    winSprite.body.static = true;
    
    winCollisionGroup = game.physics.p2.createCollisionGroup();
}

function setUpWinColliders(){
    winSprite.body.setCollisionGroup(winCollisionGroup);
    winSprite.body.collides([winCollisionGroup, playerCollisionGroup]);
}

function updateWin(){
    if(!cameraMovedForWin){
        if(runningSound.isPlaying){
                unplayRunning();
        }
        if(playerWinSpot - playerSprite.body.x > 0){
            playerSprite.body.velocity.x = 60;
            if(playerSprite.animations.currentAnim != 'actually walking'){
                playerOnSpot = false;
                playerSprite.animations.play('actually walking');
            }
        }
        else if(6010 - playerSprite.body.x < 0){
            playerSprite.body.velocity.x = 0;
            if(playerSprite.animations.currentAnim != 'stopped'){
                playerSprite.animations.play('stopped');
                playerOnSpot = true;
                game.camera.unfollow();
                game.camera.bounds.y = -400;
                game.add.tween(game.camera).to( {y:130}, 1000, "Cubic", true).onComplete.add(initiatePostWinStuff);
            }
        }
    }
    else{
        if(game.input.keyboard.isDown(Phaser.Keyboard.ENTER)){
            game.sound.stopAll();
            game.stage.backgroundColor = 'rgba(0,0,0,1)';
            game.state.restart();
        }
        if(inventoryView){
            if(lootCountWinText.scale.x != 0){
                timeWinText.scale.x = 0;
                lootCountWinText.scale.x = 0;
                jumpCountWinText.scale.x = 0;
                dashCountWinText.scale.x = 0;
                birdCountWinText.scale.x = 0;
                inventoryBackground.alpha = 0.8;
                gameOverText.scale.x = 0;
                winTitleSprite.scale.x = 0;
                restartImage.scale.x = 0;
            }
        }
        else{
            if(lootCountWinText.scale.x == 0){
                timeWinText.scale.x = 0.2;
                lootCountWinText.scale.x = 0.2;
                jumpCountWinText.scale.x = 0.2;
                dashCountWinText.scale.x = 0.2;
                birdCountWinText.scale.x = 0.2;
                inventoryBackground.alpha = 0;
                gameOverText.scale.x = 0.2;
                winTitleSprite.scale.x = 0.07;
                restartImage.scale.x = 1;
            }
        }
    }
}

function initiateWin(){
    dontShowInventory = true;
    gameTimer.pause();
    playerSprite.body.velocity.x = 0;
    playerSprite.scale.setTo(1,1);
    walkTimer = 10;
    jumpTimer = 10;
    dashTimer = 10;
    walkingLeft = 0;
    walkingRight = 0;
    if(runningSound.isPlaying){
            unplayRunning();
    }
    deathCamera(game);
    timerText.alpha = 0;
    lootCountText.alpha = 0;
    inventoryBackground.alpha = 0;
}

function initiatePostWinStuff(){
    if(!winStuffInitiated){
        /*
        catWinSprite = game.add.sprite(endX*(-0.1),endY*(0.4),'egg');
        catWinSprite.fixedToCamera = true;
        catWinSprite.scale.setTo(3,3);
        game.add.tween(catWinSprite.anchor).to({x: -4},3000,'Linear',true);
        game.add.tween(catWinSprite.anchor).to({y: 1.2},3000,"Linear",true);
        game.add.tween(catWinSprite.scale).to({x: 0},3000,"Linear",true);
        game.add.tween(catWinSprite.scale).to({y: 0},3000,"Linear",true);
        */
        catWinSprite.x = playerSprite.x - 450;
        catWinSprite.y = playerSprite.y - 200;
        catWinSprite.alpha = 1;
        catWinSprite.scale.setTo(1,1);
        var moveToX = playerSprite.x + 200;
        var moveToY = playerSprite.y - 160;
        game.time.events.add(Phaser.Timer.SECOND, function(){
            game.add.tween(catWinSprite).to({x: moveToX},17000,'Linear',true);
            game.add.tween(catWinSprite).to({y: moveToY},13000,"Linear",true);
            game.add.tween(catWinSprite.scale).to({x: 0.4},17000,"Linear",true);
            game.add.tween(catWinSprite.scale).to({y: 0.4},17000,"Linear",true);
            game.time.events.add(Phaser.Timer.SECOND*18,function(){
                catWinSprite.scale.setTo(0.2,0.2);
                catWinSprite.x = moveToX;
                catWinSprite.y = moveToY + 10;
                game.add.tween(catWinSprite).to({x: playerSprite.x - 450},21000,'Linear',true);
                game.add.tween(catWinSprite).to({y: moveToY - 20},21000,"Linear",true);
                game.add.tween(catWinSprite.scale).to({x: 0.05},21000,"Linear",true);
                game.add.tween(catWinSprite.scale).to({y: 0.05},21000,"Linear",true);
            });
        },this);
        
        winTitleSprite = game.add.sprite(endX*(0.04),endY*(0.15),'title_name');
        gameOverText = game.add.text(endX*(0.1),endY*(0.9),
                "Press Restart", textStyle);
        gameOverText.alpha = 0;
        restartImage = game.add.sprite(endX*(0.04),endY*(0.88),'Rrestart');
        restartImage.fixedToCamera = true;
        restartImage.alpha = 0.0;
        game.time.events.add(Phaser.Timer.SECOND * 2, deathPause, this);
        timeWinText = game.add.text(endX*(0.55),endY*(0.2) + 70,
                    "Time: " + timerText.text, textStyle);
        lootCountWinText = game.add.text(endX*(0.55),endY*(0.3) + 70,
                    "Loot Collected: " + lootCollected + "/" + totalLoot,textStyle);
        jumpCountWinText = game.add.text(endX*(0.55),endY*(0.4) + 70,
                    "Jumps: " + jumpPressCounter,textStyle);
        dashCountWinText = game.add.text(endX*(0.55),endY*(0.5) + 70,
                    "Dashes: " + dashPressCounter, textStyle);
        birdCountWinText = game.add.text(endX*(0.55),endY*(0.6) + 70,
                    "Birds: " + birdFlyCount + "/" + totalBirds, textStyle);
        winTitleSprite.fixedToCamera = true;
        timeWinText.fixedToCamera = true;
        dashCountWinText.fixedToCamera = true;
        jumpCountWinText.fixedToCamera = true;
        lootCountWinText.fixedToCamera = true;
        birdCountWinText.fixedToCamera = true;
        winTitleSprite.scale.set(0.07,0.07);
        timeWinText.scale.setTo(0.2,0.2);
        dashCountWinText.scale.setTo(0.2,0.2);
        jumpCountWinText.scale.setTo(0.2,0.2);
        lootCountWinText.scale.setTo(0.2,0.2);
        birdCountWinText.scale.setTo(0.2,0.2);
        winTitleSprite.alpha = 0;
        timeWinText.alpha = 0;
        dashCountWinText.alpha = 0;
        jumpCountWinText.alpha = 0;
        lootCountWinText.alpha = 0;
        birdCountWinText.alpha = 0;
        game.add.tween(winTitleSprite).to({alpha: 0.9},1500,"Cubic",true);
        game.add.tween(winTitleSprite.anchor).to({y: 0.2},1200,"Cubic",true);
        
        game.add.tween(timeWinText.anchor).to({y: 1.3},1200,"Cubic",true);
        game.add.tween(lootCountWinText.anchor).to({y: 1.3},1200,"Cubic",true);
        game.add.tween(jumpCountWinText.anchor).to({y: 1.3},1200,"Cubic",true);
        game.add.tween(dashCountWinText.anchor).to({y: 1.3},1200,"Cubic",true);
        game.add.tween(birdCountWinText.anchor).to({y: 1.3},1200,"Cubic",true);
        
        game.add.tween(timeWinText).to({alpha: 0.9},winTextFadeTiming,"Linear", true).chain(
            game.add.tween(lootCountWinText).to({alpha: 0.9},winTextFadeTiming,"Linear", true),
            game.add.tween(jumpCountWinText).to({alpha: 0.8}, winTextFadeTiming, "Linear", true),
            game.add.tween(dashCountWinText).to({alpha: 0.8}, winTextFadeTiming, "Linear", true),
            game.add.tween(birdCountWinText).to({alpha: 0.8}, winTextFadeTiming, "Linear", true)
            );
        winStuffInitiated = true;
        cameraMovedForWin = true;
        dontShowInventory = false;
    }
}