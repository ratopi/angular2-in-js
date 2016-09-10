(function ( app )
{
	app.AppComponent =
		ng
			.core
			.Component(
			{
				selector: "app",
				templateUrl: "app/app.html"
			}
		)
			.Class(
			{
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
			}
		);

})( window.app || (window.app = {}) );
