import { mat4, vec3, vec4, quat } from '../lib/gl-matrix-master/src/gl-matrix.js';

export class AnimationTrack {
	constructor({name = "", values = [[]], times = [], type = "position", parent = null} = {}) {
        this.name = name;
        this.values = values;
        this.times = times;
        this.type = type;

        this.parent = parent;
        this.currentTime = 0.0;
        this.currentFrameStartTime = 0.0;
        this.currentFrameIndex = 0;
        this.currentFrameValues = this.values[0];
        this.currentFrameTime = this.times[0];
        this.nextFrameIndex = 0;
        this.nextFrameValues = this.values[0];
        this.nextFrameTime = this.times[0];

        this.complete = false;

        this.reset();
    }
    
    update(dt, currentClipTime){
        if(this.complete) return;

        //TODO: Support rewind
        this.currentTime += dt;

        if(currentClipTime >= this.nextFrameTime){
            // console.log(this.currentFrameIndex, this.nextFrameIndex);

            this.currentFrameStartTime = this.currentFrameTime;

            // Find next frame
            this.currentFrameIndex = this.nextFrameIndex;
            this.currentFrameValues = this.nextFrameValues;
            this.currentFrameTime = this.nextFrameTime;

            this.nextFrameIndex++;
            this.nextFrameValues = this.values[this.nextFrameIndex];
            this.nextFrameTime = this.times[this.nextFrameIndex];

            if(this.nextFrameIndex >= this.times.length){
                this.complete = true;
                // this.nextFrameIndex = 0;
                return;
            }
        }

        // TODO Fix Percent for last frame
        let percent = (currentClipTime - this.currentFrameTime) / (this.nextFrameTime - this.currentFrameTime);
        if(percent === Infinity || percent === -Infinity) percent = 0;
        this.interpolateLinear(this.currentFrameValues, this.nextFrameValues, percent);
    }

    interpolateLinear(currentFrame, nextFrame, percent){
        if(!this.parent) return;
        switch(this.type){
            case "position":
                this.parent.transform.xyz = [
                    currentFrame[0] + ((nextFrame[0] - currentFrame[0]) * percent),
                    currentFrame[1] + ((nextFrame[1] - currentFrame[1]) * percent),
                    currentFrame[2] + ((nextFrame[2] - currentFrame[2]) * percent) 
                ];
                break;
            case "scale":
                this.parent.transform.sxyz = [
                    currentFrame[0] + ((nextFrame[0] - currentFrame[0]) * percent),
                    currentFrame[1] + ((nextFrame[1] - currentFrame[1]) * percent),
                    currentFrame[2] + ((nextFrame[2] - currentFrame[2]) * percent) 
                ];
                break;
            case "rotation2":
                this.parent.transform.rotateFromEuler(
                    currentFrame[0] + ((nextFrame[0] - currentFrame[0]) * percent),
                    currentFrame[1] + ((nextFrame[1] - currentFrame[1]) * percent),
                    currentFrame[2] + ((nextFrame[2] - currentFrame[2]) * percent)
                );
                break;
            case "rotation":
                //TODO: Support other rotation orders
                switch(nextFrame[3]){
                    case "ZYX":
                        this.parent.transform.rotateToZYX(
                            currentFrame[2] + ((nextFrame[2] - currentFrame[2]) * percent),
                            currentFrame[1] + ((nextFrame[1] - currentFrame[1]) * percent),
                            currentFrame[0] + ((nextFrame[0] - currentFrame[0]) * percent)
                        );
                        break;
                    case "XYZ":
                    default:
                        this.parent.transform.rotateToXYZ(
                            currentFrame[0] + ((nextFrame[0] - currentFrame[0]) * percent),
                            currentFrame[1] + ((nextFrame[1] - currentFrame[1]) * percent),
                            currentFrame[2] + ((nextFrame[2] - currentFrame[2]) * percent) 
                        );
                        break;
                }
                break;
            case "quaternion":
                // if(this.parent.FBXID == 140457576087552) console.log(percent, this.currentFrameIndex, this.nextFrameIndex);
                let q = [];
                quat.slerp(q, currentFrame, nextFrame, percent);
                this.parent.transform.rotationQuat = q;
                // this.parent.transform.invalidate();

                // this.parent.transform.rotationQuat = [
                //     currentFrame[0] + ((nextFrame[0] - currentFrame[0]) * percent),
                //     currentFrame[1] + ((nextFrame[1] - currentFrame[1]) * percent),
                //     currentFrame[2] + ((nextFrame[2] - currentFrame[2]) * percent),
                //     currentFrame[3] + ((nextFrame[3] - currentFrame[3]) * percent)];
                // this.parent.transform.refreshMat4();
                // this.parent.transform.generateTranslationRotationScale();

                // this.parent.transform.rotateToXYZ(
                //     currentFrame[0] + ((nextFrame[0] - currentFrame[0]) * percent),
                //     currentFrame[1] + ((nextFrame[1] - currentFrame[1]) * percent),
                //     currentFrame[2] + ((nextFrame[2] - currentFrame[2]) * percent) 
                // );
                break;
        }
    }

    reset(){
        this.currentTime = null;

        this.currentFrameIndex = 0;
        this.currentFrameValues = this.values[this.currentFrameIndex];
        this.currentFrameTime = this.times[this.currentFrameIndex];

        this.nextFrameIndex = 0;
        this.nextFrameValues = this.values[this.nextFrameIndex];
        this.nextFrameTime = this.times[this.nextFrameIndex];

        this.update(0, 0);

        this.complete = false;
    }
}