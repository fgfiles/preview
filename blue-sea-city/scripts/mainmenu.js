var mainMenuOn = true;

var mainMenuTitleSprite;
var menuPlayButtonSprite;
var menuControlsButtonSprite;

var controlsLeftText;
var controlsRightText;
var controlsJumpText;
var controlsDashText;
var controlsInventoryText;
var controlsPauseText;
var controlsRestartText;
var controlsBackText;
var controlsResetText;
var controlsSwitchingText;
var controlsTextSizeMult = 0.13;
var controlsArray = [controlsBackText,controlsLeftText,controlsRightText,
                    controlsJumpText,controlsDashText,controlsInventoryText,
                    controlsPauseText,controlsRestartText,controlsResetText];
var controlsTextArray = [
                            '', 'MOVE LEFT: ', 'MOVE RIGHT: ', 'JUMP: ', 'DASH: ',
                            'INVENTORY: ', 'PAUSE: ', 'RESTART: ', ''
                        ];
var choosingControl = false;
var stopChoosingControl = false;

var menuCreditsButtonSprite;
var mainMenuControlsSprite;
var mainMenuCreditsSprite;
var fullScreenSprite;

var buttonsList = [true,false,false];
var currentMainMenuButton = 0;
var mainMainMenuOn = true;
var controlsMenuOn = false;
var creditsMenuOn = false;
var controlsMenuOnList = [true,false,false,false,false,false,false,false,false];
var currentControlsButton = 0;
var nextControlsButton = 0;

var fadingOut = true;
var fadingOutList = [];
var fadingOutIncrement = 0.01;
var menuButtonsFadeOutTo = 0.2;

function createMainMenu(game){
    
    mainMenuOn = true;

    mainMenuTitleSprite;
    menuPlayButtonSprite;
    menuControlsButtonSprite;
    menuCreditsButtonSprite;
    mainMenuControlsSprite;
    mainMenuCreditsSprite;
    fullScreenSprite;
    
    buttonsList = [true,false,false];
    currentMainMenuButton = 0;
    mainMainMenuOn = true;
    controlsMenuOn = false;
    creditsMenuOn = false;
    controlsMenuOnList = [true,false,false,false,false,false,false,false,false];
    controlsTextArray = [
                            '', 'MOVE LEFT: ', 'MOVE RIGHT: ', 'JUMP: ', 'DASH: ',
                            'INVENTORY: ', 'PAUSE: ', 'RESTART: ', ''
                        ];
    currentControlsButton = 0;
    nextControlsButton = 0;
    
    fadingOut = true;
    fadingOutList = [];
    fadingOutIncrement = 0.01;
    menuButtonsFadeOutTo = 0.2;
    
    controlsTextSizeMult = 0.13;
    choosingControl = false;
    stopChoosingControl = false;
    
    mainMenuTitleSprite = game.add.sprite(320, 850, 'title_name');
    mainMenuTitleSprite.scale.set(0.1,0.1);
    mainMenuTitleSprite.alpha = 0;
    menuPlayButtonSprite = game.add.sprite(320,1074,'button_start_1');
    menuPlayButtonSprite.scale.set(0.1,0.1);
    menuPlayButtonSprite.alpha = 0;
    menuControlsButtonSprite = game.add.sprite(370,1074,'button_controls_1');
    menuControlsButtonSprite.scale.set(0.1,0.1);
    menuControlsButtonSprite.alpha = 0;
    menuCreditsButtonSprite = game.add.sprite(453,1074,'button_credits_1');
    menuCreditsButtonSprite.scale.set(0.1,0.1);
    menuCreditsButtonSprite.alpha = 0;
    mainMenuControlsSprite = game.add.sprite(333,859,'controls_screen');
    mainMenuControlsSprite.scale.set(1.2,1.2);
    mainMenuControlsSprite.alpha = 0;
    mainMenuCreditsSprite = game.add.sprite(390,860,'credits_screen');
    mainMenuCreditsSprite.scale.set(1.2,1.2);
    mainMenuCreditsSprite.alpha = 0;
    
    controlsBackText = game.add.text(306,1067,'BACK TO\nMAIN\nMENU',textStyle);
    controlsBackText.scale.set(controlsTextSizeMult,controlsTextSizeMult);
    controlsBackText.alpha = 0;
    controlsLeftText = game.add.text(346,1076,'MOVE LEFT: ' + getActualKey(leftKeyCode),textStyle);
    controlsLeftText.scale.set(controlsTextSizeMult,controlsTextSizeMult);
    controlsLeftText.alpha = 0;
    controlsRightText = game.add.text(404,1076,'MOVE RIGHT: ' + getActualKey(rightKeyCode),textStyle);
    controlsRightText.scale.set(controlsTextSizeMult,controlsTextSizeMult);
    controlsRightText.alpha = 0;
    controlsJumpText = game.add.text(461,1076,'JUMP: ' + getActualKey(jumpKeyCode),textStyle);
    controlsJumpText.scale.set(controlsTextSizeMult,controlsTextSizeMult);
    controlsJumpText.alpha = 0;
    controlsDashText = game.add.text(499,1076,'DASH: ' + getActualKey(dashKeyCode),textStyle);
    controlsDashText.scale.set(controlsTextSizeMult,controlsTextSizeMult);
    controlsDashText.alpha = 0;
    controlsInventoryText = game.add.text(536,1076,'INVENTORY: ' + getActualKey(inventoryKeyCode),textStyle);
    controlsInventoryText.scale.set(controlsTextSizeMult,controlsTextSizeMult);
    controlsInventoryText.alpha = 0;
    controlsPauseText = game.add.text(592,1076,'PAUSE: ' + getActualKey(pauseKeyCode),textStyle);
    controlsPauseText.scale.set(controlsTextSizeMult,controlsTextSizeMult);
    controlsPauseText.alpha = 0;
    controlsRestartText = game.add.text(631,1076,'RESTART: ' + getActualKey(restartKeyCode),textStyle);
    controlsRestartText.scale.set(controlsTextSizeMult,controlsTextSizeMult);
    controlsRestartText.alpha = 0;
    controlsSwitchingText = game.add.text(450,1084,'PRESS ANY BUTTON',textStyle);
    controlsSwitchingText.scale.set(0.17,0.17);
    controlsSwitchingText.alpha = 0;
    controlsResetText = game.add.text(682,1076,'RESET',textStyle);
    controlsResetText.scale.set(controlsTextSizeMult,controlsTextSizeMult);
    controlsResetText.alpha = 0;
    
    //Sprite,direction_of_fading,currently_fading,increment_multiplier,target_alpha
    
    fadingOutList.push([mainMenuTitleSprite,1,true,2,1]);//0
    
    fadingOutList.push([menuPlayButtonSprite,1,true,12,1]);//1
    fadingOutList.push([menuControlsButtonSprite,1,true,12,menuButtonsFadeOutTo]);//2
    fadingOutList.push([menuCreditsButtonSprite,1,true,12,menuButtonsFadeOutTo]);//3
    
    fadingOutList.push([mainMenuControlsSprite,0,false,10,menuButtonsFadeOutTo]);//4
    fadingOutList.push([mainMenuCreditsSprite,0,false,10,menuButtonsFadeOutTo]);//5
    
    fadingOutList.push([controlsBackText,0,false,10,menuButtonsFadeOutTo]);//6
    fadingOutList.push([controlsLeftText,0,false,10,menuButtonsFadeOutTo]);//7
    fadingOutList.push([controlsRightText,0,false,10,menuButtonsFadeOutTo]);//8
    fadingOutList.push([controlsJumpText,0,false,10,menuButtonsFadeOutTo]);//9
    fadingOutList.push([controlsDashText,0,false,10,menuButtonsFadeOutTo]);//10
    fadingOutList.push([controlsInventoryText,0,false,10,menuButtonsFadeOutTo]);//11
    fadingOutList.push([controlsPauseText,0,false,10,menuButtonsFadeOutTo]);//12
    fadingOutList.push([controlsRestartText,0,false,10,menuButtonsFadeOutTo]);//13
    fadingOutList.push([controlsResetText,0,false,10,menuButtonsFadeOutTo]);//14
    fadingOutList.push([controlsSwitchingText,0,false,10,menuButtonsFadeOutTo]);//15
    controlsArray = [controlsBackText,controlsLeftText,controlsRightText,
                    controlsJumpText,controlsDashText,controlsInventoryText,
                    controlsPauseText,controlsRestartText,controlsResetText];
}

function updateMainMenu(){
    if(fadingOut){
        mainMenuFadeOut();
    }
    if(mainMenuOn){
        if(!choosingControl){
            if(mainMainMenuOn || controlsMenuOn){
                if(leftDown){
                    switchMainMenuButton(true);
                }
                else if(rightDown){
                    switchMainMenuButton(false);
                }
            }
            if(jumpDown){
                activateMainMenuButton();
            }
        }
    }
    
    if(stopChoosingControl){
        choosingControl = false;
        stopChoosingControl = false;
    }
    
    //Update player animation while in main menu
    var pai = playerSprite.animations.frame;
    if(pai >= 135 && pai <= 140){
        if(lockpickingSound.isPlaying){
            unplayLockpicking();
            playSound("pullingDoor");
        }
    }
    else{
        if(pullingDoorSound.isPlaying){
            unplayPullingDoor();
            playSound("lockpicking");
        }
    }
}

function mainMenuFadeOut(){
    var keepDoingThis = false;
    for(var i=0; i<fadingOutList.length; i++){
        if(fadingOutList[i][2]){
            fadingOutList[i][0].alpha += fadingOutList[i][1] * fadingOutList[i][3] * fadingOutIncrement;
            if(
                (fadingOutList[i][0].alpha <= fadingOutList[i][4] && fadingOutList[i][1] == -1) || 
                (fadingOutList[i][0].alpha >= fadingOutList[i][4] && fadingOutList[i][1] == 1)
            ){
                fadingOutList[i][0].alpha = fadingOutList[i][4];
                fadingOutList[i][2] = false;
            }
            keepDoingThis = true;
        }
    }
    if(!keepDoingThis){
        fadingOut = false;
    }
}

function switchMainMenuButton(left){  //please add comments to this file!
    fadingOut = true;
    playSound('menuSwitch');
    if(left){
        if(mainMainMenuOn){
            buttonsList[currentMainMenuButton] = false;
            if(currentMainMenuButton == 0){
                buttonsList[2] = true;
                currentMainMenuButton = 2;
                fadingOutList[1][2] = true;
                fadingOutList[1][1] = -1;
                fadingOutList[1][4] = menuButtonsFadeOutTo;
                fadingOutList[3][2] = true;
                fadingOutList[3][1] = 1;
                fadingOutList[3][4] = 1;
            }
            else if(currentMainMenuButton == 1){
                buttonsList[0] = true;
                currentMainMenuButton = 0;
                fadingOutList[2][2] = true;
                fadingOutList[2][1] = -1;
                fadingOutList[2][4] = menuButtonsFadeOutTo;
                fadingOutList[1][2] = true;
                fadingOutList[1][1] = 1;
                fadingOutList[1][4] = 1;
            }
            else{
                buttonsList[1] = true;
                currentMainMenuButton = 1;
                fadingOutList[3][2] = true;
                fadingOutList[3][1] = -1;
                fadingOutList[3][4] = menuButtonsFadeOutTo;
                fadingOutList[2][2] = true;
                fadingOutList[2][1] = 1;
                fadingOutList[2][4] = 1;
            }
        }
        else{
            nextControlsButton = (currentControlsButton - 1 + controlsMenuOnList.length) % controlsMenuOnList.length;
            var j = controlsArray[currentControlsButton];
            fadingOutList[currentControlsButton+6][2] = true;
            fadingOutList[currentControlsButton+6][1] = -1;
            fadingOutList[currentControlsButton+6][4] = menuButtonsFadeOutTo;
            fadingOutList[nextControlsButton+6][2] = true;
            fadingOutList[nextControlsButton+6][1] = 1;
            fadingOutList[nextControlsButton+6][4] = 1;
            controlsMenuOnList[nextControlsButton] = true;
            controlsMenuOnList[currentControlsButton] = false;
            currentControlsButton = nextControlsButton;
        }
    }
    else{
        if(mainMainMenuOn){
            buttonsList[currentMainMenuButton] = false;
            if(currentMainMenuButton == 2){
                buttonsList[0] = true;
                currentMainMenuButton = 0;
                fadingOutList[3][2] = true;
                fadingOutList[3][1] = -1;
                fadingOutList[3][4] = menuButtonsFadeOutTo;
                fadingOutList[1][2] = true;
                fadingOutList[1][1] = 1;
                fadingOutList[1][4] = 1;
            }
            else if(currentMainMenuButton == 1){
                buttonsList[2] = true;
                currentMainMenuButton = 2;
                fadingOutList[2][2] = true;
                fadingOutList[2][1] = -1;
                fadingOutList[2][4] = menuButtonsFadeOutTo;
                fadingOutList[3][2] = true;
                fadingOutList[3][1] = 1;
                fadingOutList[3][4] = 1;
            }
            else{
                buttonsList[1] = true;
                currentMainMenuButton = 1;
                fadingOutList[1][2] = true;
                fadingOutList[1][1] = -1;
                fadingOutList[1][4] = menuButtonsFadeOutTo;
                fadingOutList[2][2] = true;
                fadingOutList[2][1] = 1;
                fadingOutList[2][4] = 1;
            }
        }
        else{
            nextControlsButton = (currentControlsButton + 1 + controlsMenuOnList.length) % controlsMenuOnList.length;
            var j = controlsArray[currentControlsButton];
            fadingOutList[currentControlsButton+6][2] = true;
            fadingOutList[currentControlsButton+6][1] = -1;
            fadingOutList[currentControlsButton+6][4] = menuButtonsFadeOutTo;
            fadingOutList[nextControlsButton+6][2] = true;
            fadingOutList[nextControlsButton+6][1] = 1;
            fadingOutList[nextControlsButton+6][4] = 1;
            controlsMenuOnList[nextControlsButton] = true;
            controlsMenuOnList[currentControlsButton] = false;
            currentControlsButton = nextControlsButton;
        }
    }
}

function activateMainMenuButton(){
    fadingOut = true;
    if(!(mainMainMenuOn && buttonsList[0])){
        playSound('menuSelect');
    }
    if((controlsMenuOn && controlsMenuOnList[0])|| creditsMenuOn){
        if(buttonsList[0]){
            fadingOutList[1][4] = 1;
            fadingOutList[2][4] = menuButtonsFadeOutTo;
            fadingOutList[3][4] = menuButtonsFadeOutTo;
        }
        else if(buttonsList[1]){
            fadingOutList[1][4] = menuButtonsFadeOutTo;
            fadingOutList[2][4] = 1;
            fadingOutList[3][4] = menuButtonsFadeOutTo;
        }
        else if(buttonsList[2]){
            fadingOutList[1][4] = menuButtonsFadeOutTo;
            fadingOutList[2][4] = menuButtonsFadeOutTo;
            fadingOutList[3][4] = 1;
        }
        for(var i = 1; i < 4; i++){
            fadingOutList[i][2] = true;
            fadingOutList[i][1] = 1;
            fadingOutList[i][3] = 5;
        }
        fadingOutList[0][2] = true;
        fadingOutList[0][1] = 1;
        fadingOutList[0][4] = 1;
        
    }
    if(controlsMenuOn){
        if(controlsMenuOnList[0]){
            fadingOutList[4][2] = true;
            fadingOutList[4][1] = -1;
            fadingOutList[4][4] = 0;
            fadingOutList[4][3] = 10;
            for(var i = 6;i<15;i++){
                fadingOutList[i][2] = true;
                fadingOutList[i][1] = -1;
                fadingOutList[i][4] = 0;
                fadingOutList[i][3] = 10;
            }
        }
        else{
            //Switch control
            if(currentControlsButton != 8){
                choosingControl = true;
                fadingOutList[15][2] = true;
                fadingOutList[15][1] = 1;
                fadingOutList[15][4] = 1;
                fadingOutList[15][3] = 10;
            }
            //Reset controls
            else{
                var days = 10;
                setCookie('leftKeyCode',Phaser.Keyboard.LEFT,days);
                setCookie('rightKeyCode',Phaser.Keyboard.RIGHT,days);
                setCookie('jumpKeyCode',Phaser.Keyboard.Z,days);
                setCookie('dashKeyCode',Phaser.Keyboard.X,days);
                setCookie('inventoryKeyCode',Phaser.Keyboard.C,days);
                setCookie('pauseKeyCode',Phaser.Keyboard.F,days);
                setCookie('restartKeyCode',Phaser.Keyboard.R,days);
                leftKeyCode = Phaser.Keyboard.LEFT;
                rightKeyCode = Phaser.Keyboard.RIGHT;
                jumpKeyCode = Phaser.Keyboard.Z;
                dashKeyCode = Phaser.Keyboard.X;
                inventoryKeyCode = Phaser.Keyboard.C;
                pauseKeyCode = Phaser.Keyboard.F;
                restartKeyCode = Phaser.Keyboard.R;
                controlsArray[1].setText(controlsTextArray[1] + getActualKey(leftKeyCode));
                controlsArray[2].setText(controlsTextArray[2] + getActualKey(rightKeyCode));
                controlsArray[3].setText(controlsTextArray[3] + getActualKey(jumpKeyCode));
                controlsArray[4].setText(controlsTextArray[4] + getActualKey(dashKeyCode));
                controlsArray[5].setText(controlsTextArray[5] + getActualKey(inventoryKeyCode));
                controlsArray[6].setText(controlsTextArray[6] + getActualKey(pauseKeyCode));
                controlsArray[7].setText(controlsTextArray[7] + getActualKey(restartKeyCode));
                
            }
        }
    }
    if(creditsMenuOn){
        fadingOutList[5][2] = true;
        fadingOutList[5][1] = -1;
        fadingOutList[5][4] = 0;
        fadingOutList[5][3] = 10;
    }
    if(mainMainMenuOn){
        if(buttonsList[0]){
            if(mainMenuTitleSprite.alpha >= 0.1){
                exitMainMenu();
            }
        }
        else if(buttonsList[1]){
            controlsMenuOn = true;
            mainMainMenuOn = false;
            fadingOutList[4][2] = true;
            fadingOutList[4][1] = 1;
            fadingOutList[4][4] = 1;
            fadingOutList[4][3] = 10;
            for(var i = 6;i<15;i++){
                fadingOutList[i][2] = true;
                if(i == 6){
                    fadingOutList[i][4] = 1;
                }
                else{
                    fadingOutList[i][4] = menuButtonsFadeOutTo;
                }
                fadingOutList[i][1] = 1;
                fadingOutList[i][3] = 10;
            }
            for(var i = 0; i < 4; i++){
                fadingOutList[i][2] = true;
                fadingOutList[i][1] = -1;
                fadingOutList[i][3] = 10;
                fadingOutList[i][4] = 0;
            }
        }
        else if(buttonsList[2]){
            creditsMenuOn = true;
            mainMainMenuOn = false;
            fadingOutList[5][2] = true;
            fadingOutList[5][1] = 1;
            fadingOutList[5][4] = 1;
            fadingOutList[5][3] = 10;
            for(var i = 0; i < 4; i++){
                fadingOutList[i][2] = true;
                fadingOutList[i][1] = -1;
                fadingOutList[i][3] = 10;
                fadingOutList[i][4] = 0;
            }
        }
        else{
            console.log("False main menu button");
        }
    }
    else if(creditsMenuOn || (controlsMenuOn && controlsMenuOnList[0])){
        mainMainMenuOn = true;
        creditsMenuOn = false;
        controlsMenuOn = false;
    }
}

function exitMainMenu(){
    //CHANGE BACK AFTER SGX
    if(!playerPassedTutorial){
        game.add.tween(playerTutorialSprites).to( { alpha: 1 }, 500, "Linear", true);
    }
    //CHANGE^
    if(restartIter % 3 == 0){
        playSound('waveSiren');
    }
    if(lockpickingSound.isPlaying){
        unplayLockpicking();
    }
    if(pullingDoorSound.isPlaying){
        unplayPullingDoor();
    }
    playMusic();
    fadingOut = true;
    waveSprite.body.velocity.x = waveSpeed;
    gameTimer.resume();
    mainMenuOn = false;
    openDoor(1,1,false);
    
    if (showSecTimer){
        game.add.tween(timerText).to( { alpha: 1.0 }, 500, "Linear", true);
        //timerText.alpha = 1.0;
    }
    if (showLootCount) { 
        game.add.tween(lootCountText).to( { alpha: 1.0 }, 500, "Linear", true);
        //lootCountText.alpha = 1.0;
    }
    if (addInventory){
        game.add.tween(inventoryBackground).to( { alpha: 0.8 }, 500, "Linear", true);
        //inventoryBackground.alpha = 0.8;
    }
    
    fullScreenButton.alpha = 0;
    
    for(var i = 0; i < fadingOutList.length; i++){
        fadingOutList[i][2] = true;
        fadingOutList[i][1] = -1;
        fadingOutList[i][3] = 10;
        fadingOutList[i][4] = 0;
    }
    
    if(right){
        walkingRight = 1;
        playerDirection = 1;
        walking = walkingLeft + walkingRight;
        walkTimer = walkSpeedUp / 7;
        walkStep = 0;
        targetVelocityX = walking * walkSpeed;
        initialVelocityX = playerSprite.body.velocity.x;
    }
    else if(left){
        walkingLeft = -1;
        playerDirection = -1;
        walking = walkingLeft + walkingRight;
        walkTimer = walkSpeedUp / 7;
        walkStep = 0;
        targetVelocityX = walking * walkSpeed;
        initialVelocityX = playerSprite.body.velocity.x;
    }
    restartIter++;
}

function chooseControl(key){
    if(leftKeyCode == key){
        leftKeyCode = 0;
        controlsArray[1].setText(controlsTextArray[1] + 'NA');
    }
    if(rightKeyCode == key){
        rightKeyCode = 0;
        controlsArray[2].setText(controlsTextArray[2] + 'NA');
    }
    if(jumpKeyCode == key){
        jumpKeyCode = 0;
        controlsArray[3].setText(controlsTextArray[3] + 'NA');
    }
    if(dashKeyCode == key){
        dashKeyCode = 0;
        controlsArray[4].setText(controlsTextArray[4] + 'NA');
    }
    if(inventoryKeyCode == key){
        inventoryKeyCode = 0;
        controlsArray[5].setText(controlsTextArray[5] + 'NA');
    }
    if(pauseKeyCode == key){
        pauseKeyCode = 0;
        controlsArray[6].setText(controlsTextArray[6] + 'NA');
    }
    if(restartKeyCode == key){
        restartKeyCode = 0;
        controlsArray[7].setText(controlsTextArray[7] + 'NA');
    }
    
    var addition = getActualKey(key);
    controlsArray[currentControlsButton].setText(controlsTextArray[currentControlsButton] + addition);
    var cookieDays = 10;
    switch(currentControlsButton){
        case 1:
            leftKeyCode = key;
            setCookie('leftKeyCode',key,cookieDays);
            break;
        case 2:
            rightKeyCode = key;
            setCookie('rightKeyCode',key,cookieDays);
            break;
        case 3:
            jumpKeyCode = key;
            setCookie('jumpKeyCode',key,cookieDays);
            break;
        case 4:
            dashKeyCode = key;
            setCookie('dashKeyCode',key,cookieDays);
            break;
        case 5:
            inventoryKeyCode = key;
            setCookie('inventoryKeyCode',key,cookieDays);
            break;
        case 6:
            pauseKeyCode = key;
            setCookie('pauseKeyCode',key,cookieDays);
            break;
        case 7:
            restartKeyCode = key;
            setCookie('restartKeyCode',key,cookieDays);
            break;
        default:
            console.log("Weird button in chooseControl");
            break;
    }
}

function getActualKey(key){
    var addition = String.fromCharCode(key);
    if(addition == '%'){addition = '⬅';}
    else if(addition == '\''){addition = '➡';}
    else if(addition == '&'){addition = '⬆';}
    else if(addition == '('){addition = '⬇';}
    else if(addition == '¿'){addition = '/';}
    else if(addition == '¾'){addition = '.';}
    else if(addition == '¼'){addition = ',';}
    else if(addition == 'Þ'){addition = '\'';}
    else if(addition == 'º'){addition = ';';}
    else if(addition == 'Ü'){addition = '\\';}
    else if(addition == 'Ý'){addition = ']';}
    else if(addition == 'Û'){addition = '[';}
    else if(addition == '»'){addition = '=';}
    else if(addition == '½'){addition = '-';}
    else if(addition == 'À'){addition = '`';}
    else if(key == 17){addition = 'ctrl';}
    else if(key == 16){addition = 'shft';}
    else if(key == 32){addition = '_';}
    else if(key == 18){addition = 'alt';}
    else if(key == 20){addition = 'cplk';}
    else if(key == 9){addition = 'tab';}
    return addition;
}