
// stricky header function
function stickyHeader() {
    if ($('.stricky').length) {
        var strickyScrollPos = 150;
        if ($(window).scrollTop() > strickyScrollPos) {
            $('.stricky').removeClass('slideIn animated');
            $('.stricky').addClass('stricky-fixed fadeInDown animated');
            $('.scroll-to-top').fadeIn(500);
        }
        else if ($(this).scrollTop() <= strickyScrollPos) {
            $('.stricky').removeClass('stricky-fixed fadeInDown animated');
            $('.stricky').addClass('slideIn animated');
            $('.scroll-to-top').fadeOut(500);
        }
    };
}
// stricky header activation
jQuery(window).scroll(function () {
    (function ($) {
        stickyHeader();
    })(jQuery);
});



jQuery(document).ready(function ($) {
    // hidden-bar activation
    var menuWrap = $('.hidden-bar .main-menu');
    menuWrap.find('.dropdown').children('a').append(function () {
        return '<button type="button" class="btn expander"><i class="fa fa-chevron-down"></i></button>';
    });
    menuWrap.find('.dropdown').children('ul').hide();
    // toggling child ul
    menuWrap.find('.btn.expander').each(function () {
        $(this).click(function () {
            $(this).parent() // return parent of .btn.expander (a) 
                .parent() // return parent of a (li)
                .children('ul').slideToggle();

            // adding class to expander container
            $(this).parent().toggleClass('current');
            // toggling arrow of expander
            $(this).find('i').toggleClass('fa-chevron-up fa-chevron-down');


            return false;

        });
    });

    if ($('.hidden-bar-closer').length) {
        $('.hidden-bar-closer').click(function () {
            $('.hidden-bar').css({
                'right': '-150%'
            });
        });
    };
    if ($('.hidden-bar-opener').length) {
        $('.hidden-bar-opener').click(function () {
            $('.hidden-bar').css({
                'right': '0%'
            });
        });
    };

    //Show Popup
    $('.search-box-btn').click(function () {
        $('#search-popup').addClass('popup-visible');
    });

    //Hide Popup
    $('.close-search').click(function () {
        $('#search-popup').removeClass('popup-visible');
    });

});

//accordion activation
$(document).ready(function () {
    if ($('.accordion-box').length) {
        $('.accordion-box .acc-btn').click(function () {
            if ($(this).hasClass('active') !== true) {
                $('.accordion-box .acc-btn').removeClass('active');
            }

            if ($(this).next('.acc-content').is(':visible')) {
                $(this).removeClass('active');
                $(this).next('.acc-content').slideUp(500);
            } else {
                $(this).addClass('active');
                $('.accordion-box .acc-content').slideUp(500);
                $(this).next('.acc-content').slideDown(500);
            }
        });
    }
});

// wow activation
new WOW().init();

// back2top activation
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $(".back2Top").fadeIn("slow")
        } else {
            $(".back2Top").fadeOut("slow")
        }
    });

});


//accordian activation
jQuery(document).ready(function () {
    function accrodion() {
        if ($('.accrodion-grp').length) {

            $('.accrodion-grp').each(function () {
                var accrodionName = $(this).data('grp-name');
                var Self = $(this);
                Self.addClass(accrodionName);
                Self.find('.accrodion .accrodion-content').hide();
                Self.find('.accrodion.active').find('.accrodion-content').show();
                Self.find('.accrodion').each(function () {
                    $(this).find('.accrodion-title').click(function () {
                        if ($(this).parent().hasClass('active') === false) {
                            $('.accrodion-grp.' + accrodionName).find('.accrodion').removeClass('active');
                            $('.accrodion-grp.' + accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
                            $(this).parent().addClass('active');
                            $(this).parent().find('.accrodion-content').slideDown();
                        };
                    });
                });
            });

        };
    }
});

// mCustomScrollbar activation
if ($('.hidden-bar-wrapper').length) {
    $('.hidden-bar-wrapper').mCustomScrollbar();
}

jQuery(document).ready(function ($) {
    // progress section responsive
    if ($(window).width() > 1199) {
        $('.progress-2-right').outerHeight($('.progress-2-left').outerHeight());
    };

    $(".scroll-to-top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500)
    });

    //    nav-2 sticky responsive
    if ($(window).width() < 767) {
        $('.nav-2').removeClass('stricky');
        $('.header-2-search').addClass('stricky');
    }
    else {
        $('.nav-2').addClass('stricky');
        $('.header-2-search').removeClass('stricky');
    }

});
