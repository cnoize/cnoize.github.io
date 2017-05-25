$(function () {
    $('.setting-navitem').click(function () {
        switchSetting(this);
    });

    function switchSetting(selector) {
        $('.setting-navitem').removeClass('active');
        $(selector).addClass('active');
        $('.setting-container').addClass('hidden');
        var id = $(selector).attr('aria-value');
        $('#' + id + '-container').removeClass('hidden');

        $('#' + id + '-list').css({
            'max-height': function () {
                return ($(window).height() - $('#' + id + '-title').height()) + 'px';
            },
            'overflow-y': 'auto',
            'overflow-x': 'hidden'
        });

        $(window).resize(function () {
            $('#' + id + '-list').css('max-height', function () {
                return ($(window).height() - $('#' + id + '-title').height()) + 'px';
            });
        });
    }

    switchSetting('#dress-navitem');
});
