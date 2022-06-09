// 쿼리셀렉터로 box-1 선택
var a = document.querySelector(".box-1");
//console.log(a.children[0]);

// 클래스네임으로 box-1의 자식 선택 
var b = document.getElementsByClassName('box-2');
console.log(b[1].children);


//console.log(b[0].children)



// 쿼리셀렉터올로 box-1의 자식 선택
var c = document.querySelectorAll(".box-1 p");
//console.log(c)