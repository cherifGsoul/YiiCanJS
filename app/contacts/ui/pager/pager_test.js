steal('contacts/ui/pager','funcunit', function( Pager, S ) {

	module("contacts/ui/pager", { 
		setup: function(){
			S.open( window );
			$("#qunit-test-area").html("<div id='pager'></div>")
		},
		teardown: function(){
			$("#qunit-test-area").empty();
		}
	});
	
	test("updates the element's html", function(){
		new Pager('#pager');
		ok( $('#pager').html() , "updated html" );
	});

});