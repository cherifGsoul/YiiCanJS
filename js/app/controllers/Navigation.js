define(['can/observe/delegate','app/controllers/contacts/Contacts','app/controllers/users/Users'],function(Observe,Contacts,Users){
	var Navigation=can.Control({
		/*"{can.route} module add":function(){
		},*/

		'li click':function(el){
			console.log(el);
		},

		 "{can.route} module" : function(route, ev, newVal,oldVal){
		 		switch(newVal){
		 			case 'contacts':
		 				new Contacts('#content');
		 				break;
		 			case 'users':
		 				new Users('#content');
		 				break;
		 			default:
		 				new Contacts('#content');

		 		}
     		$("#"+oldVal).removeClass("active");
       		$("#"+newVal).addClass("active");
    	}
	});
	
	return Navigation;
})