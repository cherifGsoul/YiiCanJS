define(['can','app/ui/components/list/list','app/models/contact'],function(can,List,Contact){
	var models=Contact.findAll();
	var frag=can.view('js/app/ui/components/list/list.mustache');

	$('#contacts').html(frag);
});