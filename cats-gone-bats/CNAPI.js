function reload() {
    if(window.globalGame.paused)
    {
        resume();
    }

    var slideOut = Phaser.Plugin.StateTransition.Out.SlideTop;
    slideOut.duration = 1000;

    window.globalGame.state.start('gameplay' , slideOut );
}

function pause() {
    window.globalGame.paused = true;
}

function unpause()
{
    resume();
}

function resume() {
    window.globalGame.paused = false;
}

function mute() {
    window.globalGame.sound.mute = true;
}

function unmute() {
    window.globalGame.sound.mute = false;
}

function submitRank(rank) {
        location.href = "cnwap://userperform:" + rank;
}

var mobile = false;

function onMobile(){
    mobile = true;
}