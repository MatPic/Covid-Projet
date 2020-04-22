import $ from 'jquery'

export default function arrowScroll () {
  const arrow = $('#arrow-scroll')
  arrow.click( function (e) {
    e.preventDefault()
    $('#home-content').get(0).scrollIntoView({ behavior: 'smooth' })
  })
  $(window).scroll(() => {
    if ($(window).scrollTop() > 0) {
        arrow.addClass('hidden')
    } else {
        arrow.removeClass('hidden')
    }
  })
}