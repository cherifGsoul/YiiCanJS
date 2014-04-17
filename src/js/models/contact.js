define(['can/util/string', 'can/model'], function(can) {
    return can.Model.extend('Contact', {
        findAll: 'GET /api/contact',
    }, {})
});