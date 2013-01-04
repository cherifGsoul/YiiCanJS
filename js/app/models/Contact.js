define(['can','app/models/User'],
	function(can,User)
	{
	can.Model("Contact",{
		attributes : { 
   		 	user: "User.model"
 		 },
		findAll	: "GET /yiicanjs/api/contacts",
		findOne : "GET /yiicanjs/api/contacts/{id}",
  		create  : "POST /yiicanjs/api/contacts",
		update  : "PUT 	/yiicanjs/api/contacts/{id}",
		destroy : "DELETE /yiicanjs/api/contacts/{id}",
	},{
		fullName:can.compute(function(){
			return this.attr('first_name')+ " " + this.attr('last_name');
		}),		
	});

	return Contact;
});