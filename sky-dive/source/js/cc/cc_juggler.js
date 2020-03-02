/**
 * Created by jonathan.kernick on 21/04/2017.
 */
//class for robust updating of diffrent levels of a game
CC.Juggler = function () {

    this.channelPaused = [];
    this.timeoutList = [];
    this.juggleList = [];
};
//add a time out
CC.Juggler.prototype.addTimeout = function (timeoutFunc, timeoutSeconds,timeoutChannel,updateFunc) {
    timeoutChannel = timeoutChannel || 0;

    var timeoutObj = {
        channel: timeoutChannel,
        func: timeoutFunc,
        timerTotal: timeoutSeconds,
        timer:0,
        update: updateFunc
    };

    this.timeoutList.push(timeoutObj);
    return timeoutObj;
};
//add a time out in milliseconds
CC.Juggler.prototype.addTimeoutMil = function (timeoutFunc, timeoutMillieconds,updateFunc) {
    this.addTimeout(timeoutFunc,timeoutMillieconds*0.001,updateFunc);
};
CC.Juggler.prototype.pause = function (channel) {
    this.channelPaused[channel || 0] = true;
};
CC.Juggler.prototype.resume = function (channel) {
    this.channelPaused[channel || 0] = false;
};
//remove a timer from the game using an object
CC.Juggler.prototype.removeTimeout = function (timeout) {

    var i, timeoutObj;
    for (i = this.timeoutList.length - 1; i >= 0; --i) {
        timeoutObj = this.timeoutList[i];
        if (timeoutObj === timeout) {
            this.timeoutList.splice(i, 1);
            delete timeoutObj.channel;
            delete timeoutObj.func;
            delete timeoutObj.timerTotal;
            delete timeoutObj.timer;
            delete timeoutObj.update;
        }
    }

};
//add a task to the game for updaing
CC.Juggler.prototype.addObject = function (taskObject, taskChannel, taskName, milliseconds) {
    taskChannel = taskChannel || 0;
    taskName = taskName || "update";
    milliseconds = !!milliseconds;

    var juggleObj = {
        channel: taskChannel,
        funcName: taskName,
        milli: milliseconds,
        obj: taskObject
    };

    this.juggleList.push(juggleObj);
    return juggleObj;
};
//remove a task from the game using an object reffrence
CC.Juggler.prototype.removeObject = function (taskObject) {

    var i, juggleObj;
    for (i = this.juggleList.length - 1; i >= 0; --i) {
        juggleObj = this.juggleList[i];
        if (juggleObj.obj === taskObject) {
            this.juggleList.splice(i, 1);
            delete juggleObj.channel;
            delete juggleObj.funcName;
            delete juggleObj.milli;
            delete juggleObj.obj;
        }
    }

};
//remove an object from the game via a remove channel
CC.Juggler.prototype.removeChannel = function (taskChannel) {

    var i, juggleObj,timeoutObj;
    for (i = this.juggleList.length - 1; i < 0; --i) {
        juggleObj = this.juggleList[i];
        if (juggleObj.channel === taskChannel) {
            this.juggleList.splice(i, 1);
            delete juggleObj.channel;
            delete juggleObj.funcName;
            delete juggleObj.milli;
            delete juggleObj.obj;
        }
    }
    for (i = this.timeoutList.length - 1; i < 0; --i) {
        timeoutObj = this.timeoutList[i];
        if (timeoutObj.channel === taskChannel) {
            this.timeoutList.splice(i, 1);
            delete timeoutObj.channel;
            delete timeoutObj.func;
            delete timeoutObj.timerTotal;
            delete timeoutObj.timer;
            delete timeoutObj.update;
        }
    }

};
//remove all update objects from the juggler
CC.Juggler.prototype.removeAll = function () {

    var i = 0, length = this.juggleList.length, juggleObj,timeoutObj;
    for (i; i < length; ++i) {
        juggleObj = this.juggleList.pop();
        delete juggleObj.channel;
        delete juggleObj.funcName;
        delete juggleObj.milli;
        delete juggleObj.obj;
    }
    i = 0;
    length = this.timeoutList.length;
    for (i; i < length; ++i) {
        timeoutObj = this.timeoutList.pop();
        delete timeoutObj.channel;
        delete timeoutObj.funcName;
        delete timeoutObj.milli;
        delete timeoutObj.obj;
    }

};
CC.Juggler.prototype.update = function (delta) {
    var i = 0, length = this.juggleList.length, juggleObj, updateValue,timeoutObj;
    //update updates
    for (i; i < length; ++i) {
        updateValue = delta;
        juggleObj = this.juggleList[i];
        if (!this.channelPaused[juggleObj.channel]) {
            if (juggleObj.milli) {
                updateValue = Math.floor(updateValue * 1000);
            }
            juggleObj.obj[juggleObj.funcName](updateValue);
        }
    }
    //update timeouts
    i = 0;
    length  = this.timeoutList.length;
    for (i; i < length; ++i) {
        timeoutObj = this.timeoutList[i];
        if (!this.channelPaused[timeoutObj.channel]) {

            timeoutObj.timer += delta;
            //if the timer finished fire the func otherwise atempt the update func
            if(timeoutObj.timer >= timeoutObj.timerTotal)
            {
                timeoutObj.func(timeoutObj.timer);
                this.removeTimeout(timeoutObj);
                length--;
                i--;
            }
            else
            {
                if(timeoutObj.update)
                {
                    timeoutObj.update(timeoutObj.timer);
                }
            }
        }
    }

};
