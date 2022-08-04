/*
header에 마우스가 올라가면
header의 height가 
드롭다운 중 가장 높은 height 값으로 지정되어야함.
*/

let header = document.querySelector("header"),
    dropdown = document.querySelectorAll("ul.dropdown"),
    headerHeight = header.offsetHeight,
    dropdownHeight = 0;

for (var i = 0; i < dropdown.length; i++) {
    if (dropdown[i].offsetHeight > dropdownHeight) {
        dropdownHeight = dropdown[i].offsetHeight;
    }
    dropdown[i].style.height = dropdownHeight + "px";
}

header.addEventListener("mouseover", setHeight);
header.addEventListener("mouseout", function () {
    this.style.height = headerHeight + "px";
});

function setHeight() {
    this.style.height = dropdownHeight + headerHeight + "px";
}

/* 가장 긴 dropdown의 height로
나머지 dropdown의 height를 맞춰준다 */

/* 모바일 슬라이딩 메뉴 
버거 버튼 누르면 클래스명 visible (left: 0) 
열린상태의 히든메뉴를 누르면 hidden(left: -85%) */

let burger = document.querySelector(".burger"),
    hiddenMmenu = document.querySelector(".hiddenMmenu");

burger.addEventListener("click", function () {
    hiddenMmenu.classList.toggle("visible");
});
hiddenMmenu.addEventListener("click", function () {
    this.classList.remove("visible");
});
