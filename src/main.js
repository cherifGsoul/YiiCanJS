require(['can/util/string', 'src/js/appcontrol/appcontrol', 'can/route'], function(can, AppControl) {

    can.route(':control');
    can.route(':control/:view');
    can.route(':control/:view/:id');

    can.route(':control/:view/page/:page');

    can.route(':control', {
        control: 'home',
        view: 'index',
    });



    can.route.ready();
    new AppControl('#main');
});