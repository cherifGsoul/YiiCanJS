steal( "./contact.js", 
	   "funcunit/qunit", 
	   "contacts/models/fixtures", 
	   function( Contact ){
	   	
	module("contacts/contact");
	
	test("findAll", function(){
		expect(4);
		stop();
		Contact.findAll({}, function(contacts){
			ok(contacts, "findAll provides an object")
	        ok(contacts.length, "findAll provides something array-like")
	        ok(contacts[0].name, "findAll provides an object with a name")
	        ok(contacts[0].description, "findAll provides an object with a description")
			start();
		});
	});
	
	test("create", function(){
		expect(3)
		stop();
		new Contact({name: "dry cleaning", description: "take to street corner"}).save(function(contact) {
			ok(contact, "save provides an object");
			ok(contact.id, "save provides and object with an id");
			equals(contact.name,"dry cleaning", "save provides an objec with a name")
			contact.destroy()
			start();
		});
	});

	test("update" , function(){
		expect(2);
		stop();
		new Contact({name: "cook dinner", description: "chicken"}).save(function(contact) {
			equals(contact.description,"chicken", "save creates with description");
			contact.attr({description: "steak"}).save(function(contact){
				equals(contact.description,"steak", "save udpates with description");
				contact.destroy();
				start();
			});
        });
	});

	test("destroy", function(){
		expect(1);
		stop();
		new Contact({name: "mow grass", description: "use riding mower"}).destroy(function(contact) {
			ok( true ,"Destroy called" )
			start();
		});
	});
});