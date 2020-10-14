export { default as CONST } from './constants.js';

export * from '../lib/gl-matrix-master/src/gl-matrix.js';

export * from './component.js';
export * from './entity.js';
export * from './texture.js';

export * from './animation-clip.js';
export * from './animation-track.js';
export * from './bone.js';
export * from './camera.js';
export * from './clock.js';
export * from './color.js';
export * from './emitter.js';
export * from './framebuffer-texture2d.js';
export * from './gl-program.js';
export * from './light.js';
export * from './light-directional.js';
export * from './light-point.js';
export * from './light-spot.js';
export * from './nurbs-curve.js';
export * from './material.js';
export * from './mesh.js';
export * from './model.js';
export * from './particle-emitter.js';
export * from './preloader.js';
export * from './render-pass.js';
export * from './render-pass-post.js';
export * from './router.js';
export * from './scene.js';
export * from './skeleton.js';
export * from './sprite.js';
export * from './sprite-animation.js';
export * from './transform.js';
export * from './tilemap.js';
export * from './timer.js';
export * from './tween.js';
export * from './vertex2.js';
export * from './vertex3.js';
export * from './video.js';
export * from './viewport.js';

export * from './renderpasses/shader.js';
export * from './renderpasses/shadow.js';

export * from './materials/basic.js';
export * from './materials/click.js';
export * from './materials/depth.js';
export * from './materials/depth-skinned.js';
export * from './materials/post.js';
export * from './materials/phong.js';
export * from './materials/tilemap.js';
export * from './materials/wireframe.js';

export * from './importer.js';
export * from './import/material-mtl.js';
export * from './import/model-onyx.js';
export * from './import/model-obj.js';
// export * from './import/model-threejs.js';
export * from './import/sprite-texturepacker.js';

export function handles(event, {elementId = elementId} = {elementId : null}) {
    return (target, property, descriptor) => {
        // console.log(target, property, descriptor);

        if(!target._priv){
            target._priv = {events: []};
        }
        target._priv.events.push({target: target, property: property, descriptor: descriptor, event: event, elementId: elementId});
    }
}

export function route(){
    return (target, property, descriptor) => {

    }
}