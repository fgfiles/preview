ig.module(
	'lib.impact.storage'
)
.defines(function()
{
	ig.Storage = ig.Class.extend(
	{
		hasLocalStorage : true,

		prefix : '',
		expires : 365, // for cookies

		init : function()
		{
			this.hasLocalStorage = !(typeof window.localStorage === 'undefined')
		},

		set : function(name, value, days)
		{
			if ( this.hasLocalStorage )
			{
				try 
				{
					window.localStorage.setItem(name, JSON.stringify(value));
				} 
				catch(e)  
				{
					if ( e == QUOTA_EXCEEDED_ERR )
						console && console.log('localStorage quota exceeded');
				}
			}
			else
			{
				if ( !days )
					days = this.expires;

				var date = new Date()
				date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

				var expires = "; expires=" + date.toGMTString();

				document.cookie = this.prefix + name + '=' + value + expires + '; path=/';
			}
		},

		get : function(name)
		{
			if ( this.hasLocalStorage )
			{
				try 
				{
					return JSON.parse(localStorage.getItem(name));
				} 
				catch(e)  
				{
					return window.localStorage.getItem(name);
				}
			}
			else
			{
				var eq = this.prefix + name + '=', 
					ca = document.cookie.split(';'), 
					i = 0, 
					c;

				for ( ; c = ca[i++]; )
				{
					while ( c.charAt(0) == ' ' )
						c = c.substring(1, c.length);

					if ( c.indexOf(eq) == 0 )
						return c.substring(eq.length, c.length);
				}
			}
		},

		remove : function(name)
		{ 
			if ( this.hasLocalStorage )
				window.localStorage.removeItem(name)
			else
				this.set(name, '', -1) 
		},

		clear : function()
		{
			if ( this.hasLocalStorage )
				window.localStorage.clear();
		}
	});

	ig.storage = new ig.Storage;
})