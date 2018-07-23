$(function() {

//------------------------------гамбургер-----------------------------
	$('.hamburger--collapse').click(function() {
    $(this).toggleClass('is-active');
    $('.header__nav').toggleClass('header__nav-active');
  });

//------------------------------висота блоків-----------------------------
  $('.value__list').matchHeight();
  $('.problem__block').matchHeight();
	
	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  focusOnSelect: true,
	  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
     {
      breakpoint: 520,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
	});

	$('.doc__container').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  infinite: true,
	  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
     {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
	});

  $('.refit__container').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      rows: 2,
      responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
      breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
       {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

//-------------------------скорость якоря---------------------------------------
  $(".header__list").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 90}, 'slow', 'swing');
  });

//-------------------------------попандер---------------------------------------
  $('.modal').popup({transition: 'all 0.3s'});
//------------------------------------form-------------------------------------------
	$('input[type="tel"]').mask('+0 (000) 000-00-00');

	jQuery.validator.addMethod("phoneno", function(phone_number, element) {
	   return this.optional(element) || phone_number.match(/\+[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
	}, "Введите Ваш телефон");

  $(".callback-form").validate({
    messages: {
      name: "Введите ваше имя",
      phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".callback-form").find("input[name=name]").val(),
        phone: jQuery(".callback-form").find("input[name=phone]").val(),
        subject: jQuery(".callback-form").find("input[name=subject]").val()
      };
      ajaxSend('.callback-form', t);
    }
  });

  $(".call").validate({
    messages: {
      name: "Введите ваше имя",
      phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".callback-repairs").find("input[name=name]").val(),
        phone: jQuery(".callback-repairs").find("input[name=phone]").val(),
        subject: jQuery(".callback-repairs").find("input[name=subject]").val()
      };
      ajaxSend('.callback-repairs', t);
    }
  });

  $(".callback-help").validate({
    messages: {
      name: "Введите ваше имя",
      phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".callback-help").find("input[name=name]").val(),
        phone: jQuery(".callback-help").find("input[name=phone]").val(),
        subject: jQuery(".callback-help").find("input[name=subject]").val()
      };
      ajaxSend('.callback-help', t);
    }
  });

  $(".repairs").validate({
    messages: {
      name: "Введите ваше имя",
      phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".repairs").find("input[name=name]").val(),
        phone: jQuery(".repairs").find("input[name=phone]").val(),
        subject: jQuery(".repairs").find("input[name=subject]").val()
      };
      ajaxSend('.repairs', t);
    }
  });

  $(".repairs-two").validate({
    messages: {
      name: "Введите ваше имя",
      phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".repairs-two").find("input[name=name]").val(),
        phone: jQuery(".repairs-two").find("input[name=phone]").val(),
        subject: jQuery(".repairs-two").find("input[name=subject]").val()
      };
      ajaxSend('.repairs-two', t);
    }
  });

  $(".repairs-three").validate({
    messages: {
      name: "Введите ваше имя",
      phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".repairs-three").find("input[name=name]").val(),
        phone: jQuery(".repairs-three").find("input[name=phone]").val(),
        subject: jQuery(".repairs-three").find("input[name=subject]").val()
      };
      ajaxSend('.repairs-three', t);
    }
  });

  $(".repairs-four").validate({
    messages: {
      name: "Введите ваше имя",
      phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".repairs-four").find("input[name=name]").val(),
        phone: jQuery(".repairs-four").find("input[name=phone]").val(),
        subject: jQuery(".repairs-four").find("input[name=subject]").val()
      };
      ajaxSend('.repairs-four', t);
    }
  });

  $(".evoke").validate({
    messages: {
      name: "Введите ваше имя",
      phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".evoke").find("input[name=name]").val(),
        phone: jQuery(".evoke").find("input[name=phone]").val(),
        subject: jQuery(".evoke").find("input[name=subject]").val()
      };
      ajaxSend('.evoke', t);
    }
  });

  $(".review-form").validate({
    messages: {
      name: "Введите ваше имя",
      phone: "Введите ваш телефон",
      comment: "Введите ваш отзыв",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".review-form").find("input[name=name]").val(),
        phone: jQuery(".review-form").find("input[name=phone]").val(),
        subject: jQuery(".review-form").find("input[name=subject]").val(),
        comment: jQuery(".review-form").find("textarea[name=comment]").val(),
      };
      ajaxSend('.review-form', t);
    }
  });

  $(".application").validate({
    messages: {
      name: "Введите ваше имя",
      phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".application").find("input[name=name]").val(),
        phone: jQuery(".application").find("input[name=phone]").val(),
        subject: jQuery(".application").find("input[name=subject]").val(),
      };
      ajaxSend('.application', t);
    }
  });

  function ajaxSend(formName, data) {
    jQuery.ajax({
      type: "POST",
      url: "sendmail.php",
      data: data,
      success: function() {
        $(".modal").popup("hide");
        $("#thanks").popup("show");
        setTimeout(function() {
          $(formName).trigger('reset');
        }, 2000);
      }
    });
  }

});
//----------------------------------------fixed----------------------------------
$(window).scroll(function(){
    if($(this).scrollTop()>100){
        $('.header__top').addClass('header__top-active');
    }
    else if ($(this).scrollTop()<100){
        $('.header__top').removeClass('header__top-active');
    }
});

//----------------------------------------preloader----------------------------------

$(window).on('load', function(){
  $('.preloader').delay(1000).fadeOut('slow');
});