import $ from 'jquery';
import arrowScroll from './arrowScroll';

$(document).ready(function () {

    const pageWidth = $(window).width()
    const body = $("html, body");

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

    $('[data-scrollto]').click(function (e) {
        e.preventDefault()
        body.animate({
            scrollTop : $(this.dataset.scrollto).offset().top - $('#main-nav ul').height()
        }, 1000)
    })

    $('#answer').click(function (e) {
        e.preventDefault()
        if ($('.answer-icon').hasClass('show')) {
            $('.answer-icon').removeClass('show')
            document.getElementById("answer").innerHTML = 'Voir les réponses'
        } else {
            $('.answer-icon').addClass('show')
            document.getElementById("answer").innerHTML = 'Cacher les réponses'
            $('.redline-left').get(0).scrollIntoView({ behavior: 'smooth' })
        }
    })

    function footerHeight () {
        $('#home-content').css('margin-bottom', $('#main-footer').outerHeight())
    }

    function headerHeight () {
        $('#main-nav').css('height', $('#main-nav ul').outerHeight())
    }

    $('.scroll-appear').each(function () {
        $(this).addClass('not-visible') 
        $(window).scroll(ev => {
            if (($(window).scrollTop() >= $(this).offset().top - $(window).height() + 50)) {
                $(this).removeClass('not-visible')
            }
        })
    })

    $('#menu_button').click(function() {
        if ($('#main-nav').hasClass('scrolled') && $('li').hasClass('scrolled') && $('.btn').hasClass('scrolled') && $(window).scrollTop() > 0) {
            $('#menu_button').toggleClass('open')
            $('#main-nav').toggleClass('open')
        } else {
            $('#main-nav').toggleClass('scrolled')
            $('li').toggleClass('scrolled')
            $('.btn').toggleClass('scrolled')
            $('#menu_button').toggleClass('open')
            $('#main-nav').toggleClass('open')
        }
    })
    
    arrowScroll()
    footerHeight()
    if ($('#menu_button').hasClass('open')) {
        headerHeight()
        window.onresize = headerHeight
    }
    window.onresize = footerHeight
})