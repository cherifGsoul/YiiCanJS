define(['can/util/string',
        'src/js/models/contact',
        'src/js/contact/list/paginate',
        'src/js/contact/list/pager/pager',
        'src/js/contact/list/grid/grid',
        'text!src/js/contact/list/init.mustache',
        'can/control',
        'can/view',
        'can/view/mustache',

    ],
    function(can, Contact, Paginate, Pager, Grid, initStache) {
        return can.Control.extend('List', {
            defaults: {}
        }, {
            init: function(el, opts) {
                var paginate = opts.paginate = new Paginate({
                    limit: 20,
                    maxLinks: 10
                }),
                    tpl = can.view.mustache(initStache);
                el.html(tpl({
                    paginate: paginate
                }));

                new Pager('#pager', {
                    paginate: paginate
                });

                // Map the page state the
                // the list of options the grid
                // should display
                var items = can.compute(function() {
                    var params = {
                        limit: paginate.attr('limit'),
                        offset: paginate.attr('offset'),
                        page: paginate.page()
                    };
                    var contactsDeferred = Contact.findAll(params);
                    contactsDeferred.then(function(contacts) {
                        paginate.attr('count', contacts.count)
                    });
                    return contactsDeferred
                });

                // Create the grid.
                new Grid("#contacts", {
                    items: items
                });
                this.on();

            },
            "{paginate} offset": function(paginate) {
                can.route.attr('page', paginate.page());
            },
            // update the page's state when the route changes
            "{can.route} page": function(route) {
                this.options.paginate.page(route.attr('page'));
            }
        });
    });