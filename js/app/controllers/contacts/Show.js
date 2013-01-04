define(['app/models/Contact','require'],function(Contact,require){
	var Show=can.Control({
			init:function(element,options){
				var self=this;

				can.view(require.toUrl('app/views/contacts/show.ejs'),
					{contact:Contact.findOne({id:this.options.id})
				}).then(function(frag){
					self.element.html(frag);
				}).fail(function(){
					alert('Failed');
				});
			}
	});
	return Show;
});