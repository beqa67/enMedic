var swiper = new Swiper('.s1', {
    spaceBetween: 0,
    centeredSlides: true,
    speed:1000,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$('.mobile-btn').click(function(){
    $('.mobile-btn').removeClass('active');
    $(this).addClass('active');
    var type = $(this).attr('btn-type');
    $('.show-section').removeClass('active');
    $('.show-section[sec-type='+type+']').addClass('active');
});

//price range
function initIonSlider(){
    $("#beeline-range").ionRangeSlider({
        type: "single",
        min: 1,
        max: 35,
        grid: true,
        values: JSON.parse($("#beeline-range").attr('get-values')),
        hide_min_max: true,
        hide_from_to: true,

        onChange:function (data) {
            $('.irs-grid-text').removeClass('active');
            var target = $('.irs-grid-text[range-target='+data.from_value+']');
            target.addClass('active');
            $('.irs-grid-text:last-child').css({'margin-left': '-43px'});
            $('.irs-grid-text').eq(0).css({'margin-left': '-7px'});
            $('#beeline-range').attr('active-value', data.from_value);
        },

    });
    $('.irs-grid-text').each(function(index,item){
        var lang = $('#beeline-range').attr('ion-language');

        var html = $('.irs-grid-text').eq(index).html();
        $('.irs-grid-text').eq(0).addClass('active');
        $('.irs-grid-text:last-child').css({'margin-left': '-43px'});
        $('.irs-grid-text').eq(index).attr('range-target', html);


        if(lang == 'en')
            if(html == 1)
                html = html + ' DAY';
            else
                html = html + ' DAYS';

        else if(lang == 'ka')
            html = html + ' დღე';

        $('.irs-grid-text').eq(index).html(html);
    });
    $('.irs-grid-text').not(':first').not(':last').css({'margin-left': '-25px'});
}

initIonSlider();

document.getElementById('vid').play();
