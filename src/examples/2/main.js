var ngHelper = ngHelper = ngHelper || {};

ngHelper.boot =
	function ( module )
	{
		(function ( app )
		{

			document.addEventListener(
				"DOMContentLoaded",
				function ()
				{
					ng
						.platformBrowserDynamic
						.platformBrowserDynamic()
						.bootstrapModule( app[ module + "Module" ] );
				} );

		})( window.app || (window.app = {}) );

	};


ngHelper.boot( "App" );
