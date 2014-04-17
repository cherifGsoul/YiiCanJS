define(['can/util/string',
        'text!src/js/contact/list/grid/init.mustache',
        'can/control',
        'can/construct/proxy',
        'can/view/mustache'
    ],
    function(can, contactsStache) {

        return can.Control.extend({
            defaults: {}
        }, {
            init: function() {
                this.update();
            },
            "{items} change": "update",
            update: function() {
                var items = this.options.items();
                if (can.isDeferred(items)) {
                    this.element.find('tbody').css('opacity', 0.5)
                    items.then(this.proxy('draw'));
                } else {
                    this.draw(items);
                }
            },
            draw: function(items) {
                this.element.find('tbody').css('opacity', 1);
                var data = $.extend({}, this.options, {
                    items: items
                }),
                    tpl = can.view.mustache(contactsStache);

                this.element.html(tpl(data));
            }

        });
    });