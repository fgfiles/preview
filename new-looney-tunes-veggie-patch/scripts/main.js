// For earlier IE/IOS support
import '../lib/polyfill.min.js';

// External
import '../lib/fastclick.js';
import '../lib/hammer.min.js';
import '../lib/howler.min.js';

// Error console
import ErrorConsole from './error-console.js';
let errorConsole = new ErrorConsole({elementId: 'error-console', alertOnError: false});

// Import Onyx
import * as Onyx from '../lib/onyx/scripts/main.js';
Onyx.CONST.AUTO_DETECT_DEVICE_PIXEL_RATIO = true;
Onyx.CONST.SHADOWS_VSM_ENABLED = false;
Onyx.CONST.LIGHTING_ENABLED = false;
Onyx.CONST.DIRECTIONAL_SHADOWS_ENABLED = false;
Onyx.CONST.DEFAULT_SHADOW_BIAS = 0.000001;
Onyx.CONST.MAX_LIGHTS = 2;

// Import Scenes
import ScenePreloader from './preloader.js';
import SceneTitle from './title.js';
import SceneGame from './game.js';

// Init game
class Game {
    constructor(){
        this.music = [];
        this.sfx = [];
        this.spritesheets = [];

        this.textures = {};

        this.playingMusic = [];

        this.SPRITE_SCALE = 2;

        this.router = new Onyx.Router({
            clock: new Onyx.Clock(),
            map: {
                "preloader": { module: new ScenePreloader() },
                "title": { module: new SceneTitle() },
                "game": { module: new SceneGame() },
            }
        });
    }

    toggleMute(){
        Howler.mute(!Howler._muted);

        document.getElementById('snd-btn').classList = (Howler._muted)?"off":"on";
    }

    start(){
        this.router.navigate("preloader"); 
    }

    playSFX(name, stopOthers = true, fadeTime = 0, id){
        if(stopOthers) this.stopSFX(name);

        let i = this.sfx[name].play(id);
        if(fadeTime){
            this.sfx[name].fade(0, 1, fadeTime, i);
        }else{
            this.sfx[name].volume(1, i);
        }

        return i;
    }

    stopSFX(name, fadeTime = 0, id){
        if(fadeTime){
            this.sfx[name].once( 'fade', () => { this.sfx[name].stop( id ); }, id );
            this.sfx[name].fade(1, 0, fadeTime, id);
        }else{
            this.sfx[name].stop()
        }
    }

    stopAllSFX(fadeTime){
        for(let name of Object.keys(this.sfx)){
            if(this.sfx[name].playing()) this.stopSFX(name, fadeTime);
        }
    }

    playMusic(name, stopOthers){
        if(stopOthers) this.sfx[name].stop();

        this.music[name].volume(1);
        let i = this.music[name].play();
        this.playingMusic.push({name: name, id: i});

        return i;
    }

    stopMusic(name, fadeTime = 1000, id){
        if(fadeTime){
            window.setTimeout(() => {
                this.music[name].stop(id);
            }, fadeTime);

            this.music[name].fade(1, 0, fadeTime, id);
        }else{
            this.music[name].stop(id);
        }

        if(id){
            for(let i in this.playingMusic){
                if(this.playingMusic[i].id === id) this.playingMusic.splice(i, 1);
            }
        }
    }

    stopAllMusic(fadeTime, forceAll){
        if(forceAll){
            for(let name of Object.keys(this.music)){
                this.stopMusic(name, fadeTime);
            }
        }else{
            for(let i = this.playingMusic.length - 1; i >= 0; i--){
                let music = this.playingMusic[i];
                this.stopMusic(music.name, fadeTime, music.id);
            }
        }
    }

    toggleErrorConsole(){
        if(errorConsole.consoleElement.display != "none"){
            errorConsole.showConsole();
        }else{
            errorConsole.hideConsole();
        }
    }
}

// Mute/Unmute sound on tab focus change
var hidden, visibilityState, visibilityChange;

if (typeof document.hidden !== "undefined") {
    hidden = "hidden", visibilityChange = "visibilitychange", visibilityState = "visibilityState";
} else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden", visibilityChange = "msvisibilitychange", visibilityState = "msVisibilityState";
}

var document_hidden = document[hidden];

document.addEventListener(visibilityChange, function() {
if(document_hidden != document[hidden]) {
    if(document[hidden]) {
        // Document hidden
        Howler.mute(true);
    } else {
        // Document shown
        Howler.mute(false);
    }

    document_hidden = document[hidden];
}
});

window.game = new Game();
window.router = window.game.router;
window.game.start();