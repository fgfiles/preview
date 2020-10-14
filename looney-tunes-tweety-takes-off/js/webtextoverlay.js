/* 	
 *	WebTextOverlay (AKA webfontoverlay 2.0)
 *  An improvement of the webfontoverlay class
 *	
 *	Juan Karlo Licudine of Indigo Entertainment  	
 */
 
var WebTextOverlay = function () {
	
	var _webTextList;
	var _overlayTargetDiv;
	var _embedParentDiv;
	var _designSizeWidth;
	var _defaultValueToOverride;
	
	// ============================================= SETUP ============================================= //
	function setupWebTextClass()
	{
		WebText.initializeClass(_overlayTargetDiv, _designSizeWidth);
	}
	
	function setupWebTextList()
	{
		_webTextList = [];
	}
	
	function setupOnResizeListener()
	{
		window.addEventListener('resize', onWindowResize, false);
	}
	
	function initializeStyleOfOverlayTarget()
	{
		_overlayTargetDiv.style.position = "absolute";
        _overlayTargetDiv.style.pointerEvents = "none";
        _overlayTargetDiv.style.overflow = "hidden";
		_overlayTargetDiv.style.fontSize = _defaultValueToOverride + "px";
		_overlayTargetDiv.style.lineHeight = _defaultValueToOverride + "px";
		
		calculateAndApplyPosition();
        calculateAndApplyScale();
	}
	
	// ============================================= WINDOW RELATED ============================================= //
	function calculateAndApplyScale() {
        _overlayTargetDiv.style.width = _embedParentDiv.style.width;
        _overlayTargetDiv.style.height = _embedParentDiv.style.height;
    }

    function calculateAndApplyPosition() {
        _overlayTargetDiv.style.left = _embedParentDiv.style.left;
        _overlayTargetDiv.style.top = _embedParentDiv.style.top; 
    }
	
	// ============================================= EVENTS ============================================= //
	function onWindowResize()
	{
		calculateAndApplyPosition();
        calculateAndApplyScale();
		
		updateWebTextsScaleAndPosition();
	}
	
	// ============================================= HELPERS ============================================= //
	function updateWebTextsScaleAndPosition()
	{
		for(var index = 0; index < _webTextList.length ; index++) {
			var currentWebText = _webTextList[index];
			WebText.updateFontSize(currentWebText);
			WebText.updateXPos(currentWebText);
			WebText.updateYPos(currentWebText);
			WebText.updateWrapWidth(currentWebText);
			WebText.updateLineHeight(currentWebText);
		}
	}
	   
    return {	
		// ============================================= WEBTEXT LIST ============================================= //
		addToWebTextList : function(webTextToAdd) {
			_webTextList.push(webTextToAdd);
		},
		removeFromWebTextList : function(webTextToRemove) {
			for(var index = 0; index < _webTextList.length ; index++) {
				var currentWebText = _webTextList[index];
				if ( currentWebText == webTextToRemove )
					_webTextList.splice(index, 1);
			}
		},
		
		// ============================================= SETUP ============================================= //
		initialize: function (overlayTargetName, embedParentDivName, designSizeWidth, defaultValueToOverride) {
			return;
			
			_embedParentDiv = document.getElementById(embedParentDivName);
            _overlayTargetDiv = document.getElementById(overlayTargetName);
			_designSizeWidth = designSizeWidth;
			_defaultValueToOverride = defaultValueToOverride;

			setupWebTextClass();
			setupWebTextList();			
            initializeStyleOfOverlayTarget();
			setupOnResizeListener();
		}
    };
}();

var WebText = function () {
	var _overlayTargetDiv;
	var _designSizeWidth;
	
	// ============================================= SETUP ============================================= //
	function initializeWebTextElement(currentWebTextElement, uniqueIdentifier)
	{	
		currentWebTextElement.id = uniqueIdentifier;
		currentWebTextElement.style.margin = "0";
		currentWebTextElement.style.position = "absolute";
		currentWebTextElement.style.textAlign = "left";
		currentWebTextElement.style.pointerEvents = "none";
		currentWebTextElement.style.width = "auto";
		currentWebTextElement.style.height = "auto";		
		currentWebTextElement.style.whiteSpace = "nowrap";
		
		currentWebTextElement.setAttribute("unselectable", "on");
		currentWebTextElement.innerHTML = "Default";
		currentWebTextElement.canWrapText = false;
		currentWebTextElement.wrapWidth = null;
		currentWebTextElement.lineHeight = null;	
		
		currentWebTextElement.style.webkitTransformOrigin = "0 0";
		currentWebTextElement.style.mozTransformOrigin = "0 0";
		currentWebTextElement.style.msTransformOrigin = "0 0";
		currentWebTextElement.style.oTransformOrigin = "0 0";
		currentWebTextElement.style.transformOrigin = "0 0";
		
		currentWebTextElement.scaleX = 1;
		currentWebTextElement.scaleY = 1;
		currentWebTextElement.anchorX = 0;
		currentWebTextElement.anchorY = 0;
		currentWebTextElement.rotation = 0;
		
		return currentWebTextElement;
	}
	
    return {
		// ============================================= SETUP ============================================= //
		create : function(uniqueIdentifier) {
			_webTextElement = document.createElement("p");
			_webTextElement = initializeWebTextElement(_webTextElement, uniqueIdentifier);
			return _webTextElement;
		},
		initializeClass : function(overlayTargetDiv, designSizeWidth) {
			_overlayTargetDiv = overlayTargetDiv;
			_designSizeWidth = designSizeWidth;
		},
		
		// ============================================= MAIN ============================================= //
		onAdded : function(currentWebText) {
			_overlayTargetDiv.appendChild(currentWebText);
			WebTextOverlay.addToWebTextList(currentWebText);
		},
		
		onRemoved : function(currentWebText) {
			WebTextOverlay.removeFromWebTextList(currentWebText);
		},
		
		dispose : function(currentWebText) {
			currentWebText.parentNode.removeChild(currentWebText);
		},
		
		// ============================================= MANIPULATORS ============================================= //
		setFontSize : function(currentWebText, newFontSize) {
			currentWebText.fontSize = newFontSize;		
			WebText.updateFontSize(currentWebText);
		},
		setLineHeight : function(currentWebText, newLineHeight) {
			currentWebText.lineHeight = newLineHeight;	
			WebText.updateLineHeight(currentWebText);
		},
		setX : function(currentWebText, newXPos) {				
			currentWebText.xPos = newXPos;
			WebText.updateXPos(currentWebText);			
		},
		setY : function(currentWebText, newYPos) {				
			currentWebText.yPos = newYPos;	
			WebText.updateYPos(currentWebText);
		},
		setScaleX : function(currentWebText, newScaleX) {
			currentWebText.scaleX = newScaleX;	
			WebText.updateTransform(currentWebText);
		},
		setScaleY : function(currentWebText, newScaleY) {
			currentWebText.scaleY = newScaleY;	
			WebText.updateTransform(currentWebText);
		},
		setAnchorX : function(currentWebText, newAnchorX) {
			currentWebText.anchorX = newAnchorX;
			WebText.updateAnchor(currentWebText);
			WebText.updateXPos(currentWebText);	
		},
		setAnchorY : function(currentWebText, newAnchorY) {
			currentWebText.anchorY = newAnchorY;
			WebText.updateAnchor(currentWebText);
			WebText.updateYPos(currentWebText);	
		},		
		setText : function(currentWebText, stringToDisplay) {
			currentWebText.innerHTML = stringToDisplay;
		},
		setFontStyle : function(currentWebText, newFontStyle) {
			currentWebText.style.fontFamily = newFontStyle;
		},
		setWrapWidth : function(currentWebText, newWrapWidth) {			
			currentWebText.wrapWidth = newWrapWidth;
			WebText.updateWrapWidth(currentWebText);
			WebText.updateCanWrapText(currentWebText);
		},
		setCanWrapText : function(currentWebText, newWrapText) {			
			currentWebText.canWrapText = newWrapText;
			WebText.updateCanWrapText(currentWebText);
		},
		setVisible : function(currentWebText, visibleValue) {			
			var value = visibleValue ? "visible" : "hidden";
            currentWebText.style.visibility = value;
		},
		setAlign : function(currentWebText, newAlignValue) {
			currentWebText.style.textAlign = newAlignValue;
		},	
		setAlpha : function(currentWebText, newAlphaValue) {
			currentWebText.style.opacity = newAlphaValue;
            currentWebText.style.filter = 'alpha(opacity=' + (newAlphaValue * 100) + ')';
		},	
		setRotation : function(currentWebText, newRotationValue) {
			currentWebText.rotation = newRotationValue;
			WebText.updateTransform(currentWebText);
		},
		setColor : function(currentWebText, colorValue) {
			currentWebText.style.color = "#" + colorValue;
		},
		setZIndex : function(currentWebText, indexValue) {
			currentWebText.style.zIndex = indexValue;
		},
		removeWrapWidth : function(currentWebText) {
			currentWebText.style.width = "auto";
			WebText.setCanWrapText(currentWebText, false);
		},
		
		// ============================================= EVENTS ============================================= //
		updateFontSize: function (currentWebText) {
			var ratio = _designSizeWidth / parseFloat(_overlayTargetDiv.style.width);
			currentWebText.style.fontSize = (currentWebText.fontSize / ratio) + "px";
        },
		updateLineHeight : function ( currentWebText ) {
			var ratio = _designSizeWidth / parseFloat(_overlayTargetDiv.style.width);
			var lineHeightValue = currentWebText.lineHeight;
			
            var lineHeightToUse;
            if (lineHeightValue == null)
                lineHeightToUse = "normal";
            else
                lineHeightToUse = (lineHeightValue / ratio) + "px";
			
            currentWebText.style.lineHeight = lineHeightToUse;
		},
		updateXPos : function (currentWebText) {
			var ratio = _designSizeWidth / parseFloat(_overlayTargetDiv.style.width)			
			var textWidth = currentWebText.clientWidth;
			currentWebText.style.left = Math.floor((currentWebText.xPos / ratio) - (textWidth * currentWebText.anchorX)) + "px";
		},
		updateYPos : function (currentWebText) {
			var ratio = _designSizeWidth / parseFloat(_overlayTargetDiv.style.width)			
			var textHeight = currentWebText.clientHeight;
			currentWebText.style.top = Math.floor((currentWebText.yPos / ratio) - (textHeight * currentWebText.anchorY)) + "px";
		},
		updateAnchor : function (currentWebText) {
			var anchorX = currentWebText.anchorX * 100;
			var anchorY = currentWebText.anchorY * 100;
			var anchorString = anchorX + "% " + anchorY + "%";
			
			currentWebText.style.webkitTransformOrigin = anchorString;
			currentWebText.style.mozTransformOrigin = anchorString;
			currentWebText.style.msTransformOrigin = anchorString;
			currentWebText.style.oTransformOrigin = anchorString;
			currentWebText.style.transformOrigin = anchorString;
		},
		updateTransform : function (currentWebText) {
			var scaleX = currentWebText.scaleX;
			var scaleY = currentWebText.scaleY;			
			var scaleString = 'scale(' + scaleX + ',' + scaleY + ')';
			
			var rotationValue = currentWebText.rotation;
			var rotationString = 'rotate(' + rotationValue + 'deg)';
			
			currentWebText.style.webkitTransform = scaleString + " " + rotationString;
			currentWebText.style.mozTransform = scaleString + " " + rotationString;
            currentWebText.style.msTransform = scaleString + " " + rotationString;
            currentWebText.style.oTransform = scaleString + " " + rotationString;
            currentWebText.style.transform = scaleString + " " + rotationString;
		},
		updateWrapWidth : function (currentWebText) {
            if (currentWebText.wrapWidth == null)
                return;
				
			var ratio = _designSizeWidth / parseFloat(_overlayTargetDiv.style.width);
            var widthToUse = (currentWebText.wrapWidth / ratio) + "px";
			
			currentWebText.style.width = widthToUse;
		},
		updateCanWrapText : function(currentWebText) {
			if ( currentWebText.canWrapText == false || currentWebText.wrapWidth == null  )
				currentWebText.style.whiteSpace = "nowrap";
			else
				currentWebText.style.whiteSpace = "normal";
		},
		
		// ============================================= HELPERS ============================================= //
		getComputedStyle: function (currentWebText, cssPropertyName) {
			var hasTemporarilyAdded;
			if ( currentWebText.parentNode == null ) {
				_overlayTargetDiv.appendChild(currentWebText);
				hasTemporarilyAdded = true;
			}
			
			var computed = window.getComputedStyle(currentWebText, null).getPropertyValue(cssPropertyName);
			
			if ( hasTemporarilyAdded )
				currentWebText.parentNode.removeChild(currentWebText);
			
			return parseFloat(computed);
		},
    };
}();