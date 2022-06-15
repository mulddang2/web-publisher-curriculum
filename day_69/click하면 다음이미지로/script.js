//이미지 주소 배열
var arr = [
    "./images/img/1.jpg",
    "./images/img/2.jpg",
    "./images/img/3.jpg",
    "./images/img/4.jpg",
    "./images/img/5.jpg",
    "./images/img/6.jpg"
];

var imgEl = document.querySelector("img");
var count = 0; //0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5...인덱스 번호

imgEl.addEventListener("click", change);

function change() {
    count = count + 1; //1씩 증가
    imgEl.src = arr[count]; //src값을 arr배열의 엘리먼트들로 할당 
    
    

    //조건: count가 arr.length일 때
    //실행: count값 리셋, src도 첫번째사진 주소로
    if(count === arr.length ) { 
        count = 0
        imgEl.src = arr[0]
        // setInterval()
    }
    console.log(count)
}
setInterval(function(){}, 100);

