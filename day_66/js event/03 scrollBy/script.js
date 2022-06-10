// 버튼들
var goUp = document.querySelector(".up");
var goDown = document.querySelector(".down");

//(이벤트종류, function(){})
//버튼에, 클릭이 감지되면, 실행
goDown.addEventListener("click", function(){
//클릭이 일어나면 할일
    //window.scrollBy(0, 77);
    window.scrollBy({
        top: 200, behavior: "smooth"
    });
});
goUp.addEventListener("click", function(){
//클릭이 일어나면 할일
    //window.scrollBy(0, -77); //현재스크롤 위치기준
    window.scrollBy({
        top: -200, behavior: "smooth"
    });
});