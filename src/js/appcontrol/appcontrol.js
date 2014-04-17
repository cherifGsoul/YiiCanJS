define(['can/util/string',
    'src/js/home/home',
    'src/js/contact/contact_control',
    'can/control'
], function(can, Home, Contact) {
    return can.Control.extend({
        defaults: {
            controls: {
                home: Home,
                contact: Contact
            }
        }
    }, {
        init: function(el, opts) {
            this.startControl(can.route.attr('control'));
        },
        '{can.route} control': function(route, ev, newVal, oldVal) {
            this.startControl(newVal);
        },
        startControl: function(control) {
            var control = this.options.controls[control];

            var el = $('<div/>');
            if (can.isFunction(control)) {
                this.element.html(el), new control(this.element.find('div'));
            }
        }
    });
});