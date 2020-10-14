'use strict';

import { Importer, MaterialPhong, Texture } from '../main.js';

let importCache = {};

export class ImportMaterialsFromMTL extends Importer {
    static clearCache(){
        importCache = {};
    }

    static async load(options = {}){
        let instance = options;
        if(instance.resPath === undefined && options.src) instance.resPath = options.src.substr(0, options.src.lastIndexOf("/"));

        await this.loadFromURL(options.src, instance, importCache);

        if(!importCache[options.src].materials){
            let materials = [];

            let lines = instance.input.split("\n");

            let currentMaterial = null;

            // Parse Lines
            let tLine = [];
            for(let line of lines){
                tLine = line.split(" ");
                
                switch(tLine[0].toLowerCase()){
                    case "newmtl":
                        materials.push(new MaterialPhong({name: tLine[1].trim(), lighting: 1}));

                        currentMaterial = materials[materials.length - 1];
                        break;
                    case "illum":
                        // this.setIlluminationMode(currentMaterial, tLine[1] * 1);
                        break;
                    case "ka":
                        currentMaterial.ambientColor.set(tLine[1] * 1, tLine[2] * 1, tLine[3] * 1);
                        break;
                    case "kd":
                        currentMaterial.diffuseColor.set(tLine[1] * 1, tLine[2] * 1, tLine[3] * 1);
                        break;
                    case "ks":
                        currentMaterial.specularColor.set(tLine[1] * 1, tLine[2] * 1, tLine[3] * 1);
                        // TODO: Read Ns (weight)
                        break;
                    case "ns":
                        currentMaterial.specularExponent = tLine[1] * 1;
                        break;
                    case "ke":
                        currentMaterial.emitColor.set(tLine[1] * 1, tLine[2] * 1, tLine[3] * 1);
                        break;
                    case "tf":
                        currentMaterial.transmissionFilter.set(tLine[1] * 1, (tLine[2] !== undefined)?tLine[2] * 1:tLine[1] * 1, (tLine[3] !== undefined)?tLine[3] * 1:tLine[1] * 1); // Note: G and B are optional. R is to be used in place of them if they're missing.
                        break;
                    case "d":
                        currentMaterial.dissolve = tLine[1] * 1;
                        // TODO: Read Tr
                        break;
                    case "map_ka":
                        currentMaterial.ambientTexture = new Texture({src: instance.resPath + "/" + tLine[tLine.length - 1]});
                        await currentMaterial.ambientTexture.load();
                        break;
                    case "map_kd":
                        currentMaterial.diffuseTexture = new Texture({src: instance.resPath + "/" + tLine[tLine.length - 1]});
                        await currentMaterial.diffuseTexture.load();
                        break;
                    case "map_ks":
                        currentMaterial.specularColorTexture = new Texture({src: instance.resPath + "/" + tLine[tLine.length - 1]});
                        await currentMaterial.specularColorTexture.load();
                        break;
                    case "map_ke":
                        currentMaterial.emitTexture = new Texture({src: instance.resPath + "/" + tLine[tLine.length - 1]});
                        await currentMaterial.emitTexture.load();
                        break;
                    case "map_ns":
                        currentMaterial.specularHighlightTexture = new Texture({src: instance.resPath + "/" + tLine[tLine.length - 1]});
                        await currentMaterial.specularHighlightTexture.load();
                        break;
                    case "map_d":
                        currentMaterial.alphaTexture = new Texture({src: instance.resPath + "/" + tLine[tLine.length - 1]});
                        await currentMaterial.alphaTexture.load();
                        break;
                    case "map_bump":
                    case "bump": // synonymous
                        currentMaterial.bumpMapTexture = new Texture({src: instance.resPath + "/" + tLine[tLine.length - 1]});
                        await currentMaterial.bumpMapTexture.load();
                        break;
                    case "disp":
                        currentMaterial.displacementTexture = new Texture({src: instance.resPath + "/" + tLine[tLine.length - 1]});
                        await currentMaterial.displacementTexture.load();
                        break;
                    case "decal":
                        currentMaterial.decalTexture = new Texture({src: instance.resPath + "/" + tLine[tLine.length - 1]});
                        await currentMaterial.decalTexture.load();
                        break;
                }
            }

            for(let material of materials){
                material.buildProgram();
            }
            
            importCache[options.src].materials = materials
            
            // Free up memory
            delete importCache[options.src].input;
        }

        // TODO: Instance
        return importCache[options.src].materials;
    }

}