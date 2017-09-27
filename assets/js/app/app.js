jQuery(document).foundation();

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
    strings: ["", "<b>It's...</b> Creating innovative <b style='color:#8385D0'>ideas.</b>",
        "<b>It's...</b> Creating factor-changing <b style='color:#8385D0'>concepts.</b>",
        "<b>It's...</b> Connecting <b style='color:#8385D0'>things</b> together.",
        "<b>It's...</b> Working for a <b style='color:#8385D0'>universal</b> IoT platform.",
        "<b>It's...</b> Changing how <b style='color:#8385D0'>smart homes</b> work.",
        "<b>It's...</b> Changing how <b style='color:#8385D0'>IoT industry</b> leads."],
    typeSpeed: 100,
    onLastStringBackspaced: function (self) {
        jQuery('.typed-animated').html("What's <b style='color:#8385D0'>Universal Internet of Things?</b>");
    },
    onDestroy: function (self) {
        jQuery('.typed-animated').html("What's <b style='color:#8385D0'>Universal Internet of Things?</b>");
    },
    smartBackspace: true,
    startDelay: 3000,
    loop: true,
    loopCount: 2,
    showCursor: true,
    backSpeed: 40,
    cursorChar: ''
});

function openPage(page) {
    window.location.href = page;
}
