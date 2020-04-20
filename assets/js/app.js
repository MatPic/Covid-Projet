import $ from 'jquery';
import arrowScroll from './arrowScroll';

$(document).ready(function () {
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

    arrowScroll()
})