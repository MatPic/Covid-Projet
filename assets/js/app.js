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

    $('#menu_logo').click(function (e) {
        e.preventDefault()
        $('#page-content').get(0).scrollIntoView({ behavior: 'smooth' })
    })

    $('#main-nav ul li:first-child').click(function (e) {
        e.preventDefault()
        $('#page-content').get(0).scrollIntoView({ behavior: 'smooth' })
    })

    $('#main-nav ul li:nth-child(2)').click(function (e) {
        e.preventDefault()
        $('#home-content p').get(0).scrollIntoView({ behavior: 'smooth' })
    })

    $('#main-nav ul li a').click(function (e) {
        e.preventDefault()
        $('.redline-right').get(0).scrollIntoView({ behavior: 'smooth' })
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