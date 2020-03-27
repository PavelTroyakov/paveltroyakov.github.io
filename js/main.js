$(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade:true,
        autoplay: 3000,
    });

    $('.header-btn').on('click', function(){
        $('.menu').addClass('active');
        
    });

    $('.close-btn').on('click', function(){
        $('.menu').removeClass('active');

    });
});