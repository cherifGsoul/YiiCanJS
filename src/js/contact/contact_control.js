define(['can/util/string',
        'src/js/contact/list/list',
        'can/control'
    ],
    function(can, List) {
        return can.Control.extend('Contacts', {
            defaults: {
                views: {
                    index: List
                }
            }
        }, {
            init: function(el, opts) {
                console.log(can.route.attr('view'));
                this.startControl(can.route.attr('view'));
            },
            '{can.route} view': function(route, ev, newVal, oldVal) {
                this.startControl(newVal);
            },
            startControl: function(view) {

                var view = this.options.views[view];

                var el = $('<div/>').addClass('span12');
                if (can.isFunction(view)) {
                    this.element.html(el), new view(this.element.find('div'));
                }
            }
        });
    });