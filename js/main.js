$(function () {
  // Slick slider
  $('.detail-slider').slick({
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3
        }
    },
      {
        breakpoint: 500,
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
    e.preventDefault();

    let $this = $(this);
    let $parent2 = $this.parent().parent()
    let $parent2Arrow = $parent2.find('.arrow')

    if ($this.next().hasClass('show')) {
      $this.next().removeClass('show')
      $this.next().stop().slideUp(350)
      $this.find('.arrow').removeClass('rotate')
    } else {
      $parent2.find('li .inner').removeClass('show')
      $parent2.find('li .inner').stop().slideUp(350)
      $this.next().toggleClass('show')
      $this.next().slideToggle(350)
      $parent2.find($('.arrow')).removeClass('rotate')
      $this.find($('.arrow')).toggleClass('rotate');
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
      'justify-content': 'space-between',
      'top': '50%',
      'left': '50%',
      'transform': 'translate(-50% , -50%)',
      'height': '360px',
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
