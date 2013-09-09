steal(
	'funcunit',
	'./models/contact_test.js',
	'contacts/contact/create/create_test.js',
	'contacts/contact/list/list_test.js',
	function (S) {

	// this tests the assembly 
	module("contacts", {
		setup : function () {
			S.open("//contacts/index.html");
		}
	});

	test("welcome test", function () {
		equals(S("h1").text(), "Welcome to JavaScriptMVC!", "welcome text");
	});

	
	test("creating a contacts adds it to the list ", function () {
		
		S("[name=name]").type("Ice Water");
		S("[name=description]").type("Pour water in a glass. Add ice cubes.");
		
		S("[type=submit]").click();
		
		S("h3:contains(Ice Water)").exists();
		S("p:contains(Pour water in a glass. Add ice cubes.)").exists()
	});
});
