//jQuery(document).foundation();

function resizeControl() {
    jQuery('#js-heightControl').css('height', jQuery(window).height() - jQuery('html').height() +'px');
}

jQuery(document).ready(function () {
    resizeControl();
});

jQuery(window).resize(function () {
    resizeControl();
});