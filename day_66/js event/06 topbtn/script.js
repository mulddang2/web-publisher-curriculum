//스크롤이 어느정도 내려오면 탑버튼이 보인다
//탑버튼을 클릭하면 맨 위로 스윽 

var topbtn = document.querySelector(".topbtn"),
doc = document.documentElement,  //현재 웹문서
height = doc.scrollHeight, //현재 웹문서의 height 
now = undefined;



//스크롤이 내려오면 1/4 지점에서 .show

if( height != 0 ){
    var showUp = height / 4; // 1/4 지점
}

window.addEventListener("scroll", function(){
    //scrollTop은 현재 유저가 보고 있는 스크롤 위치
    now = doc.scrollTop;
    if (now > showUp) {
        //topbtn에 .show 넣기
        topbtn.classList.add("show")
    } else {
        //.show 빼기
        topbtn.classList.remove("show")
    }
});
                                    //클릭한 대상
topbtn.addEventListener("click", function(ev) {
    // console.log(ev);
    ev.preventDefault(); //기본속성 방어
    scrollToTop();
});

//scrollToTop ? 맨 위로 올라가게 하는 함수
function scrollToTop(){
    var intv = setInterval(function(){
        if(now != 0) {
            window.scrollBy(0, -50) //50px 씩 위로 올려줌
        } else {
            clearInterval(intv); //올라가는걸 멈춰라
        }
    }, 3); //0.003초만에 올라감
}
