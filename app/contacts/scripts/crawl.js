// load('contacts/scripts/crawl.js')

load('steal/rhino/rhino.js')

steal('steal/html/crawl', function(){
  steal.html.crawl("contacts/contacts.html","contacts/out")
});
