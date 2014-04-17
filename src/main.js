require(['can/util/string', 'src/js/appcontrol/appcontrol', 'can/route'], function(can, AppControl) {
    can.route.ready(false);
    can.route(':control');
    can.route(':control/:view');
    can.route(':control/:view/:id');
    can.route(':control/:view/:page');
    can.route('', {
        control: 'home',
        view: 'index'
    });

    can.route('contact/:view', {
        view: 'index'
    });

    can.route('contact/index/:page', {
        page: 1
    });



    can.route.ready();
    new AppControl('#main');
});