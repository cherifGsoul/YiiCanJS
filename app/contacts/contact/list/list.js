steal('can','./init.mustache','contacts/ui/pager','contacts/models/contact.js',
function (can, initMustache,Pager, Contact) {
	/**
	 * @constructor contacts/contact/list
	 * @alias ContactList
	 * @parent contacts
	 * @inherits can.Control
	 * Lists contacts and lets you destroy them.
	 */
	return can.Control(
	/** @Static */
	{
		/**
		 * adding default options
		 */
		defaults : {
			Contact: Contact
		}
	},
	/** @Prototype */
	{
		/**
		 * Create a contact list, render it, and make a request for finding all contacts.
		 */
		init: function () {
			this.list = new Contact.List();
			this.element.html(initMustache(this.list,{who:'cherif'}));
			this.list.replace(Contact.findAll({limit:10}));

			Mustache.registerHelper('greetings',function(str){
				return 'hello' + str;
			})
		},
		/**
		 * Click handler for destroy link.
		 */
		'.destroy click': function (el) {
			if (confirm("Are you sure you want to destroy?")) {
				el.closest('.contact').data('contact').destroy();
			}
		},
		/**
		 * Handler for contact creation.  Pushes to the list of instances.
		 */
		"{Contact} created": function (Model, ev, instance) {
			this.list.push(instance);
		}
	});
});