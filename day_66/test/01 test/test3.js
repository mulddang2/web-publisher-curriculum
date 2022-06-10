/*
"영어 국어 과학 수학 미술 체육" 스트링타입을 배열타입으로 변환하고
각 과목이름 옆에 "A+"를 추가하여 출력하세요.

!! 반드시 배열타입으로 변환하는 메서드와 for문을 사용하세요
*/
console.log("----문제3----");

var subject = "영어 국어 과학 수학 미술 체육";
console.log(typeof subject); //스트링타입 확인

var arr = subject.split(" ");
console.log(arr);
console.log(typeof arr); //object 확인


//각 과목이름 옆에 "A+"를 추가하여 출력하세요.
for(var i = 0; i < arr.length; i++) {
    console.log(arr[i] + "A+")

    //체육 뒤에 붙이는것?    
}

