var modal = document.querySelector(".modal"),
    modalContainer = document.querySelector(".modalContainer"),
    skipToday = document.querySelector(".skipToday"),
    justClose = document.querySelector(".close");

/*
1. 쿠키 생성 함수
2. 쿠키 삭제 함수
3. 쿠키 검사 함수
4. 버튼마다 다른 함수가 실행되게
*/

//1. 쿠키 생성 함수 setCookie
//->쿠키를 생성할 때는 어플리케이션탭의 Name/Value/Expires를 기재해야함
function setCookie(name, value, expires) {
    var date = new Date(); //현재 날짜정보 할당
    date.setDate(date.getDate() + expires);

    var makeCookie = '';
    makeCookie += name + '=' + value + ';';
    makeCookie += 'Expires=' + date.toUTCString();

    document.cookie = makeCookie;
}
//setCookie('오늘의집', 'Main', 1);

//2. 쿠키 삭제 함수 deleteCookie
function deleteCookie(name) {
    var date = new Date();
    date.setDate(date.getDate() -1); //어제 날짜로 set

    var setCookie = '';
    setCookie += name + "=Main;"; //오늘의집=Main;
    setCookie += 'Expires=' + date.toUTCString();

    document.cookie = setCookie;
}

//3. 쿠키 검사 함수 (사용자 쿠키항목 중 '오늘의집'이라는 이름의 쿠키가 있는지 검사)
function checkCookie(name) {
    var cookies = document.cookie.split(";"); //스트링을 ';'기준으로 배열로 반환
    //ex. 만약에;이런;형태의;스트링이;있다면
    //[만약에, 이런, 형태의, 스트링이, 있다면];
    console.log(cookies);

    var visited = false; //방문한적 있니?

    for (var i in cookies) {
        if (cookies[i].indexOf(name) > -1) {
            //오늘의 집이 배열에 있으면
            visited = true;
            console.log(visited);
        }
    }
    //유저의 서버에 오늘의집 쿠키가 있다면(오늘하루안보기를 눌렀다면)
    if (visited) {
        modalContainer.style.display = 'none';
    } else {
        modalContainer.style.display = 'block';
    }
}
checkCookie("오늘의집");

skipToday.addEventListener("click", function () {
    modalContainer.style.display = 'none';
    setCookie("오늘의집", "Main", 1); //쿠키생성함수호출
});
justClose.addEventListener("click", function () {
    modalContainer.style.display = 'none';
    deleteCookie("오늘의집");
});
//바깥을 클릭하면 닫는다
modalContainer.addEventListener("click", function(){
    this.style.display = 'none';
})
