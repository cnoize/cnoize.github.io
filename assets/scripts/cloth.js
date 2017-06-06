$(function () {
    $('#container-nav [data-uuid]').click(function () {
        switchNav($(this));
    });

    function switchNav(obj) {
        $('#container-nav [data-uuid]').removeClass('active');
        $('#container-list > div').hide();
        obj.addClass('active');
        $('#' + obj.attr('data-uuid') + "-list").show();
    }

    switchNav($('#container-nav [data-uuid=dress]'));

    var vm = new Vue({
        el: '#form',
        data: {
            'dress': '',
            'person': '',
            'hair': ''
        }
    });
});
