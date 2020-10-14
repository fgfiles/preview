import { Importer, Sprite, SpriteAnimation } from '../main.js';
import { Transform } from '../transform.js';

let importCache = {};

export class ImportSpriteFromTexturePacker extends Importer {
    static clearCache(){
        importCache = {};
    }

    static async load(options = {}){
        if(!Array.isArray(options.src)) options.src = [options.src];

        let instance = {};
        instance.options = options;

        if(!importCache[options.src[0]] || !importCache[options.src[0]].sprite){
            let objs = {};
            let directory = options.src[0].substring(0, options.src[0].lastIndexOf("/") + 1);
            if(!options.defaultPivot) options.defaultPivot = [0.5, 0.5];

            // Get the src file and all references then JSON parse
            for(let src of options.src){
                let filename = src.split("/").pop();

                // Only parse JSON files that we haven't parsed yet
                if(!importCache[src] || !importCache[src].sprite){
                    // Load json file
                    await this.loadFromURL(directory + filename, instance, importCache);

                    // Parse it
                    if(!objs[filename]){
                        objs[filename] = JSON.parse(instance.input);

                        if(objs[filename].meta.related_multi_packs){
                            options.src.push(...objs[filename].meta.related_multi_packs);//.filter((val) => importCache[val]));
                        }
                    }
                }
            }

            // Build sources and create sprite
            // Use the options in the sprite options except for the src. Copy the src from the objs' meta data.
            let src = options.src;
            options.src = [];
            for(let obj of Object.values(objs)){
                options.src.push(instance.resPath + "/" + obj.meta.image);
            }

            // Filter and order to src
            if(options.textures){
                let textures = [];
                for(let src of options.src){
                    for(let texture of options.textures){
                        if(texture.src === src) textures.push(texture);
                    }
                }
                options.textures = textures;
            }
            
            let sprite = new Sprite(options);
            await sprite.loadTextures();
            options.src = src;

            let materialIndex = -1;
            for(let obj of Object.values(objs)){
                materialIndex++;
                // sprite.src = instance.resPath + "/" + obj.meta.image;
                let filename = obj.meta.image.split(".")[0];

                // There are two main types of texturePacker formats: Array or object of frames
                if(obj.frames instanceof Array){
                    for(let frame of obj.frames){
                        let animationName = filename;
                        if(frame.filename.indexOf("/")) animationName = frame.filename.substring(0, frame.filename.lastIndexOf("/"));

                        let animation = sprite.animations[animationName];
                        if(!animation){
                            animation = new SpriteAnimation({loop: true});
                            sprite.addAnimation(animationName, animation);
                        }

                        // Get speed from options or userData
                        let speed = instance.options.speed || 15 / 1000;
                        if(frame.userData && frame.userData.speed){
                            // TODO: Multiply options.speed with given framerate?
                            speed = frame.userData.speed;
                        }

                        animation.addFrame({
                            speed: speed, // of 15 FPS,
                            name: frame.filename.substring(frame.filename.lastIndexOf("/") + 1),
                            x: frame.frame.x * 1,
                            y: frame.frame.y * 1,
                            width: frame.frame.w * 1,
                            height: frame.frame.h * 1,
                            offsetX: frame.spriteSourceSize.x,
                            offsetY: frame.spriteSourceSize.y,
                            pivotX: (!frame.pivot)?options.defaultPivot[0]:(frame.pivot.x * 1),
                            pivotY: (!frame.pivot)?options.defaultPivot[1]:1 - (frame.pivot.y * 1),
                            materialIndex: materialIndex
                        });
                    }
                }else{
                    let animationName = filename;
                    let animation = new SpriteAnimation({loop: true});
                    sprite.addAnimation(animationName, animation);

                    for(const [key, frame] of Object.entries(obj.frames)){
                        // Get speed from options or userData
                        let speed = instance.options.speed || 15 / 1000;
                        if(frame.userData && frame.userData.speed){
                            speed = frame.userData.speed;
                        }

                        animation.addFrame({
                            speed: speed, // of 15 FPS
                            x: frame.frame.x * 1,
                            y: frame.frame.y * 1,
                            width: frame.frame.w * 1,
                            height: frame.frame.h * 1,
                            pivotX: (!frame.pivot)?options.defaultPivot[0]:(frame.pivot.x * 1),
                            pivotY: (!frame.pivot)?options.defaultPivot[1]:1 - (frame.pivot.y * 1),
                            materialIndex: materialIndex
                        });
                    }
                }

                // if(options.sortByFilename === undefined || options.sortByFilename){
                    
                // }
            }

            importCache[options.src[0]].sprite = sprite;

            delete importCache[options.src[0]].sprite.id;

            // Free up memory
            delete importCache[options.src[0]].input;
        }
        
        instance.sprite = this.cloneSprite(importCache[options.src[0]].sprite);

        if(instance.options.defaultAnimation !== undefined){
            if(instance.options.autoplay || instance.options.autoplay === undefined){
                instance.sprite.playAnimation(instance.options.defaultAnimation);
            }else{
                instance.sprite.selectAnimation(instance.options.defaultAnimation);
            }
        }

        return instance.sprite;

        // console.log(model);

        // return this.cloneModel(importCache[options.src].model);
    }

    static cloneSprite(sprite, instanceTexture){
        let newSprite;

        if(instanceTexture){
            let textures = sprite.textures;
            let texture = sprite.mesh.material.diffuseTexture;
            let src = sprite.src;

            sprite.src = null;
            newSprite = new Sprite(sprite);
            
            newSprite.textures = textures;
            newSprite.mesh.material.diffuseTexture = texture;
            newSprite._src = src;

            sprite.textures = textures;
            sprite.mesh.material.diffuseTexture = texture;
            sprite._src = src;
        }else{
            newSprite = new Sprite(sprite);
        }

        this.cloneSpriteAnimations(newSprite, sprite.animations);
        newSprite.transform = new Transform(sprite.transform);
        
        return newSprite;
    }

    static cloneSpriteAnimations(sprite, animations){
        for(const [key, animation] of Object.entries(animations)) {
            let newAnimation = new SpriteAnimation(animation);

            sprite.addAnimation(key, newAnimation);
        };

        return animations;
    }
}