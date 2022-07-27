$(".mainvisual").slick({
    slidesToShow: 1,
    infinite: true,
    //autoplay: true,
    dots: true,
    dotsClass: "slick-dots",
    arrows: false,
});
$(document).ready(function () {
    //갤러리
    $(".gallery_all").slick({
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 1500,
        centerMode: true,
        centerPadding: "100px",
        infinite: true,
        prevArrow: $(".gallery_prev"),
        nextArrow: $(".gallery_next"),
    });

    // 설교영상
    $(".video_all").slick({
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 1500,
        centerMode: true,
        centerPadding: "100px",
        draggable: false,
        infinite: true,
        // 클래스명 ct2_인 요소를 버튼으로 사용함
        prevArrow: $(".video_prev"),
        nextArrow: $(".video_next"),
    });

    //우리소식
    $("ul.news").slick({
        slidesToShow: 3,
        autoplay: true,
        loop: true,
        autoplay: true,

        // 클래스명 ct2_인 요소를 버튼으로 사용함
        prevArrow: $(".news_prev"),
        nextArrow: $(".news_next"),
    });
});

//탑버튼 기능 추가
$(document).ready(function () {
    $(".move_top").on("click", function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
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

$(document).ready(function () {
    //클릭하면, drop-menu 보이기
    //드롭이 안보이면 7.59vh(82px) 이다. 보일 때는, 56.94vh(615px)
    var gnb = document.querySelector(".gnb"),
        header = document.getElementById("header");

    var headerDrop = $(".header_drop");
    var dropInner = $(".header_drop_inner");
    gnb.addEventListener("mouseenter", function () {
        console.log("mouseenter");

            headerDrop.stop().animate(
                {
                    height: vh(56.94),
                },
                300
            );
            // dropInner.stop().animate(
            //     {
            //         height: vh(56.94),
            //     },
            //     300
            // );
    });
    header.addEventListener("mouseleave", function () {
        headerDrop.stop().animate(
            {
                height: vh(0),
            },
            300
        );
        // dropInner.stop().animate(
        //     {
        //         height: vh(0),
        //     },
        //     300
        // );
        // dropInner.classList.remove("show"),
            // drop.style.height = 0;
            //list.style.display = 'none'
            console.log("mouseleave");
    });

    var menuTitles = document.querySelectorAll(".menu_title");



    menuTitles.forEach(function(menuTitle) {
        menuTitle.addEventListener("mouseover", function(evt) {
            console.log("evt" + evt);
            //evt.currentTarget.
        });
    });
});

function vh(v) {
    var h = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
    );
    return (v * h) / 100;
}
