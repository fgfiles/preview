var splashScreenOn = true;

var splashScreenBackground;
var splashScreenSprite1;
var splashSprite1List = [];
var splashScreenSprite2;
var splashSprite2List = [];

var splashScreenTimer;
var timeSinceStartOfSplashScreen = 0;
var timeSinceStartOfSecondSplashScreen = 0;
var timeOfSwitchSplashScreen = 0;
var firstSplashScreenEndTime = 6;
var secondSplashScreenEndTime = 2;
var splashScreenStep = 0;
var mushroomSoundPlayed = false;

var splashFadingOutIncrement = 0.05;
var jumpSpeedUpMultiplier = 2;

function createSplashScreen(game){
    
    splashScreenOn = true;

    splashSprite1List = [];
    splashScreenSprite2;
    splashSprite2List = [];
    
    splashScreenTimer;
    timeSinceStartOfSplashScreen = 0;
    timeSinceStartOfSecondSplashScreen = 0;
    timeOfSwitchSplashScreen = 0;
    firstSplashScreenEndTime = 6;
    secondSplashScreenEndTime = 3;
    splashScreenStep = 0;
    mushroomSoundPlayed = false;
    
    splashFadingOutIncrement = 0.05;
    jumpSpeedUpMultiplier = 2;
    
    //splashScreenTimer = new Phaser.Time(game);
    splashScreenTimer = game.time.create(false);
    splashScreenTimer.start();
    splashScreenBackground = game.add.sprite(280,840,'fish_background');
    splashScreenBackground.bringToTop();
    //splashScreenSprite1 = game.add.sprite(450,900,'fish');
    splashScreenSprite1 = game.add.sprite(295,848,'fish_people');
    splashScreenSprite1.animations.add('main1',[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7],7,false);
    splashScreenSprite1.animations.add('main2',[8,9,10,11],15,false);
    splashScreenSprite1.animations.add('still',[11],1,false);
    splashScreenSprite1.animations.getAnimation('main1').onComplete.add(() => {
      setTimeout(() => {
        // Fade camera out
        splashScreenSprite1.animations.play('main2')
      }, 1500)
    })
    splashScreenSprite1.scale.setTo(0.35,0.35);
    splashScreenSprite1.bringToTop();
    splashScreenSprite1.alpha = 0;
    splashScreenSprite2 = game.add.sprite(280,840,'mushroom_canopy');
    splashScreenSprite2.scale.setTo(1.8,1.8);
    splashScreenSprite2.bringToTop();
    splashScreenSprite2.alpha = 0;
    //[currently_fading,direcion_of_fading,increment_multiplier,target_alpha]
    splashSprite1List = [true,1,30,1];
    splashSprite2List = [false,1,0.5,1];
    if(showSplashScreen){
        playSound('fishPeople');
        splashScreenSprite1.animations.play('main1');
    }
}

function updateSplashScreen(game){
    //splashScreenBackground.bringToTop();
    //splashScreenSprite1.bringToTop();
    //timeSinceStartOfSplashScreen += splashScreenTimer.physicsElapsed;
    updateSplashFade();
    //console.log(timeSinceStartOfSplashScreen);
    //console.log(timeSinceStartOfSplashScreen);
    if(splashScreenStep == 0){
        if((splashScreenTimer.seconds > firstSplashScreenEndTime) || jumpDown){
            timeOfSwitchSplashScreen = splashScreenTimer.seconds;
            splashScreenStep = 1;
            splashSprite1List[0] = true;
            splashSprite1List[1] = -1;
            splashSprite1List[3] = 0;
            splashSprite1List[2] = 2;
            if(jumpDown){
                splashSprite1List[2] = jumpSpeedUpMultiplier;
                splashScreenSprite1.animations.play('still');
            }
        }
    }
    else if(splashScreenStep == 1){
        if(splashScreenSprite1.alpha == 0){
            splashScreenStep = 2;
            splashSprite2List[0] = true;
            game.sound.stopAll();
            //playSound('mushroom');
        }
        if(jumpDown){
            splashSprite1List[2] = jumpSpeedUpMultiplier * 2;
        }
    }
    else if(splashScreenStep == 2){
        if(!mushroomSoundPlayed){
            if(splashScreenSprite2.alpha > 0.5){
                playSound('mushroom');
                mushroomSoundPlayed = true;
            }
        }
        if(splashScreenTimer.seconds - timeOfSwitchSplashScreen > secondSplashScreenEndTime || jumpDown){
            splashScreenStep = 3;
            splashSprite2List[0] = true;
            splashSprite2List[1] = -1;
            splashSprite2List[3] = 0;
            if(jumpDown){
                splashSprite2List[2] = jumpSpeedUpMultiplier;
            }
            game.stage.backgroundColor = 'rgba(117,60,69,1)';
        }
    }
    else if(splashScreenStep == 3){
        if(splashScreenSprite2.alpha == 0){
            splashScreenOn = false;
            splashScreenBackground.alpha = 0;
            showSplashScreen = false;
            game.sound.stopAll();
            //fullScreenButton.alpha = 0.5;
            playSound("lockpicking");
            splashScreenTimer.stop();
        }
        if(jumpDown){
            splashSprite2List[2] = jumpSpeedUpMultiplier;
            splashScreenTimer.stop();
        }
    }
}

function updateSplashFade(){
    //console.log('faded');
    if(splashSprite1List[0]){
        splashScreenSprite1.alpha += splashSprite1List[1] * splashSprite1List[2] * splashFadingOutIncrement;
        if(
            (splashScreenSprite1.alpha >= splashSprite1List[3] && splashSprite1List[1] == 1) ||
            (splashScreenSprite1.alpha <= splashSprite1List[3] && splashSprite1List[1] == -1)
        ){
            splashScreenSprite1.alpha = splashSprite1List[3];
            splashSprite1List[0] = false;
        }
    }
    if(splashSprite2List[0]){
        splashScreenSprite2.alpha += splashSprite2List[1] * splashSprite2List[2] * splashFadingOutIncrement;
        if(
            (splashScreenSprite2.alpha >= splashSprite2List[3] && splashSprite2List[1] == 1) ||
            (splashScreenSprite2.alpha <= splashSprite2List[3] && splashSprite2List[1] == -1)
        ){
            splashScreenSprite2.alpha = splashSprite2List[3];
            splashSprite2List[0] = false;
        }
    }
}

function skipSplashScreen(){
    splashScreenOn = false;
    splashScreenBackground.alpha = 0;
    splashScreenTimer.stop();
}