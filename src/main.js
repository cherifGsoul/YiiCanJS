require(['can/util/string', 'src/js/appcontrol/appcontrol', 'can/route'], function(can, AppControl) {
    can.route.ready(false);
    can.route(':control');
    can.route(':control/:view');
    can.route('', {
        control: 'home',
        view: 'index'
    });

    can.route.ready();
    new AppControl('#main');
});