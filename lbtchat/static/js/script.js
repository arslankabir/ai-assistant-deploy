$(document).ready(function () {
    $('.slider1').slick({
        autoplay: true,
        autoplaySpeed: 100, // Set autoplay speed to a very low value
        vertical: true, // Enable vertical scrolling
        verticalSwiping: true, // Enable vertical swiping
        arrows: false,
        dots: false,
        infinite: true,
        speed: 10000, // Set transition speed
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        draggable: false, // Disable dragging
        swipe: false, // Disable swipe
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slider2').slick({
        autoplay: true,
        autoplaySpeed: 100, // Set autoplay speed to a very low value
        vertical: true, // Enable vertical scrolling
        verticalSwiping: true, // Enable vertical swiping
        arrows: false,
        dots: false,
        infinite: true,
        speed: 10000, // Set transition speed
        slidesToShow: 2,
        slidesToScroll: 2,
        pauseOnHover: false,
        draggable: false, // Disable dragging
        swipe: false, // Disable swipe
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });


    $('.slider3').slick({
        autoplay: true,
        autoplaySpeed: 100, // Set autoplay speed to a very low value
        vertical: true, // Enable vertical scrolling
        verticalSwiping: true, // Enable vertical swiping
        arrows: false,
        dots: false,
        infinite: true,
        speed: 10000, // Set transition speed
        slidesToShow: 3,
        slidesToScroll: 3,
        pauseOnHover: false,
        draggable: false, // Disable dragging
        swipe: false, // Disable swipe
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    });

    $('.slider4').slick({
        autoplay: true,
        autoplaySpeed: 100, // Set autoplay speed to a very low value
        vertical: true, // Enable vertical scrolling
        verticalSwiping: true, // Enable vertical swiping
        arrows: false,
        dots: false,
        infinite: true,
        speed: 10000, // Set transition speed
        slidesToShow: 3,
        slidesToScroll: 3,
        pauseOnHover: false,
        draggable: false, // Disable dragging
        swipe: false, // Disable swipe
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    });

    $('.slider5').slick({
        autoplay: true,
        autoplaySpeed: 100, // Set autoplay speed to a very low value
        vertical: true, // Enable vertical scrolling
        verticalSwiping: true, // Enable vertical swiping
        arrows: false,
        dots: false,
        infinite: true,
        speed: 10000, // Set transition speed
        slidesToShow: 2,
        slidesToScroll: 2,
        pauseOnHover: false,
        draggable: false, // Disable dragging
        swipe: false, // Disable swipe
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    $('.slider6').slick({
        autoplay: true,
        autoplaySpeed: 100, // Set autoplay speed to a very low value
        vertical: true, // Enable vertical scrolling
        verticalSwiping: true, // Enable vertical swiping
        arrows: false,
        dots: false,
        infinite: true,
        speed: 10000, // Set transition speed
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        draggable: false, // Disable dragging
        swipe: false, // Disable swipe
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });



    $('.slider7').slick({
        autoplay: true,
        autoplaySpeed: 4000, // Set autoplay speed to a very low value
        arrows: false,
        dots: false,
        infinite: true,
        speed: 4000, // Set transition speed
        slidesToShow: 3,
        slidesToScroll: 3,
        swipe: true, // Disable swipe
        draggable: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $("#menuToggler").click(function(){
        $("#menu").toggle();
      });



      $(document).on('scroll', function() {
        $('.header__area-3').toggleClass('scrolled', $(this).scrollTop() > 0);
    });

    $('#brands').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        autoplay:true,
        rtl:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        smartSpeed:1500,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
      });
    

 


});