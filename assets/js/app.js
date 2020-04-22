import $ from 'jquery';
import arrowScroll from './arrowScroll';

$(document).ready(function () {

    const pageWidth = $(window).width()

    $(window).scroll(() => {
        if ($(window).scrollTop() > 0) {
            $('#main-nav').addClass('scrolled')
            $('li').addClass('scrolled')
            $('.btn').addClass('scrolled')
        } else {
            $('#main-nav').removeClass('scrolled')
            $('li').removeClass('scrolled')
            $('.btn').removeClass('scrolled')
        }
    })

    // if (pageWidth < 808) {
    //     $('#main-nav').addClass('responsive')
    //     $('#main-nav ul').addClass('responsive')
    //     $('#main-nav ul li').addClass('responsive')
    //     $('#menu_logo').addClass('responsive')
    // } else {
    //     $('#main-nav').removeClass('responsive')
    //     $('#main-nav ul').removeClass('responsive')
    //     $('#main-nav ul li').removeClass('responsive')
    //     $('#menu_logo').removeClass('responsive')
    // }

    // $('#menu_button').click(function() {
    //     $('#main-nav').addClass('scrolled')
    //     $('li').addClass('scrolled')
    //     $('.btn').addClass('scrolled')
    //     $('#menu_button').addClass('open')
    // })

    arrowScroll()
})