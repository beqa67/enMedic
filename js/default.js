$(function(){
    var departaments = new Swiper('.departaments-carousel', {
        slidesPerView: 6,
        spaceBetween: 30,
        
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
            // when window width is >= 320px
            0:{
              slidesPerView: 1,
            },
            575:{
              slidesPerView: 2,
            },
            765: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
            // when window width is >= 480px
            1440: {
              slidesPerView: 5,
              spaceBetween: 30
            },
            // when window width is >= 640px
            1600: {
              slidesPerView: 5,
            }
          }
    });
    $('.lang__choosen').click(function(){
        $(this).siblings('.lang__items').slideToggle();
        $(this).toggleClass('active');
    });
    $('.footer__title').click(function(){
        $('.footer__list').not($(this).siblings('.footer__list')).slideUp();
        $('.footer__title').not($(this)).removeClass('active')
        $(this).siblings('.footer__list').slideToggle();
        $(this).toggleClass('active');
    })

<<<<<<< HEAD
    $('.header-mobile__burger-open').click(function(){
        $(this).toggleClass('active')
        $('.header-mobile-content').slideToggle();
    })
    $('.about__info-lists-header').click(function(){
        $(this).toggleClass('active');
        $(this).siblings('.about__info-lists-content').slideToggle();
        $(this).siblings('.about__info-text').slideToggle();
=======
    $('.mb-0.collapsed').click(function(){
        $(this).closest('.card').removeClass('active');
        return false;
    });

    $('.scroll-icon').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });


    //payment method modal

    $(document).on('change' , '.payment-method-input', function(){
        if($('.payment-method-input--mobile').prop('checked') == true) {
            $('.buy-balance-container--mobile').removeClass('d-none');
        } else if($('.payment-method-input--mobile').prop('checked') == false) {
            $('.buy-balance-container--mobile').addClass('d-none');
        }
        if($('.payment-method-input--bank').prop('checked') == true) {
            $('.buy-balance-container--bank').removeClass('d-none');
        } else if($('.payment-method-input--bank').prop('checked') == false) {
            $('.buy-balance-container--bank').addClass('d-none');
        } 
        if($('.payment-method-input--ussd').prop('checked') == true) {
            $('.ussd-code').addClass('ussd-code--active');
            $('.next').closest('.modal-btn').hide();
        } else if($('.payment-method-input--ussd').prop('checked') == false) {
            $('.ussd-code').removeClass('ussd-code--active');
            $('.next').closest('.modal-btn').show();
        }
    });
    $(document).on('change' , '.payment-method-input', function(){
        if($('.payment-method-input--ussd').prop('checked') == true) {
            $('.ussd-code').addClass('ussd-code--active');
            $('.next').closest('.modal-btn').removeClass('d-flex');
            $('.next').closest('.modal-btn').addClass('d-none');
        } else if($('.payment-method-input--ussd').prop('checked') == false) {
            $('.ussd-code').removeClass('ussd-code--active');
            $('.next').closest('.modal-btn').addClass('d-flex');
            $('.next').closest('.modal-btn').removeClass('d-none');
        }
    });
    // $(document).on('keydown' , '.buy-balance-container-input' , function(e){
    //     var ph = this.value.replace(/\D/g,'').substring(0,8);
    //     // Backspace and Delete keys
    //     var deleteKey = (e.keyCode == 8 || e.keyCode == 46);
    //     var len = ph.length;
    //     if(len==0){
    //         ph=ph;
    //     }else if(len<3){
    //         ph=''+ph;
    //     }else if(len==3){
    //         ph = ''+ph + (deleteKey ? '' : ' ');
    //     }else{
    //         ph=''+ph.substring(0,3)+' '+ph.substring(3,6)+''+ph.substring(6,8);
    //     }
    //     this.value = ph;
    // });

    // $(".offices-list-scroll").niceScroll({
    //     cursorcolor:"#c1c1c1",
    //     cursorwidth:"7px",
    //     autohidemode: false,
    // });


    var nonActiveLangs = [];
    var activeLang = [];
    $('.language-bar .lang-item').each(function (index, elem) {
        if($(elem).hasClass('active')) {
            activeLang.push($(elem))
        } else {
            nonActiveLangs.push($(elem));
            $(elem).detach();
        }
>>>>>>> 6855bb2ec9bc90d9e7d334ad209b24657de205fc
    })

    $('.gallery__title').click(function(){
        $(this).toggleClass('active');
        $(this).siblings('.gallery__content').slideToggle();
    })

    $('.contact-box__header').click(function() {
        $(this).toggleClass('active')
        $(this).siblings('.contact-box__content').slideToggle()
    })
})