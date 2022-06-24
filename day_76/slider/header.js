/*
1. 스크롤이 
linebanner 의 높이 + header-top의 높이보다 크면 
header-bottom 에 classList.add('fix')
*/
var linebanner = document.querySelector(".linebanner"),
    headerTop = document.querySelector(".header-top"),
    headerBottom = document.querySelector(".header-bottom"),
    headerHeight = linebanner.offsetHeight + headerTop.offsetHeight;

/*윈도우에 '스크롤'이벤트가 발생하면 {
    if(스크롤이 headerHeight 보다 크면) {
        headerBottom에 fix 추가
    } else {
        headerBottom에 fix 제거
    }
*/
window.addEventListener("scroll", function () {
    if (window.scrollY > headerHeight) {
        headerBottom.classList.add("fix");
    } else {
        headerBottom.classList.remove("fix");
    }
});

/*
2. 인풋이 클릭되면 .dropbox가 보여짐(display: block) 
                    width가 길어짐
        다른곳을 클릭하면 .dropbox가 가려짐(display:none)
                        width가 짧아짐
*/
var search = document.querySelector("#search"),
    dropbox = document.querySelector(".dropbox");
blurSearchWidth = search.offsetWidth;
focusSearchWidth = search.offsetWidth + 100;

search.addEventListener("click", function () {
    dropbox.style.display = "block";
    this.style.width = focusSearchWidth + "px";
});
search.addEventListener("blur", function () {
    dropbox.style.display = "none";
    this.style.width = blurSearchWidth + "px";
});
/*search를 클릭하면 할일{
    드롭박스의 display: block
    search의 width = focusSearchWidth
}
search에 blur됐을때 할일 {
    드롭박스의 display: none
    search의 width = blurSearchWidth
}
*/
