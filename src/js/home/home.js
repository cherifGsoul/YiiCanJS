define(['can/util/string', 'can/control'], function(can) {
    return can.Control.extend({
        defaults: {
            views: {}
        }
    }, {
        init: function(el, options) {
            el.html('Homepage content');
        }
    });
});