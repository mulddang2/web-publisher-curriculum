console.log("문제1");
//문제1
var book = "JS";

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

console.log("\n문제4");

//문제4
function gugudan(dan) {
    for (var i=0; i < dan.length; i++) {
        //i = 0, 1, 2
        //array[0] = 3
        //array[1] = 6
        //array[2] = 9
        //array[i] => 3, 6, 9

        for (var j=1; j <= 9; j++) {
            console.log(dan[i] + "X" + j + "=" + dan[i] * j);
        }
    }
}

//       0 1 2
gugudan([3,6,9]);

console.log("\n문제5");

var cute = ["강아지", "고양이", "햄스터","쿼카"];
var reverse = ["강아지", "고양이", "햄스터","쿼카"];

for (var i = 0; i < cute.length; i++) {
    console.log(reverse[i]);
}

for (var i = 3; i >= 0; i--) {
    console.log(reverse[i]);
}

console.log("\n문제6");

var herProfile = {
    name: "전도연",
    age: 49, 
    height: 163 
}

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
    console.log(starbucks +`\n이달의 메뉴 : 라떼`);
}
menus();



console.log("\n문제8");

var animal = ["토끼", "거북이"];

if(animal.includes("토끼") && animal.includes("거북이")) {
    console.log(`토끼와\n거북이`);
}

/*
var isIncluded = true

for (a in animals) {


    if (a === "토끼") {
        continue;
    }

    if (a === "거북이") {
        continue;
    }

    isIncluded = false
    break;
}

if (isIncluded) {
    console.log(`토끼와\n거북이`);
}
*/