let header = document.querySelector("header"),
    mainvisual = document.querySelector(".mainvisual"),
    motion1 = document.querySelector(".motion1"),
    dim = document.querySelector(".layer"),
    motion2 = document.querySelector(".motion2"),
    motion2main = document.querySelector(".motion2 h1"),
    motion2body1 = document.querySelector(".motion2 .body1"),
    motion2body2 = document.querySelector(".motion2 .body2"),
    //전체스크롤
    scrollHeight,
    //실제스크롤
    realHeight,
    //스크롤위치
    scrollNow,
    //퍼센트환산
    changePer,
    //소수점제거
    scrollPercent;

window.addEventListener("scroll", setScroll);
function setScroll() {
    scrollHeight = mainvisual.offsetHeight;
    realHeight = scrollHeight - window.innerHeight;
    scrollNow = window.scrollY;
    changePer = (scrollNow / realHeight) * 100;
    scrollPercent = Math.round(changePer);

    // 0 ~ 10
    if (scrollPercent >= 0) {
        init();
        dim.classList.remove('dim');

    }
    //10이상
    if (scrollPercent > 10) {
        motion1.classList.remove('in');
        motion1.classList.add('out');
        dim.classList.add('dim');
    }
    //11 ~ 85 maincopy
    if ( scrollPercent > 11 && scrollPercent < 85) {
        motion2main.classList.add('in');
    } else {
        motion2main.classList.remove('in');
    }

    //30 ~ 85 첫번째p
    if( scrollPercent > 30 && scrollPercent < 85) {
        motion2body1.classList.add('in');
    } else {
        motion2body1.classList.remove('in');
    }

    //40 ~ 85 두번째p
    if( scrollPercent > 40 && scrollPercent < 85) {
        motion2body2.classList.add('in');
    } else {
        motion2body2.classList.remove('in');
    }
    //메인비쥬얼이 끝나면 dim은 사라진다.
    //header의 bgc가 하얀색으로, 글씨들은 #151515로. 

    
}

function init() {
    motion1.classList.add('in');
    motion1.classList.remove('out');
}
init();