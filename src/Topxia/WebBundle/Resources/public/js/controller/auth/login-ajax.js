define(function(require, exports, module) {
    var Validator = require('bootstrap.validator');
    require("placeholder")

    exports.run = function() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) != "micromessenger" && $('meta[name=is-open]').attr('content') != 0) {
            window.location.href = '/login/bind/weixinmob?_target_path='+location.href;
        };

        var validator = new Validator({
            element: '#login-ajax-form',
            autoSubmit: false,
            onFormValidated: function(error, results, $form) {
                $form.find('.alert-danger').hide();

                if (error) {
                    return;
                }

                $.post($form.attr('action'), $form.serialize(), function(response) {
                    window.location.reload();
                }, 'json').error(function(jqxhr, textStatus, errorThrown) {
                    var json = jQuery.parseJSON(jqxhr.responseText);
                    $form.find('.alert-danger').html(json.message).show();
                });

            }
        });

        validator.addItem({
            element: '#ajax-username',
            required: true
        });

        validator.addItem({
            element: '#ajax-password',
            required: true
        });

    };

});