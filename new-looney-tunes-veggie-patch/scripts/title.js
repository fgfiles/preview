import * as Onyx from '../lib/onyx/scripts/main.js';
import config from './lang/config.js';
import TransitionCircle from './entities/transition-circle.js';
console.log(config.localizationCode);
let localization = config.localizationCode;
export default class GameTitle extends Onyx.Scene{
    constructor(){
        super();

        this.renderPasses = [new Onyx.RenderPass({viewportClear: true})];

        this.sprites = {};
        this.mouseDown = false;

        this.listenerClick = { handleEvent: (evt) => this.onClick(evt) };
        this.listenerMouseDown = { handleEvent: (evt) => this.onMouseDown(evt) };
    }

    onload(){
        this.viewports[0].id = 0; // Hotfix so it doesn't reload the textures (It's creating a new viewport object every scene)

        let camera = new Onyx.Camera({
            projectionType: "orthographic",
            transform: new Onyx.Transform({
                position: [0, 0, 100]
            })
        });
        this.add(camera);
        this.viewports[0].bindToCamera(camera);

        this.loadScene().then(() => { 
            this.viewportElements[0].addEventListener("mousedown", this.listenerMouseDown, false );
            this.viewportElements[0].addEventListener("touchstart", this.listenerMouseDown, false );
            this.viewportElements[0].addEventListener("mouseup", this.listenerClick, false );
            this.viewportElements[0].addEventListener("touchend", this.listenerClick, false );

            game.playSFX("SO-TC-drums-fadeout");

            this.transitionCircle.uncover();
        });

        console.log('%c NEW LOONEY TUNES - Grow Fast*Um Garden ', 'background: #222; color: #bada55; font-weight: bold');
        console.log('%c Created by THIS IS POP ', 'background: #EA177E; color: #FFF; font-weight: bold');
    }

    onunload(){
        this.viewportElements[0].removeEventListener("mousedown", this.listenerMouseDown, false );
        this.viewportElements[0].removeEventListener("touchstart", this.listenerMouseDown, false );
        this.viewportElements[0].removeEventListener("mouseup", this.listenerClick, false );
        this.viewportElements[0].removeEventListener("touchend", this.listenerClick, false );
        
        super.onunload(...arguments);
    }

    onMouseDown() {
        this.mouseDown = true;
    }

    onClick() {
        this.mouseDown = false;

        // Unlock audio
        game.playSFX("silence");
        game.stopSFX("SO-TC-drums-fadeout", 1000);

        this.transitionCircle.cover(()=>{
            this.onunload();

            router.navigate('game');
        });
    }

    async loadScene(){
        let screenHeight = this.viewports[0].orthoHeight;
        let screenWidth = screenHeight * (16/9);

        this.transitionCircle = new TransitionCircle(screenWidth / 2, screenHeight / 2, 10, screenWidth * game.SPRITE_SCALE);
        this.add(this.transitionCircle);
        this.newSprite({src: "TC-Background", x: screenWidth / 2, y: screenHeight / 2, pivot: [0.5, 0.5], scale: [screenHeight / 768, screenHeight / 768, screenHeight / 768]});
        this.newSprite({src: "TC-Artwork", x: screenWidth / 2, y: screenHeight / 2, pivot: [0.5, 0.5], scale: [screenHeight / 768, screenHeight / 768, screenHeight / 768]});
        this.newSprite({src: 'credits/'+localization+'/TC-Credits', x: 540, y: 75, pivot: [0, 0], scale: [screenHeight / 768, screenHeight / 768, screenHeight / 768]});
        this.newSprite({src: "TC-Button-Play", x: 640, y: 135, pivot: [0, 0], scale: [screenHeight / 768, screenHeight / 768, screenHeight / 768]});

        this.newSprite({src: 'main_title/'+localization+'/TC-Logo', x: 200, y: 340, pivot: [0, 0], scale: [screenHeight / 768, screenHeight / 768, screenHeight / 768]});
        this.newSprite({src: "TC-Version", x: screenWidth - 40, y: 40, pivot: [1,0], scale: [screenHeight / 768, screenHeight / 768, screenHeight / 768]});
    }

    async newSprite({ src = "", id = src, frame = 0, x = 0, y = 0, z = 0, scale = [1,1,1], pivot = [0, 0], visible = true}){
        // scale[0] *= game.SPRITE_SCALE;
        // scale[1] *= game.SPRITE_SCALE;
        // scale[2] *= game.SPRITE_SCALE;

        // Find texture
        let texture;
        for(let t of game.textures){
            if(t.src === "res/textures/" + src + ".png") texture = t;
        }

        let sprite = new Onyx.Sprite({
            id: id, 
            src: "res/textures/" + src + ".png",
            pixelsPerUnit: 1, 
            minFilter: "LINEAR_MIPMAP_NEAREST",
            magFilter: "LINEAR", 
            // textures: [texture],
            pivot: pivot
        });
        sprite.mesh.material = game.materialColorized;

        this.sprites[id] = new Onyx.Entity({
            components: [sprite],
            transform: new Onyx.Transform({
                position: [x, y, z],
                scale: scale
            })
        });
        this.add(this.sprites[id]);

        this.sprites[id].visible = visible;
    }
}