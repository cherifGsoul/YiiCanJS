define(['can','can/control/route','app/controllers/contacts/Contacts','app/controllers/contacts/Show'],
		function(can,route,Contacts,Show){
	var Routing=can.Control({

		init:function(element,options){

		},

		':id route':function(id){
			new Show('#content',id);
		},

		'route':function(){
			new Contacts('#content');
		}

	});
	return Routing;
});