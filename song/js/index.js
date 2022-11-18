
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        margin: 20,
        nav: true,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },

            990: {
                items: 2
            },
            1100: {
                items: 3
            }
        }
    })
});

a = $(".stretcher-item");
a.on({
    mouseenter: function () {
        $(this).addClass("active");
        $(this).siblings().addClass("inactive")
    },
    mouseleave: function () {
        $(this).removeClass("active");
        $(this).siblings().removeClass("inactive")
    }
});
$(".cards figure").on({
    mouseenter: function () {
        $(this).addClass("active")
    },
    mouseleave: function () {
        $(this).removeClass("active")
    }
});


$(document).ready(function () {
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 4,
        autoPlay: true,
        dots: true,
        slidesToScroll: 2,
        prevArrow: "<img class='a-left control-c prev slick-prev' src='img/arrow-left.svg'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='img/arrow-right.svg'>",
        responsive: [

            {
                breakpoint: 811,
                settings: {
                    slidesToShow: 3,
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
});

ScrollReveal().reveal('.headline-0', { delay: 500 });
ScrollReveal().reveal('.headline-1', { delay: 900 });
ScrollReveal().reveal('.headline-2', { delay: 1500 });
ScrollReveal().reveal('.headline-3', { delay: 800 });
ScrollReveal().reveal('.headline-4', { delay: 800 });