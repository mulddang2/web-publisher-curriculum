/*
selectbox를 눌렀을 때 옵션이 보여진다.
선택: 
v 1. 셀렉트박스가 닫김
2. <이용중인 구독> 텍스트가 <옵션이름>으로 변경 + 스타일
3. 다음버튼이 활성화

v 비선택: 셀렉트박스가 닫김

*/

var selectbox = document.querySelector(".selectbox"),
menu = document.querySelector(".dropdown-menu"),
option = document.querySelectorAll(".optionmenu"),
nextButton = document.querySelector(".next-button");

selectbox.addEventListener("click", function(ev){
    ev.preventDefault();
    menu.classList.toggle("show");
})

selectbox.addEventListener("blur", function(){
    menu.classList.remove("show");

})


/* <이용중인 구독> 텍스트가 <옵션이름>으로 변경 + 스타일*/
for(var i = 0; i < option.length; i++) {
    option[i].addEventListener("click", function(ev){
        ev.preventDefault();
        var value = ev.currentTarget.textContent;
        selectbox.textContent = value; //클릭할때마다 재할당
        selectbox.classList.add("selected");
        nextButton.removeAttribute("disabled") //css속성의 disable을 없애겠다는 의미
    })
} 

