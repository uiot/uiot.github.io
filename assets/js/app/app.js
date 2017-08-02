//jQuery(document).foundation();

function resizeControl() {
    jQuery('#js-heightControl').css('height', jQuery(window).height() - jQuery('html').height() + 'px');

    jQuery('.header-container').css({'width': jQuery(window).width(), 'height': jQuery(window).height()});
}

jQuery(document).ready(function () {
    resizeControl();
});

jQuery(window).resize(function () {
    resizeControl();
});

var typed = new Typed('.typed-animated', {
    strings: ["", "<b>Is...</b> Creating innovative <b style='color:#8385D0'>ideas.</b>",
        "<b>Is...</b> Creating changing factor <b style='color:#8385D0'>concepts.</b>",
        "<b>Is...</b> Connecting <b style='color:#8385D0'>things</b> together.",
        "<b>Is...</b> Working for an <b style='color:#8385D0'>universal</b> IoT platform.",
        "<b>Is...</b> Changing how <b style='color:#8385D0'>smart homes</b> works.",
        "<b>Is...</b> Changing how the <b style='color:#8385D0'>IoT industry</b> leads."],
    typeSpeed: 100,
    onLastStringBackspaced: function (self) {
        jQuery('.typed-animated').html("What it's the <b style='color:#8385D0'>Universal Internet of Things?</b>");
    },
    smartBackspace: true,
    startDelay: 4000,
    loop: true,
    loopCount: 2,
    showCursor: true,
    backSpeed: 40,
    cursorChar: ''
});
