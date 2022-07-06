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
    hover();
});
solutionSlideNext.addEventListener("click", function () {
    hashMove(1);
    hover();
});

function hashMove(param) {
    if (param) {
        var nextClicked = "다음해시";
    } else {
        var prevCliked = "이전해시";
    }
    hashOn = document.querySelector('.hash.on');
    for(var i = 0; i < hash.length; i++){
        hash[i].classList.remove('on');
    }
    if(nextClicked === '다음해시') {
        if( !hashOn.nextElementSibling) {
            hash[0].classList.add('on');
        } else {
            hashOn.nextElementSibling.classList.add('on')
        }
    } else if ( prevCliked === '이전해시') {
        if( !hashOn.previousElementSibling ) {
            hash[3].classList.add('on');
        } else {
            hashOn.previousElementSibling.classList.add('on');
        }
    }
};

/* solution slider active
.swiper-slide-active ㄹㅏㄴㅡㄴ ㅋㅡㄹㄹㅐㅅㅡ ㅁㅕㅇㅇㅣ ㅈㅜㅇㅓㅈㅣㄴㄷㅏ
*/
function hover() {
    var hoverOn = document.querySelectorAll('.solutionSlider .swiper-slide-active');
    var hoverOff = document.querySelectorAll('.solutionSlider .swiper-slide');

    if(hoverOn.length > 0) {
        //.swiper-slide-active 라는 클래스가 있다면  hoverOn 변수에 배열을 담을 수 있다.
 //.swiper-slide-active 라는 클래스가 없다면 에러뜸.
        for( var i = 0; i < hoverOff.length; i++) {
            hoverOff[i].classList.remove('hover');
        }
        hoverOn[0].classList.add('hover')
    }
}
