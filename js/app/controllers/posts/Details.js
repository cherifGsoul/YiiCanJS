define(['app/models/Post','require'],function(Post,require){
	can.Control('PostDetails',{
			'init':function(element,options){
				var self=this;
				can.view(require.toUrl('app/views/posts/details.ejs'),
					{post:Post.findOne({id:options.id})
				}).then(function(frag){
					self.element.html(frag);
				});

			},

			'{can.route} {control}': function(route,ev,newVal,oldVal) {
				console.log(route);
			}
	});
	return PostDetails;
});