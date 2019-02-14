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


// Popup
var modal = document.getElementById('popup-modal');
//  var btn = document.getElementById("open-popup-modal");
//  var span = document.getElementsByClassName("modal-close")[0];
//  btn.onclick = function () {
//    modal.style.display = "block";
//  }
//  span.onclick = function () {
//    modal.style.display = "none";
//  }
//  window.onload = function () {
//    setTimeout(function () {
//      modal.style.display = 'block';
//    }, 3000);
//  }

$('.header-btn').on('click', function (e) {
  $('#popup-modal').fadeIn(400)
})

$('.modal-close').on('click', function (e) {
  $('#popup-modal').fadeOut(400)
})

window.onclick = function (event) {
  if (event.target == modal) {
    $('#popup-modal').fadeOut(400)
  }
}
// Popup end


// Feedback validate
$.validator.setDefaults({
  submitHandler: function () {
    $('.modal-close').click()
    $('.submit-success').fadeIn()
    setTimeout(function () {
      $('.submit-success').fadeOut()
    }, 2000)
    $('.form-modal').find($('input')).val('')
  }
})

$.validator.setDefaults({
  highlight: function (element) {
    if ($(element).hasClass('valid')) {
      $(element).removeClass('valid')
    }
    $(element).addClass('invalid')
    $(element).on('focus', function (e) {
      $(element).next().css({
        top: '47px',
        left: '10px'
      })
      $(element).parent().css('margin-bottom', '2.3rem')
    })
    if ($(element).val() === '') {
      $(element).parent().css('margin-bottom', '1.3rem')
    } else {
      $(element).parent().css('margin-bottom', '2.3rem')
    }
    console.log($(element).text())
  },
  unhighlight: function (element) {
    if ($(element).hasClass('invalid')) {
      $(element).removeClass('invalid')
    }
    $(element).addClass('valid')
  }
})

$('.form-modal').validate({
  rules: {
    name: {
      required: true,
      minlength: 2,
      maxlength: 40
    },
    phone: {
      required: true,
      minlength: 10,
      maxlength: 13
    },
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    email: {
      required: 'Поле обязательно для заполнения',
      email: 'Введите корректный email'
    },
    name: {
      required: 'Поле обязательно для заполнения',
      minlength: 'Введите хотя бы 2 символа'
    },
    phone: {
      required: 'Поле обязательно для заполнения',
      maxlength: 'Слишком много символов',
      minlength: 'Введите хотя бы 10 символов'
    }
  }
})
// End Feedback validate
