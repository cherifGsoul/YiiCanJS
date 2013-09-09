//js contacts/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs", function(DocumentJS){
	DocumentJS('contacts/index.html', {
		out: 'contacts/docs',
		markdown : ['contacts', 'steal', 'jquerypp', 'can', 'funcunit'],
		parent : 'contacts'
	});
});