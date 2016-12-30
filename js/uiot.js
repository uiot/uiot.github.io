$(function () {
    var balls = $('.balls'), ballAmount = 5,
        buttonYeah = ['Love IoT? Watch this.',
            'Watch our Video!',
            'Know a little more about us!',
            'Get Know about us.',
            'Wanna see amazing things?',
            'See that and blow this.',
            'What is UIoT?'];

    for (var i = 0; i < ballAmount; i++) {
        balls.append("<div class='ball'></div>");
    }

    var ball = $('.ball');

    $('.random-button').html(buttonYeah[Math.floor(Math.random() * buttonYeah.length)]);

    ball.eq(0).addClass('active');

    ball.on('click', function () {
        var click = $(this).index(), entry = $('.company-entry'), using = $('.pos-active').index();

        entry.eq(using).removeClass('pos-active');
        entry.eq(using).addClass('pos-hidden');

        entry.eq(click).removeClass('pos-hidden');
        entry.eq(click).addClass('pos-active');

        ball.removeClass('active');
        $(this).addClass('active');
    });
});

$('video').on('ended', function () {
    this.load();
    this.play();
});

$('.reveal-button').on('click', function () {
    var revealComponent = $('#' + $(this).attr('reveal-id'));

    console.log('Open Modal: ' + revealComponent);

    $('body').append("<div class='reveal-block'><div class='reveal-modal' style='display: inline-block' id='" + $(this).attr('reveal-id') + "'>" + revealComponent.html() + "</div></div>");

    revealComponent.remove();

    $('.close-button').on('click', function () {
        console.log('Closing Modal');

        $('body').append("<div class='reveal-modal' id='" + $(this).parent().attr('id') + "'>" + $(this).parent().html() + "</div>")

        $(this).parent().parent().remove();
    });
});

$('.random-button').on('click', function () {
    $('.our-video')[0].play();
});
