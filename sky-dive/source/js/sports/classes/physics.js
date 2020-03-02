var Physics = function () {
    this.circles = [];
    this.physicsObj = [];
    this.renderObject = new PIXI.Graphics();
};

Physics.prototype.init = function () {

    this.circle.position = this.circle.position || {x: 0, y: 0};
    this.circle.x = this.circle.x || 0;
    this.circle.y = this.circle.y || 0;

    this.circle.velocity = this.circle.velocity || {x: 0, y: 0};
    this.circle.velocity.x = this.circle.velocity.x || 0;
    this.circle.velocity.y = this.circle.velocity.y || 0;

    this.circle.radius = this.circle.radius || 20;
};
Physics.prototype.addDynamicCircle = function (circle) {

    circle.position = circle.position || {x: 0, y: 0};
    circle.x = circle.x || 0;
    circle.y = circle.y || 0;

    circle.velocity = circle.velocity || {x: 0, y: 0};
    circle.velocity.x = circle.velocity.x || 0;
    circle.velocity.y = circle.velocity.y || 0;

    circle.radius = circle.radius || 20;
    this.circles.push(circle);
};
Physics.prototype.addRect = function (rect) {

    rect.position = rect.position || {x: 0, y: 0};
    rect.x = rect.x || 0;
    rect.y = rect.y || 0;

    rect.velocity = rect.velocity || {x: 0, y: 0};
    rect.velocity.x = rect.velocity.x || 0;
    rect.velocity.y = rect.velocity.y || 0;

    rect.rotation = rect.rotation || 0;
    rect.type = "rect";

    this.physicsObj.push(rect);
    return rect;
};
Physics.prototype.addCircle = function (circle) {
    circle.type = "circle";
    circle.position = circle.position || {x: 0, y: 0};
    circle.x = circle.x || 0;
    circle.y = circle.y || 0;

    circle.velocity = circle.velocity || {x: 0, y: 0};
    circle.velocity.x = circle.velocity.x || 0;
    circle.velocity.y = circle.velocity.y || 0;

    this.physicsObj.push(circle);
    return circle;
};
Physics.prototype._physisCircleRectTest = function (circle, rect) {

    //clamp the position of the circle
    var oldPosX = circle.x;
    var oldPosY = circle.y;
    var oldVelX = circle.velocity.x;
    var oldVelY = circle.velocity.y;
    var clampedCircle = CC.Geometry.clampVectorToRect(circle.position, rect, rect.position);
    var relativeVector = {x: clampedCircle.x - circle.x, y: clampedCircle.y - circle.y};
    var distanceSqr = ((relativeVector.x * relativeVector.x) + (relativeVector.y * relativeVector.y));
    if (distanceSqr < circle.radius * circle.radius) {
        var distance = Math.sqrt(distanceSqr);
        var surfaceNormal = {x: relativeVector.x / distance, y: relativeVector.y / distance};
        //var dot = CC.Geometry.dotProduct2D(surfaceNormal,circle.velocity);
        if (surfaceNormal.x || surfaceNormal.y) {
            CC.Geometry.reflect2DRef(circle.velocity, surfaceNormal);
        }
        circle.x = (clampedCircle.x + (surfaceNormal.x * -circle.radius));
        circle.y = (clampedCircle.y + (surfaceNormal.y * -circle.radius));
        //shave a little speed of the veloicty
        circle.velocity.x *= 0.7;
        circle.velocity.y *= 0.7;
        if (rect.func) {
            rect.func(circle);
        }
        else {

            //sound.play("tap_"+Math.floor(Math.random()*4));
        }
    }
    //work out the normal vector
    //correct position
    //if velocity is opasit to normal mirror
    circle.x = isNaN(circle.x) ? oldPosX : circle.x;
    circle.y = isNaN(circle.y) ? oldPosY : circle.y;
    circle.velocity.x = isNaN(circle.velocity.x) ? oldVelX : circle.velocity.x;
    circle.velocity.y = isNaN(circle.velocity.y) ? oldVelY : circle.velocity.y;
};
Physics.prototype._physisCircleCircleTest = function (circleA, circleB) {

    //clamp the position of the circle
    var oldPosX = circleA.x;
    var oldPosY = circleA.y;
    var oldVelX = circleA.velocity.x;
    var oldVelY = circleA.velocity.y;

    var relativeVector = {x: circleA.x - circleB.x, y: circleA.y - circleB.y};
    var distanceSqr = ((relativeVector.x * relativeVector.x) + (relativeVector.y * relativeVector.y));
    var minDistance = (circleA.radius + circleB.radius);
    if (distanceSqr < minDistance * minDistance) {
        var distance = Math.sqrt(distanceSqr);
        var surfaceNormal = {x: relativeVector.x / distance, y: relativeVector.y / distance};
        if (surfaceNormal.x || surfaceNormal.y) {
            CC.Geometry.reflect2DRef(circleA.velocity, surfaceNormal);
        }
        circleA.x = (circleB.x + (surfaceNormal.x * minDistance));
        circleA.y = (circleB.y + (surfaceNormal.y * minDistance));
        if (circleB.func) {
            circleB.func(circleA);
        }
        else {

            //sound.play("tap_"+Math.floor(Math.random()*4));
        }
    }
    //work out the normal vector
    //correct position
    //if velocity is opasit to normal mirror
    circleA.x = isNaN(circleA.x) ? oldPosX : circleA.x;
    circleA.y = isNaN(circleA.y) ? oldPosY : circleA.y;
    circleA.velocity.x = isNaN(circleA.velocity.x) ? oldVelX : circleA.velocity.x;
    circleA.velocity.y = isNaN(circleA.velocity.y) ? oldVelY : circleA.velocity.y;
};
Physics.prototype.project = function (velocity, time) {
    var pointProjected = {x: 0, y: 0, height: 0};
    pointProjected.x = velocity.x * time;
    pointProjected.y = (velocity.y * time) - ((time * time) * 0.5 * -900);
    return pointProjected;
};
Physics.prototype.projectPeak = function (yVelocity) {
    return yVelocity / -900;
};
Physics.prototype.update = function (elapse) {
    //loop though each item and test against the ball

    for (var j = 0; j < this.circles.length; ++j) {
        this.circle = this.circles[j];
        if (this.circle.visible && this.circle.enabled) {

            this.circle.velocity.y += 900 * elapse;
            this.circle.x += this.circle.velocity.x * elapse;
            this.circle.y += this.circle.velocity.y * elapse;
            //this.renderObject.clear();
            //this.renderObject.beginFill(0x00FF00, 0.25);
            //this.renderObject.lineStyle(4, 0x00FF00);
            //this.renderObject.drawCircle(this.circle.x, this.circle.y, this.circle.radius);
            for (var i = 0; i < this.physicsObj.length; ++i) {
                switch (this.physicsObj[i].type) {
                    case "circle":
                        var circle = this.physicsObj[i];
                        this._physisCircleCircleTest(this.circle, circle);
                        //this.renderObject.beginFill(0xFF0000, 0.25);
                        //this.renderObject.lineStyle(2, 0xFF0000);
                        //this.renderObject.drawCircle(circle.x, circle.y, circle.radius);
                        break;
                    case "rect":
                        var rect = this.physicsObj[i];
                        this._physisCircleRectTest(this.circle, rect);
                        //this.renderObject.beginFill(0xFF0000, 0.25);
                        //this.renderObject.lineStyle(2, 0xFF0000);
                        //this.renderObject.drawRect((rect.x + rect.x), (rect.y + rect.y), rect.width, rect.height);
                        break;
                }

            }

        }
    }
};