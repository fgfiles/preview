/**
 * Created by jonathan.kernick on 24/04/2017.
 */
Game.IntroScreen = function(){
    Game.BaseScreen.call(this);
    this.backgroundColor = 0xEF168E;

    this.ccBackground = new PIXI.Graphics();

    this.ccBackground.beginFill(0xFFFFFF);
    this.ccBackground.drawRect(-1000,-1000,2000,2000);
    this.ccLogo = new PIXI.spine.Spine(Game.animationList["cc_logo"]);
    var self = this;
    this.ccLogo.state.setAnimation(0,"animation");
    this.ccLogo.state.addListener({
        complete: function (entry) {

            Game.webApp.juggler.addTimeout(function(){
                self.animC.state.setAnimation(0,"animation",true);
                self.playing = true;
                TweenLite.from(self.logo,0.5,{delay:1,alpha:0});
                TweenLite.to(self.ccLogo,0.5,{alpha:0});
                TweenLite.to(self.ccBackground,0.5,{delay:0.5,alpha:0});
            },1);
        }
    });
    this.ccLogo.scale.set(0.25);

    this.animTimer = 0;
    this.animA = new PIXI.spine.Spine(Game.animationList["loader_anim_0"]);
    this.animB = new PIXI.spine.Spine(Game.animationList["loader_anim_1"]);
    this.animC = new PIXI.spine.Spine(Game.animationList["loader_anim_2"]);
    this.animA.scale.set(0.25);
    this.animB.scale.set(0.25);
    this.animC.scale.set(0.25*0.6);

    this.animC.y = 160;

    this.logo = CC.Utility.pixiAtlasSprite("loader_tv_logo.png");

    this.addChild(this.animA);
    this.addChild(this.animB);
    this.addChild(this.animC);
    this.addChild(this.logo);
    this.addChild(this.ccBackground);
    this.ccBackground.addChild(this.ccLogo);
    this.movingOn = false;
    this.animA.visible = false;
    this.animB.visible = false;
    this.playing = false;
    Game.firstLoadStartTimestamp = new Date().getTime();
    this.update = function(delta){
        if(this.playing)
        {
            this.animTimer += delta;
        }

        this.logo.x = Game.webApp.screenWidth*-0.5 + 50;
        this.logo.y = Game.webApp.screenHeight*0.5 - 40;
        if(this.animTimer > 2 && !this.animA.visible)
        {
            this.animA.visible = true;
            this.animB.visible = true;

            this.animA.state.setAnimation(0,"in");
            this.animB.state.setAnimation(0,"in");
        }
        if(this.animTimer > 6 && !this.movingOn)
        {
            Game.introFinished = true;
            if(Game.loadLoaded)
            {
                playApp();
            }

         //   Game.webApp.swapScreen(Game.StartScreen);
        }

    }

};
Game.IntroScreen.prototype = Object.create(Game.BaseScreen.prototype);
Game.IntroScreen.prototype.constructor = Game.IntroScreen;