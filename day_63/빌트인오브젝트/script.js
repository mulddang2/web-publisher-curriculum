// var arr = [10, '스트링', true, undefined, null];

// var obj = {
//     //프로퍼티
//     //key : name,
//     //이름: "홍길동",
//     //나이: 20,
//     //취미: "게임"
// }

// console.log(obj.이름);

// if ( 10 < 20) {
//     //참이면 코드 실행
// } else if(참) {
//     //참이면 코드 실행

// } else {
//     //거짓이면 코드 실행
// }

//조건문
// var num = 10;

// if( num == 10 && num === "10" ) {
//     console.log("맞음");
// } else {
//     console.log("틀림");
// }

// var num = 10;

// if( num == 10 || num === "10" ) {
//     console.log("맞음");
// } else {
//     console.log("틀림");
// }

//반복문
var arr = [10, "스트링", true, undefined, null];

for (var i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
}

console.log("문제1");
//문제1
var book = "JS책";

if (book === "JS책") {
    console.log("book");
} else {
    console.log("다른 책");
}

console.log("\n문제2");
//문제2
for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

for (var i = 1; i <= 10; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

console.log("\n문제3");

//문제3
var i, j;
var i = 3;
for (j = 1; j <= 9; j++) {
    console.log(i + "X" + j + "=" + i * j);
}

/*
for(조건) {
  실행;
} 
*/

//문제4
function gugudan(dan) {
    for (var i = 0; i < dan.length; i++) {
        //i = 0, 1, 2
        //array[0] = 3
        //array[1] = 6
        //array[2] = 9
        //array[i] => 3, 6, 9

        for (var j = 1; j <= 9; j++) {
            console.log(dan[i] + "X" + j + "=" + dan[i] * j);
        }
    }
}

//       0 1 2
gugudan([3, 6, 9]);

console.log("\n문제5");

var cute = ["강아지", "고양이", "햄스터", "쿼카"];
// var reverse = ["강아지", "고양이", "햄스터","쿼카"];

for (var i = 0; i < cute.length; i++) {
    console.log(cute[i]);
}

for (var i = 3; i >= 0; i--) {
    console.log(cute[i]);
}

console.log("\n문제6");

var herProfile = {
    name: "전도연",
    age: 49,
    height: 163,
};

//함수 파라미터 오브젝트
function showProfile(a) {
    console.log(a);
}
showProfile(herProfile.name);
showProfile(herProfile.age + "세");
showProfile(herProfile.height + "cm");

console.log("\n문제7");

var starbucks = ["아메리카노", " 라떼", " 프라푸치노", " 아이스크림"];

function menus() {
    console.log(starbucks + `\n이달의 메뉴 : 라떼`);
}
menus();

console.log("\n문제8");
// 1. animal 배열에 스트링 타입으로 토끼와 거북이를 담는다.
// 2. animal 배열에 토끼도 있고 거북이도 있으면
// 토끼와
// 거북이
// 를 출력한다.

var animal = ["토끼", "거북이"];

if (animal.includes("토끼") && animal.includes("거북이")) {
    console.log(`토끼와\n거북이`);
}

/* 
if(animal[] === "토끼") {
  console.log("토끼와");
} else if ( animal[] === "거북이") {
  console.log("거북이");
}
*/

var str = String(123); //"1234"
var num = 10;
var arr = ["asd", "ds"];
console.log(str);
console.log(typeof str);
console.log(typeof num);
console.log(typeof arr);

// var abc = "abcdefcghjklmnopf"; //js 는 오브젝트로 판단함
// var abcArray = ["A", "B", "C", "D", "E", "F", "G", "H", "F"];
// // console.log(abc.length); //abc라고 하는 오브젝트 { }
// // console.log(abcArray.length);

var abc = "abcdefcghjklmnopf";
var abcArray = ["A", "B", "C", "D", "E", "F", "G", "H", "F"];
// console.log(abc.indexOf("f"));
// console.log(abcArray.indexOf("F"));
// console.log(abc.lastIndexOf("f"));
// console.log(abcArray.lastIndexOf("F"));

var xyz = "wxyz";
var trimPlz = "    이해하기";

// console.log(str.concat(trimPlz)); //concat 은 스트링 연결 메소드!!
console.log(trimPlz);
console.log(trimPlz.trim()); //공백제거




var str = "사용자경험지도";
console.log(str.substring(1)); //사용자경험지도 첫째 건너뛰고 출력
console.log(str.substring(2, 5)); //사용자경험지도 앞에서 둘째 건너뛰고  뒤에서 출력
console.log(str.substring(3)); //사용자경험지도 셋째 
console.log(str.substring(4)); //사용자경험지도
console.log(str.substring(5)); //사용자경험지도

console.log(str.slice(-1)); //뒤에서부터 1글자 읽음 
console.log(str.slice(-3)); //뒤에서부터 3글자 읽음


var words  = "html, css, 자바스크립트는 재밌다";
var css = /css/; //따옴표 대신 / 쓰는것 -> 정규 표현식

//match()
var result = words.match(css);
console.log(result);
document.write(result); //css

//replace()
var test = '나자나자나자나자';
console.log(test.replace(/나/g, '과')); //모든 나 를 과로 바꾸기
//플래그 쓸 때, g와 i 동시에 쓰려면 gi로 가능함


//search()


              //01234 로 "요"가 4가 됨
var helloJs = "안녕하세요 자바스크립트 잘가";


var result = helloJs.search('잘가');
console.log(helloJs.search(' ')); //공백도 포함이다. 
console.log(helloJs.search('안녕하세요')); //0 , 안 의 인덱스 번호가 나옴
console.log(helloJs.search('자바스크립트')); //6, 자 의 인덱스 번호가 나옴
console.log(helloJs.search('잘가')); //없으면 -1이 나옴


//helloJs에 잘가가 없으면 콘솔에 "여기 없자너" 출력.

if(result == -1) {
  console.log("여기 없자너");
}
//잘가를 넣었는데, 왜 "여기 없자나"가 출력되지 않을까..



