var left = false;
var leftDown = false;
var leftDownOnce = false;
var leftUp = false;
var leftUpOnce = true;
var pauseLeft = false;

var right = false;
var rightDown = false;
var rightDownOnce = false;
var rightUp = false;
var rightUpOnce = true;
var pauseRight = false;

var up = false;
var upDown = false;
var upDownOnce = false;
var upUp = false;
var upUpOnce = true;

var down = false;
var downDown = false;
var downDownOnce = false;
var downUp = false;
var downUpOnce = true;

var jump = false;
var jumpDown = false;
var jumpDownOnce = false;
var jumpUp = false;
var jumpUpOnce = true;
var pauseJump = false;

var dash = false;
var dashDown = false;
var dashDownOnce = false;
var dashUp = false;
var dashUpOnce = true;
var pauseDash = false;

var interact = false;
var interactDown = false;
var interactDownOnce = false;
var interactUp = false;
var interactUpOnce = true;

var pause = false;
var pauseDown = false;
var pauseDownOnce = false;

var inventoryView = false;

var deadZone = 0.1;


function createInput(game){
    left = false;
    leftDown = false;
    leftDownOnce = false;
    leftUp = false;
    leftUpOnce = true;
    pauseLeft = false;
    
    right = false;
    rightDown = false;
    rightDownOnce = false;
    rightUp = false;
    rightUpOnce = true;
    pauseRight = false;
    
    up = false;
    upDown = false;
    upDownOnce = false;
    upUp = false;
    upUpOnce = true;
    
    down = false;
    downDown = false;
    downDownOnce = false;
    downUp = false;
    downUpOnce = true;
    
    jump = false;
    jumpDown = false;
    jumpDownOnce = false;
    jumpUp = false;
    jumpUpOnce = true;
    pauseJump = false;
    
    dash = false;
    dashDown = false;
    dashDownOnce = false;
    dashUp = false;
    dashUpOnce = true;
    pauseDash = false;
    
    interact = false;
    interactDown = false;
    interactDownOnce = false;
    interactUp = false;
    interactUpOnce = true;
    
    pause = false;
    pauseDown = false;
    pauseDownOnce = false;
    
    inventoryView = false;
    
    deadZone = 0.1;
}

function updateInput(game){
    checkOnce();
    if (
            (game.input.keyboard.isDown(leftKeyCode) && !mainMenuOn) ||
            (game.input.keyboard.isDown(Phaser.Keyboard.LEFT) && mainMenuOn) || 
            pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -deadZone
        ){
        left = true;
        leftUpOnce = false;
        if(!leftDownOnce){
            leftDownOnce = true;
            leftDown = true;
        }
    }
    else{
        //pauseLeft = false;
        left = false;
        leftDownOnce = false;
        if(!leftUpOnce){
            leftUpOnce = true;
            leftUp = true;
        }
    }
    
    if (
            (game.input.keyboard.isDown(rightKeyCode) && !mainMenuOn) || 
            (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && mainMenuOn) || 
            pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > deadZone
        ){
        right = true;
        rightUpOnce = false;
        if(!rightDownOnce){
            rightDownOnce = true;
            rightDown = true;
        }
    }
    else{
        //pauseRight = false;
        right = false;
        rightDownOnce = false;
        if(!rightUpOnce){
            rightUpOnce = true;
            rightUp = true;
        }
    }
    
    if (game.input.keyboard.isDown(Phaser.Keyboard.UP) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) > deadZone){
        up = true;
        upUpOnce = false;
        if(!upDownOnce){
            upDownOnce = true;
            upDown = true;
        }
    }
    else{
        up = false;
        upDownOnce = false;
        if(!upUpOnce){
            upUpOnce = true;
            upUp = true;
        }
    }
    
    if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) < -deadZone){
        down = true;
        downUpOnce = false;
        if(!downDownOnce){
            downDownOnce = true;
            downDown = true;
        }
    }
    else{
        down = false;
        downDownOnce = false;
        if(!downUpOnce){
            downUpOnce = true;
            downUp = true;
        }
    }
    
    if (
            (game.input.keyboard.isDown(jumpKeyCode) && !mainMenuOn) || 
            ((
                game.input.keyboard.isDown(Phaser.Keyboard.Z) || 
                game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) ||
                game.input.keyboard.isDown(Phaser.Keyboard.ENTER)
            ) && mainMenuOn) ||
            pad1.isDown(Phaser.Gamepad.XBOX360_A)
    ){
        jump = true;
        jumpUpOnce = false;
        if(!jumpDownOnce){
            jumpDownOnce = true;
            jumpDown = true;
        }
    }
    else{
        //pauseJump = false;
        jump = false;
        jumpDownOnce = false;
        if(!jumpUpOnce){
            jumpUpOnce = true;
            jumpUp = true;
        }
    }
    
    if (
            (game.input.keyboard.isDown(dashKeyCode) && !mainMenuOn) ||
            (game.input.keyboard.isDown(Phaser.Keyboard.X) && mainMenuOn) || 
            pad1.isDown(Phaser.Gamepad.XBOX360_X) ||
            pad1.isDown(Phaser.Gamepad.XBOX360_RIGHT_TRIGGER)
    ){
        dash = true;
        dashUpOnce = false;
        if(!dashDownOnce){
            dashDownOnce = true;
            dashDown = true;
        }
    }
    else{
        //pauseDash = false;
        dash = false;
        dashDownOnce = false;
        if(!dashUpOnce){
            dashUpOnce = true;
            dashUp = true;
        }
    }
    if (
            (game.input.keyboard.isDown(restartKeyCode) && !mainMenuOn)
            /*game.input.keyboard.isDown(Phaser.Keyboard.R)*/ || 
            pad1.isDown(Phaser.Gamepad.XBOX360_BACK)
        ){
        interact = true;
        interactUpOnce = false;
        if(!interactDownOnce){
            interactDownOnce = true;
            interactDown = true;
        }
    }
    else{
        interact = false;
        interactDownOnce = false;
        if(!interactUpOnce){
            interactUpOnce = true;
            interactUp = true;
        }
    }
    if (
        (game.input.keyboard.isDown(pauseKeyCode) && !mainMenuOn)
        /*game.input.keyboard.isDown(Phaser.Keyboard.F)*/
        ){
        //pause = true;
        if(!pauseDownOnce){
            pauseDownOnce = true;
            pauseDown = true;
        }
    }
    else{
        //pause = false;
        pauseDownOnce = false;
    }
    if (
        (game.input.keyboard.isDown(inventoryKeyCode) && !mainMenuOn) || 
        /*game.input.keyboard.isDown(Phaser.Keyboard.C) || */
        pad1.isDown(Phaser.Gamepad.XBOX360_Y)){
        inventoryView = true; 
    }
    else{
        inventoryView = false;
    }
}

function checkOnce(){
    if(leftDownOnce){
        leftDown = false;
    }
    if(leftUpOnce){
        leftUp = false;
    }
    if(rightDownOnce){
        rightDown = false;
    }
    if(rightUpOnce){
        rightUp = false;
    }
    if(upDownOnce){
        upDown = false;
    }
    if(upUpOnce){
        upUp = false;
    }
    if(downDownOnce){
        downDown = false;
    }
    if(downUpOnce){
        downUp = false;
    }
    if(jumpDownOnce){
        jumpDown = false;
    }
    if(jumpUpOnce){
        jumpUp = false;
    }
    if(dashDownOnce){
        dashDown = false;
    }
    if(dashUpOnce){
        dashUp = false;
    }
    if(interactDownOnce){
        interactDown = false;
    }
    if(interactUpOnce){
        interactUp = false;
    }
    if(pauseDownOnce){
        pauseDown = false;
    }
}