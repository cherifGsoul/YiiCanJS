steal(
	'funcunit',
	'./list.js',
	'contacts/models/contact.js',
	'contacts/models/fixtures',
	function(S, ContactList, Contact, contactStore ){

	module("contacts/contact/list", { 
		setup: function(){
			$("#qunit-test-area").append("<div id='contacts'></div>");
			this.list = new ContactList("#contacts");
		},
		teardown: function(){
			$("#qunit-test-area").empty();
			contactStore.reset();
		}
	});
	
	test("lists all contacts", function(){
		stop();
		
		// retrieve contacts
		Contact.findAll({}, function(contacts){
			// make sure they are listed in the page
			
			S(".contact").size(contacts.length,function(){
				ok(true, "All contacts listed");
				
				start();
			})
		})
	});
	
	test("lists created contacts", function(){
		
		new Contact({
			name: "Grilled Cheese",
			description: "grill cheese in bread"
		}).save();
		
		S('h3:contains(Grilled Cheese X)').exists("Lists created contact");
	})
	
	
	test("delete contacts", function(){
		new Contact({
			name: "Ice Water",
			description: "mix ice and water"
		}).save();
		
		// wait until grilled cheese has been added
		S('h3:contains(Ice Water X)').exists();
		
		S.confirm(true);
		S('h3:last a').click();
		
		
		S('h3:contains(Ice Water)').missing("Grilled Cheese Removed");
		
	});


});