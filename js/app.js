require.config({
	paths : {
		jquery : 'libs/jquery-1.8.3'
	}
});

require(['can','can/route','app/controllers/posts/Posts'],
	function (can,route,Posts) {
		route.ready(false);
		route(':control');		
		route(':control/:id');
		
		route("",{control:'posts'});

		
		new Posts("#content");

		route.ready(true);
});