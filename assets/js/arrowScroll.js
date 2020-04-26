import $ from 'jquery'

export default function arrowScroll () {
  const arrow = $('#arrow-scroll')
  $(window).scroll(() => {
    if ($(window).scrollTop() > 0) {
        arrow.addClass('hidden')
    } else {
        arrow.removeClass('hidden')
    }
  })
}