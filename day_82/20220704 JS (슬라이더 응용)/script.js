// 메인비쥬얼 슬라이더
var mainVisual = new Swiper(".sec1", {
    loop: true,
    speed: 1000,
    parallax: true,
    resistanceRatio: 0,
    navigation: {
        nextEl: ".mainSlideNext",
        prevEl: ".mainSlidePrev",
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".mainSlidePager",
        clickable: true,
    },
    autoplayDisableOnInteraction: true,
});

//재생, 일시정지 토글버튼 구현
var stopMainSlider = document.querySelector(".stopMainSlider");
stopMainSlider.addEventListener("click", stopOrStart);

function stopOrStart(ev) {
    ev.currentTarget.classList.toggle("tog");
    mainVisual.autoplay.start();
    if (stopMainSlider.classList.contains("tog")) {
        console.log("tog가 있음. 스톱상태임");
        mainVisual.autoplay.stop();
    } else {
        console.log("tog가 없음. 재생상태임");
    }
}

//솔루션 슬라이더
var solutionSlider = new Swiper(".solutionSlider", {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 30,
    navigation: {
        nextEl: ".solutionSlideNext",
        prevEl: ".solutionSlidePrev",
    },
});

//솔루션 슬라이더 해시태그
var solutionSlidePrev = document.querySelector(".solutionSlidePrev"),
    solutionSlideNext = document.querySelector(".solutionSlideNext"),
    hash = document.querySelectorAll(".hash"),
    hasOn = undefined;

solutionSlidePrev.addEventListener("click", function () {
    hashMove();
});
solutionSlideNext.addEventListener("click", function () {
    hashMove(1);
});
function hashMove(param) {
    if (param) {
        var nextClicked = "다음해시";
        console.log(nextClicked);
    } else {
        var prevCliked = "이전해시";
        console.log(prevCliked);
    }
}
