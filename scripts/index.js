$(window).on("scroll", () => {
  let scrolled = $(this).scrollTop();
  if (scrolled > 50) {
    $(".header").addClass("header-small");
  }
  if (scrolled <= 50) {
    $(".header").removeClass("header-small");
  }
});
$(document).ready(() => {
  $(".owl-carousel").owlCarousel({
    items: 1,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 8000,
  });
  $("#header-navigation").on("click", "a", function(event) {
    event.preventDefault();
    let id = $(this).attr('href'), top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);
  });
});

  