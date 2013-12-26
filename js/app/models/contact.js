define(['can'], function(can) {
	return can.Model.extend({
		findAll: 'GET /api/contacts',
		findOne: 'GET /api/contacts/{id}',
		create: 'POST /api/contacts',
		update: 'PUT /api/contacts/{id}',
		destroy: 'DELETE /api/contacts/{id}'

	},{});
});