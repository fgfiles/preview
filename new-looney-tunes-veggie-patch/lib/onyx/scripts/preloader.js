import { Texture } from './main.js';

export class Preloader {
	constructor(){
        // TODO, keep track of pending textures and/or count for progress reports.
	}
    
    preloadTextures(srcList = [], progressCallback, viewports = null, textureOptions = {}) {
        let pending = srcList.length;
        let loadedAssets = [];
        
        return new Promise(async (resolve, reject) => {
            if(!pending) resolve();
            
            try{
                for(let src of srcList){
                    textureOptions.src = src;
                    let newTexture = new Texture(textureOptions);
                    
                    // if(Array.isArray(viewports)){
                    //     for(let viewport of viewports){
                    //         await newTexture.load(viewport);
                    //     }
                    // }else{
                        await newTexture.load(viewports);
                    // }

                    loadedAssets.push(newTexture);

                    pending--;

                    if(progressCallback){
                        let percent = (srcList.length - pending) / srcList.length;
                        progressCallback(percent, srcList.length - pending);
                    }
                    
                    if(!pending){
                        resolve(loadedAssets);
                    }
                }
            }catch(e){
                reject(...e);
            }
        });
    }
    
    // preloadModels(srcList = [], progressCallback) {
	// 	let pending = srcList.length;
        
    //     return new Promise((resolve, reject) => {
    //         if(!pending) resolve();
            
    //         for(let src of srcList){
    //             ModelCache.load(src).then(() => {
    //                 pending--;

    //                 if(progressCallback){
    //                     let percent = (srcList.length - pending) / srcList.length;
    //                     progressCallback(percent, srcList.length - pending);
    //                 }
                    
    //                 if(!pending) resolve();
    //             }).catch((...args) => {
    //                 reject(...args);
    //             });
    //         }
    //     });
    // }
    
//      preloadAudio(srcList = []) {
// 		let pending = 0;
        
//         return new Promise(function(resolve, reject) {
//             if(srcList.length <= 0) resolve();
            
//             for(let modelSrc of srcList){
//                 AudioCache.load(modelSrc).then(() => {
//                     pending--;
                    
//                     if(!pending) resolve();
//                 });
//             }
//         });
//     }
}