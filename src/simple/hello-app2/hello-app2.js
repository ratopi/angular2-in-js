(function ()
{

	var HelloApp =
		ng.core
			.Component( {
				selector: "hello-app2",
				templateUrl: "hello-app2/hello-app2.html"
			} )
			.Class( {
				constructor: function ()
				{
				}
			} );

	document.addEventListener( "DOMContentLoaded", function ()
	{
		ng.platformBrowserDynamic.bootstrap( HelloApp );
	} );

})();
