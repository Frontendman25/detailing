$(function () {
  // Slick slider
  $('.detail-slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
    },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
    }
  ]
  });
  // Slick slider end


  // Accordion
  $('.toggle').click(function (e) {
    //    e.preventDefault();

    let $this = $(this);

    if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);
    } else {
      $this.parent().parent().find('li .inner').removeClass('show');
      $this.parent().parent().find('li .inner').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
    }
  });
  // Accordion end


  // Toggle menu 
  $("#burger-menu").on("click", function (e) {
    $('.header-nav-wrap-link').stop().fadeToggle('400')
    $('.header-nav-wrap-link').css({
      'position': 'fixed',
      'display': 'flex',
      'flex-direction': 'column',
      'top': '50%',
      'left': '50%',
      'transform': 'translate(-50% , -50%)',
      'z-index': '10'
    })
  });
  // Toggle menu end

  // Settings for slideToggle
  $(window).resize(function () {
    if ($(window).width() > 992 || $(window).width() > 768) {
      $('.header-nav-wrap-link').removeAttr('style');
    }
  })
  // Settings for slideToggle end

});
