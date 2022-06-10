var box = document.querySelector('.box');
var rabbit = document.querySelector('.rabbit');
// console.log(box);
// console.log(rabbit);


//box에 마우스가 들어왔을때, top 0
box.addEventListener("mouseenter", function(){
    rabbit.style.top = 0 + "px";
});


//box에서 마우스가 나갔을때 top 500
box.addEventListener("mouseout", function(){
    rabbit.style.top = 500 + "px";
});