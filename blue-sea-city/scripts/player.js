/* globals lootCollisionGroup, levelCollisionGroup */
var walkSpeed = 160.0;
var walkSpeedUp = 0.3;
var walking = 0;
var playerMass = 5.0;
var walkingLeft = 0.0;
var walkingRight = 0.0;
var walkTimer = 0;
var walkK = walkSpeedUp / 3;
var walkExpConst = .5;
var walkStep = 0;
var largeSpeedChange = false;
var accelerationNormal = 0;

var playerFric = 0.0;
var targetVelocityX = 0;
var initialVelocityX = 0;

var playerState = "normal";
var playerDirection = 1;
var playerSprite;
var playerMat;
var playerCollisionGroup;
var playerGroundCM;

var lootCollected;
var needUpdateLootUI;

var jumpTimer = 0;
var yAxis = p2.vec2.fromValues(0, 1);
var jumping = false;
var jumpTime = 0.4;
var jumpSpeed = 200;
var targetVelocityY = 0;
var initialVelocityY = 0;
var jumpStep = 0;
var jumpK = jumpTime / 3;
var jumpExpConst = 1;
var anticipatingJump = false;
var anticipatingJumpTimer = 0;
var jumpLatency = 0.3;
var anticipatedJumpEnd = false;

var dashTime = 0.18;
var dashStopTime = dashTime / 4;
var dashCooldown = 0.2;
var dashTimer = dashTime + dashCooldown;
var dashSpeed = walkSpeed * 2.0;
var dashY = 0.0;
var dashDirection = 1;
var dashDone = false;
var onDoor = 0;
var currentDoorIndex;
var openDoorThresholdTime = 0.3;
var anticipatingDashTimer = 0;
var dashLatency = 0.16;
var anticipatingDash = false;
var dashIntoJump = false;
var bottomOnDoor = false;

var wallJumping = false;
var wallJumpingYSlowDown = 2;
var wallJumpingInitialVelocity = 1.3 * walkSpeed;
var wallJumpFallTimer = 0;
var wallJumpFallTime = 0.1;
var jumpedAgainstWall = false;
var wallJumpVelocityMultiplier = 1.0;
var wallClimbing = false;

var playerWaveOffsetX = 0;
var playerWaveOffsetY = 0;
var playerHasBeenHitByWave = false;
var playerWaveInitialVelocityX = -100;
var playerWaveInitialVelocityY = -200;
var gameOverText;
var restartText;
var restartImage;

var jumpPressCounter = 0;
var dashPressCounter = 0;

var topSensor;
var leftSensor;
var rightSensor;
var leftOtherSensor;
var rightOtherSensor;
var leftTopSensor;
var leftBotSensor;
var rightTopSensor;
var rightBotSensor;
var botSensor;
var botOtherSensor;
var botDashSensor;

var leftSensorOn = false;
var rightSensorOn = false;
var leftOtherSensorOn = false;
var rightOtherSensorOn = false;
var leftTopSensorOn = false;
var leftBotSensorOn = false;
var rightTopSensorOn = false;
var rightBotSensorOn = false;
var botSensorOn = true;
var botOtherSensorOn = true;
var botDashSensorOn = true;

var leftSensorCount = 0;
var rightSensorCount = 0;
var leftOtherSensorCount = 0;
var rightOtherSensorCount = 0;
var leftTopSensorCount = 0;
var leftBotSensorCount = 0;
var rightTopSensorCount = 0;
var rightBotSensorCount = 0;
var botSensorCount = 0;
var botOtherSensorCount = 0;
var botDashSensorCount = 0;

var timerMan;
//Don't flip sprite while in air. Makes it look cooler for speedrunning
//AKA what they do in Super Mario Bros

function createPlayer(game){
    
    walkSpeed = 160.0;
    walkSpeedUp = 0.3;
    walking = 0;
    playerMass = 5.0;
    walkingLeft = 0.0;
    walkingRight = 0.0;
    walkTimer = 0;
    walkK = walkSpeedUp / 3;
    walkExpConst = .5;
    walkStep = 0;
    largeSpeedChange = false;
    accelerationNormal = 0;
    
    playerFric = 0.0;
    targetVelocityX = 0;
    initialVelocityX = 0;
    
    playerState = "normal";
    playerDirection = 1;
    
    jumpTimer = 0;
    yAxis = p2.vec2.fromValues(0, 1);
    jumping = false;
    jumpTime = 0.4;
    jumpSpeed = 200;
    targetVelocityY = 0;
    initialVelocityY = 0;
    jumpStep = 0;
    jumpK = jumpTime / 3;
    jumpExpConst = 1;
    anticipatingJump = false;
    anticipatingJumpTimer = 0;
    jumpLatency = 0.3;
    anticipatedJumpEnd = false;
    
    dashTime = 0.18;
    dashStopTime = dashTime / 4;
    dashCooldown = 0.2;
    dashTimer = dashTime + dashCooldown;
    dashSpeed = walkSpeed * 2.0;
    dashY = 0.0;
    dashDirection = 1;
    dashDone = false;
    onDoor = 0;
    currentDoorIndex;
    openDoorThresholdTime = 0.3;
    anticipatingDashTimer = 0;
    dashLatency = 0.16;
    anticipatingDash = false;
    dashIntoJump = false;
    bottomOnDoor = false;
    
    wallJumping = false;
    wallJumpingYSlowDown = 2;
    wallJumpingInitialVelocity = 1.3 * walkSpeed;
    wallJumpFallTimer = 0;
    wallJumpFallTime = 0.1;
    jumpedAgainstWall = false;
    wallJumpVelocityMultiplier = 1.0;
    wallClimbing = false;
    
    playerWaveOffsetX = 0;
    playerWaveOffsetY = 0;
    playerHasBeenHitByWave = false;
    playerWaveInitialVelocityX = -100;
    playerWaveInitialVelocityY = -200;
    gameOverText;
    restartText;
    restartImage;
    
    jumpPressCounter = 0;
    dashPressCounter = 0;
    
    leftSensorOn = false;
    rightSensorOn = false;
    leftOtherSensorOn = false;
    rightOtherSensorOn = false;
    leftTopSensorOn = false;
    leftBotSensorOn = false;
    rightTopSensorOn = false;
    rightBotSensorOn = false;
    botSensorOn = true;
    botOtherSensorOn = true;
    botDashSensorOn = true;
    
    leftSensorCount = 0;
    rightSensorCount = 0;
    leftOtherSensorCount = 0;
    rightOtherSensorCount = 0;
    leftTopSensorCount = 0;
    leftBotSensorCount = 0;
    rightTopSensorCount = 0;
    rightBotSensorCount = 0;
    botSensorCount = 0;
    botOtherSensorCount = 0;
    botDashSensorCount = 0;
    
    playerSprite = game.add.sprite(549, 1025, 'player-main');
    //playerSprite = game.add.sprite(4950, 540, 'player-main');
    //playerSprite = game.add.sprite(5850, 100, 'player-main');
    //playerSprite = game.add.sprite(1608, 1024, 'player-main');
    //playerSprite.anchor.set(0.5);
    //playerSprite.animations.add('stopped', [48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63], 4, true);
    playerSprite.animations.add('stopped', [
                                            48,48,49,49,50,50,51,51,52,52,53,53,54,54,55,55,56,56,57,57,58,58,59,59,60,60,61,61,61,62,62,
                                            /*48,48,49,49,50,50,51,51,52,52,53,53,54,54,55,55,56,56,57,57,58,58,*/
                                            144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,
                                            169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,
                                            48,48,49,49,50,50,51,51,52,52,53,53,54,54,55,55,56,56,57,57,58,58,59,59,60,60,
                                            63,64,65,66,67,68,69,70,71
                                            ], 8, true);
    playerSprite.animations.add('kicking idle', [64,65,66,67,68,69,70,71], 10, true);
    playerSprite.animations.add('walk', [16, 17, 18, 19, 20, 21, 22, 23], 10, true);
    playerSprite.animations.add('actually walking',[0,1,2,3,4,5,6,7],10,true);
    playerSprite.animations.add('dash', [34,35,36,37], 20, false);
    //playerSprite.animations.add('jumping', [83], 10, false);
    playerSprite.animations.add('jumping', [96], 10, false);
    playerSprite.animations.add('falling', [84], 10, false);
    playerSprite.animations.add('wall riding', [97], 10, true);
    playerSprite.animations.add('skid',[1],10,true);
    playerSprite.animations.add('wall climbing',[80], 10, true);
    playerSprite.animations.add('death',[112],1,true);
    playerSprite.animations.add('lockpicking',[
                                                128,129,130,131,132,133,134,141,137,137,138,139,139,140,135,135,136,141,
                                                128,129,130,131,132,133,134,134,134,
                                                128,129,130,131,133,134,
                                                128,129,130,131,132,133,134,
                                                128,129,130,131,132,133,134,134,134,
                                                ],6,true);
    playerSprite.animations.add('yanking door',[137,137,138,139,139,140,135,135,136],6,true);
    //playerSprite.animations.add('lockpicking',[126],10,true);
    
    game.physics.p2.enable(playerSprite);
    game.load.physics('playerSpritePoly', 'assets/physics/playerSpritePoly.json');
    playerSprite.body.clearShapes();
    //playerSprite.body.loadPolygon('playerSpritePoly', 'main');
    playerSprite.body.setRectangle(12,36,0,2 + 12);
    //playerSprite.body.
    //leftSensor = playerSprite.body.addRectangle(5,31,-10,1 + 12);
    //rightSensor = playerSprite.body.addRectangle(5,31,10,1 + 12);
    leftSensor = playerSprite.body.addRectangle(5,25,-10,7 + 12);
    rightSensor = playerSprite.body.addRectangle(5,25,10,7 + 12);
    leftOtherSensor = playerSprite.body.addRectangle(5,31,-5,1 + 12);
    rightOtherSensor = playerSprite.body.addRectangle(5,31,5,1 + 12);
    leftTopSensor = playerSprite.body.addRectangle(5,18,-5,-6 + 12);
    leftBotSensor = playerSprite.body.addRectangle(5,18,-5,13 + 12);
    rightTopSensor = playerSprite.body.addRectangle(5,18,5,-6 + 12);
    rightBotSensor = playerSprite.body.addRectangle(5,18,5,13 + 12);
    topSensor = playerSprite.body.addRectangle(5,10,0,-12 + 12);
    botSensor = playerSprite.body.addRectangle(8,5,0,19 + 12);
    botOtherSensor = playerSprite.body.addRectangle(2,5,0,19 + 12);
    botDashSensor = playerSprite.body.addRectangle(2,16,0,28+12);
    topSensor.sensor = true;
    leftSensor.sensor = true;
    rightSensor.sensor = true;
    leftOtherSensor.sensor = true;
    rightOtherSensor.sensor = true;
    leftTopSensor.sensor = true;
    leftBotSensor.sensor = true;
    rightTopSensor.sensor = true;
    rightBotSensor.sensor = true;
    botSensor.sensor = true;
    botOtherSensor.sensor = true;
    botDashSensor.sensor = true;
    
    //playerSprite.body.debug = true;
    playerSprite.body.mass = playerMass;
    playerSprite.body.fixedRotation = true;
    timerMan = new Phaser.Time(game);
    jumpExpConst = (2 * Math.log(jumpK + 1)) / jumpTime;
    walkExpConst = (2 * Math.log(walkK + 1)) / walkSpeedUp;
    //playerSprite.body.collideWorldBounds = true;
    playerCollisionGroup = game.physics.p2.createCollisionGroup();
    //rightCollisionGroup = game.physics.p2.createCollisionGroup();
    lootCollected = 0;
    playerSprite.animations.play('lockpicking');
}

function setUpPlayerColliders(game){
    playerSprite.body.setCollisionGroup(playerCollisionGroup);
    //rightSensor.shape.setCollisionGroup(rightCollisionGroup);
    playerSprite.body.collides([lootCollisionGroup, playerCollisionGroup]);
    playerSprite.body.collides([levelCollisionGroup, playerCollisionGroup]);
    playerSprite.body.collides([doorCollisionGroup, playerCollisionGroup]);
    playerSprite.body.collides([waveCollisionGroup, playerCollisionGroup]);
    playerSprite.body.collides([winCollisionGroup, playerCollisionGroup]);
    playerSprite.body.collides([birdCollisionGroup, playerCollisionGroup]);
    playerSprite.body.onBeginContact.add(playerCollisionHandler, this);
    playerSprite.body.onEndContact.add(playerUncollisionHandler, this);
    //topSensor.onBeginContact.add(playerColliderFunctionThing, this);
    playerMat = game.physics.p2.createMaterial('playerMat', playerSprite.body);  //MOVED TO HERE FOR COLLISION GROUP CONSISTENCY
    playerMat.friction = playerFric;
    playerMat.restituion = 0;
    //playerMat.relaxation = 30;
    
}

function updatePlayer(game){
    if(playerState == 'normal' || playerState == 'dash'){
        checkPlayerInput();
        betterGravity();
        jumpLatencyCalc();
        updatePlayerSoundStuff();
        checkPlayerTutorial();
    }
    if(playerState == "normal"){
        updateVelocityX();
        updateDash();
        updateJump();
        updateWallJumping();
    }
    else if(playerState == "dash"){
        updateDash();
        if(dashIntoJump){
            updateJump();
            dashIntoJump = false;
        }
    }
    else if(playerState == 'wave'){
        updatePlayerWave();
    }
    else if(playerState == 'win'){
        updateWin();
        updateVelocityX();
        updateDash();
        updatePlayerSoundStuff();
    }
    else{
        console.log("False player state");
    }
    if(playerOnSpot){
        updateAnimation();
    }
}

function updatePlayerSoundStuff(){
    if(onDoor == 0 || (rightTopSensorOn && !right) || (leftTopSensorOn && !left) || !botOtherSensorOn){
        if(pullingDoorSound.isPlaying){
            unplayPullingDoor();
        }
    }
    if((rightTopSensorOn && right) || (leftTopSensorOn && left)){
        if(runningSound.isPlaying){
            unplayRunning();
        }
    }
    if(!botOtherSensorOn){
        if(runningSound.isPlaying){
            unplayRunning();
        }
    }
    if(playerState == 'dash' || playerState == 'win'){
        if(runningSound.isPlaying){
            unplayRunning();
        }
    }
    /*
    else if(botOtherSensorOn & ((right && !rightOtherSensorOn)||(left && !leftOtherSensorOn))){
        if(!runningSound.isPlaying){
            playSound('running');
        }
    }
    */
}

function checkPlayerTutorial(){
    if(!playerPassedTutorial){
        if(playerSprite.x > 1650){
            playerPassedTutorial = true;
        }
    }
}

function betterGravity(){
    if(playerSprite.body.velocity.y > 300){
        playerSprite.body.velocity.y = 300;
    }
}

function jumpLatencyCalc(){
    if(anticipatingJump){
        anticipatingJumpTimer += timerMan.physicsElapsed;
        if(anticipatingJumpTimer > jumpLatency){
            anticipatingJump = false;
        }
    }
}

function updatePlayerWave(){
    playerSprite.angle += timerMan.physicsElapsed * 500;
    if(playerSprite.body.velocity.x < 0){
        //playerSprite.body.velocity.x -= timerMan.physicsElapsed * 5000;
        playerSprite.body.velocity.x += timerMan.physicsElapsed * 30;
    }
    else{
        playerSprite.body.velocity.x = 0;
    }
    if(playerSprite.body.velocity.y < -0.05 || playerSprite.body.velocity.y > 0.05){
        //playerSprite.body.velocity.x -= timerMan.physicsElapsed * 5000;
        //playerSprite.body.velocity.y += timerMan.physicsElapsed * 20;
        playerSprite.body.velocity.y /= timerMan.physicsElapsed * 61;
    }
    else{
        playerSprite.body.velocity.y = 0;
    }
    //playerSprite.body.x = waveSprite.body.x + playerWaveOffsetX;
    //playerSprite.body.y = waveSprite.body.y + playerWaveOffsetY;
    //console.log(playerSprite.body.velocity.y);
}

function updateAnimation() {
    /*
    if(interact){
        playerSprite.animations.play('lockpicking');
    }
    */
    if(playerHasBeenHitByWave){
        playerSprite.animations.play('death');
    }
    else if(playerState == "dash"){
        playerSprite.animations.play('dash');
        //playerSprite.scale.set(playerDirection, 1.0);
        playerSprite.scale.set(playerSprite.body.velocity.x / Math.abs(playerSprite.body.velocity.x), 1.0);
    }
    else if(onDoor > 0 && botSensorOn && ((right && rightTopSensorOn && rightBotSensorOn)||(left && leftTopSensorOn && leftBotSensorOn))){
        playerSprite.animations.play('yanking door');
        if(!pullingDoorSound.isPlaying){
            playSound("pullingDoor");
        }
    }
    else if(wallClimbing){
        playerSprite.animations.play('wall climbing');
        playerSprite.scale.set(playerDirection, 1.0);
    }
    else if(!botSensorOn && !leftOtherSensorOn && !rightOtherSensorOn){
        if(playerSprite.body.velocity.y > 0){
            playerSprite.animations.play('falling');
        }
        else{
            playerSprite.animations.play('jumping');
        }
        if(playerSprite.body.velocity.x == 0){
            playerSprite.scale.set(playerDirection, 1.0);
        }
        else{
            //playerSprite.scale.set(playerSprite.body.velocity.x / Math.abs(playerSprite.body.velocity.x), 1.0);
            playerSprite.scale.set(playerDirection, 1.0);
        }
    }
    //else if(wallJumping && !botSensorOn){
    else if((leftOtherSensorOn || rightOtherSensorOn) && !botOtherSensorOn){
        playerSprite.animations.play('wall riding');
        if(leftOtherSensorOn){
            playerSprite.scale.set(-1.0,1.0);
        }
        else if(rightOtherSensorOn){
            playerSprite.scale.set(1.0,1.0);
        }
    }
    else if(walking != 0) {
        if(largeSpeedChange && (
                (targetVelocityX > 0 && playerSprite.body.velocity.x < 0) || 
                (targetVelocityX < 0 && playerSprite.body.velocity.x > 0)
            )
        ){
            playerSprite.animations.play('skid');
        }
        else{
            if(!(right && rightOtherSensorOn) && !(left && leftOtherSensorOn)){
                playerSprite.animations.play('walk');
                playerSprite.scale.set(walking, 1.0);
            }
            else{
                playerSprite.animations.play('stopped');
            }
        }
    }
    else {
        playerSprite.animations.play('stopped');
    }
}

function updateWallJumping(){
    if(botSensorOn){
        jumpedAgainstWall = false;
    }
    if(rightSensorOn){
        //if(right){
            wallJumping = true;
            if((right && playerSprite.body.velocity.y > 0) || (wallJumpFallTimer < wallJumpFallTime && rightBotSensorOn)){
                if(playerSprite.body.velocity.y > 0){ //&& onDoor == 0?
                    playerSprite.body.velocity.y /= wallJumpingYSlowDown;
                }
                if(!right && !left){
                    wallJumpFallTimer += timerMan.physicsElapsed;
                }
            }
    }
    else if(leftSensorOn){
            wallJumping = true;
            if((left && playerSprite.body.velocity.y > 0) || (wallJumpFallTimer < wallJumpFallTime && leftBotSensorOn)){
                if(playerSprite.body.velocity.y > 0){ //&& onDoor == 0?
                    playerSprite.body.velocity.y /= wallJumpingYSlowDown;
                }
                if(!right && !left){
                    wallJumpFallTimer += timerMan.physicsElapsed;
                }
            }
    }
    /*
    else if(wallJumping && wallJumpFallTimer < wallJumpFallTime){
        playerSprite.body.velocity.y /= wallJumpingYSlowDown;
    }
    */
    else{
        wallJumping = false;
        wallJumpFallTimer = 0;
    }
    if(((left && leftBotSensorOn && !leftTopSensorOn) || (right && rightBotSensorOn && !rightTopSensorOn)) && !botOtherSensorOn ){
        playerSprite.body.velocity.y += -20;
        wallClimbing = true;
    }
    else{
        wallClimbing = false;
    }
    /*
    Notes
        When you uninitiate a wallriding, you stay for a little bit
    */
}

function updateDash(){
    if(anticipatingDash){
        if(anticipatingDashTimer < dashLatency){
            anticipatingDashTimer += timerMan.physicsElapsed;
        }
        else{
            anticipatingDash = false;
            anticipatingDashTimer = 0;
        }
    }
    dashTimer += timerMan.physicsElapsed;
    if(playerState == "dash"){
        playerSprite.body.velocity.x = dashDirection * dashSpeed;
        playerSprite.body.y = dashY;
        if(jumpDown || (!dash && dashTimer >= dashStopTime) || 
            (dashTimer >= dashTime && (onDoor == 0 || !botSensorOn)) || 
            (dashDirection == 1 && rightSensorOn && (onDoor == 0 || !botDashSensorOn)) || 
            (dashDirection == -1 && leftSensorOn && (onDoor == 0 || !botDashSensorOn))
        ){
            //console.log("dash has been done yo");
            playerState = "normal";
            dashDone = true;
            if(!dash && dashTimer <= dashTime){
                dashTimer = dashTime;
            }
            if(jumpDown){
                dashIntoJump = true;
            }
            if(botOtherSensorOn && ((right && !rightOtherSensorOn)||(left && !leftOtherSensorOn))){
                playSound('running');
            }
        }
    }
}

function updateJump(){
    if((jumpDown || anticipatingJump) && checkIfCanJump(game)){
        if(wallJumping && !botSensorOn){
            largeSpeedChance = false;
            if(rightSensorOn){
                /*
                if(right){
                    initialVelocityX = -wallJumpingInitialVelocity;
                    targetVelocityX = wallJumpingInitialVelocity;
                    playerSprite.body.velocity.x = -wallJumpingInitialVelocity;
                    //jumpedAgainstWall = true;
                }
                else if(left){
                    //initialVelocityX = wallJumpingInitialVelocity;
                    targetVelocityX = -wallJumpingInitialVelocity;
                    playerSprite.body.velocity.x = -wallJumpingInitialVelocity;
                }
                */
                targetVelocityX = -wallJumpingInitialVelocity * wallJumpVelocityMultiplier;
                playerSprite.body.velocity.x = -wallJumpingInitialVelocity;
                //walkTimer = walkSpeedUp / 7;
                //walkStep = 0;
            }
            else if(leftSensorOn){
                /*
                if(right){
                    //initialVelocityX = wallJumpingInitialVelocity;
                    targetVelocityX = wallJumpingInitialVelocity;
                    playerSprite.body.velocity.x = wallJumpingInitialVelocity;
                }
                else if(left){
                    initialVelocityX = wallJumpingInitialVelocity;
                    targetVelocityX = -wallJumpingInitialVelocity;
                    playerSprite.body.velocity.x = wallJumpingInitialVelocity;
                    //jumpedAgainstWall = true;
                }
                */
                targetVelocityX = wallJumpingInitialVelocity * wallJumpVelocityMultiplier;
                playerSprite.body.velocity.x = wallJumpingInitialVelocity;
                //walkTimer = walkSpeedUp / 7;
                //walkStep = 0;
            }
        }
        if(wallJumping){
            playSound('wallJump');
        }
        else{
            playSound('jump');
        }
        jumpPressCounter++;
        anticipatingJump = false;
        anticipatedJumpEnd = false;
        jumping = true;
        jumpTimer = 0;
        initialVelocityY = -jumpSpeed;
        targetVelocityY = 0;
        jumpStep = 0;
    }
    if(jumping){
        jumpTimer += timerMan.physicsElapsed;
        jumpStep = Math.exp(jumpExpConst * jumpTimer) - 1;
        playerSprite.body.velocity.y = initialVelocityY + jumpStep / jumpTime * (targetVelocityY - initialVelocityY);
        //playerSprite.body.velocity.y = initialVelocityY + jumpTimer / jumpTime * (targetVelocityY - initialVelocityY);
        if(jumpTimer / jumpTime >= 1 || jumpUp || anticipatedJumpEnd){
            jumping = false;
        }
        if(!jump){
            anticipatedJumpEnd = true;
        }
    }
    /*
    if(checkIfCanJump(game)){
        jumping = false;
    }
    */
}

function updateVelocityX(){
    walking = walkingLeft + walkingRight;
    
    var velocityDifference = (targetVelocityX - initialVelocityX) / walkSpeed;
    if (dashDone){
        walkTimer = walkSpeedUp;
        targetVelocityX = walking * walkSpeed;
        initialVelocityX = targetVelocityX;
        dashDone = false;
    }
    if (
        leftDown || rightDown || leftUp || rightUp || 
        ( (targetVelocityX > 0 && left) || (targetVelocityX < 0 && right) ) ||
        (walking == 0 && targetVelocityX != 0)
        ){
        walkTimer = walkSpeedUp / 7;
        walkStep = 0;
        targetVelocityX = walking * walkSpeed;
        initialVelocityX = playerSprite.body.velocity.x;
        var difInVel = targetVelocityX - initialVelocityX;
        //accelerationNormal = difInVel / Math.abs(difInVel);
        if(targetVelocityX == 0){
            walkTimer = walkSpeedUp / 2;
        }
        if(Math.abs(difInVel) > walkSpeed){
            largeSpeedChange = true;
            if(botSensorOn && Math.abs(difInVel) > walkSpeed * 1.3){
                playSound('skid');
            }
        }
        else{
            largeSpeedChange = false;
        }
    }
    if(walkTimer / walkSpeedUp > 1){
        playerSprite.body.velocity.x = initialVelocityX + (targetVelocityX - initialVelocityX);
    }
    else{
        if(jumpedAgainstWall){
            //walkTimer += timerMan.physicsElapsed/10.0;
        }
        else{
            if(botSensorOn){
                if(largeSpeedChange){
                    walkTimer += timerMan.physicsElapsed/1.5;
                }
                else{
                    walkTimer += timerMan.physicsElapsed;
                }
            }
            else{
                if(largeSpeedChange){
                    walkTimer += timerMan.physicsElapsed/0.5/1.1;
                }
                else{
                    walkTimer += timerMan.physicsElapsed/0.5;
                }
            }
        }
        walkStep = Math.exp(walkExpConst * walkTimer) - 1;
        playerSprite.body.velocity.x = initialVelocityX + walkStep / walkSpeedUp * (targetVelocityX - initialVelocityX);
    }
    if(rightOtherSensorOn && right && onDoor == 0){
        playerSprite.body.velocity.x = 0;
    }
    else if(leftOtherSensorOn && left && onDoor == 0){
        playerSprite.body.velocity.x = 0;
    }
    
    //console.log(playerSprite.body.velocity.x);
    //console.log(timerMan.physicsElapsed);
    //playerSprite.body.velocity.x = walking * walkSpeed;
    //}
}

function checkPlayerInput(){
    if(leftDown){
        walkingLeft = -1;
        playerDirection = -1;
        if(botOtherSensorOn && !leftOtherSensorOn && !right){
            playSound('running');
        }
    }
    if(leftUp){
        walkingLeft = 0;
        if(!right){
            unplayRunning();
        }
        else{
            playerDirection = 1;
        }
    }
    if(rightDown){
        walkingRight = 1;
        playerDirection = 1;
        if(botOtherSensorOn && !rightOtherSensorOn && !left){
            playSound('running');
        }
    }
    if(rightUp){
        walkingRight = 0;
        if(!left){
            unplayRunning();
        }
        else{
            playerDirection = -1;
        }
    }
    //walkingLeft + walkingRight != 0
    if(dashDown){
        anticipatingDash = true;
    }
    if(
        ((dashDown || anticipatingDash) && (right || left) && 
            !(
                (playerDirection == 1 && rightSensorOn)||
                (playerDirection == -1 && leftSensorOn)
            )
        )
        ||
        ((dashDown || anticipatingDash) && onDoor > 0 && ((right && rightSensorOn)||(left && leftSensorOn)))
        && botSensorOn
        ){
        if(dashTimer >= dashTime + dashCooldown){
            if(!(left && right)){
                dashPressCounter++;
                playSound('dash');
                playerState = "dash";
                dashTimer = 0.0;
                dashY = playerSprite.body.y;
                dashDirection = playerDirection;
                if(left && !right){
                    dashDirection = -1;
                }
                if(right && !left){
                    dashDirection = 1;
                }
                /*
                if(left && right){
                    dashTimer = 5;
                    dashDirection = 0;
                }
                */
                if(onDoor > 0 && botDashSensorOn && ((leftOtherSensorOn && dashDirection == -1 && !right)||(rightOtherSensorOn && dashDirection == 1 && !left))){ //&& botSensorOn?
                    openDoor(currentDoorIndex,playerDirection,true);
                    onDoor = 0;
                }
                jumping = false;
            }
        }
    }
    else if(onDoor > 0 && botDashSensorOn && (dashDown || dashTimer < openDoorThresholdTime)){
        var dashTimerTest = dashTimer < openDoorThresholdTime;
        if(rightSensorOn){
            openDoor(currentDoorIndex,1,dashTimerTest);
            //rightSensorOn = false;
            onDoor = 0;
        }
        else if(leftSensorOn){
            //leftSensorOn = false;
            openDoor(currentDoorIndex,-1,dashTimerTest);
            onDoor = 0;
        }
    }
    if(jumpDown && playerSprite.body.velocity.y > 0){
        anticipatingJump = true;
        anticipatingJumpTimer = 0;
    }
    
    //For dashing, velocity will suddenly go to dashing speed (maybe a little acceleration) and
    //stay there for a period of time unless you collide with something. Then, once the time is up,
    //You will suddenly go to zero velocity or walkSpeed depending on whether you holding the walk button
}

function checkIfCanJump(game) {

    var result = false;
    if(botSensorOn){
        result = true;
    }
    if(wallJumping){
        result = true;
    }
    
    return result;

}

function playerCollisionHandler(body, bodyB, shape, shapeB, contactEquation){
    if(body != null){
        if(body.sprite != null){
            if(body.sprite.key==='level')
            {
                //playCollision(); //audio cue
            }
        }
    }
    
    
    if(body != null){
        /* Loot Collection system */
        if(body.sprite != null){
            if(body && lootArray.indexOf(body.sprite) > -1) //if(body && lootParent.children.indexOf(body.sprite) > -1)
            {
                playLoot(); //audio cue
                
                //find which loot was picked up
                var lootIndex = lootArray.indexOf(body.sprite);
                //console.log("\nPICKED UP ITEM " + (lootIndex+1) + "\t(index " + lootIndex + " in lootArray)\n\n");
                //set boolean to True for this specific loot so it shows in inventoryView
                lootBooleans[lootIndex] = true;  //true means collected
                //play particle emmitter at loot's location
                playOnCollectEmitter(body.sprite.centerX, body.sprite.centerY, game);
                
                body.sprite.destroy(); //destroys loot item
                shadowArray[lootIndex].destroy(); //gets rid of the loot shadow
                if (showPixieDust){
                    lootEmitterArray[lootIndex].kill(); //stops emitting
                    lootEmitterArray[lootIndex].destroy();  //destroys object 
                    updateLootEmitters(game);
                }            
                            
                lootCollected++;
                needUpdateLootUI = true;
                
            }
            doorSpriteIndex = doorSprites.indexOf(body.sprite);
            if(body && doorSpriteIndex > -1){
                onDoor++;
                currentDoorIndex = doorSpriteIndex;
                if(playerState == 'dash' && botDashSensorOn){
                    openDoor(currentDoorIndex,playerDirection,true);
                    onDoor = 0;
                }
                if(shape == leftBotSensor || shape == rightBotSensor){
                    bottomOnDoor = true;
                }
            }
            
            //WIN
            if(body.sprite == winSprite){
                playerState = 'win';
                initiateWin(game);
                deadSound();
            }
            
            //BIRDS
            var birdSpriteIndex = birdList.indexOf(body.sprite);
            if(birdSpriteIndex > -1){
                makeBirdFly(birdSpriteIndex);
            }
            
            
            //DEATH
            if(shape == leftBotSensor && body.sprite == waveSprite )
            {           
                //playerSprite.animations.play('death');
                waveSprite.body.setCollisionGroup(deadWaveGroup);
                
                //game.sound.stopAll();
                doSomeDeathStuff();
                gameTimer.pause();
                deathCamera(game);
                playerSprite.scale.setTo(1,1);
                playerSprite.anchor.x = 0.5;
                playerSprite.anchor.y = 0.7;
                playerWaveOffsetX = playerSprite.body.x - waveSprite.body.x;
                playerWaveOffsetY = playerSprite.body.y - waveSprite.body.y;
                playerSprite.body.velocity.x = playerWaveInitialVelocityX;
                if(playerSprite.body.y > 780){
                    playerSprite.body.velocity.y = playerWaveInitialVelocityY;
                }
                else{
                    playerSprite.body.velocity.y = -1.5*playerWaveInitialVelocityY;
                }
                playerState = 'wave';
                deadSound();
                playerHasBeenHitByWave = true;
                game.physics.p2.gravity.y = 0;
                playerSprite.body.static = true;
            
                game.time.events.add(Phaser.Timer.SECOND * 7, deathPause, this);
                //game.add.tween(currentShakeIntensity).to( 0, 2000, "Linear", true);
                
            }
        }
        /*
        var tempBooleanWaveTest = true;
        if(body.sprite != null){
            tempBooleanWaveTest = body.sprite != waveSprite;
        }
        */
        if(body && shape && body.sprite != null){
            if(body.sprite.key != 'birds' && body.sprite.key != 'birds1' && body.sprite.key != 'birds2'){
                if(shape == topSensor && body.sprite != null){
                    if(body.sprite.key == 'level' && !leftSensorOn && !rightSensorOn){
                        playSound('wall_collide');
                    }
                    jumping = false;
                }
                if(shape == botSensor){
                    botSensorOn = true;
                    botSensorCount++;
                }
                if(shape == botOtherSensor){
                    if(body.sprite.key == 'level' && botOtherSensorCount == 0 && playerState == 'normal' &&
                                rightBotSensorOn && leftBotSensorOn
                    ){
                        playSound('landing');
                    }
                    if((left && !right)||(!left && right)){
                        playSound('running');
                    }
                    botOtherSensorOn = true;
                    botOtherSensorCount++;
                }
                if(shape == rightSensor){
                    rightSensorOn = true;
                    rightSensorCount++;
                }
                if(shape == leftSensor){
                    leftSensorOn = true;
                    leftSensorCount++;
                }
                if(shape == rightOtherSensor){
                    if(body.sprite != null){
                        if(body.sprite.key == 'level' && rightOtherSensorCount == 0 && !leftOtherSensorOn && !botOtherSensorOn){
                            playSound('wall_collide',0.5);
                        }
                    }
                    rightOtherSensorOn = true;
                    rightOtherSensorCount++;
                }
                if(shape == leftOtherSensor){
                    if(body.sprite != null){
                        if(body.sprite.key == 'level' && leftOtherSensorCount == 0 && !rightOtherSensorOn && !botOtherSensorOn){
                            playSound('wall_collide',0.5);
                        }
                    }
                    leftOtherSensorOn = true;
                    leftOtherSensorCount++;
                }
                if(shape == leftTopSensor){
                    leftTopSensorOn = true;
                    leftTopSensorCount++;
                }
                if(shape == leftBotSensor){
                    leftBotSensorOn = true;
                    leftBotSensorCount++;
                }
                if(shape == rightTopSensor){
                    rightTopSensorOn = true;
                    rightTopSensorCount++;
                }
                if(shape == rightBotSensor){
                    rightBotSensorOn = true;
                    rightBotSensorCount++;
                }
                if(shape == botDashSensor){
                    botDashSensorOn = true;
                    botDashSensorCount++;
                }
            }
            
        }
    }
}

function playerUncollisionHandler(body, bodyB, shape, shapeB, ContactEquation){
    if(body != null){
        if(body.sprite != null){
            doorSpriteIndex = doorSprites.indexOf(body.sprite);
            if(body && doorSpriteIndex > -1){
                if(onDoor > 0){
                    onDoor--;
                }
                if(shape == leftBotSensor || shape == rightBotSensor){
                    bottomOnDoor = false;
                }
                /*
                if(onDoor < 0){
                    onDoor = 0;
                }
                */
            }
            if(body.sprite != waveSprite && body.sprite.key != 'birds' && body.sprite.key != 'birds1' && body.sprite.key != 'birds2'){
                if(shape == rightSensor){
                    rightSensorCount--;
                    if(rightSensorCount < 0){
                        rightSensorCount = 0;
                    }
                }
                else if(shape == leftSensor){
                    leftSensorCount--;
                    if(leftSensorCount < 0){
                        leftSensorCount = 0;
                    }
                }
                else if(shape == rightOtherSensor){
                    rightOtherSensorCount--;
                    if(rightOtherSensorCount < 0){
                        rightOtherSensorCount = 0;
                    }
                }
                else if(shape == leftOtherSensor){
                    leftOtherSensorCount--;
                    if(leftOtherSensorCount < 0){
                        leftOtherSensorCount = 0;
                    }
                }
                else if(shape == rightTopSensor){
                    rightTopSensorCount--;
                    if(rightTopSensorCount < 0){
                        rightTopSensorCount = 0;
                    }
                }
                else if(shape == rightBotSensor){
                    rightBotSensorCount--;
                    if(rightBotSensorCount < 0){
                        rightBotSensorCount = 0;
                    }
                }
                else if(shape == leftTopSensor){
                    leftTopSensorCount--;
                    if(leftTopSensorCount < 0){
                        leftTopSensorCount = 0;
                    }
                }
                else if(shape == leftBotSensor){
                    leftBotSensorCount--;
                    if(leftBotSensorCount < 0){
                        leftBotSensorCount = 0;
                    }
                }
                else if(shape == botSensor){
                    botSensorCount--;
                }
                else if(shape == botOtherSensor){
                    botOtherSensorCount--;
                }
                else if(shape == botDashSensor){
                    botDashSensorCount--;
                }
                if(rightSensorCount <= 0){
                    rightSensorOn = false;
                }
                if(leftSensorCount <= 0){
                    leftSensorOn = false;
                }
                if(botSensorCount <= 0){
                    botSensorOn = false;
                }
                if(botOtherSensorCount <= 0){
                    botOtherSensorOn = false;
                }
                if(rightOtherSensorCount <= 0){
                    rightOtherSensorOn = false;
                }
                if(leftOtherSensorCount <= 0){
                    leftOtherSensorOn = false;
                }
                if(rightTopSensorCount <= 0){
                    rightTopSensorOn = false;
                }
                if(rightBotSensorCount <= 0){
                    rightBotSensorOn = false;
                }
                if(leftTopSensorCount <= 0){
                    leftTopSensorOn = false;
                }
                if(leftBotSensorCount <= 0){
                    leftBotSensorOn = false;
                }
                if(botDashSensorCount <= 0){
                    botDashSensorOn = false;
                }
            }
        }
    }
}


function deathPause()
{
    //deathTest = true;
    game.add.tween(waveSprite.body.velocity).to({x: 0}, 7000, "Linear",true);
    game.add.tween(restartImage).to( { alpha: 0.9 }, 2000, "Linear", true);
    
    //Restart text, if wanted
    /*
    gameOverText.fixedToCamera = true;
    gameOverText.scale.setTo(0.2,0.2);
    gameOverText.alpha = 0.1;
    game.add.tween(gameOverText).to( { alpha: 0.9 }, 2000, "Linear", true);*/

}

//Had to add this function because the timer uses a callBack and when trying to pass game into deathPause, 
//it ignores the timer. So I have the callBack call pauseGame() to pause the game.
function pauseGame(game)
{
    game.paused = true;
    
}

