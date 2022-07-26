$(document).ready(function () {
    $(".gallery_all").slick({
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 1500,
        centerMode: true,
        centerPadding: "100px",
        infinite: true,
        arrows: true,
        prevArrow: $(".gallery_prev"),
        nextArrow: $(".gallery_next"),
    });

    // 설교영상
    $(".video_all").slick({
        slidesToShow: 3,
        //autoplay: true,
        autoplaySpeed: 1500,
        centerMode: true,
        centerPadding: "100px",
        draggable: false,
        // 클래스명 ct2_인 요소를 버튼으로 사용함
        prevArrow: $(".video_prev"),
        nextArrow: $(".video_next"),
    });

    $(".move_top").on("click", function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
});

$(document).ready(function () {
    var position = 0;

    $(window).scroll(function () {
        if ($(window).scrollTop() <= 0) {
            position = 0;
        } else {
            position = $(window).scrollTop();
        }

        position += vh(13.89);

        $(".quick_menu").stop().animate(
            {
                top: position,
            },
            300
        );
    });
});

function vh(v) {
    var h = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
    );
    return (v * h) / 100;
}
