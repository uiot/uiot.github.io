jQuery(document).foundation();

function resizeControl() {
    jQuery('#js-heightControl').css('height', jQuery(window).height() - jQuery('html').height() +'px');
}

jQuery(document).ready(function () {
    resizeControl();
});

jQuery(window).resize(function () {
    resizeControl();
});

jQuery(document).ready(function () {
    var table = jQuery('.callout.table h4');

    table.append('<svg class="toggle" width="20" height="20"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#large-arrow"><svg viewBox="0 0 20 20" id="large-arrow" width="100%" height="100%"><path d="M13.25 10L6.109 2.58c-.268-.27-.268-.707 0-.979.268-.27.701-.27.969 0l7.83 7.908c.268.271.268.709 0 .979l-7.83 7.908c-.268.271-.701.27-.969 0-.268-.269-.268-.707 0-.979L13.25 10z"></path></svg></use></svg>');

    setTimeout(function () {
        table.parent().addClass('is-open');
    }, 1000);

    jQuery(document).on('click', '.callout.table h4 svg.toggle', function () {
        if(jQuery(this).parent().parent().hasClass('is-open')) {
            jQuery(this).parent().parent().removeClass('is-open');

            jQuery(this).parent().siblings().slideUp();
        } else {
            jQuery(this).parent().parent().addClass('is-open');

            jQuery(this).parent().siblings().slideDown();
        }
    });
});

jQuery(document).ready(function () {
    jQuery('.search_at').on('keyup', function () {
        var content = jQuery(this).val(), results = jQuery('.search_results');

        if(content.length < 3) {
            results.html('');
        } else {
            jQuery.get('/view/search?content=' + content, function (data) {
                results.html('');

                if(data.clients && data.clients.length) {
                    jQuery.each(data.clients, function (index, client) {
                        results.append(exploreElement('client', client));
                    });
                }

                if(data.services && data.services.length) {
                    jQuery.each(data.services, function (index, service) {
                        results.append(exploreElement('service', service));
                    });
                }

                if((!data.clients || !data.clients.length) && (!data.services || !data.services.length)) {
                    results.html('<center><b class="saw">No Results :(</b></center>');
                }
            })
        }
    });
});

function exploreElement(type, element) {
    var url = (type === 'client' ? '/view/client/' + element.id : '/view/client/' + element.id + '/data');

    return '<li><div class="callout primary"><a href="' + url + '" class="see-button">Watch</a><h5>' + element.document.name + ' <small>(' + type + ')</small></h5><small>[ ' + ((element.document.tags && element.document.tags.length) ? element.document.tags.join(', ') : 'No Tags') + ' ]</small></div></li>';
}