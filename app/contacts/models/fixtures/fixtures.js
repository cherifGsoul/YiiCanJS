// map fixtures for this application
steal("can/util/fixture", function(fixture) {

	var store = fixture.store(5, function(i){
		return {
			name: "contact "+i,
			description: "contact " + i
		}
	});
	
	fixture({
		'GET /contacts' : store.findAll,
		'GET /contacts/{id}' : store.findOne,
		'POST /contacts' : store.create,
		'PUT /contacts/{id}' : store.update,
		'DELETE /contacts/{id}' : store.destroy
	});

	return store;
});