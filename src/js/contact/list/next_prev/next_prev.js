define(['can/util/string',
        'text!src/js/contact/list/next_prev/init.mustache',
        'can/control'
    ],
    function(can, nextPrevStache) {
        return can.Control.extend({
            defaults: {}
        }, {
            init: function() {
                var tpl = can.view.mustache(nextPrevStache);
                this.element.html(tpl(this.options.paginate));
            },
            ".next click": function() {
                var paginate = this.options.paginate;
                paginate.attr('offset', paginate.offset + paginate.limit);
            },
            ".prev click": function() {
                var paginate = this.options.paginate;
                paginate.attr('offset', paginate.offset - paginate.limit);
            }

        });
    });