$(document).ready(function () {
  $(".slick-js").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    cssEase: "linear",
    autoplaySpeed: 1000,
    variableWidth: false,
    dots: true
  });
});
$(document).ready(function () {
  $(".gallery-js").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    cssEase: "linear",
    autoplaySpeed: 1000,
    variableWidth: false,
    centerMode: true,
    centerPadding:0,
    dots: true,
    responsive: [
      {
        breakpoint: 991.9,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: false,
        }
      },
      {
        breakpoint: 767.9,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: false,
        }
      }
    ],
  });
});