const cursor = document.querySelector(".cursor");

//커서의 좌표 left, top을 마우스가 위치한 곳으로 지정
document.addEventListener("mousemove", function(ev){
    cursor.style.left = ev.pageX + 'px'
    cursor.style.top = ev.pageY + 'px'
})