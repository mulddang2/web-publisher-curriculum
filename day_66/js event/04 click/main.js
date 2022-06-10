var good  = document.querySelector('.good');
var container = document.querySelector('.container');
//container을 클릭하면, 콘솔에 "good"출력
container.addEventListener("click", function(){
    //good에 클래스 추가
    good.classList.toggle("active");
    console.log(good);
});
