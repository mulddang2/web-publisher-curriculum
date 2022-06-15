//이미지 주소 배열
var arr = [
    "./images/f1.jpg",
    "./images/f2.jpg",
    "./images/f3.jpg",
    "./images/f4.jpg",
    "./images/f5.jpg",
    "./images/f6.jpg",
    "./images/f7.jpg",
    "./images/f8.jpg",
    "./images/f9.jpeg",
    "./images/f10.jpg"
    
];

//aBtn을 누르면, img가 바뀐다.
var aBtn = document.querySelector("a")
var imgEl = document.querySelector("img");
var count = 0; //0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5...인덱스 번호

aBtn.addEventListener("click", change);

function change() {
    count = count + 1; //1씩 증가
    imgEl.src = arr[count]; //src값을 arr배열의 엘리먼트들로 할당 
    
    

    //조건: count가 arr.length일 때
    //실행: count값 리셋, src도 첫번째사진 주소로
    if(count === arr.length ) { 
        count = 0
        imgEl.src = arr[0]
    }
    // console.log(count)
}

var itvPlay = undefined;

//이미지에 마우스를 올리면 인터벌이 시작된다.
imgEl.addEventListener("mouseenter", function(){
    itvPlay = setInterval(change, 100);
});

//이미지에서 마우스가 나가면 인터벌이 멈춘다.
imgEl.addEventListener("mouseleave", function(){
    clearInterval(itvPlay)
});