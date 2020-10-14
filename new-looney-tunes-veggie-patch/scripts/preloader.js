import * as Onyx from '../lib/onyx/scripts/main.js';
import assets from '../res/index.js';
import MaterialSpriteColorized from './shaders/colorized.js';

const MATERIAL = new MaterialSpriteColorized();

const RETRY_TIMEOUT = 1000;
const MINIMUM_TIME = 165000;

export default class ScenePreloader extends Onyx.Scene {
    constructor(){
        super();

        this.renderPasses = [new Onyx.RenderPass({viewportClear: true})];

        this.complete = false;
        this.currentPercent = 0;
        this.sprites = {};

        this.assets = {};
    }

    onload(){
        super.onload();
        
        // Listen for mouse/touch events
        this.viewports[0].listenForMouseEvents({scene: game.router.map.game.module});

        this.progress = 0;

        let totalAssets = assets.images.length + assets.audio.music.length + assets.audio.sfx.length + assets.spritesheets.length;
        let totalLoaded = 0;

        this.showBackgroundGraphics().then(() => {
            this.preloadTextures(assets, (progress, noCompleted) => {
                this.showProgress((noCompleted + totalLoaded) / totalAssets);
            }, () => {
                totalLoaded += assets.images.length;

                this.preloadMusic(assets,  (progress, noCompleted) => {
                    this.showProgress((noCompleted + totalLoaded) / totalAssets);
                },() => {
                    totalLoaded += assets.audio.music.length;
                    this.preloadSFX(assets,  (progress, noCompleted) => {
                        this.showProgress((noCompleted + totalLoaded) / totalAssets);
                    },() => {
                        totalLoaded += assets.audio.sfx.length;
                        this.preloadSpritesheets(assets,  (progress, noCompleted) => {
                            //TODO
                            this.showProgress((totalLoaded + noCompleted) / totalAssets);
                        },() => {
                            totalLoaded += assets.spritesheets.length;
                            this.showProgress(totalLoaded / totalAssets);
                        });
                    });
                });
            })
        });
    }

    update(...args){
        super.update(...args);

        // Update percent
        if(this.currentPercent < (this.progress * 100)){
            this.currentPercent += 1;
        }
        let screenHeight = this.viewports[0].orthoHeight;
        let screenWidth = screenHeight * (16/9);
        let screenScaleX = screenWidth / (768 * (16/9));
        if(this.sprites.bar) this.sprites.bar.components[0].transform.sx = (this.currentPercent / 100) * screenScaleX;

        if(this.complete || router.clock.stats.currentGameTime < MINIMUM_TIME) return;
        
        if(this.currentPercent == 100 || (this.progress >= 1) && !this.complete){
            this.currentPercent = 100;
            this.complete = true;
            // return; // To halt at 100%
            // game.showLoadingMask();
            this.setTimeout(function(){
                router.navigate('title');
            }, 150);
        }
    }

    async showBackgroundGraphics(){
        this.camera = new Onyx.Camera({
            projectionType: "orthographic",
            transform: new Onyx.Transform({
                position: [0, 0, 99]
            })
        });
        this.add(this.camera);
        this.viewports[0].bindToCamera(this.camera);

        //this.viewports[0].clearColor.set(136 / 255, 47 / 255, 136 / 255);

        let screenHeight = this.viewports[0].orthoHeight;
        let screenWidth = screenHeight * (16/9);
        let screenScaleY = screenHeight / 768;
        let screenScaleX = screenWidth / (768 * (16/9));
            
        game.materialColorized = MATERIAL;

    
        await this.newSprite("background",14,0* screenScaleX, 0 * screenScaleY, 1, [screenScaleX, screenScaleY, 1]);
        await this.newSprite("logo", 1, 550 * screenScaleX, 320 * screenScaleY, 1, [screenScaleX, screenScaleY, 1]);
        await this.newSprite("bar-background", 12, 437.5 * screenScaleX, 236 * screenScaleY, 0, [screenScaleX, screenScaleY, 1]);
        await this.newSprite("bar", 11, 437.5 * screenScaleX, 236 * screenScaleY, 1, [screenScaleX, screenScaleY, 1]);
        await this.newSprite("overlay", 13, 437.5 * screenScaleX, 236 * screenScaleY, 2, [screenScaleX, screenScaleY, 1]);
        

        ///empieza la animacion del logo
        /*let frame = 0;
        this.setTimeout(() => {
            this.setInterval(() => {
                frame++;
                this.sprites.logo.components[0].currentAnimation.setFrame(1+frames);

                // Some frames are offset. TODO: Talk to CN about this
                if(frame <= 1){
                    this.sprites.logo.components[0].transform.x = 550 * screenScaleX;
                }else if(frame == 2){
                    this.sprites.logo.components[0].transform.x = 552 * screenScaleX;
                }else if(frame == 3){
                    this.sprites.logo.components[0].transform.x = 546 * screenScaleX;
                }else if(frame == 4){
                    this.sprites.logo.components[0].transform.x = 478 * screenScaleX;
                }else if(frame >= 5){
                    this.sprites.logo.components[0].transform.x = 550 * screenScaleX;
                }

            }, 1000 / 10, 9);
        }, 500);*/
    }

    async newSprite(label, frame = 0, x = 0, y = 0, z = 0, scale = [1,1,1]){

        if(!this.spriteModel) this.spriteModel = await Onyx.ImportSpriteFromTexturePacker.load({
            src: "res/textures/preloader_1x.json",
            defaultAnimation: "preloader_1x",
            autoplay: false,
            speed: 0,
            defaultPivot: [0, 0],
            pixelsPerUnit: 1,
            minFilter: "LINEAR_MIPMAP_NEAREST",
            magFilter: "LINEAR"
        });

        let model = Onyx.ImportSpriteFromTexturePacker.cloneSprite(this.spriteModel, true);
        await model.loadTextures();

        model.mesh.material = game.materialColorized;
        
        model.transform = new Onyx.Transform({
            position: [x, y, z],
            scale: scale
        });
        
        model.selectAnimation("preloader_1x");
        model.currentAnimation.setFrame(frame);

        this.sprites[label] = new Onyx.Entity({
            components: [model]
        });

        this.add(this.sprites[label]);
    }

    preloadTextures(assets, progressCallback, completeCallback) {
		var preloader = new Onyx.Preloader();

        preloader.preloadTextures(assets.images, progressCallback, [this.viewports[0], this.viewports[0].mouseEventViewport], {
            flipY: false, 
            minFilter: "LINEAR_MIPMAP_NEAREST",
            magFilter: "LINEAR"
        }).then((loaded) => {
            // this.assets = loaded;
            if(completeCallback) completeCallback();

            game.textures = loaded;
        }).catch((e) => {
            console.log(e);
            window.setTimeout(() => {
                this.preloadTextures(assets, progressCallback, completeCallback);
            }, RETRY_TIMEOUT);
        });
    }

    preloadSpritesheets(assets, progressCallback, completeCallback) {
        let pending = 0;
        let failed = false;

        for(var i = 0; i < assets.spritesheets.length; i++){
            pending++;

            ((src) => {
                Onyx.ImportSpriteFromTexturePacker.load({
                    src: src,
                    material: MATERIAL,
                    minFilter: "LINEAR_MIPMAP_NEAREST",
                    magFilter: "LINEAR",
                    autoplay: false,
                    speed: 1000 / 24,
                    defaultPivot: [0, 0],
                    pixelsPerUnit: 1,
                    textures: game.textures
                }).then(async (model) => {
                    var name = src.split("/").pop().replace(".png", "");
                    game.spritesheets[name] = model;
    
                    pending--;

                    // await model.loadTextures();
    
                    if(progressCallback){
                        let percent = (assets.spritesheets.length - pending) / assets.spritesheets.length;
                        progressCallback(percent, assets.spritesheets.length - pending);
                    }
    
                    if (!pending) {
                        if(completeCallback) completeCallback();
                    }
                }).catch((e) => {
                    if(failed) return;
                    failed = true;
    
                    console.log(e);
                    window.setTimeout(() => {
                        this.preloadSpritesheets(assets, progressCallback, completeCallback);
                    }, RETRY_TIMEOUT);
                });
            })(assets.spritesheets[i]);
        }
    }

    preloadMusic(assets, progressCallback, completeCallback) {
        let pending = 0;
        let failed = false;
        
        for(var i = 0; i < assets.audio.music.length; i++){
            pending++;
            
            var musicName = assets.audio.music[i].split("/").pop().replace(".mp3", "");
            game.music[musicName] = new Howl({
                src: [assets.audio.music[i], assets.audio.music[i].replace(".mp3", ".ogg")],
                // volume: 0.5,
                // html5: (isiOS())?true:false,
                loop: true,
                onload: () => {
                    pending--;

                    if(progressCallback){
                        let percent = (assets.audio.music.length - pending) / assets.audio.music.length;
                        progressCallback(percent, assets.audio.music.length - pending);
                    }

                    if (!pending) {
                        if(completeCallback) completeCallback();
                    }
                },
                onloaderror: (err) => {
                    if(failed) return;
                    failed = true;

                    console.warn("Failed to load music. " + err);

                    window.setTimeout(() => {
                        console.warn("Retrying music load.");
                        this.preloadMusic(assets, progressCallback, completeCallback);
                    }, RETRY_TIMEOUT);
                }
            });
        }
    }

    preloadSFX(assets, progressCallback, completeCallback) {
        let pending = 0;
        let failed = false;
        
        for(var i = 0; i < assets.audio.sfx.length; i++){
            pending++;
            
            var sfxName = assets.audio.sfx[i].split("/").pop().replace(".mp3", "");
            game.sfx[sfxName] = new Howl({
                src: [assets.audio.sfx[i], assets.audio.sfx[i].replace(".mp3", ".ogg")],
                html5: (navigator.isCocoonJS)?true:false,
                // volume: 0.5,
                onload: () => {
                    pending--;

                    if(progressCallback){
                        let percent = (assets.audio.sfx.length - pending) / assets.audio.sfx.length;
                        progressCallback(percent, assets.audio.sfx.length - pending);
                    }

                    if (!pending) {
                        if(completeCallback) completeCallback();
                    }
                },
                onloaderror: (err) => {
                    if(failed) return;
                    failed = true;

                    console.warn("Failed to load sound effects. " + err);
                    
                    window.setTimeout(() => {
                        console.warn("Retrying sound effects load.");

                        this.preloadSFX(assets, progressCallback, completeCallback);
                    }, RETRY_TIMEOUT);
                }
            });
        }
    }

    showProgress(percent){
        this.progress = percent;
        // console.log(percent);
    }
}