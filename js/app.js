$(document).ready(function() { 
    $('.food-slider').slick({  
        autoplay: true,
        slidesToShow:3, 
        slidesToScroll: 1, 
        prevArrow: ".prev-button", 
        nextArrow: ".next-button",
        responsive: [
            { 
                breakpoint: 576, 
                settings: { 
                    slidesToShow:1,
                }
            }
        ]
    }); 

    $('.nav-trigger').click(function(){ 
        $('.site-content-wrapper').toggleClass('scaled');
    }); 

});