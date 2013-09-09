steal('can', function (can) {
	/**
	 * @constructor contacts/models/contact
	 * @alias Contact
	 * @parent contacts
	 * @inherits can.Model
	 *
	 * Wraps backend contact services.
	 */
	return can.Model(
	/* @static */
	{
		/**
 		 * Find all contacts
		 */
		findAll : "GET api/contacts",
		/**
 		 * Find one contact
		 */
		findOne : "GET api/contacts/{id}",
		/**
 		 * Create a contact
		 */
		create : "POST api/contacts",
		/**
		 * Update a contact
		 */
		update : "PUT api/contacts/{id}",
		/**
		 * Destroy a contact
		 */
		destroy : "DELETE api/contacts/{id}"
	},
	/* @Prototype */
	{});
});