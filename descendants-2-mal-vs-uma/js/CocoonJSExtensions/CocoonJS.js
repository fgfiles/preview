/*! CocoonJSExtensions - v2.3.9 - 2017-03-29 www.ludei.com */(function() {
    // There should not be a CocoonJS object when this code is executed.
    // if (typeof window.CocoonJS !== 'undefined') throw("This is strange, a CocoonJS object already exists when trying to create it.");

    /**
     * The basic object for all the CocoonJS related specific APIs === extensions.
     * @namespace
     */
    CocoonJS = window.CocoonJS ? window.CocoonJS : {};

    CocoonJS.nativeExtensionObjectAvailable = typeof window.ext !== 'undefined';

    /**
     * This type represents a 2D size structure with horizontal and vertical values.
     * @class
     */
    CocoonJS.Size = {
        /**
         * The horizontal size value.
         */
        width: 0,

        /**
         * The vertical size value.
         */
        height: 0
    };

    /**
     * This utility function allows to create an object oriented like hierarchy between two functions using their prototypes.
     * This function adds a "superclass" and a "__super" attributes to the subclass and it's functions to reference the super class.
     * @param {function} subc The subclass function.
     * @param {function} superc The superclass function.
     */
    CocoonJS.extend = function(subc, superc) {
        var subcp = subc.prototype;

        // Class pattern.
        var CocoonJSExtendHierarchyChainClass = function() {};
        CocoonJSExtendHierarchyChainClass.prototype = superc.prototype;

        subc.prototype = new CocoonJSExtendHierarchyChainClass(); // chain prototypes.
        subc.superclass = superc.prototype;
        subc.prototype.constructor = subc;

        // Reset constructor. See Object Oriented Javascript for an in-depth explanation of this.
        if (superc.prototype.constructor === Object.prototype.constructor) {
            superc.prototype.constructor = superc;
        }

        // Check all the elements in the subclass prototype and add them to the chain object's prototype.
        for (var method in subcp) {
            if (subcp.hasOwnProperty(method)) {
                subc.prototype[method] = subcp[method];

                // // tenemos en super un metodo con igual nombre.
                // if ( superc.prototype[method]) 
                // {
                //     subc.prototype[method]= (function(fn, fnsuper) 
                //     {
                //         return function() 
                //         {
                //             var prevMethod= this.__super;

                //             this.__super= fnsuper;

                //             var retValue= fn.apply(
                //                     this,
                //                     Array.prototype.slice.call(arguments) );

                //             this.__super= prevMethod;

                //             return retValue;
                //         };
                //     })(subc.prototype[method], superc.prototype[method]);
                // }
            }
        }
    }

    /**
     * IMPORTANT: This function should only be used by Ludei.
     * This function allows a call to the native extension object function reusing the same arguments object.
     * Why is interesting to use this function instead of calling the native object's function directly?
     * As the CocoonJS object functions expicitly receive parameters, if they are not present and the native call is direcly mapped,
     * undefined arguments are passed to the native side. Some native functions do not check the parameters validation
     * correctly (just check the number of parameters passed).
     * Another solution instead of using this function call is to correctly check if the parameters are valid (not undefined) to make the
     * call, but it takes more work than using this approach.
     * @static
     * @param {string} nativeExtensionObjectName The name of the native extension object name. The object that is a member of the 'ext' object.
     * @param {string} nativeFunctionName The name of the function to be called inside the native extension object.
     * @param {object} arguments The arguments object of the CocoonJS extension object function. It contains all the arguments passed to the CocoonJS extension object function and these are the ones that will be passed to the native call too.
     * @param {boolean} [async] A flag to indicate if the makeCall (false or undefined) or the makeCallAsync function should be used to perform the native call.
     * @returns Whatever the native function call returns.
     */
    CocoonJS.makeNativeExtensionObjectFunctionCall = function(nativeExtensionObjectName, nativeFunctionName, args, async) {
        if (CocoonJS.nativeExtensionObjectAvailable) {
            var argumentsArray = Array.prototype.slice.call(args);
            argumentsArray.unshift(nativeFunctionName);
            var nativeExtensionObject = ext[nativeExtensionObjectName];
            var makeCallFunction = async ? nativeExtensionObject.makeCallAsync : nativeExtensionObject.makeCall;
            var ret = makeCallFunction.apply(nativeExtensionObject, argumentsArray);
            var finalRet = ret;
            if (typeof ret === "string") {
                try {
                    finalRet = JSON.parse(ret);
                } catch (error) {}
            }
            return finalRet;
        }
    };

    /**
     * Returns an object retrieved from a path specified by a dot specified text path starting from a given base object.
     * It could be useful to find the reference of an object from a defined base object. For example the base object could be window and the
     * path could be "CocoonJS.App" or "document.body".
     * @param {Object} baseObject The object to start from to find the object using the given text path.
     * @param {string} objectPath The path in the form of a text using the dot notation. i.e. "document.body"
     * For example:
     * var body = getObjectFromPath(window, "document.body");
     */
    CocoonJS.getObjectFromPath = function(baseObject, objectPath) {
        var parts = objectPath.split('.');
        var obj = baseObject;
        for (var i = 0, len = parts.length; i < len; ++i) {
            obj[parts[i]] = obj[parts[i]] || undefined;
            obj = obj[parts[i]];
        }
        return obj;
    };

    /**
     * Returns the key for a value in a dictionary. It looks for an specific value inside a dictionary and returns the corresponding key.
     * @param {Object} dictionary The dictionary to look for the value in and get the corresponding key.
     * @param {Object} value The value to look for inside the dictionary and return it's corresponding key.
     * @return The key that corresponds to the given value it is has been found or null.
     */
    CocoonJS.getKeyForValueInDictionary = function(dictionary, value) {
        var finalKey = null;
        for (var key in dictionary) {
            if (dictionary[key] === value) {
                finalKey = key;
                break;
            }
        }
        return finalKey;
    }

    /**
     * Finds a string inside a given array of strings by looking for a given substring. It can also
     * specify if the search must be performed taking care or not of the case sensitivity.
     * @param {Array} stringArray The array of strings in which to to look for the string.
     * @param {string} subString The substring to look for inside all the strings of the array.
     * @param {boolean} caseSensitive A flag to indicate if the search must be performed taking case of the
     * case sensitiveness (true) or not (false).
     * @return {string} The string that has been found or null if the substring is not inside any of the string of the array.
     */
    CocoonJS.findStringInStringArrayThatIsIndexOf = function(stringArray, subString, caseSensitive) {
        var foundString = null;
        subString = caseSensitive ? subString : subString.toUpperCase();
        for (var i = 0; foundString == null && i < stringArray.length; i++) {
            foundString = caseSensitive ? stringArray[i] : stringArray[i].toUpperCase();
            foundString = foundString.indexOf(subString) >= 0 ? stringArray[i] : null;
        }
        return foundString;
    };

    /**
     * A class that represents objects to handle events. Event handlers have always the same structure:
     * Mainly they provide the addEventListener and removeEventListener functions.
     * Both functions receive a callback function that will be added or removed. All the added callback
     * functions will be called when the event takes place.
     * Additionally they also allow the addEventListenerOnce and notifyEventListeners functions.
     * @constructor
     * @param {string} nativeExtensionObjectName The name of the native extension object (inside the ext object) to be used.
     * @param {string} cocoonJSExtensionObjectName The name of the sugarized extension object.
     * @param {string} nativeEventName The name of the native event inside the ext object.
     * @param {number} [chainFunction] An optional function used to preprocess the listener callbacks. This function, if provided,
     * will be called before any of the other listeners.
     */
    CocoonJS.EventHandler = function(nativeExtensionObjectName, cocoonJSExtensionObjectName, nativeEventName, chainFunction) {
        this.listeners = [];
        this.listenersOnce = [];
        this.chainFunction = chainFunction;

        /**
         * Adds a callback function so it can be called when the event takes place.
         * @param {function} listener The callback function to be added to the event handler object. See the referenced Listener function documentation for more detail in each event handler object's documentation.
         */
        this.addEventListener = function(listener) {
            if (chainFunction) {
                var f = function() {
                    chainFunction.call(this, arguments.callee.sourceListener, Array.prototype.slice.call(arguments));
                };
                listener.CocoonJSEventHandlerChainFunction = f;
                f.sourceListener = listener;
                listener = f;
            }

            var cocoonJSExtensionObject = CocoonJS.getObjectFromPath(CocoonJS, cocoonJSExtensionObjectName);
            if (cocoonJSExtensionObject && cocoonJSExtensionObject.nativeExtensionObjectAvailable) {
                ext[nativeExtensionObjectName].addEventListener(nativeEventName, listener);
            }
            var indexOfListener = this.listeners.indexOf(listener);
            if (indexOfListener < 0) {
                this.listeners.push(listener);
            }
        };

        this.addEventListenerOnce = function(listener) {
            if (chainFunction) {
                var f = function() {
                    chainFunction(arguments.callee.sourceListener, Array.prototype.slice.call(arguments));
                };
                f.sourceListener = listener;
                listener = f;
            }

            var cocoonJSExtensionObject = CocoonJS.getObjectFromPath(CocoonJS, cocoonJSExtensionObjectName);
            if (cocoonJSExtensionObject.nativeExtensionObjectAvailable) {
                ext[nativeExtensionObjectName].addEventListenerOnce(nativeEventName, listener);
            } else {
                var indexOfListener = this.listeners.indexOf(listener);
                if (indexOfListener < 0) {
                    this.listenersOnce.push(listener);
                }
            }
        };

        /**
         * Removes a callback function that was added to the event handler so it won't be called when the event takes place.
         * @param {function} listener The callback function to be removed from the event handler object. See the referenced Listener function documentation for more detail in each event handler object's documentation.
         */
        this.removeEventListener = function(listener) {

            if (chainFunction) {
                listener = listener.CocoonJSEventHandlerChainFunction;
                delete listener.CocoonJSEventHandlerChainFunction;
            }

            var cocoonJSExtensionObject = CocoonJS.getObjectFromPath(CocoonJS, cocoonJSExtensionObjectName);
            if (cocoonJSExtensionObject.nativeExtensionObjectAvailable) {
                ext[nativeExtensionObjectName].removeEventListener(nativeEventName, listener);
            } else {
                var indexOfListener = this.listeners.indexOf(listener);
                if (indexOfListener >= 0) {
                    this.listeners.splice(indexOfListener, 1);
                }
            }
        };

        this.notifyEventListeners = function() {
            var cocoonJSExtensionObject = CocoonJS.getObjectFromPath(CocoonJS, cocoonJSExtensionObjectName);
            var argumentsArray = Array.prototype.slice.call(arguments);
            if (cocoonJSExtensionObject && cocoonJSExtensionObject.nativeExtensionObjectAvailable) {
                ext[nativeExtensionObjectName].notifyEventListeners(nativeEventName, argumentsArray);
            } else {
                var listeners = Array.prototype.slice.call(this.listeners);
                var listenersOnce = Array.prototype.slice.call(this.listenersOnce);
                var _this = this;
                // Notify listeners after a while ;) === do not block this thread.
                setTimeout(function() {
                    for (var i = 0; i < listeners.length; i++) {
                        listeners[i].apply(_this, argumentsArray);
                    }
                    for (var i = 0; i < listenersOnce.length; i++) {
                        listenersOnce[i].apply(_this, argumentsArray);
                    }
                }, 0);

                _this.listenersOnce = [];
            }
        };
        return this;
    };

    /**
     * A simple timer class. Update it every loop iteration and get values from accumulated time to elapsed time in seconds or milliseconds.
     */
    CocoonJS.Timer = function() {
        this.reset();
        return this;
    };

    CocoonJS.Timer.prototype = {
        currentTimeInMillis: 0,
        lastTimeInMillis: 0,
        elapsedTimeInMillis: 0,
        elapsedTimeInSeconds: 0,
        accumTimeInMillis: 0,

        /**
		Resets the timer to 0.
		*/
        reset: function() {
            this.currentTimeInMillis = this.lastTimeInMillis = new Date().getTime();
            this.accumTimeInMillis = this.elapsedTimeInMillis = this.elapsedTimeInSeconds = 0;
        },

        /**
		Updates the timer calculating the elapsed time between update calls.
		*/
        update: function() {
            this.currentTimeInMillis = new Date().getTime();
            this.elapsedTimeInMillis = this.currentTimeInMillis - this.lastTimeInMillis;
            this.elapsedTimeInSeconds = this.elapsedTimeInMillis / 1000.0;
            this.lastTimeInMillis = this.currentTimeInMillis;
            this.accumTimeInMillis += this.elapsedTimeInMillis;
        }
    };

})();;(function () {
    // The CocoonJS must exist before creating the extension.
    if (typeof window.CocoonJS === 'undefined' || window.CocoonJS === null) throw ("The CocoonJS object must exist and be valid before creating any extension object.");

    /**
     * This namespace represents all the basic functionalities available in the CocoonJS extension API.
     * @namespace
     */
    CocoonJS.App = CocoonJS.App ? CocoonJS.App : {};

    CocoonJS.App.nativeExtensionObjectAvailable = CocoonJS.nativeExtensionObjectAvailable && typeof window.ext.IDTK_APP !== 'undefined';

    /**
     * The predefined possible layouts for the FPS overlay.
     * @namespace
     * @enum
     */
    CocoonJS.App.FPSLayout = {
        TOP_LEFT: 'top-left',
        TOP_RIGHT: 'top-right',
        BOTTOM_LEFT: 'bottom-left',
        BOTTOM_RIGHT: 'bottom-right'
    };

    /**
    * The predefined possible orientations. there can be a bit level combination of them using the OR operator.
    * @namespace
    * @enum
    */
    CocoonJS.App.Orientations = {
        PORTRAIT: 1,
        PORTRAIT_UPSIDE_DOWN: 2,
        LANDSCAPE_LEFT: 4,
        LANDSCAPE_RIGHT: 8,
        PORTRAIT: 1 | 2,
        LANDSCAPE: 4 | 8,
        BOTH: 1 | 2 | 4 | 8
    };

    /**
     * Contains all the possible values to specify the input keyboard type to be used when introducing text.
     * @namespace
     * @enum
     */
    CocoonJS.App.KeyboardType = {
        /**
         * Represents a generic text input keyboard.
         */
        TEXT: "text",

        /**
         * Represents a number like input keyboard.
         */
        NUMBER: "num",

        /**
         * Represents a phone like input keyboard.
         */
        PHONE: "phone",

        /**
         * Represents an email like input keyboard.
         */
        EMAIL: "email",

        /**
         * Represents an URL like input keyboard.
         */
        URL: "url"
    };

    /**
     * The storage types to be used with file system related operations.
     * @namespace
     * @enum
     */
    CocoonJS.App.StorageType = {
        /**
         * Represents the application storage. The application storage is the place where all the resources that come with the application are stored.
         */
        APP_STORAGE: "APP_STORAGE",

        /**
         * Represents the internal storage. The internal storage is a different storage space that the application storage and only the data that the application has stored
         * in it will be in this storage. It is internal to the platform/device.
         */
        INTERNAL_STORAGE: "INTERNAL_STORAGE",

        /**
         * Represents an external storage. The external storage is similar to the internal storage in the sense that it only contains information that the application has written
         * in it but it represents an external storage device like a SD-CARD. If there is no exrernal storage, it will represent the same as the internal storage.
         */
        EXTERNAL_STORAGE: "EXTERNAL_STORAGE",

        /**
         * Represents the temporal storage. Same as the internal and external storage spaces in the sense that it only contains information that the application has written
         * in it but the main difference is that the information in this storage may dissapear without notice.
         */
        TEMPORARY_STORAGE: "TEMPORARY_STORAGE"
    };

    /**
     * The capture types to capture screenshots using CocoonJS native capabilities.
     * @namespace
     * @enum
     */
    CocoonJS.App.CaptureType = {
        /**
         Captures everything, both the CocoonJS GL hardware accelerated surface and the system views (like the WebView).
         */
        EVERYTHING: 0,

        /**
         * Captures just the CocoonJS GL hardware accelerated surface.
         */
        JUST_COCOONJS_GL_SURFACE: 1,

        /**
         * Captures just the sustem views (like the webview)
         */
        JUST_SYSTEM_VIEWS: 2
    };

    /**
     * @ignore
     * Forward service might not be available if only one JS service is included
     */
    function isNativeBridgeServiceAvailable() {
        if (CocoonJS.App.forward.nativeAvailable === 'boolean') {
            //cached value
            return CocoonJS.App.forward.nativeAvailable;
        }
        else {
            var available = CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "forwardAvailable", arguments);
            available = !!available;
            CocoonJS.App.forward.nativeAvailable = available;
            return available;
        }

    }

    /**
     * Makes a forward call of some javascript code to be executed in a different environment (i.e. from CocoonJS to the WebView and viceversa).
     * It waits until the code is executed and the result of it is returned === synchronous.
     * @function
     * @param {string} javaScriptCode Some JavaScript code in a string to be forwarded and executed in a different JavaScript environment (i.e. from CocoonJS to the WebView and viceversa).
     * @return {string} The result of the execution of the passed JavaScript code in the different JavaScript environment.
     */
    CocoonJS.App.forward = function (javaScriptCode) {
        if (CocoonJS.App.nativeExtensionObjectAvailable && isNativeBridgeServiceAvailable()) {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "forward", arguments);
        }
        else {
            if (window.name == 'CocoonJS_App_ForCocoonJS_WebViewIFrame') {
                return window.parent.eval(javaScriptCode);
            }
            else {
                var frame = window.parent.frames['CocoonJS_App_ForCocoonJS_WebViewIFrame'];
                if (frame) {
                    return frame.window.eval(javaScriptCode);
                }
            }
        }
    };

    /**
     * Makes a forward call of some javascript code to be executed in a different environment (i.e. from CocoonJS to the WebView and viceversa).
     * It is asyncrhonous so it does not wait until the code is executed and the result of it is returned. Instead, it calls a callback function when the execution has finished to pass the result.
     * @function
     * @param {string} javaScriptCode Some JavaScript code in a string to be forwarded and executed in a different JavaScript environment (i.e. from CocoonJS to the WebView and viceversa).
     * @param {function} [returnCallback] A function callback that will be called when the passed JavaScript code is executed in a different thread to pass the result of the execution in the different JavaScript environment.
     */
    CocoonJS.App.forwardAsync = function (javaScriptCode, returnCallback) {
        if (CocoonJS.App.nativeExtensionObjectAvailable && isNativeBridgeServiceAvailable()) {
            if (typeof returnCallback !== 'undefined') {
                return ext.IDTK_APP.makeCallAsync("forward", javaScriptCode, returnCallback);
            }
            else {
                return ext.IDTK_APP.makeCallAsync("forward", javaScriptCode);
            }
        }
        else {
            setTimeout(function () {
                var res;
                if (window.name == 'CocoonJS_App_ForCocoonJS_WebViewIFrame') {
                    res = window.parent.eval(javaScriptCode);
                }
                else {
                    var frame = window.parent.frames['CocoonJS_App_ForCocoonJS_WebViewIFrame'];
                    if (frame) {
                        res = frame.window.eval(javaScriptCode);
                    }
                }
                typeof (returnCallback) === "function" && returnCallback.call(this, res);
            }, 1);
        }
    };

    /**
     * Pops up a text dialog so the user can introduce some text and the application can get it back. It is the first approach CocoonJS has taken to be able to introduce
     * text input in a easy way. The dialog execution events are passed to the application through the {@link CocoonJS.App.onTextDialogFinished} and the {@link CocoonJS.App.onTextDialogCancelled} event objects.
     * @function
     * @param {string} [title] Default value is "". The title to be displayed in the dialog.
     * @param {string} [message] Default value is "". The message to be displayed in the dialog, next to the text input field.
     * @param {string} [text] Default value is "". The initial text to be introduced in the text input field.
     * @param {CocoonJS.App.KeyboardType} [keyboardType] Default value is {@link CocoonJS.App.KeyboardType.TEXT}. The keyboard type to be used when the text has to be introduced.
     * @param {string} [cancelButtonText] Default value is "". The text to be displayed in the cancel button of the dialog.
     * @param {string} [okButtonText] Default value is "". The text to be displayed in the ok button of the dialog.
     * @see CocoonJS.App.onTextDialogFinished
     * @see CocoonJS.App.onTextDialogCancelled
     */
    CocoonJS.App.showTextDialog = function (title, message, text, keyboardType, cancelButtonText, okButtonText) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "showTextDialog", arguments, true);
        }
        else if (!navigator.isCocoonJS) {
            if (!message) {
                message = "";
            }
            if (!text) {
                text = "";
            }
            setTimeout(function () {
                var result = prompt(message, text);
                var eventObject = result ? CocoonJS.App.onTextDialogFinished : CocoonJS.App.onTextDialogCancelled;
                eventObject.notifyEventListeners(result);
            }, 0);
        }
    };

    /**
     * Pops up a message dialog so the user can decide between a yes or no like confirmation. The message box execution events are passed to the application through the {@link CocoonJS.App.onMessageBoxConfirmed} and the {@link CocoonJS.App.onMessageBoxDenied} event objects.
     * @function
     * @param {string} [title] Default value is "". The title to be displayed in the dialog.
     * @param {string} [message] Default value is "". The message to be displayed in the dialog, next to the text input field.
     * @param {string} [confirmButtonText] Default value is "Yes". The text to be displayed for the confirm button.
     * @param {string} [denyButtonText] Default value is "No". The text to be displayed for the deny button.
     * @see CocoonJS.App.onMessageBoxConfirmed
     * @see CocoonJS.App.onMessageBoxDenied
     */
    CocoonJS.App.showMessageBox = function (title, message, confirmButtonText, denyButtonText) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "showMessageBox", arguments, true);
        }
        else if (!navigator.isCocoonJS) {
            if (!message) {
                message = "";
            }
            setTimeout(function () {
                var result = confirm(message);
                var eventObject = result ? CocoonJS.App.onMessageBoxConfirmed : CocoonJS.App.onMessageBoxDenied;
                eventObject.notifyEventListeners();
            }, 0);
        }
    };

    /**
     * It allows to load a new JavaScript/HTML5 resource that can be loaded either locally (inside the platform/device storage) or using a remote URL.
     * @function
     * @param {string} path A path to a resource stored in the platform or in a URL to a remote resource.
     * @param {CocoonJS.App.StorageType} [storageType] If the path argument represents a locally stored resource, the developer can specify the storage where it is stored. If no value is passes, the {@link CocoonJS.App.StorageType.APP_STORAGE} value is used by default.
     */
    CocoonJS.App.load = function (path, storageType) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "loadPath", arguments);
        }
        else if (!navigator.isCocoonJS) {
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function (event) {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        // TODO: As window load event is not being called (WHY???), I have decided to call the listeners directly
                        // var callback= function(event){
                        //     window.removeEventListener("load", callback);
                        var jsCode;
                        // If there is no webview, it means we are in the webview, so notify the CocoonJS environment
                        if (!CocoonJS.App.EmulatedWebViewIFrame) {
                            jsCode = "window.CocoonJS && window.CocoonJS.App.onLoadInTheWebViewSucceed.notifyEventListeners('" + path + "');";
                        }
                        // If there is a webview, it means we are in CocoonJS, so notify the webview environment
                        else {
                            jsCode = "window.CocoonJS && window.CocoonJS.App.onLoadInCocoonJSSucceed.notifyEventListeners('" + path + "');";
                        }
                        CocoonJS.App.forwardAsync(jsCode);
                        // };
                        // window.addEventListener("load", callback);
                        window.location.href = path;
                    }
                    else if (xhr.status === 404) {
                        this.onreadystatechange = null;
                        var jsCode;
                        // If there is no webview, it means we are in the webview, so notify the CocoonJS environment
                        if (!CocoonJS.App.EmulatedWebViewIFrame) {
                            jsCode = "CocoonJS && CocoonJS.App.onLoadInTheWebViewFailed.notifyEventListeners('" + path + "');";
                        }
                        // If there is a webview, it means we are in CocoonJS, so notify the webview environment
                        else {
                            jsCode = "CocoonJS && CocoonJS.App.onLoadInCocoonJSFailed.notifyEventListeners('" + path + "');";
                        }
                        CocoonJS.App.forwardAsync(jsCode);
                    }
                }
            };
            xhr.open("GET", path, true);
            xhr.send();
        }
    };

    /**
     * Reloads the last loaded path in the current context.
     * @function
     */
    CocoonJS.App.reload = function () {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "reload", arguments);
        }
        else if (!navigator.isCocoonJS) {
            if (window.name == 'CocoonJS_App_ForCocoonJS_WebViewIFrame') {
                return window.parent.location.reload();
            }
            else {
                return window.parent.frames['CocoonJS_App_ForCocoonJS_WebViewIFrame'].window.location.reload();
            }
        }
    };

    /**
     * Opens a given URL using a system service that is able to open it. For example, open a HTTP URL using the system WebBrowser.+
     * @function
     * @param {string} url The URL to be opened by a system service.
     */
    CocoonJS.App.openURL = function (url) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "openURL", arguments, true);
        }
        else if (!navigator.isCocoonJS) {
            window.open(url, '_blank');
        }
    }

    /**
     * Opens a given share native window to share some specific text content in any system specific social sharing options. For example, Twitter, Facebook, SMS, Mail, ...
     * @function
     * @param {string} textToShare The text content that will be shared.
     */
    CocoonJS.App.share = function (textToShare) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "share", arguments, true);
        }
        else {
            // TODO: Is there something we could do to share in a browser?
        }
    }

    /**
     * Forces the app to be finished.
     * @function
     */
    CocoonJS.App.forceToFinish = function () {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "forceToFinish", arguments);
        }
        else if (!navigator.isCocoonJS) {
            window.close();
        }
    }

    /**
     * Enables or disables the auto lock to control if the screen keeps on after an inactivity period.
     * When the auto lock is enabled and the application has no user input for a short period, the system puts the device into a "sleep” state where the screen dims or turns off.
     * When the auto lock is disabled the screen keeps on even when there is no user input for long times.
     * @param enabled A boolean value that controls whether to enable or disable the auto lock.
     */
    CocoonJS.App.setAutoLockEnabled = function (enabled) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "setAutoLockEnabled", arguments);
        }
    }

    /**
     * Creates a canvas element that is automatically resized to the screen size. When the app is being executed
     * inside CocoonJS. This canvas is optimized for rendering so it is higly recommended to use it if it fits
     * your app needs. If your app uses one canvas as the main canvas where all other canvases and images are displayed, Ludei recommends to
     * call this function in order to create this main canvas. A usual 2x performance gain is achieved by doing so
     * depending on the device and the graphics card driver.
     * @function
     * @return {object} The canvas object that should be used as the main canvas and that is resized to the screen resolution.
     */
    CocoonJS.App.createScreenCanvas = function () {
        var screenCanvas;
        if (navigator.isCocoonJS) {
            screenCanvas = document.createElement("screencanvas");
        }
        else if (!navigator.isCocoonJS) {
            screenCanvas = document.createElement("canvas");
            screenCanvas.width = window.innerWidth;
            screenCanvas.height = window.innerHeight;
        }
        return screenCanvas;
    };

    CocoonJS.App.addADivToDisableInput = function () {
        var div = document.createElement("div");
        div.id = "CocoonJSInputBlockingDiv";
        div.style.left = 0;
        div.style.top = 0;
        div.style.width = "100%";
        div.style.height = "100%";
        div.style.position = "absolute";
        div.style.backgroundColor = 'transparent';
        div.style.border = "0px solid #000";
        div.style.zIndex = 999999999;
        document.body.appendChild(div);
    };

    CocoonJS.App.removeTheDivToEnableInput = function () {
        var div = document.getElementById("CocoonJSInputBlockingDiv");
        if (div) document.body.removeChild(div);
    };

    /**
     * Disables the touch events in the CocoonJS environment.
     * @function
     */
    CocoonJS.App.disableTouchInCocoonJS = function () {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            window.ext.IDTK_APP.makeCall("disableTouchLayer", "CocoonJSView");
        }
        else if (!navigator.isCocoonJS) {
            if (!CocoonJS.App.EmulatedWebViewIFrame) {
                CocoonJS.App.forwardEventsToCocoonJSEnabled = false;
                CocoonJS.App.forwardAsync("CocoonJS && CocoonJS.App && CocoonJS.App.disableTouchInCocoonJS();");
            }
            else {
                // CocoonJS.App.addADivToDisableInput();
            }
        }
    };

    /**
     * Enables the touch events in the CocoonJS environment.
     * @function
     */
    CocoonJS.App.enableTouchInCocoonJS = function () {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            window.ext.IDTK_APP.makeCall("enableTouchLayer", "CocoonJSView");
        }
        else if (!navigator.isCocoonJS) {
            if (!CocoonJS.App.EmulatedWebViewIFrame) {
                CocoonJS.App.forwardEventsToCocoonJSEnabled = true;
                CocoonJS.App.forwardAsync("CocoonJS && CocoonJS.App.enableTouchInCocoonJS();");
            }
            else {
                // CocoonJS.App.removeTheDivToEnableInput();
            }
        }
    };

    /**
     * Disables the touch events in the WebView environment.
     * @function
     */
    CocoonJS.App.disableTouchInTheWebView = function () {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            window.ext.IDTK_APP.makeCall("disableTouchLayer", "WebView");
        }
        else if (!navigator.isCocoonJS) {
            if (!CocoonJS.App.EmulatedWebViewIFrame) {
                CocoonJS.App.addADivToDisableInput();
            }
            else {
                CocoonJS.App.forwardAsync("CocoonJS && CocoonJS.App.disableTouchInTheWebView();");
            }
        }
    };

    /**
     * Enables the touch events in the WebView environment.
     * @function
     */
    CocoonJS.App.enableTouchInTheWebView = function () {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            window.ext.IDTK_APP.makeCall("enableTouchLayer", "WebView");
        }
        else if (!navigator.isCocoonJS) {
            if (!CocoonJS.App.EmulatedWebViewIFrame) {
                CocoonJS.App.removeTheDivToEnableInput();
            }
            else {
                CocoonJS.App.forwardAsync("CocoonJS && CocoonJS.App.enableTouchInTheWebView();");
            }
        }
    };

    /**
     * Setups the update interval in seconds (1 second / X frames) to receive the accelerometer updates.
     * It defines the rate at which the devicemotion events are updated.
     * @function
     * @param {number} updateIntervalInSeconds The update interval in seconds to be set.
     */
    CocoonJS.App.setAccelerometerUpdateIntervalInSeconds = function (updateIntervalInSeconds) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return window.ext.IDTK_APP.makeCall("setAccelerometerUpdateIntervalInSeconds", updateIntervalInSeconds);
        }
    };

    /**
     * Returns the update interval in seconds that is currently set for accelerometer related events.
     * @function
     * @return {number} The update interval in seconds that is currently set for accelerometer related events.
     */
    CocoonJS.App.getAccelerometerUpdateIntervalInSeconds = function () {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return window.ext.IDTK_APP.makeCall("getAccelerometerUpdateIntervalInSeconds");
        }
    };

    /**
     * Setups the update interval in seconds (1 second / X frames) to receive the gyroscope updates.
     * It defines the rate at which the devicemotion and deviceorientation events are updated.
     * @function
     * @param {number} updateIntervalInSeconds The update interval in seconds to be set.
     */
    CocoonJS.App.setGyroscopeUpdateIntervalInSeconds = function (updateIntervalInSeconds) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return window.ext.IDTK_APP.makeCall("setGyroscopeUpdateIntervalInSeconds", updateIntervalInSeconds);
        }
    };

    /**
     * Returns the update interval in seconds that is currently set for gyroscope related events.
     * @function
     * @return {number} The update interval in seconds that is currently set for gyroscope related events.
     */
    CocoonJS.App.getGyroscopeUpdateIntervalInSeconds = function () {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            window.ext.IDTK_APP.makeCall("getGyroscopeUpdateIntervalInSeconds");
        }
    };


    /**
     * Setups a origin proxy for a given typeName. What this means is that after calling this function the environment that makes this call will suddenly
     * have a way of creating instances of the given typeName and those instances will act as a transparent proxy to counterpart instances in the destination environment.
     * Manipulating attributes, calling funcitions or handling events will all be performed in the destination environment but the developer will think they will be
     * happening in the origin environment.
     * IMPORTANT NOTE: These proxies only work with types that use attributes and function parameters and return types that are primitive like numbers, strings or arrays.
     * @param {string} typeName The name of the type to be proxified.
     * @param {array} [attributeNames] A list of the names of the attributes to be proxified.
     * @param {array} [functionNames] A list of the names of the functions to be proxified.
     * @param {array} [eventHandlerNames] A list of the names of the event handlers to be proxified (onXXXX like attributes that represent callbacks).
     * A valid typeName and at least one valid array for attribute, function or event handler names is mandatory.
     */
    CocoonJS.App.setupOriginProxyType = function (typeName, attributeNames, functionNames, eventHandlerNames) {
        // Control the parameters.
        if (!typeName) throw "The given typeName must be valid.";
        if (!attributeNames && !functionNames && !eventHandlerNames) throw "There is no point on setting up a proxy for no attributes, functions nor eventHandlers.";
        attributeNames = attributeNames ? attributeNames : [];
        functionNames = functionNames ? functionNames : [];
        eventHandlerNames = eventHandlerNames ? eventHandlerNames : [];

        // The parent object will be the window. It could be another object but careful, the destination side should know about this.
        // TODO: Specify the parentObject as a parameter, obtain it's path from the window object and pass it to the destination environment so it knows about it.
        var parentObject = window;

        // Setup the destination side too.
        var jsCode = "CocoonJS.App.setupDestinationProxyType(" + JSON.stringify(typeName) + ", " + JSON.stringify(eventHandlerNames) + ");";
        CocoonJS.App.forward(jsCode);

        var originalType = parentObject[typeName];

        // Constructor. This will be the new proxified type in the origin environment. Instances of this type will be created by the developer without knowing that they are
        // internally calling to their counterparts in the destination environment.
        parentObject[typeName] = function () {
            var _this = this;

            // Each proxy object will have a origin object inside with all the necessary information to be a proxy to the destination.
            this._cocoonjs_proxy_object_data = {};
            // The id is obtained calling to the destination side to create an instance of the type.
            var jsCode = "CocoonJS.App.newDestinationProxyObject(" + JSON.stringify(typeName) + ");";
            this._cocoonjs_proxy_object_data.id = CocoonJS.App.forward(jsCode);
            // The eventHandlers dictionary contains objects of the type { eventHandlerName : string, eventHandler : function } to be able to make the callbacks when the 
            // webview makes the corresponding calls.
            this._cocoonjs_proxy_object_data.eventHandlers = {};
            // Also store the typename inside each instance.
            this._cocoonjs_proxy_object_data.typeName = typeName;
            // A dictionary to store the event handlers
            this._cocoonjs_proxy_object_data.eventListeners = {};

            // TODO: eventHandlers and eventListeners should be in the same list ;)

            // Store all the proxy instances in a list that belongs to the type itself.
            parentObject[typeName]._cocoonjs_proxy_type_data.proxyObjects[this._cocoonjs_proxy_object_data.id] = this;

            // Create a setter and a getter for all the attribute names that have been specified. When the attributes are accessed (set or get) a call to the destination counterpart will be performed.
            for (var i = 0; i < attributeNames.length; i++) {
                (function (attributeName) {
                    _this.__defineSetter__(attributeName, function (value) {
                        var jsCode = "CocoonJS.App.setDestinationProxyObjectAttribute(" + JSON.stringify(typeName) + ", " + _this._cocoonjs_proxy_object_data.id + ", " + JSON.stringify(attributeName) + ", " + JSON.stringify(value) + ");";
                        return CocoonJS.App.forward(jsCode);
                    });
                    _this.__defineGetter__(attributeName, function () {
                        var jsCode = "CocoonJS.App.getDestinationProxyObjectAttribute(" + JSON.stringify(typeName) + ", " + _this._cocoonjs_proxy_object_data.id + ", " + JSON.stringify(attributeName) + ");";
                        return CocoonJS.App.forward(jsCode);
                    });
                })(attributeNames[i]);
            }

            // Create a function that performs a call to the destination environment counterpart for all the function names that have been specified.
            for (var i = 0; i < functionNames.length; i++) {
                (function (functionName) {
                    _this[functionName] = function () {
                        // Get the arguments as an array and add the typeName, the proxy id and the functionName before all the other arguments before making the call to the destination counterpart.
                        var argumentsArray = Array.prototype.slice.call(arguments);
                        argumentsArray.unshift(functionName);
                        argumentsArray.unshift(this._cocoonjs_proxy_object_data.id);
                        argumentsArray.unshift(typeName);
                        // Use the array to create the correct function call.
                        var jsCode = "CocoonJS.App.callDestinationProxyObjectFunction(";
                        for (var i = 0; i < argumentsArray.length; i++) {
                            // The second argument (the id) should not be stringified
                            jsCode += (i !== 1 ? JSON.stringify(argumentsArray[i]) : argumentsArray[i]) + (i < argumentsArray.length - 1 ? ", " : "");
                        }
                        jsCode += ");";
                        // TODO: This next call should be synchronous but it seems that some customers are experiencing some crash issues. Making it async solves these crashes.
                        // Another possible solution could be to be able to specify which calls could be async and which sync in the proxification array.
                        var ret = CocoonJS.App.forwardAsync(jsCode);
                        return ret;
                    };
                })(functionNames[i]);
            }

            // Create a setter and getter for all the event handler names that have been specified. When the event handlers are accessed, store them inside the corresponding position on the eventHandlers
            // array so they can be called when the destination environment makes the corresponding callback call.
            for (var i = 0; i < eventHandlerNames.length; i++) {
                (function (eventHandlerName) {
                    _this.__defineSetter__(eventHandlerName, function (value) {
                        _this._cocoonjs_proxy_object_data.eventHandlers[eventHandlerName] = value;
                    });
                    _this.__defineGetter__(eventHandlerName, function () {
                        return _this._cocoonjs_proxy_object_data.eventHandlers[eventHandlerName];
                    });
                })(eventHandlerNames[i]);
            }

            // Setup the add and remove event listeners in the proxy object
            _this.addEventListener = function (eventTypeName, eventCallback) {
                var addEventCallback = true;
                // Check for the eventListeners
                var eventListeners = _this._cocoonjs_proxy_object_data.eventListeners[eventTypeName];
                if (eventListeners) {
                    // As the eventListeners were already added, check that the same callback has not been added.
                    addEventCallback = eventListeners.indexOf(eventCallback) < 0;
                }
                else {
                    // There are no event listeners, so add the one and add the listeners array for the specific event type name
                    eventListeners = [];
                    _this._cocoonjs_proxy_object_data.eventListeners[eventTypeName] = eventListeners;

                    // Forward the call so the other end registers a event listener (only one is needed).
                    var jsCode = "CocoonJS.App.addDestinationProxyObjectEventListener(" + JSON.stringify(_this._cocoonjs_proxy_object_data.typeName) + ", " + _this._cocoonjs_proxy_object_data.id + ", " + JSON.stringify(eventTypeName) + ");";
                    CocoonJS.App.forwardAsync(jsCode);
                }
                // Only if the alforithm above specify so, add the eventcallback and notify the destination environment to do the same
                if (addEventCallback) {
                    eventListeners.push(eventCallback);
                }
            };

            _this.removeEventListener = function (eventTypeName, eventCallback) {
                // Check for the eventListeners
                var eventListeners = _this._cocoonjs_proxy_object_data.eventListeners[eventTypeName];
                if (eventListeners) {
                    var eventCallbackIndex = eventListeners.indexOf(eventCallback);
                    if (eventCallbackIndex >= 0) {
                        eventListeners.splice(eventCallbackIndex, 1);
                    }
                }
            };

            // Return the proxy instance.
            return this;
        };

        // The type will contain a proxy data structure to store all the instances that are created so they are available when the destination environment calls back. 
        parentObject[typeName]._cocoonjs_proxy_type_data =
            {
                originalType: originalType,
                proxyObjects: []
            };

        /**
         * Deletes a proxy instance from both the CocoonJS environment structures and also deleting it's webview environment counterpart.
         * This function should be manually called whenever a proxy instance won't be accessed anymore.
         * @param {object} object The proxy object to be deleted.
         */
        parentObject[typeName]._cocoonjs_proxy_type_data.deleteProxyObject = function (object) {
            var proxyObjectKey = CocoonJS.getKeyForValueInDictionary(this.proxyObjects, object);
            if (proxyObjectKey) {
                var jsCode = "CocoonJS.App.deleteDestinationProxyObject(" + JSON.stringify(typeName) + ", " + object._cocoonjs_proxy_object_data.id + ");";
                CocoonJS.App.forwardAsync(jsCode);
                object._cocoonjs_proxy_object_data = null;
                delete this.proxyObjects[proxyObjectKey];
            }
        };

        /**
         * Calls a event handler for the given proxy object id and eventHandlerName.
         * @param {number} id The id to be used to look for the proxy object for which to make the call to it's event handler.
         * @param {string} eventHandlerName The name of the handler to be called.
         * NOTE: Events are a complex thing in the HTML specification. This function just performs a call but at least provides a
         * structure to the event passing the target (the proxy object).
         * TODO: The destination should serialize the event object as far as it can so many parameters can be passed to the origin
         * side. Using JSON.stringify in the destination side and parse in origin side maybe? Still must add the target to the event structure though.
         */
        parentObject[typeName]._cocoonjs_proxy_type_data.callProxyObjectEventHandler = function (id, eventHandlerName) {
            var object = this.proxyObjects[id];
            var eventHandler = object._cocoonjs_proxy_object_data.eventHandlers[eventHandlerName];
            if (eventHandler) {
                eventHandler({ target: object });
            }
        };

        parentObject[typeName]._cocoonjs_proxy_type_data.callProxyObjectEventListeners = function (id, eventTypeName) {
            var object = this.proxyObjects[id];
            var eventListeners = object._cocoonjs_proxy_object_data.eventListeners[eventTypeName].slice();
            for (var i = 0; i < eventListeners.length; i++) {
                eventListeners[i]({ target: object });
            }
        };
    };

    /**
     * Takes down the proxification of a type and restores it to it's original type. Do not worry if you pass a type name that is not proxified yet. The
     * function will handle it correctly for compativility reasons.
     * @param {string} typeName The name of the type to be deproxified (take down the proxification and restore the type to it's original state)
     */
    CocoonJS.App.takedownOriginProxyType = function (typeName) {
        var parentObject = window;
        if (parentObject[typeName] && parentObject[typeName]._cocoonjs_proxy_type_data) {
            parentObject[typeName] = parentObject[typeName]._cocoonjs_proxy_type_data.originalType;
        }
    };

    /**
     * Deletes everything related to a proxy object in both environments. Do not worry of you do not pass a proxified object to the
     * function. For compatibility reasons, you can still have calls to this function even when no poxification of a type has been done.
     * @param {object} object The proxified object to be deleted.
     */
    CocoonJS.App.deleteOriginProxyObject = function (object) {
        var parentObject = window;
        if (object && object._cocoonjs_proxy_object_data) {
            parentObject[object._cocoonjs_proxy_object_data.typeName]._cocoonjs_proxy_type_data.deleteProxyObject(object);
        }
    };

    /**
     * @ignore
     * NOTE: This function should never be directly called. It will be called from the destination environment whenever it is needed to work with proxy objects.
     * It calls the origin proxy object when an event handler need to be updated/called from the destination environment.
     * @param {string} typeName The type name of the proxified type.
     * @param {number} id The id of the proxy object.
     * @param {string} eventHandlerName The name of the event handler to be called.
     */
    CocoonJS.App.callOriginProxyObjectEventHandler = function (typeName, id, eventHandlerName) {
        var parentObject = window;
        parentObject[typeName]._cocoonjs_proxy_type_data.callProxyObjectEventHandler(id, eventHandlerName);
    };

    /**
     * @ignore
     * NOTE: This function should never be directly called. It will be called from the destination environment whenever it is needed to work with proxy objects.
     * It calls the origin proxy object when all the event listeners related to a specific event need to be updated/called from the destination environment.
     * @param {string} typeName The type name of the proxified type.
     * @param {number} id The id of the proxy object.
     * @param {string} eventTypeName The name of the event type to call the listeners related to it.
     */
    CocoonJS.App.callOriginProxyObjectEventListeners = function (typeName, id, eventTypeName) {
        var parentObject = window;
        parentObject[typeName]._cocoonjs_proxy_type_data.callProxyObjectEventListeners(id, eventTypeName);
    };

    /**
     * @ignore
     * NOTE: This function should never be directly called. It will be called from the origin environment whenever it is needed to work with proxy objects.
     * Setups all the structures that are needed to proxify a destination type to an origin type.
     * @param {string} typeName The name of the type to be proxified.
     * @param {array} eventHandlerNames An array with al the event handlers to be proxified. Needed in order to be able to create callbacks for all the event handlers
     * and call to the CocoonJS counterparts accordingly.
     */
    CocoonJS.App.setupDestinationProxyType = function (typeName, eventHandlerNames) {
        var parentObject = window;

        // Add a cocoonjs structure to the destination proxified type to store some useful information like all the proxy instances that are created, plus the id counter 
        // and the names of all the event handlers and some utility functions.
        parentObject[typeName]._cocoonjs_proxy_type_data =
            {
                nextId: 0,
                proxyObjects: {},
                eventHandlerNames: eventHandlerNames
            }
    };

    /**
     * @ignore
     * NOTE: This function should never be directly called. It will be called from the origin environment whenever it is needed to work with proxy objects.
     * Takes down the proxy type at the destination environment. Just removes the data structure related to proxies that was added to the type when proxification tool place.
     * @param {string} typeName The name of the type to take the proxification down.
     */
    CocoonJS.App.takedownDestinationProxyType = function (typeName) {
        var parentObject = window;
        if (parent[typeName] && parentObject[typeName]._cocoonjs_proxy_type_data) {
            delete parentObject[typeName]._cocoonjs_proxy_type_data;
        }
    };

    /**
     * @ignore
     * NOTE: This function should never be directly called. It will be called from the original environment whenever it is needed to work with proxy objects.
     * Creates a new destination object instance and generates a id to reference it from the original environment.
     * @param {string} typeName The name of the type to be proxified and to generate an instance.
     * @return The id to be used from the original environment to identify the corresponding destination object instance.
     */
    CocoonJS.App.newDestinationProxyObject = function (typeName) {
        var parentObject = window;

        var proxyObject = new parentObject[typeName]();
        // Also store some additional information in the proxy object
        proxyObject._cocoonjs_proxy_object_data = {};
        // Like the type name, that could be useful late ;)
        proxyObject._cocoonjs_proxy_object_data.typeName = typeName;
        // Caculate the id for the object. It will be returned to the origin environment so this object can be referenced later
        var proxyObjectId = parentObject[typeName]._cocoonjs_proxy_type_data.nextId;
        // Store the created object in the structure defined in the setup of proxification with an id associated to it
        parentObject[typeName]._cocoonjs_proxy_type_data.proxyObjects[proxyObjectId] = proxyObject;
        // Also store the id inside the proxy object itself
        proxyObject._cocoonjs_proxy_object_data.id = proxyObjectId;
        // Calculate a new id for the next object.
        parentObject[typeName]._cocoonjs_proxy_type_data.nextId++;

        // Setup all the event handlers.
        for (var i = 0; i < parentObject[typeName]._cocoonjs_proxy_type_data.eventHandlerNames.length; i++) {
            (function (eventHandlerName) {
                proxyObject[eventHandlerName] = function (event) {
                    var proxyObject = this; // event.target;
                    // var eventHandlerName = CocoonJS.getKeyForValueInDictionary(proxyObject, this); // Avoid closures ;)
                    var jsCode = "CocoonJS.App.callOriginProxyObjectEventHandler(" + JSON.stringify(proxyObject._cocoonjs_proxy_object_data.typeName) + ", " + proxyObject._cocoonjs_proxy_object_data.id + ", " + JSON.stringify(eventHandlerName) + ");";
                    CocoonJS.App.forwardAsync(jsCode);
                };
            })(parentObject[typeName]._cocoonjs_proxy_type_data.eventHandlerNames[i]);
        }

        // Add the dictionary where the event listeners (callbacks) will be added.
        proxyObject._cocoonjs_proxy_object_data.eventListeners = {};

        return proxyObjectId;
    };

    /**
     * @ignore
     * NOTE: This function should never be directly called. It will be called from the origin environement whenever it is needed to work with proxy objects.
     * Calls a function of a destination object idetified by it's typeName and id.
     * @param {string} typeName The name of the type of the proxy.
     * @param {number} id The id of the proxy object.
     * @param {string} functionName The name of the function to be called.
     * @return Whatever the function call returns.
     */
    CocoonJS.App.callDestinationProxyObjectFunction = function (typeName, id, functionName) {
        var parentObject = window;
        var argumentsArray = Array.prototype.slice.call(arguments);
        argumentsArray.splice(0, 3);
        var proxyObject = parentObject[typeName]._cocoonjs_proxy_type_data.proxyObjects[id];
        var result = proxyObject[functionName].apply(proxyObject, argumentsArray);
        return result;
    };

    /**
     * @ignore
     * NOTE: This function should never be directly called. It will be called from the original environment whenever it is needed to work with proxy objects.
     * Sets a value to the corresponding attributeName of a proxy object represented by it's typeName and id.
     * @param {string} typeName The name of the type of the proxy.
     * @param {number} id The id of the proxy object.
     * @param {string} attributeName The name of the attribute to be set.
     * @param {unknown} attributeValue The value to be set to the attribute.
     */
    CocoonJS.App.setDestinationProxyObjectAttribute = function (typeName, id, attributeName, attributeValue) {
        var parentObject = window;
        var proxyObject = parentObject[typeName]._cocoonjs_proxy_type_data.proxyObjects[id];
        proxyObject[attributeName] = attributeValue;
    };

    /**
     * @ignore
     * NOTE: This function should never be directly called. It will be called from the original environment whenever it is needed to work with proxy objects.
     * Retrieves the value of the corresponding attributeName of a proxy object represented by it's typeName and id.
     * @param {string} typeName The name of the type of the proxy.
     * @param {number} id The id of the proxy object.
     * @param {string} attributeName The name of the attribute to be retrieved.
     */
    CocoonJS.App.getDestinationProxyObjectAttribute = function (typeName, id, attributeName) {
        var parentObject = window;
        var proxyObject = parentObject[typeName]._cocoonjs_proxy_type_data.proxyObjects[id];
        return proxyObject[attributeName];
    };

    /**
     * @ignore
     * NOTE: This function should never be directly called. It will be called from the original environment whenever it is needed to work with proxy objects.
     * Deletes a proxy object identifying it using it's typeName and id. Deleting a proxy object mainly means to remove the instance from the global structure
     * that hold all the instances.
     * @param {string} typeName The name of the type of the proxy.
     * @param {number} id The id of the proxy object.
     */
    CocoonJS.App.deleteDestinationProxyObject = function (typeName, id) {
        var parentObject = window;
        delete parentObject[typeName]._cocoonjs_proxy_type_data.proxyObjects[id];
    };

    /**
     * @ignore
     * NOTE: This function should never be directly called. It will be called from the original environment whenever it is needed to work with proxy objects.
     */
    CocoonJS.App.addDestinationProxyObjectEventListener = function (typeName, id, eventTypeName) {
        var parentObject = window;
        // Look for the proxy object
        var proxyObject = parentObject[typeName]._cocoonjs_proxy_type_data.proxyObjects[id];

        var callback = function (event) {
            var proxyObject = this; // event.target;
            // var eventTypeName = CocoonJS.getKeyForValueInDictionary(proxyObject._cocoonjs_proxy_object_data.eventListeners, this); // Avoid closures ;)
            // TODO: Is there a way to retrieve the callbackId without a closure?
            var jsCode = "CocoonJS.App.callOriginProxyObjectEventListeners(" + JSON.stringify(proxyObject._cocoonjs_proxy_object_data.typeName) + ", " + proxyObject._cocoonjs_proxy_object_data.id + ", " + JSON.stringify(eventTypeName) + ");";
            CocoonJS.App.forwardAsync(jsCode);
        };

        proxyObject._cocoonjs_proxy_object_data.eventListeners[eventTypeName] = callback;

        // Finally add the event listener callback to the proxy object
        proxyObject.addEventListener(eventTypeName, callback);
    };

    // TODO: We could add a removeDestinationProxyObjectEventListener although it seems that is not completely necessary.

    /**
     * Proxifies the XMLHttpRequest type for the environment where this call is made. After calling this function, all the new objects
     * of XMLHttpRequest that are instantiated, will be proxified objects that will make calls to the counterparts in the other environment (CocoonJS <-> WebView viceversa).
     * IMPORTANT NOTE: Remember to take down the proxification once you are done or to delete proxy objects whenever they are not needed anymore or memory leaks may occur.
     */
    CocoonJS.App.proxifyXHR = function () {
        var ATTRIBUTE_NAMES =
            [
                "timeout",
                "withCredentials",
                "upload",
                "status",
                "statusText",
                "responseType",
                "response",
                "responseText",
                "responseXML",
                "readyState"
            ];
        var FUNCTION_NAMES =
            [
                "open",
                "setRequestHeader",
                "send",
                "abort",
                "getResponseHeader",
                "getAllResponseHeaders",
                "overrideMimeType"
            ];
        var EVENT_HANDLER_NAMES =
            [
                "onloadstart",
                "onprogress",
                "onabort",
                "onerror",
                "onload",
                "ontimeout",
                "onloadend",
                "onreadystatechange"
            ];
        CocoonJS.App.setupOriginProxyType("XMLHttpRequest", ATTRIBUTE_NAMES, FUNCTION_NAMES, EVENT_HANDLER_NAMES);
    };

    /**
     * Proxifies the Audio type for the environment where this call is made. After calling this function, all the new objects
     * of Audio that are instantiated, will be proxified objects that will make calls to the counterparts in the other environment (CocoonJS <-> WebView viceversa).
     * IMPORTANT NOTE: Remember to take down the proxification once you are done or to delete proxy objects whenever they are not needed anymore or memory leaks may occur.
     */
    CocoonJS.App.proxifyAudio = function () {
        var ATTRIBUTE_NAMES =
            [
                "src",
                "loop",
                "volume",
                "preload"
            ];
        var FUNCTION_NAMES =
            [
                "play",
                "pause",
                "load",
                "canPlayType"
            ];
        var EVENT_HANDLER_NAMES =
            [
                "onended",
                "oncanplay",
                "oncanplaythrough",
                "onerror"
            ];
        CocoonJS.App.setupOriginProxyType("Audio", ATTRIBUTE_NAMES, FUNCTION_NAMES, EVENT_HANDLER_NAMES);
    };

    /**
     * Captures a image of the screen synchronously and saves it to a file. Sync mode allows to capture the screen in the middle of a frame rendering.
     * @function captureScreen
     * @param {string} fileName Desired file name and format (png or jpg). If no value is passed, "capture.png" value is used by default
     * @param {CocoonJS.App.StorageType} storageType The developer can specify the storage where it is stored. If no value is passed, the {@link CocoonJS.App.StorageType.TMP_STORAGE} value is used by default.
     * @param {CocoonJS.App.CaptureType} captureType Optional value to choose capture type. See {@link CocoonJS.App.CaptureType}.
     * - 0: Captures everything.
     * - 1: Only captures cocoonjs surface.
     * - 2: Only captures system views.
     * @param {boolean} saveToGallery Optional value to specify if the capture image should be stored in the device image gallery or not.
     * @throws exception if the image fails to be stored or there is another error.
     * @return The URL of the saved file.
     * @example
     * CocoonJS.App.captureScreen("myScreenshot.png");
     * @see CocoonJS.App.onCaptureScreenSucceeded
     * @see CocoonJS.App.onCaptureScreenFailed
     */
    CocoonJS.App.captureScreen = function (fileName, storageType, captureType, saveToGallery) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return window.ext.IDTK_APP.makeCall("captureScreen", fileName, storageType, captureType, saveToGallery);
        }
    };

    /**
     * Captures a image of the screen asynchronously and saves it to a file.
     * Async mode captures a final frame as soon as possible.
     * @function captureScreenAsync
     * @memberof CocoonJS.App
     * @param {string} fileName Desired file name and format (png or jpg). If no value is passed, "capture.png" value is used by default
     * @param {CocoonJS.App.StorageType} storageType The developer can specify the storage where it is stored. If no value is passed, the {@see CocoonJS.App.StorageType.TEMPORARY_STORAGE} value is used by default.
     * @param {CocoonJS.App.CaptureType} captureType Optional value to choose capture type. See {@link CocoonJS.App.CaptureType}.
     * - 0: Captures everything.
     * - 1: Only captures cocoonjs surface.
     * - 2: Only captures system views.
     * @param {boolean} saveToGallery Optional value to specify if the capture image should be stored in the device image gallery or not.
     * @param {function} callback Response callback, check the error property to monitor errors. Check the 'url' property to get the URL of the saved Image
     * @example
     * CocoonJS.App.captureScreenAsync("myScreenshot.png", CocoonJS.App.StorageType.TEMPORARY_STORAGE, false, CocoonJS.App.CaptureType.EVERYTHING, function(url, err){
     * ...
     * });
     */
    CocoonJS.App.captureScreenAsync = function (fileName, storageType, captureType, saveToGallery, callback) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            window.ext.IDTK_APP.makeCallAsync("captureScreen", fileName, storageType, captureType, saveToGallery, callback);
        }
    };

    /**
     * Returns the device UUID
     * @return {string} The device UUID
     */
    CocoonJS.App.getDeviceId = function () {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return window.ext.IDTK_APP.makeCall("getDeviceId");
        }
    };

    /**
     * Structure that defines the getDeviceInfo returned information
     */
    CocoonJS.App.DeviceInfo = {

        /**
        * The operating system name (ios, android,...)
        * @type string
        */
        os: null,

        /**
        * The operating system version (4.2.2, 5.0,...)
        * @type string
        */
        version: null,

        /**
        * The operating system screen density in dpi
        * @type string
        */
        dpi: null,

        /**
        * The device manufacturer (apple, samsung, lg,...)
        * @type string
        */
        brand: null,

        /**
        * The device model (iPhone 4S, SAMSUNG-SGH-I997, SAMSUNG-SGH-I997R, etc)
        * @type string
        */
        model: null,

        /**
        * The phone IMEI
        * Android: The phone IMEI is returned or null if the device has not telepohny
        * iOS: null is returned as we cannot get the IMEI in iOS, no public API available for that yet.
        * @type string
        */
        imei: null,

        /**
        * The platform Id
        * Android: The ANDROID_ID is used.
        * iOS: The OpenUDID is used as there is no Android ANDROID_ID equivalent in iOS
        * @type string
        */
        platformId: null,

        /**
        * The Odin generated id https://code.google.com/p/odinmobile/
        * @type string
        */
        odin: null,

        /**
        * The OpenUDID generated Id https://github.com/ylechelle/OpenUDID
        * @type string
        */
        openudid: null
    };

    /**
     * Returns the device Info
     * @return {CocoonJS.App.DeviceInfo} The device Info
     */
    CocoonJS.App.getDeviceInfo = function () {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return window.ext.IDTK_APP.makeCall("getDeviceInfo");
        }
    };

    /**
     *
     * @constructor
     */
    CocoonJS.App.WebDialog = function () {

        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            this.webDialogID = window.ext.IDTK_APP.makeCall("createWebDialog");
        }
        else {
            var iframe = document.createElement("iframe");
            iframe.id = "CocoonJSWebDialogIFrame";
            iframe.name = "CocoonJSWebDialogIFrame";
            iframe.style.cssText = "position:fixed;left:0;top:0;bottom:0;right:0; width:100%; height:100%;margin:0;padding:0;";
            var me = this;
            iframe.onload = function () {
                me.iframeloaded = true;
                var js = "CocoonJS = {}; CocoonJS.WebDialog = {}; CocoonJS.WebDialog.close = function()" +
                    "{" +
                    "   window.parent.CocoonJSCloseWebDialog();" +
                    "};";
                me.evalIframe(js);
                for (var i = 0; i < me.pendingEvals.length; ++i) {
                    me.evalIframe(me.pendingEvals[i]);
                }
                me.pendingEvals = [];
            }
            iframe.onerror = function () {
                me.close();
            }
            this.iframe = iframe;
            this.pendingEvals = [];

            window.CocoonJSCloseWebDialog = function () {
                me.close();
            }
        }

    }

    CocoonJS.App.WebDialog.prototype = {

        show: function (url, callback) {
            this.closeCallback = function () {
                CocoonJS.App.enableTouchInCocoonJS();
                if (callback)
                    callback();
            }
            if (CocoonJS.App.nativeExtensionObjectAvailable) {
                CocoonJS.App.disableTouchInCocoonJS();
                return window.ext.IDTK_APP.makeCallAsync("showWebDialog", this.webDialogID, url, this.closeCallback);
            }
            else {
                this.iframe.src = url;
                document.body.appendChild(this.iframe);
            }

        },
        close: function () {
            if (CocoonJS.App.nativeExtensionObjectAvailable) {
                return window.ext.IDTK_APP.makeCallAsync("closeWebDialog", this.webDialogID);
            }
            else {
                if (this.iframe.parentNode) {
                    this.iframe.parentNode.removeChild(this.iframe);
                }
            }
            if (this.closeCallback)
                this.closeCallback();
        },
        evalIframe: function (js) {
            window.frames["CocoonJSWebDialogIFrame"].eval(js);
        },
        eval: function (js) {
            if (CocoonJS.App.nativeExtensionObjectAvailable) {
                return window.ext.IDTK_APP.makeCallAsync("evalWebDialog", this.webDialogID, js);
            }
            else {
                if (this.iframeloaded)
                    this.evalIframe(js);
                else
                    this.pendingEvals.push(js);
            }
        }

    };


    /**
    * Retrieves the preferred orientation that has been set in the system.
    * @return {number} The preferred orientation in the system as a combination of the possible {@link CocoonJS.App.Orientations}
    */
    CocoonJS.App.getPreferredOrientation = function () {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return window.ext.IDTK_APP.makeCall("getPreferredOrientation");
        }
        else {
            return 0;
        }
    };

    /**
    * Sets the preferred orientation in the system.
    * @param {number} preferredOrientation The preferred orientation to be set. A combinatio of the possible {@link CocoonJS.App.Orientations}
    */
    CocoonJS.App.setPreferredOrientation = function (preferredOrientation) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            window.ext.IDTK_APP.makeCall("setPreferredOrientation", preferredOrientation);
        }
    }

    /**
    * Queries if a file exists in the specified path and storage type. If none or unknown storage type is specified, the TEMPORARY_STORAGE is used as default.
    * @param {string} path The relative path to look for inside the storage of the underlying system.
    * @param {CocoonJS.App.StorageType} storageType The storage type where to look for the specified path inside the system.
    */
    CocoonJS.App.existsPath = function (path, storageType) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return window.ext.IDTK_APP.makeCall("existsPath", path, storageType);
        }
        return false;
    }

    /**
     * This {@link CocoonJS.EventHandler} object allows listening to events called when the text dialog is finished by accepting it's content.
     * The callback function's documentation is represented by {@link CocoonJS.App.OnTextDialogFinishedListener}
     * @event
     * @static
     * @memberOf CocoonJS.App
     */
    CocoonJS.App.onTextDialogFinished = new CocoonJS.EventHandler("IDTK_APP", "App", "ontextdialogfinish");

    /**
     * This {@link CocoonJS.EventHandler} object allows listening to events called when the text dialog is finished by dismissing it's content.
     * The callback function does not receive any parameter.
     * @event
     * @static
     * @memberOf CocoonJS.App
     */
    CocoonJS.App.onTextDialogCancelled = new CocoonJS.EventHandler("IDTK_APP", "App", "ontextdialogcancel");

    /**
     * This {@link CocoonJS.EventHandler} object allows listening to events called when the text dialog is finished by accepting it's content.
     * The callback function does not receive any parameter.
     * @event
     * @static
     * @memberOf CocoonJS.App
     */
    CocoonJS.App.onMessageBoxConfirmed = new CocoonJS.EventHandler("IDTK_APP", "App", "onmessageboxconfirmed");

    /**
     * This {@link CocoonJS.EventHandler} object allows listening to events called when the text dialog is finished by dismissing it's content.
     * The callback function does not receive any parameter.
     * @event
     * @static
     * @memberOf CocoonJS.App
     */
    CocoonJS.App.onMessageBoxDenied = new CocoonJS.EventHandler("IDTK_APP", "App", "onmessageboxdenied");

    /**
     * This {@link CocoonJS.EventHandler} object allows listening to events called when the application is suspended.
     * The callback function does not receive any parameter.
     * @event
     * @static
     * @memberOf CocoonJS.App
     */
    CocoonJS.App.onSuspended = new CocoonJS.EventHandler("IDTK_APP", "App", "onsuspended");

    /**
     * This {@link CocoonJS.EventHandler} object allows listening to events called when the application is suspending.
     * The callback function does not receive any parameter.
     * @event
     * @static
     * @memberOf CocoonJS.App
     */
    CocoonJS.App.onSuspending = new CocoonJS.EventHandler("IDTK_APP", "App", "onsuspending");

    /**
     * This {@link CocoonJS.EventHandler} object allows listening to events called when the application is activated.
     * The callback function does not receive any parameter.
     * @event
     * @static
     * @memberOf CocoonJS.App
     */
    CocoonJS.App.onActivated = new CocoonJS.EventHandler("IDTK_APP", "App", "onactivated");

    /**
     * This {@link CocoonJS.EventHandler} object allows listening to events called when headphones are plugged-in the device.
     * The callback function does not receive any parameter.
     * @event
     * @static
     * @memberOf CocoonJS.App
     */
    CocoonJS.App.onHeadphonesPluggedIn = new CocoonJS.EventHandler("IDTK_APP", "App", "onheadphonespluggedin");

    /**
     * This {@link CocoonJS.EventHandler} object allows listening to events called when headphones are unplugged from the device.
     * The callback function does not receive any parameter.
     * @event
     * @static
     * @memberOf CocoonJS.App
     */
    CocoonJS.App.onHeadphonesUnplugged = new CocoonJS.EventHandler("IDTK_APP", "App", "onheadphonesunplugged");


    /**
     * This {@link CocoonJS.EventHandler} object allows listening to events called when the application receives a memory warning notification.
     * The callback function does not receive any parameter.
     * @event
     * @static
     * @memberOf CocoonJS.App
     */
    CocoonJS.App.onMemoryWarning = new CocoonJS.EventHandler("IDTK_APP", "App", "onmemorywarning");
})();
;(function () {
    if (typeof window.CocoonJS === 'undefined' || window.CocoonJS === null) throw ("The CocoonJS object must exist and be valid before adding more functionalities to an extension.");
    if (typeof window.CocoonJS.App === 'undefined' || window.CocoonJS.App === null) throw ("The CocoonJS.App object must exist and be valid before adding more functionalities to it.");

    /**
    * This namespace represents all the basic functionalities available in the CocoonJS extension API.
    * @namespace
    */
    CocoonJS.App = CocoonJS.App ? CocoonJS.App : {};

    /**
     * FOR DOCUMENTATION PURPOSE ONLY! The documentation of the function callback for the {@link CocoonJS.App.onLoadInTheWebViewSucceed} event calls.
     * @name OnLoadInTheWebViewSucceedListener
     * @function
     * @static
     * @memberOf CocoonJS.App
     * @param {string} pageURL The URL of the page that had been loaded in the webview.
     */
    /**
    * This {@link CocoonJS.EventHandler} object allows listening to events called when the WebView load has completed successfully.
    * The callback function's documentation is represented by {@link CocoonJS.App.OnLoadInTheWebViewSucceedListener}
    * @event
    * @static
    * @memberOf CocoonJS.App
    * @param {string} pageURL A string that represents the page URL loaded.
    */
    CocoonJS.App.onLoadInTheWebViewSucceed = new CocoonJS.EventHandler("IDTK_APP", "App", "forwardpageload");

    /**
     * FOR DOCUMENTATION PURPOSE ONLY! The documentation of the function callback for the {@link CocoonJS.App.onLoadInTheWebViewFailed} event calls.
     * @name OnLoadInTheWebViewFailedListener
     * @function
     * @static
     * @memberOf CocoonJS.App
     * @param {string} pageURL The URL of the page that had been loaded in the webview.
     */
    /**
    * This {@link CocoonJS.EventHandler} object allows listening to events called when the WebView load fails.
    * The callback function's documentation is represented by {@link CocoonJS.App.OnLoadInTheWebViewFailedListener}
    * @event
    * @static
    * @memberOf CocoonJS.App
    */
    CocoonJS.App.onLoadInTheWebViewFailed = new CocoonJS.EventHandler("IDTK_APP", "App", "forwardpagefail");

    function checkEmulatedWebViewReady() {
        var emulatedWB = CocoonJS.App.EmulatedWebView;
        if (emulatedWB) {
            return; //ready
        }

        emulatedWB = document.createElement('div');
        emulatedWB.setAttribute('id', 'CocoonJS_App_ForCocoonJS_WebViewDiv');
        emulatedWB.style.width = 0;
        emulatedWB.style.height = 0;
        emulatedWB.style.position = "absolute";
        emulatedWB.style.left = 0;
        emulatedWB.style.top = 0;
        emulatedWB.style.backgroundColor = 'transparent';
        emulatedWB.style.border = "0px solid #000";

        var frame = document.createElement("IFRAME");
        frame.setAttribute('id', 'CocoonJS_App_ForCocoonJS_WebViewIFrame');
        frame.setAttribute('name', 'CocoonJS_App_ForCocoonJS_WebViewIFrame');
        frame.style.width = 0;
        frame.style.height = 0;
        frame.frameBorder = 0;
        frame.allowtransparency = true;

        emulatedWB.appendChild(frame);
        CocoonJS.App.EmulatedWebView = emulatedWB;
        CocoonJS.App.EmulatedWebViewIFrame = frame;

        if (!document.body) {
            document.body = document.createElement("body");
        }
        document.body.appendChild(CocoonJS.App.EmulatedWebView);
    }

    /**
    * Pauses the CocoonJS JavaScript execution loop.
    * @function
    * @augments CocoonJS.App
    */
    CocoonJS.App.pause = function () {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "pause", arguments);
        }
    };

    /**
    * Resumes the CocoonJS JavaScript execution loop.
    * @static
    * @function
    */
    CocoonJS.App.resume = function () {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "resume", arguments);
        }
    };

    /**
    * Loads a resource in the WebView environment from the CocoonJS environment.
    * @function
    * @param {string} path The path to the resource. It can be a remote URL or a path to a local file.
    * @param {CocoonJS.App.StorageType} [storageType] An optional parameter to specify at which storage in the device the file path is stored. By default, APP_STORAGE is used.
    * @see CocoonJS.App.load
    * @see CocoonJS.App.onLoadInTheWebViewSucceed
    * @see CocoonJS.App.onLoadInTheWebViewFailed
    */
    CocoonJS.App.loadInTheWebView = function (path, storageType) {
        if (navigator.isCocoonJS && CocoonJS.App.nativeExtensionObjectAvailable) {
            CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "loadInTheWebView", arguments)
        }
        else {
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function (event) {
                if (xhr.readyState === 4) {
                    if ((xhr.status >= 200 && xhr.status <= 299) || xhr.status === 0) {

                        checkEmulatedWebViewReady();
                        var callback = function (event) {
                            CocoonJS.App.onLoadInTheWebViewSucceed.notifyEventListeners(path);
                            CocoonJS.App.EmulatedWebViewIFrame.removeEventListener("load", callback);
                        };

                        CocoonJS.App.EmulatedWebViewIFrame.addEventListener(
                            "load",
                            callback
                        );
                        CocoonJS.App.EmulatedWebViewIFrame.contentWindow.location.href = path;
                    }
                    else {
                        this.onreadystatechange = null;
                        CocoonJS.App.onLoadInTheWebViewFailed.notifyEventListeners(path);
                    }
                }
            };
            xhr.open("GET", path, true);
            xhr.send();
        }
    };

    /**
     * Reloads the last loaded path in the WebView context.
     * @function
     */
    CocoonJS.App.reloadWebView = function () {
        if (CocoonJS.App.nativeExtensionObjectAvailable && navigator.isCocoonJS) {
            CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "reloadWebView", arguments);
        }
        else {
            checkEmulatedWebViewReady();
            CocoonJS.App.EmulatedWebViewIFrame.contentWindow.location.reload();
        }
    };

    /**
    * Shows the webview.
    * @function
    * @param {int} x The top lef x coordinate of the rectangle where the webview will be shown.
    * @param {int} y The top lef y coordinate of the rectangle where the webview will be shown.
    * @param {width} y The width of the rectangle where the webview will be shown.
    * @param {height} y The height of the rectangle where the webview will be shown.
    */
    CocoonJS.App.showTheWebView = function (x, y, width, height) {
        if (CocoonJS.App.nativeExtensionObjectAvailable && navigator.isCocoonJS) {
            CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "showTheWebView", arguments)
        }
        else {
            checkEmulatedWebViewReady();
            CocoonJS.App.EmulatedWebViewIFrame.style.width = (width ? width / window.devicePixelRatio : window.innerWidth) + 'px';
            CocoonJS.App.EmulatedWebViewIFrame.style.height = (height ? height / window.devicePixelRatio : window.innerHeight) + 'px';
            CocoonJS.App.EmulatedWebView.style.left = (x ? x : 0) + 'px';
            CocoonJS.App.EmulatedWebView.style.top = (y ? y : 0) + 'px';
            CocoonJS.App.EmulatedWebView.style.width = (width ? width / window.devicePixelRatio : window.innerWidth) + 'px';
            CocoonJS.App.EmulatedWebView.style.height = (height ? height / window.devicePixelRatio : window.innerHeight) + 'px';
            CocoonJS.App.EmulatedWebView.style.display = "block";

            console.log(CocoonJS.App.EmulatedWebViewIFrame.style.cssText);
        }
    };

    /**
    * Hides the webview.
    * @function
    */
    CocoonJS.App.hideTheWebView = function () {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            var javaScriptCodeToForward = "ext.IDTK_APP.makeCall('hide');";
            return CocoonJS.App.forwardAsync(javaScriptCodeToForward);
        }
        else if (!navigator.isCocoonJS) {
            checkEmulatedWebViewReady();
            CocoonJS.App.EmulatedWebView.style.display = "none";
        }
    };

    /**
    * Marks a audio file to be used as music by the system. CocoonJS, internally, differentiates among music files and sound files.
    * Music files are usually bigger in size and longer in duration that sound files. There can only be just one music file 
    * playing at a specific given time. The developer can mark as many files as he/she wants to be treated as music. When the corresponding
    * HTML5 audio object is used, the system will automatically know how to treat the audio resource as music or as sound.
    * Note that it is not mandatory to use this function. The system automatically tries to identify if a file is suitable to be treated as music
    * or as sound by checking file size and duration thresholds. It is recommended, though, that the developer specifies him/herself what he/she considers
    * to be music.
    * @function
    * @param {string} audioFilePath The same audio file path that will be used to create HTML5 audio objects.
    */
    CocoonJS.App.markAsMusic = function (audioFilePath) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "addForceMusic", arguments);
        }
    };

    /**
    * Activates or deactivates the antialas functionality from the CocoonJS rendering.
    * @function
    * @param {boolean} enable A flag that indicates if the antialas should be activated (true) or deactivated (false).
    */
    CocoonJS.App.setAntialias = function (enable) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "setDefaultAntialias", arguments);
        }
    };

    /**
    * Sets a callback function that will be called whenever the system tries to finish the app.
    * The developer can specify how the system will react to the finish of the app by returning a
    * boolean value in the callback function: true means, close the app, false means that the developer
    * will handle the app close.
    * A common example of this is the back button in Android devices. When the back button is pressed, this
    * callback will be called and the system will react depending on the developers choice finishing, or not,
    * the application.
    * @function
    * @param {function} appShouldFinishCallback A function object that will be called when the system
    * determines that the app should be finished. This function must return a true or a false value
    * depending on what the developer wants: true === finish the app, false === do not close the app.
    */
    CocoonJS.App.setAppShouldFinishCallback = function (appShouldFinishCallback) {
        if (navigator.isCocoonJS) {
            window.onidtkappfinish = appShouldFinishCallback;
        }
    }

    /**
    * Sets the texture reduction options. The texture reduction is a process that allows big images to be reduced/scaled down when they are loaded.
    * Although the quality of the images may decrease, it can be very useful in low end devices or those with limited amount of memory.
    * The function sets the threshold on image size (width or height) that will be used in order to know if an image should be reduced or not.
    * It also allows to specify a list of strings to identify in which images file paths should be applied (when they meet the size threshold requirement) 
    * The developer will still think that the image is of the original size. CocoonJS handles all of the internals to be able to show the image correctly.
    * IMPORTANT NOTE: This function should be called when the application is initialized before any image is set to be loaded for obvious reasons ;).
    * and in which sould be forbid (even if they meet the threshold requirement).
    * @function
    * @param {number} sizeThreshold This parameter specifies the minimun size (either width or height) that an image should have in order to be reduced.
    * @param {string or array} [applyTo] This parameter can either be a string or an array of strings. It's purpose is to specify one (the string) or more (the array) substring(s) 
    * that will be compared against the file path of an image to be loaded in order to know if the reduction should be applied or not. If the image meets the
    * threshold size requirement and it's file path contains this string (or strings), it will be reduced. This parameter can also be null.
    * @param {string or array} [forbidFor] This parameter can either be a string or an array of strings. It's purpose is to specify one (the string) or more (the array) substring(s) 
    * that will be compared against the file path of an image to be loaded in order to know if the reduction should be applied or not. If the image meets the
    * threshold size requirement and it's file path contains this string (or strings), it won't be reduced. This parameter should be used in order to mantain the 
    * quality of some images even they meet the size threshold requirement.
    */
    CocoonJS.App.setTextureReduction = function (sizeThreshold, applyTo, forbidFor) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "setDefaultTextureReducerThreshold", arguments);
        }
    };


    /**
    * Prints to the console the memory usage of the currently alive textures
    * @function
    */
    CocoonJS.App.logMemoryInfo = function () {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "logMemoryInfo", arguments);
        }
    };

    /**
    * Enable CocoonJS Webview FPS overlay.
    * @function
    */
    CocoonJS.App.enableFPSInTheWebView = function (fpsLayout, textColor) {
        if (!CocoonJS.App.fpsInTheWebViewEnabled) {
            fpsLayout = fpsLayout ? fpsLayout : CocoonJS.App.FPSLayout.TOP_RIGHT;
            textColor = textColor ? textColor : "white";
            var jsCode = "" +
                "(function()" +
                "{" +
                "var COCOONJS_WEBVIEW_EXTENSION_SCRIPT_FILES = ['js/CocoonJSExtensions/CocoonJS.js', 'js/CocoonJSExtensions/CocoonJS_App.js', 'js/CocoonJSExtensions/CocoonJS_App_ForWebView.js'];" +
                "var loadedScriptCounter = 0;" +
                "var loadedScriptFunction = function() " +
                "{ " +
                "loadedScriptCounter++;" +
                "if (loadedScriptCounter >= COCOONJS_WEBVIEW_EXTENSION_SCRIPT_FILES.length)" +
                "{" +
                "CocoonJS.App.enableFPS(" + JSON.stringify(fpsLayout) + ", " + JSON.stringify(textColor) + ");" +
                "}" +
                "};" +
                "for (var i = 0; i < COCOONJS_WEBVIEW_EXTENSION_SCRIPT_FILES.length; i++)" +
                "{" +
                "var s = document.createElement('script');" +
                "s.onload = loadedScriptFunction;" +
                "s.src = COCOONJS_WEBVIEW_EXTENSION_SCRIPT_FILES[i];" +
                "document.body.appendChild(s);" +
                "}" +
                "})();";
            setTimeout(function () {
                CocoonJS.App.forward(jsCode);
            }, 3000);
            CocoonJS.App.fpsInTheWebViewEnabled = true;
        }
    };

    /**
    * Disable CocoonJS Webview FPS overlay.
    * @function
    */
    CocoonJS.App.disableFPSInTheWebView = function () {
        // TODO: Implement this function.
    };

    /**
     * Setups the internal text texture cache size.
     * The CocoonJS Canvas+ environment is very inefficient when it comes to drawing texts.
     * In order to improve the performance, a text texture cache is used internally. Once a text is drawn
     * a texture is stored that matches that text and that text configuration. If the same text is called to 
     * be drawn, this cached texture would be used. 
     * This function allows to set the size of the cache. A value of 0 would mean that no cache
     * will be used. 
     * @param size The size of the text cache.
     */
    CocoonJS.App.setTextCacheSize = function (size) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "setTextCacheSize", arguments);
        }
    }

    CocoonJS.App.forwardedEventFromTheWebView = function (eventName, eventDataString) {
        var eventData = JSON.parse(eventDataString);
        eventData.target = window;
        var event = new Event(eventName);
        for (var att in eventData) {
            event[att] = eventData[att];
        }
        event.target = window;
        window.dispatchEvent(event);
        var canvases = document.getElementsByTagName("canvas");
        for (var i = 0; i < canvases.length; i++) {
            event.target = canvases[i];
            canvases[i].dispatchEvent(event);
        }
    }

    /**
    * Activates or deactivates the webgl functionality in Canvas+.
    * @function setWebGLEnabled
    * @param {boolean} enabled A boolean value to enable (true) or disable (false) webgl in Canvas+.
    * @example
    * Cocoon.App.setWebGLEnabled(true);
    */
    CocoonJS.App.setWebGLEnabled = function (value) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "setWebGLEnabled", arguments, false);
        }
    }

    /**
    * Checks if WebGL is enabled in Canvas+
    * @function isWebGLEnabled
    * @example
    * var enabled = Cocoon.App.isWebGLEnabled();
    */
    CocoonJS.App.isWebGLEnabled = function () {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "isWebGLEnabled", arguments, false);
        }
    }

})();
;(function(){
    if (typeof window.CocoonJS === 'undefined' || window.CocoonJS === null) throw("The CocoonJS object must exist and be valid before adding more functionalities to an extension.");
    if (typeof window.CocoonJS.App === 'undefined' || window.CocoonJS.App === null) throw("The CocoonJS.App object must exist and be valid before adding more functionalities to it.");
    if (navigator.isCocoonJS) return;

    /**
    * This namespace represents all the basic functionalities available in the CocoonJS extension API.
    * @namespace
    */
    CocoonJS.App = CocoonJS.App ? CocoonJS.App : {};

    CocoonJS.App.nativeExtensionObjectAvailable = CocoonJS.App.nativeExtensionObjectAvailable;

    /**
    * Shows a transparent WebView on top of the CocoonJS hardware accelerated environment rendering context.
    * @function
    * @param {number} [x] The horizontal position where to show the WebView.
    * @param {number} [y] The vertical position where to show the WebView.
    * @param {number} [width] The horitonzal size of the WebView.
    * @param {number} [height] the vertical size of the WebView.
    */
    CocoonJS.App.show = function(x, y, width, height)
    {
        if (CocoonJS.App.nativeExtensionObjectAvailable)
        {
           return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "show", arguments);
        }
        else
        {
            var div = window.parent.document.getElementById('CocoonJS_App_ForCocoonJS_WebViewDiv');
            div.style.left = (x ? x : div.style.left)+'px';
            div.style.top = (y ? y : div.style.top)+'px';
            div.style.width = (width ? width/window.devicePixelRatio : window.parent.innerWidth)+'px';
            div.style.height = (height ? height/window.devicePixelRatio : window.parent.innerHeight)+'px';
            div.style.display = "block";
            var iframe = window.parent.document.getElementById('CocoonJS_App_ForCocoonJS_WebViewIFrame');
            iframe.style.width = (width ? width/window.devicePixelRatio : window.parent.innerWidth)+'px';
            iframe.style.height = (height ? height/window.devicePixelRatio : window.parent.innerHeight)+'px';
        }
    };

    /**
    * Hides the transparent WebView on top of the CocoonJS hardware acceleration environment rendering contect.
    * @function
    */
    CocoonJS.App.hide = function()
    {
        if (CocoonJS.App.nativeExtensionObjectAvailable)
        {
           return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "hide", arguments);
        }
        else
        {
            window.parent.document.getElementById('CocoonJS_App_ForCocoonJS_WebViewDiv').style.display = "none";
        }
    };

    /**
    * Loads a resource in the CocoonJS environment from the CocoonJS environment. 
    * @function
    * @param {string} path The path to the resource. It can be a remote URL or a path to a local file.
    * @param {CocoonJS.App.StorageType} [storageType] An optional parameter to specify at which storage in the device the file path is stored. By default, APP_STORAGE is used.
    * @see CocoonJS.App.load
    */
    CocoonJS.App.loadInCocoonJS = function(path, storageType)
    {
        if (CocoonJS.App.nativeExtensionObjectAvailable)
        {
            var javaScriptCodeToForward = "ext.IDTK_APP.makeCall('loadPath'";
            if (typeof path !== 'undefined')
            {
                javaScriptCodeToForward += ", '" + path + "'";
                if (typeof storageType !== 'undefined')
                {
                    javaScriptCodeToForward += ", '" + storageType + "'";
                }
            }
            javaScriptCodeToForward += ");";

            return CocoonJS.App.forwardAsync(javaScriptCodeToForward);
        }
        else
        {
            CocoonJS.App.forwardAsync("CocoonJS.App.load('" + path + "');");
        }
    };

    /**
     * Reloads the last loaded path in the CocoonJS context.
     * @function
     */
    CocoonJS.App.reloadCocoonJS = function()
    {
        if (CocoonJS.App.nativeExtensionObjectAvailable)
        {
            return CocoonJS.App.forwardAsync("ext.IDTK_APP.makeCall('reload');");
        }
        else if (!navigator.isCocoonJS)
        {
            window.parent.location.reload();
        }
    };

    /**
    * This function allows to forward console messages from the WebView to the CocoonJS
    * debug console. What it does is to change the console object for a new one
    * with all it's methods (log, error, info, debug and warn) forwarding their
    * messages to the CocoonJS environment.
    * The original console object is stored in the CocoonJS.App.originalConsole property.
    * @function
    */
    CocoonJS.App.proxifyConsole = function() 
    {
        if (!CocoonJS.nativeExtensionObjectAvailable) return;

        if (typeof CocoonJS.App.originalConsole === 'undefined')
        {
            CocoonJS.App.originalConsole = window.console;
        }
        var functions = ["log", "error", "info", "debug", "warn"];

        var newConsole = {};
        for (var i = 0; i < functions.length; i++)
        {
            newConsole[functions[i]] = function(functionName)
            {
                return function(message)
                {
                    var jsCode = "console." + functionName + "(" + JSON.stringify(message) + ");";
                    CocoonJS.App.originalConsole.log(jsCode);
                    ext.IDTK_APP.makeCallAsync("forward", jsCode);
                };
            }(functions[i]);
        }
        if (!newConsole.assert) {
            newConsole.assert = function assert() {
                if (arguments.length > 0 && !arguments[0]) {
                    var str = 'Assertion failed: ' + (arguments.length > 1 ? arguments[1] : '');
                    newConsole.error(str);
                }
            }
        }        
        window.console = newConsole;
    };

    /**
    * This function restores the original console object and removes the proxified console object.
    * @function
    */
    CocoonJS.App.deproxifyConsole = function()
    {
        if (window.navigator.isCocoonJS || !CocoonJS.nativeExtensionObjectAvailable) return;
        if (typeof CocoonJS.App.originalConsole !== 'undefined')
        {
            window.console = CocoonJS.App.originalConsole;
            CocoonJS.App.originalConsole = undefined;
        }
    };

    /**
    * Everytime the page is loaded, proxify the console.
    * @ignore
    */
    window.addEventListener("load", function()
    {
        CocoonJS.App.proxifyConsole();

        // Only if we are completely outside CocoonJS (or CocoonJS' webview),
        // setup event forwarding from the webview (iframe) to CocoonJS.
        if (!CocoonJS.App.nativeExtensionObjectAvailable && window.name == 'CocoonJS_App_ForCocoonJS_WebViewIFrame') {
            CocoonJS.App.forwardEventsToCocoonJSEnabled = false;
            var EVENT_ATTRIBUTES = [ 'timeStamp', 'button', 'type', 'x', 'y', 'pageX', 'pageY', 'clientX', 'clientY', 'offsetX', 'offsetY'];
            var EVENTS = [ "dblclick", "touchmove", "mousemove", "touchend", "touchcancel", "mouseup", "touchstart", "mousedown", "release", "dragleft", "dragright", "swipeleft", "swiperight" ];
            function forwardEventToCocoonJS(eventName, event) {
                var eventData = {};
                var att, i;
                for (var att in event) {
                    i = EVENT_ATTRIBUTES.indexOf(att);
                    if (i >= 0) {
                        eventData[att] = event[att];
                    }
                }
                var jsCode = "CocoonJS && CocoonJS.App && CocoonJS.App.forwardedEventFromTheWebView && CocoonJS.App.forwardedEventFromTheWebView(" + JSON.stringify(eventName) + ", '" + JSON.stringify(eventData) + "');";
                CocoonJS.App.forward(jsCode);
            }
            for (i = 0; i < EVENTS.length; i++) {
                window.addEventListener(EVENTS[i], (function(eventName) {
                    return function(event) {
                        if (CocoonJS.App.forwardEventsToCocoonJSEnabled) {
                            forwardEventToCocoonJS(eventName, event);
                        }
                    };
                })(EVENTS[i]));
            }
        }

    });

    /**
     * FOR DOCUMENTATION PURPOSE ONLY! The documentation of the function callback for the {@link CocoonJS.App.onLoadInCocoonJSSucceed} event calls.
     * @name OnLoadInCocoonJSSucceedListener
     * @function
     * @static
     * @memberOf CocoonJS.App
     * @param {string} pageURL The URL of the page that had been loaded in CocoonJS.
     */
    /**
    * This {@link CocoonJS.EventHandler} object allows listening to events called when the CocoonJS load has completed successfully.
    * The callback function's documentation is represented by {@link CocoonJS.App.OnLoadInCocoonJSSucceedListener}
    * @event
    * @static
    * @memberOf CocoonJS.App
    * @param {string} pageURL A string that represents the page URL loaded.
    */
    CocoonJS.App.onLoadInCocoonJSSucceed = new CocoonJS.EventHandler("IDTK_APP", "App", "forwardpageload");

    /**
     * FOR DOCUMENTATION PURPOSE ONLY! The documentation of the function callback for the {@link CocoonJS.App.onLoadInCocoonJSFailed} event calls.
     * @name OnLoadInCocoonJSFailedListener
     * @function
     * @static
     * @memberOf CocoonJS.App
     * @param {string} pageURL The URL of the page that had been loaded in CocoonJS.
     */
    /**
    * This {@link CocoonJS.EventHandler} object allows listening to events called when the CocoonJS load fails.
    * The callback function's documentation is represented by {@link CocoonJS.App.OnLoadInCocoonJSFailedListener}
    * @event
    * @static
    * @memberOf CocoonJS.App
    */
    CocoonJS.App.onLoadInCocoonJSFailed = new CocoonJS.EventHandler("IDTK_APP", "App", "forwardpagefail");

})();;(function()
{
    // The CocoonJS must exist before creating the extension.
    if (typeof window.CocoonJS === 'undefined' || window.CocoonJS === null) throw("The CocoonJS object must exist and be valid before creating any extension object.");

    /**
    * This namespace represents the CocoonJS camera extension API.
    * @namespace
    */
    CocoonJS.Camera = {};

    CocoonJS.Camera.nativeExtensionObjectAvailable = CocoonJS.nativeExtensionObjectAvailable && typeof window.ext.IDTK_SRV_CAMERA !== 'undefined';

    /**
    * The predefined possible camera types.
    * @namespace 
    */
	CocoonJS.Camera.CameraType = {
		/**
		* Represents the front camera on the device.
		*/
	    FRONT : "FRONT",

	    /**
	    * Represents the back camera on the device.
	    */
	    BACK : "BACK"
	};

    /**
    * The predefined possible camera video capturing image format types.
    * @namespace 
    */
	CocoonJS.Camera.CaptureFormatType = {
		/**
		*/
	    JPEG : "JPEG",

		/**
		*/
	    RGB_565 : "RGB_565",

		/**
		*/
	    NV21 : "NV21", 

		/**
		*/
	    NV16 : "NV16",

		/**
		*/
	    YUY2 : "YUY2",

		/**
		*/
	    YV12 : "YV12",

		/**
		*/
	    BGRA32 : "32BGRA"
	};

	/**
	* The data structure that represents the information of a camera. It includes all the information to be able to setup a camera to capture video or to take pictures.
	* @namespace
	*/
	CocoonJS.Camera.CameraInfo =  {
		/**
		* The index of the camera.
		*/
		cameraIndex : 0,

		/**
		* The type of the camera among the possible values in {@link CocoonJS.Camera.CameraType}.
		*/
		cameraType : CocoonJS.Camera.CameraType.BACK,

		/**
		* An array of {@link CocoonJS.Size} values that represent the supported video sizes for the camera.
		*/
		supportedVideoSizes : [],

		/**
		* An array of numbers that represent the supported video frame rates for the camera.
		*/
		supportedVideoFrameRates : [],

		/**
		* An array of {@link CocoonJS.Camera.CaptureFormatType} values that represent the supported video format types for the camera.
		*/
		supportedVideoCaptureImageFormats : []
	};

	/**
	* Returns the number of available camera in the platform/device.
	* @returns {number} The number of cameras available in the platform/device.
	*/
	CocoonJS.Camera.getNumberOfCameras = function()
	{
		if (CocoonJS.Camera.nativeExtensionObjectAvailable)
		{
			return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_SRV_CAMERA", "getNumberOfCameras", arguments);
		}
	};

	/**
	* Returns an array of {@link CocoonJS.Camera.CameraInfo} objects representing all the information of all the cameras available in the platform/device.
	* @returns {Array} An array of {@link CocoonJS.Camera.CameraInfo} objects.
	*/
	CocoonJS.Camera.getAllCamerasInfo = function()
	{
		if (CocoonJS.Camera.nativeExtensionObjectAvailable)
		{
			return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_SRV_CAMERA", "getAllCamerasInfo", arguments);
		}
	};

	/**
	* Returns the {@link CocoonJS.Camera.CameraInfo} object that represents all the information of the specified camera index in the platform/device.
	* @param {number} cameraIndex The index of the camera to get the info from. The index should be inside 0 and N (N being the value returned by {@link CocoonJS.Camera.getNumberOfCameras}).
	* @returns {CocoonJS.Camera.CameraInfo} The {@link CocoonJS.Camera.CameraInfo} of the given camera index.
	*/
	CocoonJS.Camera.getCameraInfoByIndex = function(cameraIndex)
	{
		if (CocoonJS.Camera.nativeExtensionObjectAvailable)
		{
			return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_SRV_CAMERA", "getCameraInfoByIndex", arguments);
		}
	};

	/**
	* Returns the {@link CocoonJS.Camera.CameraInfo} object that represents all the information of the first camera of the specified type found in the platform/device.
	* @param {CocoonJS.Camera.CameraType} cameraType The type of the camera to get the info from. 
	* @returns {CocoonJS.Camera.CameraInfo} The {@link CocoonJS.Camera.CameraInfo} of the first camera of the given camera type that has been found in the platform/device.
	*/
	CocoonJS.Camera.getCameraInfoByType = function(cameraType)
	{
		if (CocoonJS.Camera.nativeExtensionObjectAvailable)
		{
			return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_SRV_CAMERA", "getCameraInfoByType", arguments);
		}
	};

	/**
	* Starts a camera to capture video. The developer must specify at least the index of the camera to be used. Some other setup parameters can also be passed to control the video capture. A image object
	* that will be automatically updated with the captured frames is returned so the developer just need to draw the image in every frame. A null image object is returned if the setup did not work or there is
	* no available camera.
	* @param {number} cameraIndex The index of the camera to start video capture with.
	* @param captureWidth The hozirontal size of the video capture resolution. If the value does not correspond to any of the sizes supported by the camera, the closest one is used. See {@link CocoonJS.Camera.CameraInfo}.
	* If no value is given, the maximum size available is used.
	* @param captureHeight The vertical size of the video capture resolution. If value does not correspond to any of the sizes supported by the camera, the closest one is used. See {@link CocoonJS.Camera.CameraInfo}.
	* If no value is given, the maximum size available is used.
	* @param captureFrameRate The frame rate to capture the video at. If the value does not correspond to any of the frame rates supported by the camera, the closest one is used. See {@link CocoonJS.Camera.CameraInfo}.
	* If no value is given, the maximum frame rate available is used.
	* @param captureImageFormat A value from the available {@link CocoonJS.Camera.CaptureFormatType} formats to specify the format of the images that will be captured. See {@link CocoonJS.Camera.CameraInfo}.
	* If no value is given, the first available capture image format is used.
	* @returns {image} A image object that will automatically update itself with the captured frames or null if the camera capture could not start.
	*/
	CocoonJS.Camera.startCapturing = function(cameraIndex, captureWidth, captureHeight, captureFrameRate, captureImageFormat)
	{
		if (CocoonJS.Camera.nativeExtensionObjectAvailable)
		{
			return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_SRV_CAMERA", "startCapturing", arguments);
		}
	};

	/**
	* Stops a camera that is already started capturing video.
	* @param cameraIndex The index of the camera to stop capturing video.
	*/
	CocoonJS.Camera.stopCapturing = function(cameraIndex)
	{
		if (CocoonJS.Camera.nativeExtensionObjectAvailable)
		{
			return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_SRV_CAMERA", "stopCapturing", arguments);
		}
	};

	/**
	* Indicates if a camera is capturing video or not.
	* @param cameraIndex The index of the camera to check if is capturing video or not.
	* @returns {boolean} A flag indicating if the given camera (by index) is capturing video (true) or not (false).
	*/
	CocoonJS.Camera.isCapturing = function(cameraIndex)
	{
		if (CocoonJS.Camera.nativeExtensionObjectAvailable)
		{
			return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_SRV_CAMERA", "isCapturing", arguments);
		}
	};

})();;(function () {
    // The CocoonJS must exist before creating the extension.
    if (typeof window.CocoonJS === 'undefined' || window.CocoonJS === null) throw("The CocoonJS object must exist and be valid before creating any extension object.");

    /**
     * This namespace represents the functionalities related to OUYA android gaming control.
     * @namespace
     */
    CocoonJS.Gamepad = {};

    CocoonJS.Gamepad.nativeExtensionObjectAvailable = CocoonJS.nativeExtensionObjectAvailable && typeof window.ext.Gamepad !== 'undefined';

    /**
    * This enumeration simplifies the access to the indices for button and axis elements according to the HTML5 gamepad standard API specification.
    * You may use these values to access the buttons and axes arrays inside the Gamepad objects, according to the W3C gamepad API specification.
    * For example: 
    * gamepad.button[CocoonJS.Gamepad.BUTTON_LEFT_TRIGGER]; 
    * gamepad.axes[CocoonJS.Gamepad.AXIS_LEFT_JOYSTICK_X]; 
    * @namespace
    */
    CocoonJS.Gamepad.Indices = {
        /**
        * Represents the button 0 (the A on the XBOX controller, the O on the OUYA controller)
        */
        BUTTON_0                : 0, 
        /**
        * Represents the button 1 (the B on the XBOX controller, the A on the OUYA controller)
        */
        BUTTON_1                : 1,
        /**
        * Represents the button 2 (the X on the XBOX controller, the U on the OUYA controller)
        */
        BUTTON_2                : 2,
        /**
        * Represents the button 3 (the Y on the XBOX controller, the Y on the OUYA controller)
        */
        BUTTON_3                : 3,
        /**
        * Represents the left bumper button.
        */
        BUTTON_LEFT_BUMPER      : 4,
        /**
        * Represents the right bumper button.
        */
        BUTTON_RIGHT_BUMPER     : 5,
        
        /**
        * Represents the left trigger button.
        */
        BUTTON_LEFT_TRIGGER     : 6,
        /**
        * Represents the right trigger button.
        */
        BUTTON_RIGHT_TRIGGER    : 7,
        
        /**
        * Represents the left joystick button.
        */
        BUTTON_LEFT_JOYSTICK    : 10,
        /**
        * Represents the right joystick button.
        */
        BUTTON_RIGHT_JOYSTICK   : 11,
        /**
        * Represents the dpad up button.
        */
        BUTTON_DPAD_UP          : 12,
        /**
        * Represents the dpad down button.
        */
        BUTTON_DPAD_DOWN        : 13,
        /**
        * Represents the dpad left button.
        */
        BUTTON_DPAD_LEFT        : 14,
        /**
        * Represents the dpad right button.
        */
        BUTTON_DPAD_RIGHT       : 15,
        /**
        * Represents the menu button.
        */
        BUTTON_MENU             : 16,
        
        /**
        * Represents the left joystick horizontal axis.
        */
        AXIS_LEFT_JOYSTICK_X     : 0,
        /**
        * Represents the left joystick vertical axis.
        */
        AXIS_LEFT_JOYSTICK_Y     : 1,
        /**
        * Represents the right joystick horizontal axis.
        */
        AXIS_RIGHT_JOYSTICK_X    : 2,
        /**
        * Represents the right joystick vertical axis.
        */
        AXIS_RIGHT_JOYSTICK_Y    : 3
    };

    // If the extension is present and the navigator does not provide the gamepad API:
    // 1.- Add the getGamepads function to the navigator object.
    // 2.- Replace the window add and remove event listener functions to call to the extension for the gamepad related events.
    var systemSupportsGamepads = navigator["getGamepads"] || navigator["webkitGetGamepads"];
    if (systemSupportsGamepads) 
    {
        if (!navigator.getGamepads)
        {
            console.log("navigator.getGamepads does not exist.");
            if (navigator.webkitGetGamepads)
            {
                console.log("navigator.webkitGamepads exists, adding navigator.getGamepads to point to it.");
                navigator.getGamepads = navigator.webkitGetGamepads;
            }
            else
            {
                console.log("navigator.webkitGetGamepads does not exist either.");
            }
        }
    }
})();



