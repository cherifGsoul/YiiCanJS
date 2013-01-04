define(['app/models/Contact','app/controllers/contacts/Show','require'],function(Contact,Show,require){
	var Contacts=can.Control({
		'init':function(element,options){
			var self=this;
			can.view(require.toUrl('app/views/contacts/list.ejs'),{contacts:Contact.findAll({})})
			.then(function(frag){
				self.element.html(frag);
			}).fail(function(){
				alert('Failed');
			});
			if(can.route.attr()==""){
				this.list();
			}
		},

		'li.contact click': function(el,ev){
			var contact=el.data('contact');
			can.route.attr({id:contact.id});
		}
	});
	return Contacts;
});