define(['can/util/string', 'src/js/models/contact', 'can/control'], function(can, Contact) {
    return can.Control.extend({
        defaults: {
            views: {}
        }
    }, {
        init: function(el, options) {
            var contacts = Contact.findAll({});
            el.html('Homepage content');
        }
    });
});