$('.works__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });