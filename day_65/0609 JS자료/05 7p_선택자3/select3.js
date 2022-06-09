var office = document.querySelector(".office");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");

//office의 첫째자식
console.log(office.firstElementChild); //ul
console.log(ul.firstElementChild); //책상

//ul의 막내자식
console.log(ul.lastElementChild); //캐비넷

//첫째 li의 다음형제
console.log(list[0].nextElementSibling); //의자

//막내 li의 이전형제
console.log(list[2].previousElementSibling); //의자

//ul의 첫번째 자식
console.log(ul.children[0]);

//ul의 두번째 자식
console.log(ul.children[1]);

//ul의 세번째 자식
console.log(ul.children[2]);


// console.log()
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()
