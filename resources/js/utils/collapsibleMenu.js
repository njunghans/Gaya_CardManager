require('./initJQuery');

class Menu {
    constructor(parent, center, items) {
        jQuery(function($) {
            $('.active a.clickable').on('click', function(e) {
                if ($(this).hasClass('panel-collapsed')) {
                    // expand the panel
                    $(this).parents('.active').find('.collapsein').slideDown();
                    $(this).removeClass('panel-collapsed');
                    $(this).
                        find('i').
                        removeClass('glyphicon-chevron-down').
                        addClass('glyphicon-chevron-up');
                } else {
                    // collapse the panel
                    $(this).parents('.active').find('.collapsein').slideUp();
                    $(this).addClass('panel-collapsed');
                    $(this).
                        find('i').
                        removeClass('glyphicon-chevron-up').
                        addClass('glyphicon-chevron-down');
                }
            });
        });
        const c = '<div class="active lg-icon"><a href="#" class="clickable panel-collapsed">' +
            center +
            '<span class="pull-right"><i class="glyphicon glyphicon-chevron-down"></i></span></a><ul class="collapsein no-bullets"></ul></div>';
        parent.append(c);
        let i = '';
        items.forEach(item => {
            i += '<li><label>' + item + '</label></li>';
        });
        $('.collapsein').append(i);
    }
}

module.exports = Menu;