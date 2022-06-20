//DOM이 로드되면 실행하라.
$(document).ready(function () {
    $(".slider-x").slick({
        autoplay: true,
        slidesToShow: 4,
        dots: true,
        autoplaySpeed: 500,
        arrows: true,
        prevArrow: "<button>이전</button>",
        nextArrow: "<button>다음</button>",
        asNavFor: ".slider-for",
        pauseOnHover: true,
        /*반응형*/ 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $(".slider-for").slick({
        asNavFor: ".slider-x",
        slidesToShow: 4
    });
});
