//LAST UPDATED MON 4/24 

//boolean
var includeAudio = true;

var rumbleMaxVolume = 0.8;
var rumbleMinDistance = 700;//800
var rumbleSlope = -rumbleMaxVolume / rumbleMinDistance;
var rumbleB = rumbleMaxVolume;

var waveMaxVolume = 1.3;
var waveMinDistance = 320;//350
var waveSlope = -waveMaxVolume / waveMinDistance;
var waveB = waveMaxVolume;

var musicMaxVolume = 0.6;
var musicMinVolume = 0.45;
var musicMaxDistance = 800;
var musicMinDistance = 400;
var musicSlope = (musicMaxVolume - musicMinVolume) / (musicMaxDistance - musicMinDistance);
var musicB = musicMaxVolume - musicSlope * musicMaxDistance;

var musicArray;
var lootArray; //currently this is collisions with the walls/ground - change to be only one of these
//add other arrays for player sounds: landing, footsteps, jumping, dashing
//add arrays for environment effects?? only if there are different versions of them

var song3;
var waveRumble, waveRipple;
var runningSound;
var pullingDoorSound;
var lockpickingSound;

var rndSong;
var rndLoot;
var rndCollision;

var initialAudioAvoided = false;

function createAudio(game){
    
    includeAudio = true;

    rumbleMaxVolume = 0.8;
    rumbleMinDistance = 700;//800
    rumbleSlope = -rumbleMaxVolume / rumbleMinDistance;
    rumbleB = rumbleMaxVolume;
    
    waveMaxVolume = 1.3;
    waveMinDistance = 320;//350
    waveSlope = -waveMaxVolume / waveMinDistance;
    waveB = waveMaxVolume;
    
    musicMaxVolume = 0.6;
    musicMinVolume = 0.45;
    musicMaxDistance = 800;
    musicMinDistance = 400;
    musicSlope = (musicMaxVolume - musicMinVolume) / (musicMaxDistance - musicMinDistance);
    musicB = musicMaxVolume - musicSlope * musicMaxDistance;
    
    initialAudioAvoided = false;
    
    //audioManager = new SoundManager(game); //not sure if going to use this yet
    game.sound.stopAll();
    
    song3 = game.add.audio('music3'); //cautious path
    waveRumble = game.add.audio('wave_rumble');
    waveRipple = game.add.audio('wave_ripple');
    runningSound = game.add.audio('running_1');
    pullingDoorSound = game.add.audio('pulling_door_1');
    lockpickingSound = game.add.audio('lockpicking_1');
    
    //runningSound.allowMultiple = true;
    
    
    musicArray = [song3];
    //lootArray = [bell, pianoC];
    //collisionArray = [thump1,thump2,thump3];
}

function updateAudio(){
    if (includeAudio){
        if(playerState != "win"){
            var tempPlayerWaveDist = playerWaveDist;
            /*
            if(playerWaveDist == Infinity){
                tempPlayerWaveDist = 10000;
            }
            else if(playerWaveDist == -Infinity){
                tempPlayerWaveDist = -10000;
            }
            else{
                tempPlayerWaveDist = playerWaveDist;
            }
            */
            if(tempPlayerWaveDist < rumbleMinDistance && tempPlayerWaveDist > 0){
                if(!waveRumble.isPlaying){
                    waveRumble.loopFull(0.01);
                }
                waveRumble.volume = tempPlayerWaveDist * rumbleSlope + rumbleB;
            }
            else if(tempPlayerWaveDist < 0){
                waveRumble.volume = rumbleMaxVolume;
            }
            else if(waveRumble.volume != 0){
                waveRumble.fadeOut(1);
            }
            
            if(tempPlayerWaveDist < waveMinDistance && tempPlayerWaveDist > 0){
                if(!waveRipple.isPlaying){
                    waveRipple.loopFull(0.01);
                }
                waveRipple.volume = tempPlayerWaveDist * waveSlope + waveB;
            }
            else if(tempPlayerWaveDist < 0){
                waveRipple.volume = waveMaxVolume;
            }
            else if(waveRipple.volume != 0){
                waveRipple.fadeOut(1);
            }
            
            
            if(tempPlayerWaveDist < musicMaxDistance && tempPlayerWaveDist > musicMinDistance){
                rndSong.volume = tempPlayerWaveDist * musicSlope + musicB;
            }
            if(!mainMenuOn && tempPlayerWaveDist >= musicMaxDistance){
                rndSong.volume = musicMaxVolume;
            }
            
        }
    }
}

function playMusic(){
    
    if (includeAudio){
        rndSong = song3;
        //rndSong.loopFull(musicMaxVolume); //setting volume
        rndSong.loopFull(0);
        game.add.tween(rndSong).to( { volume: musicMaxVolume }, 500, "Linear", true);
    } 
    
}

function playWave(){
    if (includeAudio){
        waveRumble.loopFull(0);
        //waveRipple.loopFull(1);
    }   
}

function playRunning(){
    if(includeAudio){
        runningSound.loopFull(0);
    }
}

function unplayRunning(){
    //runningSound.volume = 0;
    runningSound.stop();
}

function playPullingDoor(){
    pullingDoorSound.loopFull(0);
}

function unplayPullingDoor(){
    pullingDoorSound.stop();
}

function playLockpicking(){
    lockpickingSound.loopFull(0);
}

function unplayLockpicking(){
    lockpickingSound.stop();
}

function playLoot(){
    if (includeAudio){
        game.sound.play('loot_pickup',2);
        /*
        rndLoot = game.rnd.pick(lootArray);
        rndLoot.play('',0,0.2);
        */
        //will force restart if sound is already playing
        
    }
}

function playSound(soundString){
    if (includeAudio){
        if(soundString == 'running'){
            runningSound.restart('',0,2.5,true);
        }
        else if(soundString == 'jump'){
            //jump1.play("",0,0.5,false,false);
            game.sound.play('jump_4',1.3); 
        }
        else if(soundString == 'wallJump'){
            game.sound.play('wall_jump_1',1);
        }
        else if(soundString == 'landing'){
            if(initialAudioAvoided){
                game.sound.play('landing_2',1.2);
            }
            else{
                initialAudioAvoided = true;
            }
        }
        else if(soundString == 'wall_collide'){
            game.sound.play('wall_collide_2',2);
        }
        else if(soundString == 'dash'){
            game.sound.play('dash_2',0.4);
        }
        else if(soundString == 'pullingDoor'){
            pullingDoorSound.restart('',0,1.3,true);
        }
        else if(soundString == 'doorOpen'){
            game.sound.play('door_open',1.5);
        }
        else if(soundString == 'doorBreak'){
            game.sound.play('door_break',3.2);
        }
        else if(soundString == 'skid'){
            game.sound.play('skid_2',1.6);
        }
        else if(soundString == 'birdFlap'){
            game.sound.play('bird_flap_2',0.4);
        }
        else if(soundString == 'siren'){
            game.sound.play('siren',0.5);
        }
        else if(soundString == 'menuSwitch'){
            game.sound.play('menu_switch_1',1);
        }
        else if(soundString == 'menuSelect'){
            game.sound.play('menu_select_1',1);
        }
        else if(soundString == 'fishPeople'){
            game.sound.play('fish_people_splash',3);
        }
        else if(soundString == 'weatherAlert'){
            game.sound.play('weather_alert',0.4);
        }
        else if(soundString == 'lockpicking'){
            lockpickingSound.restart('',0,1,true);
        }
        else if(soundString == 'waveSiren'){
            game.sound.play('wave_siren',0.5);
        }
        else if(soundString == 'mushroom'){
            game.sound.play('mushroom_sound',0.5);
        }
        else{
            console.log("Invalid soundString");
        }
    }
}

function deadSound(){
    if (includeAudio){
        if(playerState == 'wave'){
            waveRipple.fadeTo(4000,0.03);
            waveRumble.fadeTo(5000,0.05);
            rndSong.fadeTo(2000,0);
            unplayRunning();
        }
        else if(playerState == 'win'){
            waveRipple.fadeTo(4000,0);
            waveRumble.fadeTo(5000,0);
            rndSong.fadeTo(2000,0.3);
        }
    }
}