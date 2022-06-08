//엘리먼트 추가

//인덱스번호 0, 1
var arr = [1, 2];
arr[4] = "하이";
console.log(arr[1]);
//-> 이렇게 하면, 2번 3번은 빈 상태고 4번이 추가됨





//엘리먼트 삭제
var value = "123";
console.log(delete value); //삭제실패 false





//오브젝트연산자
var hisProfile = {
    name: "Yohan",
    age: 29,
    likes: "movie",
}
console.log(delete hisProfile.name); //삭제완료 true
console.log(hisProfile);
console.log(hisProfile.name); //undefined

var hisProfile = ["Yohan", 29, "movie"];
console.log(hisProfile[0]);
console.log(delete hisProfile[0]);
console.log(hisProfile[0]);

//엘리먼트 삽입, 첨부 관련
var value = [1, 2];
value.unshift("a", "b"); //배열 앞에 엘리먼트 삽입
console.log(value);

var value = [1, 2];
value.push("a", "b"); //배열 끝에 엘리먼트 삽입
console.log(value);

var value = [1, 2];
var newValue = value.concat([3], [4], [5], ["A", "B"]); //배열 끝에 엘리먼트 삽입
console.log(newValue);


//앨리먼트 복사
var origin = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
var result = origin.slice(3, 7); //인덱스 번호 직전에서 끊음
console.log(result);
console.log(origin.slice(-4, -2)); //음수를 쓰면, 각 음수에서 length를 더한 값으로 계산 5랑 7이 나오니까 F,G 만 나옴


//엘리먼트 값을 문자열로 변환
// join 엘리먼트와 분리자를 하나씩 결합해서 문자열로 연결
var arr = [1, 2, 3, 4, 5];
console.log(arr.join());
console.log(typeof arr.join()); //string으로 변신함
console.log(arr.join(""));//쉼표 빼죠
console.log(arr.join(" ")); //띄어쓰기 해죠
console.log(arr.join("-")); //-로 연결해죠
console.log(arr.join("그리고말이야 ")); //글자랑 연결해죠

//toString 엘리먼트 값을 문자열로, 콤마 사용할 때
var en = ["A", "B", "C"].toString();
console.log(en); // A,B,C
var kr = [["가"], ["나"], ["다"]].toString();
console.log(kr); // 가,나,다


//엘리먼트 삭제 관련, shift, pop, splice 는 원본이 바뀐다.

//shift, 첫번째 엘리먼트를 삭제하면서 앞으로 땡긴다.
var en = ["A", "B", "C", "D"]; //얘는 원본이 안지켜짐. 정말 배열에서 삭제됨
console.log(en.shift());
console.log(en); //['B', 'C', 'D'] 
console.log(en[0]) //B 가 된다.

//pop, 마지막 엘리먼트를 삭제한다.
var en = ["A", "B", "C", "D"]; 
console.log(en.pop()); //삭제할 엘리먼트가 뜸  -> D
console.log(en); //['A', 'B', 'C'] 얘도 원본이 바뀜

//splice, 지정한 엘리먼트를 삭제한다.
//splice(삭제하고 싶은 "시작 인덱스", 삭제하고 싶은 "마지막 인덱스")
var alphabets = ["A", "B", "C", "D", "E"];
console.log(alphabets.splice(1, 3)); // 삭제한 엘리먼트 ['B', 'C', 'D']
console.log(alphabets.splice(1, 3, "ㅎㅇ")); // 셋째자리는 삭제한 애 대신 들어갈 새 엘리먼트 
console.log(alphabets) //['A', 'E']

//sort, 엘리먼트 정렬 관련 -> 작은값 부터 정렬 
var value = [4, 3, 2, 1];
console.log(value.sort()); // [1, 2, 3, 4]

var arr = ["A1", "A01", "B1", "B01"];
console.log(arr.sort()); // [A01, A1, B01, B1]

var arr = [, , 1, 2]; //[empty × 2, 1, 2]
console.log(arr);
console.log(arr.sort()); //[1, 2, empty × 2]

console.log(arr[0])

var arr = [101, 26, 7, 1234]; //[101, 1234, 26, 7] 자리순별로 보고 정렬해줌 
console.log(arr.sort())



console.log("\n예제 1번")
var arr = ["기능사", "산업기사", "기사"];
//arr 배열을 스트링으로 변경하여 출력. -> join()
//타입이 스트링으로 변경되었는지 검사, 출력.

console.log(arr.join());
console.log(typeof arr.join());


console.log("\n예제 2번")
var arr = ["가나", "다라", "마바", "사"];
//['맑은', '날씨', '보름', '달'] 로 바꾸어 출력. -> splice()

console.log(arr.splice(0, 4, '맑은', '날씨', '보름', '달'));
console.log(arr);


console.log("\n예제 3번")
var str = "웹디자인 기능사 필기 기본서";
//str을 배열 ['웹디자인', '기능사', '필기', '기본서'] 로 출력.
console.log(str.split(" ")); //구분자를 공백으로 해서 콘솔에 담는다.


console.log("\n예제 4번")
var cook = ["한식조리기능사", "중식조리기능사", "양식조리기능사", "일식조리기능사", "복어조리기능사", "조주기능사"];
//위 배열을 스트링타입으로 바꾸어 변수 cookToStr 에 할당하고 
//변수 cookToStr 값에서 '조리'를 빼고 출력하세요. //조리 -> ""
//출력결과 : 한식기능사, 중식기능사, 양식기능사...
var cookToStr = cook.join(", ");
console.log(cookToStr.replace(/조리/g, "")); //정규표현식, 모든 문자변경
