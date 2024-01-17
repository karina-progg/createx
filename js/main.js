$(function () {

  var mixer = mixitup('.directions__list');
  
  $('.directions__filter-btn').on('click', function () { 
    $('.directions__filter-btn').removeClass('directions__filter-btn--active')
    $(this).addClass('directions__filter-btn--active')
  })

  $('.team__slider').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    draggable: false,
    waitForAnimate: false,
  })
  
  $('.team__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
  })
  $('.team__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickNext')
  })

  $('.feedb__slider').slick({
    arrows: false,
    dots: true,
    appendDots: $('.feedb__dots'),
  })

  $('.feedb__prev').on('click', function (e) {
    e.preventDefault()
    $('.feedb__slider').slick('slickPrev')
  })
  $('.feedb__next').on('click', function (e) {
    e.preventDefault()
    $('.feedb__slider').slick('slickNext')
  })

  
})