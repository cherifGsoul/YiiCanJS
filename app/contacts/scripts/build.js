//js contacts/scripts/build.js

load("steal/rhino/rhino.js");
steal('steal/build',function(){
	steal.build('contacts/scripts/build.html',{to: 'contacts'});
});
