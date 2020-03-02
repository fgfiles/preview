/*cc webapp framework
 *author: Jonathan 'JK' Kernick
 *description: the classes and functions required to build a web app
 */

/*constructor for a web app
 domContainer: a DOM object like a div that the web app will be contained in
 initWidth: the init width of the canvas can change depending on resize method
 initHeight: the init Height of the canvas can change depending on resize method
 resizeMethod: the method of resizing defualt is NO_REISIZE
 backgroundColor:
 */

CC.WebApp = function (domContainer, initWidth, initHeight) {
    //sets defualts
    //if no container then its asumed body is the container
    this.domContainer = domContainer || document.body;
    //if no init width set then asume 960
    this.screenWidth = initWidth || 960;
    this.screenWidthMax = initWidth || 960;
    this.screenWidthMin = initWidth || 960;
    //if no init height set then asume 720
    this.screenHeight = initHeight || 720;
    this.screenHeightMax = initHeight || 720;
    this.screenHeightMin = initHeight || 720;

    this.juggler = new CC.Juggler();

    //permmision for the app to control css
    this.cssEnabled = false;
    //if no resize method then asume no resize
    this.resizeMethod = CC.WebApp.Resizer.NO_RESIZE;
    //if no background color then asume white
    this.backgroundColor = 0xFFFFFF;
    //sets the web app static to the current instance
    CC.WebApp.current = this;

    this.mainLoopBind = this.mainLoop.bind(this);
};
CC.WebApp.current = false;
//sets up the class prototype properties
CC.WebApp.prototype = {
    //-------------------object properties
    domContainer: 'No DOM Object Defined',
    screenWidth: 'No WIDTH Defined',
    screenHeight: 'No HEIGHT Defined',
    screenOffsetY: 0,
    scaledWidth: 'No WIDTH Defined',
    scaledHeight: 'No HEIGHT Defined',
    resizeMethod: 'No RESIZE METHOD Defined',
    backgroundColor: 'NO BACKGROUND COLOUR  Defined',
    backgroundObject: 'NO BACKGROUND Object  Defined',
    backgroundGraphic: 'NO BACKGROUND Graphic  Defined',
    renderer: 'No RENDER  Defined',
    stage: 'No RENDER  Defined',
    runUpdate: true,
    //----------------web app running propertys
    //time stamps that mark the current frame and last frame, for calculating how much time has passed
    currentTimeStamp: 0,
    previousTimeStamp: 0,
    //this is stored so we know that the dimentions have changed
    oldInnerWidth: 0,
    oldInnerHeight: 0,
    oldWindowInnerWidth: 0,
    oldWindowInnerHeight: 0,
    forceResize: false,
    deltaBreaks: true,

    //seconds elapsed since last frame
    elapsedSeconds: 0,
    //the ratio of screenWidth/screenHeight
    ratio: 0
};
//function builds the canvas and creates the stage
CC.WebApp.prototype.init = function (forceCanvas) {
    //sets up render and apends to dom object
    if (forceCanvas) {
        this.renderer = new PIXI.CanvasRenderer(this.screenWidth, this.screenHeight, {
            legacy: true,
            transparent: true
        });
    } else {

        var options = {};

        if(isOldDevice()) {
            options = {
                legacy: true,
                transparent: true
            }
        } else {
            options = {
                legacy: true,
                antialias: true,
                transparent: true
            }
        }

        this.renderer = new PIXI.autoDetectRenderer(this.screenWidth, this.screenHeight, options);
        //this.renderer = new PIXI.WebGLRenderer(this.screenWidth, this.screenHeight);
    }
    this.domContainer.appendChild(this.renderer.view);
    //creates the display stage
    this.stage = new PIXI.Container();
    //creates resize event
    this.stage.preventSelection = false;

    this.backgroundGraphic = new PIXI.Graphics();

    this.stage.addChild(this.backgroundGraphic);

    this.resizeForceFunc = function () {
        this.forceResize = true;
    };
    //sets up resizeFunctions for orientation change or resize call
    window.addEventListener('orientationchange', this.resizeForceFunc);
    window.addEventListener('resize', this.resizeForceFunc);
};

//function to stop the render from ticking over
CC.WebApp.prototype.pause = function () {
    //stops the main loop from reRendering.
    this.loopActive = false;
};
//a quick function to build the canvas and start the render loop.
CC.WebApp.prototype.firstStart = function (screenObject, forcedCanvas) {
    this.init(forcedCanvas);
    this.start(screenObject);
};
//function to start the render loop, this will not start the canvas.
CC.WebApp.prototype.start = function (screenObject) {
    //checks to make sure you didn't try to call this while its already running.
    if (!this.loopActive) {
        //starts the canvas back up again.

        //if a screen object was provided then set that as the current screen
        if (screenObject) {
            this.swapScreen(screenObject);
        }

        //sets the loopActive to true.
        this.loopActive = true;
        //sets the current time stamp to whatever because if we don't it will tween from 1970s to now.
        this.previousTimeStamp = new Date().getTime();
        //request the animator to start.
        requestAnimationFrame(this.mainLoopBind);
        //dirty the stage
        this.stage.dirty = true;
    }
};
//function to set the background colour takes a hex value
CC.WebApp.prototype.setBackgroundColor = function (newbackgroundColor) {
    //creates a background graphics
    this.backgroundGraphic.clear();
    this.backgroundGraphic.beginFill(newbackgroundColor);
    this.backgroundGraphic.drawRect(-this.screenWidthMax * 0.5, -this.screenWidthMax * 0.5, this.screenWidthMax * 2, this.screenHeightMax * 2);
};
//canvas resizing method used to resize the canvas
CC.WebApp.prototype.matchAspectRatio = function (resizeTheWidthBool) {
    var oldScreenWidth = this.screenWidth;
    var oldScreenHeight = this.screenHeight;
    if (resizeTheWidthBool) {
        //resizes the screen width to match aspect ratio
        this.screenWidth = Math.ceil((this.screenHeight / this.domContainer.offsetHeight) * this.domContainer.offsetWidth);
        this.screenWidth = Math.min(this.screenWidthMax, this.screenWidth);
        this.screenWidth = Math.max(this.screenWidthMin, this.screenWidth);
    } else {
        //resizes the screen height to match aspect ratio
        this.screenHeight = Math.ceil((this.screenWidth / this.domContainer.offsetWidth) * this.domContainer.offsetHeight);
        this.screenHeight = Math.min(this.screenHeightMax, this.screenHeight);
        this.screenHeight = Math.max(this.screenHeightMin, this.screenHeight);
    }

    if (this.screenWidth !== oldScreenWidth || this.screenHeight !== oldScreenHeight) {
        //resizes the canvas propper with the new values
        this.renderer.resize(this.screenWidth, this.screenHeight);

        //recenters the screen object with the new values
        if (this.screenObject) {
            this.screenObject.x = Math.floor(this.screenWidth * 0.5);
            this.screenObject.y = Math.floor(((this.screenHeight * 0.5) + this.screenOffsetY));
        }
        //stuffs changed dirty the stage - called every frame(better not?
        this.stage.dirty = true;
    }

};
//checks the size and refits the canvas if mandated
CC.WebApp.prototype.checkSize = function () {
    //if there has been a changed in the containers width and height then the canvas must be changed
    if ((this.oldInnerWidth !== this.domContainer.offsetWidth ||
        this.oldInnerHeight !== this.domContainer.offsetHeight ||
        this.oldWindowInnerWidth !== innerWidth ||
        this.oldWindowInnerHeight !== innerHeight)) {

        //assigns the new sizes to the object so we know what the last sizes were
        this.oldInnerWidth = this.domContainer.offsetWidth;
        this.oldInnerHeight = this.domContainer.offsetHeight;
        this.oldWindowInnerWidth = innerWidth;
        this.oldWindowInnerHeight = innerHeight;
        var maxWidth;
        var maxHeight;
        if (this.domContainer.offsetHeight < innerHeight) {
            maxWidth = this.domContainer.offsetWidth;
            maxHeight = this.domContainer.offsetHeight;
        } else {
            maxWidth = innerWidth;
            maxHeight = innerHeight;
        }
        //uses the resize method if the width has to be changed
        if (this.resizeMethod === CC.WebApp.Resizer.FLEX_WIDTH) {
            this.matchAspectRatio(true);
        }
        //uses the resize method if the height has to be changed
        if (this.resizeMethod === CC.WebApp.Resizer.FLEX_HEIGHT) {
            this.matchAspectRatio(false);
        }
        //init the scaledWidth with the actual width
        this.scaledWidth = this.screenWidth;
        //init the scaledHeight with the actual height
        this.scaledHeight = this.screenHeight;

        //we only need to know this ratio stuff if we are going to have it fixed on the resize
        if (this.resizeMethod === CC.WebApp.Resizer.FLEX_WIDTH || this.resizeMethod === CC.WebApp.Resizer.FIXED_RATIO) {
            //calculates the ratio so we know how much the width should be to the height
            this.ratio = this.screenWidth / this.screenHeight;
            if (this.oldInnerHeight * this.ratio < this.oldInnerWidth) {
                this.scaledWidth = (maxHeight * this.ratio);
                this.scaledHeight = (maxHeight);
            } else {
                this.scaledWidth = (maxWidth);
                this.scaledHeight = (maxWidth / this.ratio);
            }
        }

        //if the resize method is matching aspect ratio then the container is the width and height so it can match them exsactly
        if (
            this.resizeMethod === CC.WebApp.Resizer.FLEX_HEIGHT) {
            this.scaledWidth = this.oldInnerWidth;
            this.scaledHeight = this.oldInnerHeight;
        }

        //this always needs to be done because the resize method might have changed unless style editing is not enabled
        if (this.cssEnabled) {
            this.renderer.view.style.width = this.scaledWidth + 'px';
            this.renderer.view.style.height = this.scaledHeight + 'px';


            this.renderer.view.style.left = ((this.oldInnerWidth - this.scaledWidth) * 0.5) + 'px';
            this.renderer.view.style.top = ((this.oldInnerHeight - this.scaledHeight) * 0.5) + 'px';
          /*  if (this.resizeMethod === CC.WebApp.Resizer.FLEX_WIDTH ||
                this.resizeMethod === CC.WebApp.Resizer.FLEX_HEIGHT) {
                //if the current resize method matches aspect ratio like the above do there is no point resizing them
                this.renderer.view.style.left = '0px';
                this.renderer.view.style.top = '0px';
            } else {
                //if the current method does not match the aspect it will need to be centered
                this.renderer.view.style.left = ((this.oldInnerWidth - this.scaledWidth) * 0.5) + 'px';
                this.renderer.view.style.top = ((this.oldInnerHeight - this.scaledHeight) * 0.5) + 'px';
            }*/
        }
    }
};
//function swaps the canvas objects
CC.WebApp.prototype.mainLoop = function () {
    //if the loopActive is still true then request another frame
    if (this.loopActive) {
        requestAnimationFrame(this.mainLoopBind);

        //checks the size and refits if needed
        if (this.resizeMethod !== CC.WebApp.Resizer.NO_RESIZE) {
            this.checkSize();
        }

        //stamps the current time
        this.currentTimeStamp = new Date().getTime();
        //calculates the seconds that have elapsed since last checking
        this.elapsedSeconds = (this.currentTimeStamp - this.previousTimeStamp) / 1000;

        if (this.deltaBreaks && this.elapsedSeconds > 1) {
            this.elapsedSeconds = 1;
        }

        //if this object has an update function then run it
        if (this.runUpdate) {
            this.juggler.update(this.elapsedSeconds);
        }
        //ok lets render this bad boy to that canvas!
        this.renderer.render(this.stage);
        //ok move the time stamp so the next elaps can be calulated
        this.previousTimeStamp = this.currentTimeStamp;
    }
};
//function returns a png of the current screen
CC.WebApp.prototype.printScreen = function () {
    //take a snapshot of the url
    return this.renderer.view.toDataURL();
};
CC.WebApp.prototype.resumeUpdate = function () {
    this.runUpdate = true;
    PIXI.spine.Spine.globalAutoUpdate = true;
    PIXI.ticker.shared.start();
};
CC.WebApp.prototype.pauseUpdate = function () {
    this.runUpdate = false;
    PIXI.spine.Spine.globalAutoUpdate = false;
    PIXI.ticker.shared.stop();
};
CC.WebApp.prototype.createScreenSprite = function () {
    var printScreenPng = this.printScreen();
    return new PIXI.Sprite.fromImage(printScreenPng, true);
};
//function swaps the canvas objects
CC.WebApp.prototype.swapScreen = function (newScreenObject,config) {
    //remove all juggler juggles

    this.juggler.removeAll();

    //call the end callback if avalable
    if (this.screenObject && this.screenObject.end) {
        this.screenObject.end(this.elapsedSeconds);
    }

    //clear the previous screen object
    if (this.screenObject && this.screenObject.children) {
        this.stage.removeChild(this.screenObject);
    }
    if (this.screenObject && this.screenObject.children) {
        this.deconstructDisplayObjects(this.screenObject);
        this.screenObject.destroy();
    }


    if (this.renderer.currentRenderer) {
        this.renderer.currentRenderer.sprites = [];
    }

    //create a new background object
    this.backgroundObject = new PIXI.Container();

    //assigns the new screen object
    this.screenObject = new newScreenObject(config);


    if (this.screenObject.update) {
        this.juggler.addObject(this.screenObject, 0);
    }


    if (this.screenObject && this.screenObject.backgroundColor !== undefined) {
        this.setBackgroundColor(this.screenObject.backgroundColor);
    } else {
        this.setBackgroundColor(this.backgroundColor);
    }

    //add the background colour object
    // this.stage.addChild(this.backgroundObject);
    //appends the new screen object
    this.stage.addChild(this.screenObject);

    //sets the screen objects position to the middle
    this.screenObject.x = Math.floor(this.screenWidth * 0.5);
    this.screenObject.y = Math.floor(((this.screenHeight * 0.5) + this.screenOffsetY));

    //sets the stage to dirty so it gets reRendered
    this.stage.dirty = true;

    Game.sound.pause(false);
};

//const for the resing might made them strings for better understanding.
CC.WebApp.Resizer = {
    NO_RESIZE: 0, //don't resize the canvas or the scale
    FIXED_RATIO: 1, //don't resize the canvas but scale to fit
    FLEX_WIDTH: 2, // resize the canvas width to match ratio and scale to fit
    FLEX_HEIGHT: 3 // resize the canvas height to match ratio and scale to fit
};
//static function for dismantling the a display object
CC.WebApp.prototype.deconstructDisplayObjects = function (displayObject) {
    //for every child of this object
    var i = displayObject.children.length - 1, child;
    for (i; i >= 0; --i) {
        // assign child
        child = displayObject.children[i];
        //if they have no protection on them
        if (!child.protect && this.backgroundObject !== child) {
            //and have there own children
            if (child.children.length > 0) {
                //then destory them as well
                this.deconstructDisplayObjects(child);
            }
            //once thats checked and done remove the child
            //  console.log(!!child.update);
            if(window.TweenLite)
            {
                TweenLite.killTweensOf(child);
            }
            child.destroy();
        }
    }
};
