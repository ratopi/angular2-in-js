(function ()
{

	var HelloApp =
		ng.core
			.Component( {
				selector: "hello-app3",
				templateUrl: "hello-app3/hello-app3.html"
			} )
			.Class( {
				constructor: function ()
				{
					this.counter = 0;

					this.increment =
						function ()
						{
							this.counter++;
						};

					this.decrement =
						function ()
						{
							this.counter--;
						};
				}
			} );

	document.addEventListener( "DOMContentLoaded", function ()
	{
		ng.platformBrowserDynamic.bootstrap( HelloApp );
	} );

})();
