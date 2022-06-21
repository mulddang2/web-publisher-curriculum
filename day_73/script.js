/*
기능 3가지
1. 4초에 한번씩 다음페이지로 
2. 화살표를 눌렀을 때 (인터벌을 멈추고) 이전/다음페이지로
3. 썸네일눌렀을 떄 (인터벌을 멈추고) 해당페이지로 
*/

function start() {
    var item = document.querySelectorAll(".item"),
        th = document.querySelectorAll(".th"),
        prev = document.querySelector(".prev"),
        next = document.querySelector(".next"),
        itemOn = undefined,
        thOn = undefined;

    //첫장에 On 클래스 추가
    var firstItem = item[0];
    var firstTh = th[0];
    firstItem.classList.add("itemOn");
    firstTh.classList.add("thOn");

    //인터벌 셋팅
    var itv = setInterval(sliderGo, 2000);

    //슬라이더 이동함수 sliderGo
    //아규먼트없이 호출하면 다음,아규먼트가 있게 호출하면 이전
    //isThat은 그냥 파라미터이름
    function sliderGo(isThat) {
        if (isThat) {
            var nextOr = "이전";
        } else {
            var nextOr = "다음";
        }

        //itemOn, thOn 할당
        itemOn = document.querySelector(".itemOn");
        thOn = document.querySelector(".thOn");

        //2초에 한번씩 itemOn, thOn 지움
        itemOn.classList.remove("itemOn");
        thOn.classList.remove("thOn");

        if (nextOr === "다음") {
            if (!itemOn.nextElementSibling) {
                //itemOn에 다음형제가 없으면 (마지막장이면)
                item[0].classList.add("itemOn");
                th[0].classList.add("thOn");
            } else {
                //마지막이 아니면 그냥 다음형제에게로
                itemOn.nextElementSibling.classList.add("itemOn");
                thOn.nextElementSibling.classList.add("thOn");
            }
        } else if (nextOr === "이전") {
            if (!itemOn.previousElementSibling) {
                //이전형제가 없을때
                item[item.length - 1].classList.add("itemOn");
                th[item.length - 1].classList.add("thOn");
            } else {
                itemOn.previousElementSibling.classList.add("itemOn");
                thOn.previousElementSibling.classList.add("thOn");
            }
        }
    } //인터벌 끝

    //버튼을 누르면 인터벌(itv)을 멈추고 수동으로 이동
    next.addEventListener("click", function(){
        clearInterval(itv);
        sliderGo();
    })
    prev.addEventListener("click", function(){
        clearInterval(itv);
        sliderGo('여기에뭐라도있으면이전버튼을누른거');
    })
    
    //썸네일 클릭하면 해당페이지로
    for(var i = 0; i < th.length; i++) {
        th[i].setAttribute("data-index", i);

        th[i].addEventListener("click", function(ev){
            clearInterval(itv);

            //비활성화(다 뺴)
            itemOn = document.querySelector(".itemOn");
            thOn = document.querySelector(".thOn");
            itemOn.classList.remove("itemOn");
            thOn.classList.remove("thOn");

            //i번째로 활성화
            var idx = ev.target.getAttribute('data-index');
            ev.target.classList.add("thOn");
            item[idx].classList.add("itemOn");
        })
    }
}
start();


/*
function gogoggo(파라미터1, 파라미터2) {
    파라미터1 + 파라미터2
}
//함수호출문
gogogogo(1,2)
*/
