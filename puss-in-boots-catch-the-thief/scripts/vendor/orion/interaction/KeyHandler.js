/**
 * Created by rufian on 12/10/14.
 */
define(['keypress'],
function(KeyPress)
{
	var KeyHandler = function()
	{
		this.reset();
		this.init();
	};

	KeyHandler.BIND_ALL = 'all';
	KeyHandler.BIND_LR = 'BindLR';
	KeyHandler.BIND_UD = 'BindUD';
	KeyHandler.NAME = 'KeyHandler';
	KeyHandler.prototype.listener = null;
	KeyHandler.prototype.keyboardListeners = null;
	KeyHandler.prototype.leftPressed = false;
	KeyHandler.prototype.rightPressed = false;
	KeyHandler.prototype.upPressed = false;
	KeyHandler.prototype.downPressed = false;

	KeyHandler.prototype.init = function()
	{
		this.listener = new KeyPress.Listener();
		this.keyboardListeners = [];
		this.bindControls(KeyHandler.BIND_ALL);
	};

	KeyHandler.prototype.reset = function()
	{
		this.listener = null;
		this.keyboardListeners = null;
		this.leftPressed = false;
		this.rightPressed = false;
		this.upPressed = false;
		this.downPressed = false;
	};

	KeyHandler.prototype.destroy = function()
	{
		this.listener.unregister_combo('a');
		this.listener.unregister_combo('d');
		this.listener.unregister_combo('w');
		this.listener.unregister_combo('s');
		this.listener.unregister_combo('space');
		this.listener.reset();

		this.listener = null;
		this.keyboardListeners = null;
		this.leftPressed = null;
		this.rightPressed = null;
		this.upPressed = null;
		this.downPressed = null;
	};

	KeyHandler.prototype.bindControls = function(bindType)
	{
		switch (bindType)
		{
			case KeyHandler.BIND_ALL:
				this.bindLeft();
				this.bindRight();
				this.bindUp();
				this.bindDown();
				break;
			case KeyHandler.BIND_LR:
				this.bindLeft();
				this.bindRight();
				break;
			case KeyHandler.BIND_UD:
				this.bindUp();
				this.bindDown();
				break;
		}
	};

	KeyHandler.prototype.bindLeft = function()
	{
		this.listener.register_combo({keys: 'a', on_keydown: this.leftDown, on_keyup: this.leftUp, this: this});
	};

	KeyHandler.prototype.bindRight = function()
	{
		this.listener.register_combo({keys: 'd', on_keydown: this.rightDown, on_keyup: this.rightUp, this: this});
	};

	KeyHandler.prototype.bindUp = function()
	{
		this.listener.register_combo({keys: 'w', on_keydown: this.upDown, on_keyup: this.upUp, this: this});
		this.listener.register_combo({keys: 'space', on_keydown: this.upDown, on_keyup: this.upUp, this: this});
	};

	KeyHandler.prototype.bindDown = function()
	{
		this.listener.register_combo({keys: 's', on_keydown: this.downDown, on_keyup: this.downUp, this: this});
	};

	KeyHandler.prototype.leftDown = function()
	{
		if (this.leftPressed == false)
		{
			this.leftPressed = true;
			this.onKeyDown();

			if (this.rightPressed)
			{
				this.rightPressed = false;
			}
		}
	};

	KeyHandler.prototype.leftUp = function()
	{
		this.leftPressed = false;
	};

	KeyHandler.prototype.rightDown = function()
	{
		if (this.rightPressed == false)
		{
			this.rightPressed = true;
			this.onKeyDown();

			if (this.leftPressed)
			{
				this.leftPressed = false;
			}
		}
	};

	KeyHandler.prototype.rightUp = function()
	{
		this.rightPressed = false;
	};

	KeyHandler.prototype.upDown = function()
	{
		if (this.upPressed == false)
		{
			this.upPressed = true;
			this.onKeyDown();

			if (this.downPressed)
			{
				this.downPressed = false;
			}
		}
	};

	KeyHandler.prototype.upUp = function()
	{
		if (this.upPressed == true)
		{
			this.upPressed = false;

			var i = this.keyboardListeners.length;
			while (--i > -1)
			{
				this.keyboardListeners[i].handleUpRelease();
			}
		}
	};

	KeyHandler.prototype.downDown = function()
	{
		if (this.downPressed == false)
		{
			this.downPressed = true;
			this.onKeyDown();

			if (this.upPressed)
			{
				this.upPressed = false;
			}
		}
	};

	KeyHandler.prototype.downUp = function()
	{
		this.downPressed = false;
	};

	KeyHandler.prototype.addKeyboardListener = function(value)
	{
		this.keyboardListeners.push(value);
	};

	KeyHandler.prototype.onKeyDown = function()
	{
		var l;
		var i = this.keyboardListeners.length;

		if (this.leftPressed)
		{
			while (--i > -1)
			{
				this.keyboardListeners[i].handleLeft();
			}
		}
		else if (this.rightPressed)
		{
			while (--i > -1)
			{
				this.keyboardListeners[i].handleRight();
			}
		}

		if (this.upPressed)
		{
			while (--i > -1)
			{
				this.keyboardListeners[i].handleUp();
			}
		}
		else if (this.downPressed)
		{
			while (--i > -1)
			{
				this.keyboardListeners[i].handleDown();
			}
		}
	};

	return KeyHandler;
});