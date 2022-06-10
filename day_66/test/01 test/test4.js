
/* var fruit = ["사과", "오렌지", "배", "바나나"];배열에 "멜론"을 추가하고
for문으로 사과부터 멜론까지 모든 엘리먼트를 출력하세요*/

console.log("----문제4----")

var fruit = ["사과", "오렌지", "배", "바나나"];
fruit.push("멜론");

for (var i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
}