require(['app/app_control',
        'app/home/home',
        'app/contacts/contact',
        'app/login/login',
        'app/core/user_map',
        'app/core/app_map',
    ],
    function(AppControl, Home, Contact, Login, UserViewModel, AppMap) {
        can.route(':module', {
            module: 'home'
        });

        var modules = [{
            id: 'home',
            control: Home,
            menuName: 'Home',

        }, {
            id: 'contact',
            control: Contact,
            menuName: 'Contact',

        }, {
            id: 'login',
            control: Login,
            menuName: 'login',

        }];
        var appUser = new UserViewModel();

        if (can.isDeferred()) {
            $(document.body).html('chargement de données');
        }

        new AppControl(document.body, {
            appMap: new AppMap({
                user: appUser,
                config: new can.Map({
                    name: 'Single page Application',
                    modules: modules,
                    defaultModule: 'home',
                })
            })
        });
        can.route.ready();
    });