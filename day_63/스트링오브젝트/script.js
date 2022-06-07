var str = "강아지, 고양이, 햄스터, 쿼카";
var splitByDot = "니트.도트"
var userNum = "020-0000-0000";
var userNumArr = userNum.split("-");

//스플릿
// console.log(str.split(","));
// console.log(splitByDash.split("-"));
// console.log(splitByDot.split("."))

//만약 전화번호의 앞자리가 010이 아니라면 "010 번호로 입력해주세요" 출력
if(userNumArr[0] != 010) {
  console.log("010 번호로 입력해주세요")
} else {
  console.log("정상 입력 되었습니다.")
}