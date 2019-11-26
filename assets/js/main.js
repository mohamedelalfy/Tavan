$(document).ready(function() {
  $('.scroll-top-switcher').on('click', function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
  });
  $('.scroll-main-switcher').on('click', function () {
    $("html, body").animate({scrollTop: $('main').offset().top}, 600);
  });
  $('.slider').slider({
    selector: {
      slides: '.slider__slides',
      slide: '.slider__slide'
    }
  });
  $('.testimonials').slider({
    selector: {
      slides: '.testimonials__testimonials',
      slide: '.testimonials__testimonial'
    }
  });
  $('.products').categorization({
    selector: {
      slides: '.products__products',
      slide: '.product',
      bullets: '.products__bullets',
      bullet: '.products__bullets > li',
      tags: '.products__tags',
      tag: '.products__tags > li'
    }
  });
  $('.product__slider').zooming({
    selector: {
      stage: '.product__current-slide',
      slides: '.product__slides',
      slide: '.product__slide'
    }
  });
});