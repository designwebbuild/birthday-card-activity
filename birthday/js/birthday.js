
    let btn = $('.btn');
    let span = $('.span');
    let counter = 6;
    




btn.on('click', function() {
    setInterval(function() {
        counter--;
        if (counter >= 1) {
            span.text(counter);
        }
        if (counter === 0) {
            span.hide();
            btn.fadeOut(1000);
            $('img').fadeOut(1000);
            $('h1').fadeOut(1000);
            $('.main').addClass('finale');
            $('body').css('background-color', '#F0F2A6');
            $('#first').text('Happy Birthday!').addClass('para');
            $('#second').text('Enjoy it!!').addClass('para');
            $('#third').text('All The Best!!').addClass('para');
            
        }
    }, 1000);
});