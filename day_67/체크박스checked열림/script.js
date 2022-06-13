/*체크박스에 체크를 한 다음,
버튼을 누르면 경고창에 value가 뜨게.
*/
var btn = document.querySelector(".btn");
btn.addEventListener("click", getCheck);
function getCheck() {
    //체크박스 전부 checkBox에 담기
    var checkBox = document.querySelectorAll("[type='checkbox']");
    
    //체크박스에 체크가 되어있는지 검사
    for(var i = 0; i < checkBox.length; i++) {
        if (checkBox[i].checked === true){
            alert(checkBox[i].value);
        }
    }
    //console.log(checkBox[0]);
}
