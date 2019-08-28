function reload() {
    //GC.RESTARTING = 1;
    
    // if (GC.PAUSED) {
    //     resume();
    // }

    if(window.globalGame.paused)
    {
        resume();
    }

    var slideOut = Phaser.Plugin.StateTransition.Out.SlideTop;
    slideOut.duration = 1000;

    window.globalGame.state.start('gameplay' , slideOut );

    //var gameplayScene = new GameplayScene();
    //cc.director.runScene(new cc.TransitionMoveInR(0.5, gameplayScene));
}

function pause() {
    // Disable controls
    //GC.PAUSED = 1;
    
    window.globalGame.paused = true;
    //cc.director.pause();
}

function unpause()
{
    resume();
}

function resume() {
    // Enable controls
    //GC.PAUSED = 0;
    
    window.globalGame.paused = false;
    //cc.director.resume();
}

function mute() {
    //GC.ENABLE_SFX = 0;
    window.globalGame.sound.mute = true;
    
    //cc.audioEngine.setMusicVolume(0.0);
    //cc.audioEngine.setEffectsVolume(0.0);
}

function unmute() {
    //GC.ENABLE_SFX = 1;
    
    window.globalGame.sound.mute = false;
    
    // cc.audioEngine.setMusicVolume(1.0);
    // cc.audioEngine.setEffectsVolume(1.0);
}

function submitRank(rank) {
    var rankNone = 0;
    var rankOutstanding = 3;
    if (rank >= rankNone || rank <= rankOutstanding) {
        location.href = "cnwap://userperform:" + rank;
    }
}

var mobile = false;

function onMobile(){
    mobile = true;
}