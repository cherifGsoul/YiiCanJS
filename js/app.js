define(['can','app/ui/components/list/list','app/models/contact'],function(can,ListUI,Contact){
	Contact.List=can.Model.List.extend({
		Map:Contact
	},{});
	
	$('#contacts').html(
		can.view('js/app/ui/components/list/list.mustache', {items:new Contact.List({})})
		);
});