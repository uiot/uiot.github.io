//jQuery(document).foundation();

function resizeControl() {
    jQuery('#js-heightControl').css('height', jQuery(window).height() - jQuery('html').height() + 'px');
}

jQuery(document).ready(function () {
    resizeControl();
});

jQuery(window).resize(function () {
    resizeControl();
});

jQuery(function () {
    jQuery(window).resize(function () {
        jQuery('.header-container').css({'width': jQuery(window).width(), 'height': jQuery(window).height()});
    });

    jQuery(window).resize();
});