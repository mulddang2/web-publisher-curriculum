// a 에 마우스를 올리면 drop이 

var header = document.querySelector("header");
var gnb = document.querySelector(".gnb");
gnb.addEventListener("mouseover", function(){
    header.style.height = "400" + "px";
})
gnb.addEventListener("mouseout", function(){
    header.style.height = "60" + "px";
})


//메뉴에 마우스를 올리면 drop이 서브메뉴로 나타나게
var menu = document.querySelectorAll(".gnb li a");

for(var i = 0; i < menu.length; i++) {
    menu[i].addEventListener("mouseover", function(){
        this.nextElementSibling.classList.add("on")
    });
    menu[i].addEventListener("mouseout", function(){
        // this.nextElementSibling.classList.remove("on")
    });
}