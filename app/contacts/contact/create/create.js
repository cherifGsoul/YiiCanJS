steal('can', 'contacts/models/contact.js', './init.ejs', 'jquery/dom/form_params',
	function (can, Contact, initEJS) {

	/**
	 * @constructor contacts/contact/create
	 * @alias ContactCreate
	 * @parent contacts
	 * @inherits can.Control
	 * Creates contacts
	 */
	return can.Control(
	/** @Prototype */
	{
		/**
		 *  Render the initial template
		 */
		init: function () {
			this.element.html(initEJS());
		},
		/**
		 *  Submit handler. Create a new contact from the form.
		 */
		submit: function (el, ev) {
			ev.preventDefault();
			el.find('[type=submit]').val('Creating...')
			new Contact(el.formParams()).save(function() {
				el.find('[type=submit]').val('Create');
				el[0].reset()
			});
		}
	});
});