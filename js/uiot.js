$(function () {
    var balls = $('.balls'), ballAmount = 4,
        buttonYeah = ['Love IoT?',
            'Watch our Video!',
            'You Rockz!',
            'Get Started!',
            'Wanna see amazing things?',
            'Keep it real!',
            'What is UIoT?!!'];

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