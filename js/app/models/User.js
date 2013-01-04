define(['can','can/observe/attributes'],
	function(can,attributes)
	{
	can.Model("User",{
		attributes : { 
		    contacts: "Contact.models"
		},
		findAll	: "GET /yiicanjs/api/users",
		findOne : "GET /yiicanjs/api/users/{id}",
  		create  : "POST /yiicanjs/api/users",
		update  : "PUT 	/yiicanjs/api/users/{id}",
		destroy : "DELETE /yiicanjs/api/users/{id}"

	},{});

	return User;
});