define(['app/models/Post','require'],function(Post,require,PostDetails){
	can.Control('app.controllers.posts.List',{
		'init':function(route,ev){
			var self=this;
			can.view(require.toUrl('app/views/posts/list.ejs'),{posts:Post.findAll({})})
			.then(function(frag){
				self.element.html(frag);
			});
		},

		'li.post click':function(el){
			var post=el.data('post');
			can.route.attr({'id':post.id});
		}

		
	});
	return app.controllers.posts.List;
});