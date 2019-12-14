$('select').selectpicker();

    $('.bundles-menu_item').click(function(){
        var type = $(this).attr('but-type');
        $('.bundles-menu_item').removeClass('active');
        $(this).addClass('active');
        $('.bundles-block').removeClass('active');
        $(".bundles-block[sec-type="+type+"]").addClass('active');
        $('.more-block').removeClass('active');
    });

    $('.bundles-block_item .more, .edu-block_item .more').click(function() {
        $('.bundles-block_item .active, .edu-block_item .active').not(this).removeClass('active');
        $(this).toggleClass('active');
        var type = $(this).attr('but-type');
        $(this).closest('.bundles-outer-block').toggleClass("opened");
        $(this).closest('.bundles-outer-block').siblings('.bundles-outer-block').removeClass('opened');
        if($(window).width() > 768) {
            $('.more-block-appended').removeClass('active');
            $('.more-block-appended[tariff='+type+']').addClass('active');
            if (!$(this).hasClass("active")) {
                $('.more-block-appended[tariff='+type+']').removeClass('active');
            };
        } else {
            $('.inside-col-more-block').removeClass('active');
            $('.inside-col-more-block[tariff='+type+']').addClass('active');
            if (!$(this).hasClass("active")) {
                $('.inside-col-more-block[tariff='+type+']').removeClass('active');
            };
        }
        var currentMoreType = $(this).attr('but-type');

        setTimeout(function(){
            $('html, body').animate({
                scrollTop: ($('.more-block-appended[tariff="'+ currentMoreType +'"]').offset().top - 200)
            },500);
        })
      
    });

    $('.bundles-row').each(function(index, elem) {
        $(elem).addClass('bundles-row-'+ index);
        var currenRow = $('.bundles-row-'+ index);
        $('.bundles-row-'+ index + ' .bundles-outer-block').each(function(i, el) {
            var clonedInsideMoreBlock = $(el).children('.inside-col-more-block').clone();
            clonedInsideMoreBlock.addClass('col-12 more-block-appended more-block-appended--'+i);
            clonedInsideMoreBlock.removeClass('d-none inside-col-more-block');
            currenRow.append(clonedInsideMoreBlock);
    });
});
