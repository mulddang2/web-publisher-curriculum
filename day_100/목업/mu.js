$(document).ready(function () {
    slider();
})
function slider(){
    var pcSwiper = new Swiper(".pcSwiper", {
        rewind: true,
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
        
    });
    var tabSwiper = new Swiper(".tabSwiper", {
        rewind: true,
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
    });
    var mSwiper = new Swiper(".mSwiper", {
        rewind: true,
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
    });
}