define(['can'], function(can) {
	return can.Model.extend({
		findAll: 'GET /api/contact',
		findOne: 'GET /api/contact/{id}',
		create: 'POST /api/contact',
		update: 'PUT /api/contact/{id}',
		destroy: 'DELETE /api/contact/{id}'

	},{});
});