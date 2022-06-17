//변수
var header = document.querySelector("header"),
    lists = document.querySelector(".mainmenu > li"),
    submenu = document.querySelector(".submenu");

//드롭다운 메뉴효과
header.addEventListener("mouseover", function () {
    header.style.height = 400 + "px";
    header.classList.add("active");

});
header.addEventListener("mouseout", function () {
    header.classList.remove("active");
    header.style.height = 50 + "px";

    
});

//스크롤효과
window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});

// if(스크롤이 0 보다 크면){
//     헤더에 active 라는 클래스 붙이기
// }else {
//     헤더에 active 라는 클래스떼기
// }
