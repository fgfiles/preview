
PIXI.dontSayHello = true;
PIXI.utils.skipHello();
/**
 * Created by jonathan.kernick on 21/04/2017.
 */
var CC = {dummy: "dummy"};
CC.isMobile = navigator.userAgent.match(/BlackBerry|Windows Phone|Android|iPad|iPhone|Silk|iPod|Kindle|Nexus/i) !== null;
CC.isMobile = CC.isMobile || (
    navigator.userAgent.match(/Chrome/i) !== null &&
    navigator.userAgent.match(/Apple/i) !== null &&
    navigator.userAgent.match(/Linux/i) !== null);


CC.scaleFactor = 1;


CC.Tweener = {
    registeredTweens: [],
    _purgeInactive: function () {
        var i = this.registeredTweens.length - 1, tween;
       // console.log(this.registeredTweens);
        for (i; i < 0; --i) {
            tween = this.registeredTweens[i];
            if (!tween._active) {
                this.registeredTweens.splice(i, 1);
            }
        }
      //  console.log(this.registeredTweens);
    },
    pause: function (bool,channel) {
        this._purgeInactive();
        var i = 0, length = this.registeredTweens.length, tween;
        for (i; i < length; ++i) {
            tween = this.registeredTweens[i];
            if(tween.channel === channel || channel === undefined)
            {
                if (bool) {
                    //console.log(tween);
                    tween.pause();
                }
                else {
                    tween.resume();
                }
            }
        }
    },
    to: function (obj, time, config,channel) {
        var tween = TweenLite.to(obj, time, config);
        tween.channel = channel || 0;
        this.registeredTweens.push(tween);
        return tween;
    },
    from: function (obj, time, config,channel) {
        var tween = TweenLite.from(obj, time, config);
        tween.channel = channel || 0;
        this.registeredTweens.push(tween);
        return tween;
    },
    delayedCall: function (time, func,channel) {
        var tween = TweenLite.delayedCall(time, func);
        tween.channel = channel || 0;
        this.registeredTweens.push(tween);
        return tween;
    }
};