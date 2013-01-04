define(['can','app/models/User'],
	function(can,User)
	{
	can.Model("Post",{
		attributes : { 
   		 	user: "User.model",
 		 },
		findAll	: "GET api/posts",
		findOne : "GET api/posts/{id}",
  		create  : "POST api/posts",
		update  : "PUT 	api/posts/{id}",
		destroy : "DELETE api/posts/{id}",
	},{});

	return Post;
});