define(['can/util/string',
    'text!src/js/contact/list/pager/init.mustache',
    'can/control'
], function(can, pagerStache) {
    return can.Control.extend({
        defaults: {}
    }, {
        init: function() {
            var tpl = can.view.mustache(pagerStache);

            this.element.html(tpl({
                paginate: this.options.paginate
            }));
        },
        ".next click": function() {
            var paginate = this.options.paginate;
            paginate.attr('offset', paginate.offset + paginate.limit);
        },
        ".prev click": function() {
            var paginate = this.options.paginate;
            paginate.attr('offset', paginate.offset - paginate.limit);
        },
        "li.page click": function(el, ev) {
            var page = can.data(can.$(el), 'page');
            this.options.paginate.goTo(page);
        }

    });
});