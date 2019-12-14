$(function() {

    // Behind the scenes method deals with browser
    // idiosyncrasies and such
    $.caretTo = function (el, index) {
        if (el.createTextRange) { 
            var range = el.createTextRange(); 
            range.move("character", index); 
            range.select(); 
        } else if (el.selectionStart != null) { 
            el.focus(); 
            el.setSelectionRange(index, index); 
        }
    };

    // The following methods are queued under fx for more
    // flexibility when combining with $.fn.delay() and
    // jQuery effects.

    // Set caret to a particular index
    $.fn.caretTo = function (index, offset) {
        return this.queue(function (next) {
            if (isNaN(index)) {
                var i = $(this).val().indexOf(index);
                
                if (offset === true) {
                    i += index.length;
                } else if (offset) {
                    i += offset;
                }
                
                $.caretTo(this, i);
            } else {
                $.caretTo(this, index);
            }
            
            next();
        });
    };

    // Set caret to beginning of an element
    $.fn.caretToStart = function () {
        return this.caretTo(0);
    };

    // Set caret to the end of an element
    $.fn.caretToEnd = function () {
        return this.queue(function (next) {
            $.caretTo(this, $(this).val().length);
            next();
        });
    };


    var cabinetListStyleContainer = $('.cabinet__list-style--2');
    $('.my-finance__more-btn').click(function() {
        if(cabinetListStyleContainer.css('display') == 'none') {
            cabinetListStyleContainer.slideDown();
            $(this).find('.my-finance__more-btn-icon').removeClass('fa-angle-down').addClass('fa-angle-up');
        } else {
            cabinetListStyleContainer.slideUp();
            $(this).find('.my-finance__more-btn-icon').removeClass('fa-angle-up').addClass('fa-angle-down');
        }
    });


    var sidebarMenuBtnForSubMenu = $('.cabinet-sidebar__link--btn-for-sub');
    $('.cabinet-sidebar__sub-items .cabinet-sidebar__link.cabinet-sidebar__link--active').closest('.cabinet-sidebar__sub-items').siblings().addClass('cabinet-sidebar__link--active');
    $('.cabinet-sidebar__link.cabinet-sidebar__link--active').closest('.cabinet-sidebar__sub-items').slideDown();
   
    sidebarMenuBtnForSubMenu.click(function(e) {
        $(this).siblings('.cabinet-sidebar__sub-items').slideToggle();
        e.preventDefault();
    });


    $('.my-finance__template-radio-input').click(function() {
        var currentRadioVal = $(this).val() + '₾';
        $('.my-finance__enter-input').val(currentRadioVal).trigger('keydown');
    });

    $('.my-finance__enter-input').click(function() {
        $('.my-finance__enter-input').caretTo($('.my-finance__enter-input').val().length - 1);
    });

    $('.my-finance__enter-input').on('keyup' , function(e) {
        var currentVal = $(this).val();
        if(!currentVal.includes('₾')) {
            $(this).val(currentVal + '₾');
            $(this).caretTo($('.my-finance__enter-input').val().length - 1)
        } else {
            $(this).val(currentVal.replace('₾', '') + '₾');
        }
        $('.my-finance__money-transfer-hiden-input').val(currentVal.slice(0,-1));
        $('.my-finance__money-transfer-amount').html(currentVal.slice(0,-1));
        $('.my-finance__template-radio-input').prop('checked', false);
    });

    $('.my-finance__history-title').click(function() {
        $('.my-finance__history-container').slideToggle();
        $('.my-finance__history-title .my-finance__history-title-icon').toggleClass('my-finance__history-title-icon--opened')
    });

    $('.loan-graph__status-container').css('width', $('.loan-graph__status-header').width());

    $('.cabinet-sidebar__link').mouseenter(function() {
        $('.cabinet-sidebar__item').removeClass('cabinet-sidebar__item--hovered');
        if(!$(this).hasClass('cabinet-sidebar__link--btn-for-sub')) {
            $(this).parent().addClass('cabinet-sidebar__item--hovered');
        }
    });
    $('.cabinet-sidebar__item').eq(0).mouseout(function(){
        if($('.cabinet-sidebar__item').eq(0).find('.cabinet-sidebar__link').hasClass('cabinet-sidebar__link--active')) {
            $('.cabinet-sidebar__title').addClass('remove-border')
        }
    })
    if($('.cabinet-sidebar__item').eq(0).find('.cabinet-sidebar__link').hasClass('cabinet-sidebar__link--active')) {
        $('.cabinet-sidebar__title').addClass('remove-border')
    }
    

    $('.cabinet-sidebar__title').click(function() {
        $(this).siblings('.cabinet-sidebar__items').slideToggle();
    });

    // ballance more blocks

    $('.my-belline__balance-blocks').each(function(index, elem) {
        $(elem).addClass('my-belline__balance-blocks-'+ index);
        var currenRow = $('.my-belline__balance-blocks-'+ index);
        $('.my-belline__balance-blocks-'+ index + ' .my-belline__balance-col').each(function(i, el) {
            var clonedInsideMoreBlock = $(el).children('.my-belline__ballance-more-in-col').clone();
            $(el).children('.my-belline__balance-block').attr('data-index', i);
            clonedInsideMoreBlock.addClass('col-12 my-belline__ballance-more-appended my-belline__ballance-more-appended--'+i);
            clonedInsideMoreBlock.attr('data-index', i)
            clonedInsideMoreBlock.removeClass('d-none my-belline__ballance-more-in-col');
            currenRow.append(clonedInsideMoreBlock);
        })
    });

    $('.my-belline__balance-block').click(function() {
        var currentIndex = $(this).attr('data-index');
        var appendedInfo = $(this).closest('.my-belline__balance-blocks').find('.my-belline__ballance-more-appended--'+currentIndex+ '');
        $('.my-belline__ballance-more-appended').each(function(i, e) {
            if($(e).attr('data-index') != currentIndex) {
                $(e).hide();
                $('.my-belline__balance-block').removeClass('my-belline__balance-block--active');
            } else {
                if($(e).closest('.my-belline__balance-blocks') != $(this).closest('.my-belline__balance-blocks')) {
                    $('.my-belline__balance-block').removeClass('my-belline__balance-block--active');
                }
            }
        })
        if(appendedInfo.css('display') == 'none') {
            appendedInfo.show();
            $(this).addClass('my-belline__balance-block--active');
            $(appendedInfo).each(function(i, e){
                setTimeout(function(){
                    $(e).find('.my-belline__pack-prog-inner').css('width',  $(e).find('.my-belline__pack-prog-inner').attr('data-current-percent') + '%');
                }, 500*i)
            })
        } else {
            appendedInfo.hide();
            $('.my-belline__balance-block').removeClass('my-belline__balance-block--active');
            $('.my-belline__pack-prog-inner').css('width', '0');
        }
       
    })
});