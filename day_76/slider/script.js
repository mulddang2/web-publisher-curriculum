$(document).ready(function(){
    $('.slick-visual').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow: $('.visual-prev'),
        nextArrow: $('.visual-next'),
        dots: true,
        dotsClass: "visual-dots"
    });
    $('.slick-cate').slick({
        prevArrow: $('.cate-prev'),
        nextArrow: $('.cate-next')
    });
    //이전, 다음버튼 
});

const swiper = new Swiper('.mySwiper', {
    loop: true,
    navigation: {
        nextEl: '.item-next',
        prevEl: '.item-next'
    }
})