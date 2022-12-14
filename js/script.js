$(document).ready(function() {

    $('#menu-btn').on('click', function(e){
        $('.header').addClass('active');
        $('.navbar').addClass('active');
        
    });
    $('#nav-close').on('click', function(e){
        $('.header').removeClass('active');
        $('.navbar').removeClass('active');
        
    });
    $('#search-btn').on('click', function(e){
        $('.search-form').addClass('active');
    });
    $('#close-search').on('click', function(e){
        $('.search-form').removeClass('active');
    });
    $(window).scroll(function() {
        $('.header').removeClass('active');
        $('.navbar').removeClass('active');
        if(window.scrollY > 0){
            $('.header').addClass('active');
        } else {
            $('.header').removeClass('active');
        }
    });
    
    var swiper = new Swiper(".home-slider", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });
    var swiper = new Swiper(".product-slider", {
        loop:true,
        grabCursor:true,
        spaceBetween:20,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
              },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          },
    });
    var swiper = new Swiper(".review-slider", {
      loop:true,
      grabCursor:true,
      spaceBetween:20,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      breakpoints: {
          0: {
              slidesPerView: 1,
            },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        },
    });
    var swiper = new Swiper(".blogs-slider", {
      loop:true,
      grabCursor:true,
      spaceBetween:10,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      breakpoints: {
          0: {
              slidesPerView: 1,
            },
          768: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
          },
        },
    });
    var swiper = new Swiper(".clients-slider", {
      loop:true,
      grabCursor:true,
      spaceBetween:10,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
            slidesPerView: 1,
          },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
      } else {
        $('.go-top').fadeOut(200);
      }
    });
    $('.go-top').click(function(event) {
      event.preventDefault();
      
      $('html, body').animate({scrollTop: 0}, 300);
    });
    $(".flex-slide").each(function(){
      $(this).hover(function(){
        $(this).find('.flex-title').css({
          transform: 'rotate(0deg)',
          top: '10%'
        });
        $(this).find('.flex-about').css({
          opacity: '1'
        });
      }, function(){
        $(this).find('.flex-title').css({
          transform: 'rotate(90deg)',
          top: '15%'
        });
        $(this).find('.flex-about').css({
          opacity: '0'
        });
      })
    });
    $('a[href*="#"]').on('click', function(e) {
      $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top,
      }, 500, 'linear');
  });
    
    
    
    
    
    
    
    
    
    
});