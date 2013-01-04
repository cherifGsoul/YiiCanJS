define(
	[
	'can/control/route',
	'app/controllers/posts/List',
	'app/controllers/posts/Details'],
	function(route,List,PostDetails){
		var Posts=can.Control({
			'init':function(element,options){
				
			},

			':control/:id route': function(data){
				new PostDetails('#content',data);
			},


			'route': function(route){
				can.route.attr({control:'posts'});
			},
			':control route':function(){
				console.log(can.route.attr('control'));
				new List('#content');
			}


		});
		return Posts;
});