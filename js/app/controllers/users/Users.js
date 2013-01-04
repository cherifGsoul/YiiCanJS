define(['app/models/User','require'],function(User,require){
	var Users=can.Control({
		'init':function(element,options){
			var self=this;
			can.view(require.toUrl('app/views/users/list.ejs'),{users:User.findAll({})})
			.then(function(frag){
				self.element.html(frag);
			}).fail(function(){
				alert('Failed');
			});
		}

	});
	return Users;
});