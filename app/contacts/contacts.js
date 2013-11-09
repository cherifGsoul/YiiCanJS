steal(
	'contacts/contact/list',
	'contacts/ui/pager',
	'./contacts.less',
	//'./models/fixtures/fixtures.js',
function(ContactList,Pager){
	var pageCount=new can.Observe({
					count:can.compute(10)
			});
	
	new ContactList('#contacts');
	new Pager('#pager',{pages:pageCount});
})