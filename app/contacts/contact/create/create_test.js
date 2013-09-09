steal('funcunit', 
	'./create.js',
	'contacts/models/contact.js',
	'contacts/models/fixtures', 
	function (S, ContactCreate, Contact, contactStore ) {

	module("contacts/contact/create", {
		setup: function(){
			$("#qunit-test-area").append("<form id='create'></form>");
			new ContactCreate("#create");
		},
		teardown: function(){
			$("#qunit-test-area").empty();
			contactStore.reset();
		}
	});
	
	test("create contacts", function () {
		stop();
		
		Contact.bind("created",function(ev, contact){
			ok(true, "Ice Water added");
			equals(contact.name, "Ice Water", "name set correctly");
			equals(contact.description, 
				"Pour water in a glass. Add ice cubes.", 
				"description set correctly");
			start();
			Contact.unbind("created",arguments.callee);
		})
		
		S("[name=name]").type("Ice Water");
		S("[name=description]").type("Pour water in a glass. Add ice cubes.");
		
		S("[type=submit]").click();
		
		S("[type=submit]").val("Creating...","button text changed while created");
		S("[type=submit]").val("Create", function(){
			ok(true, "button text changed back after create");
			equals(S("[name=name]").val(), "", "form reset");
			equals(S("[name=description]").val(), "", "form reset");
		});
	});

});