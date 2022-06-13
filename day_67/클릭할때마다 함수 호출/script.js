var btn = document.querySelector(".btn");
btn.addEventListener("click", createEl);
function createEl() {
    //엘리먼트 노드 생성
    const aEl = document.createElement("a");

    //엘리먼트 노드 body 태그의 자식으로
    document.body.appendChild(aEl);

    //생성한 엘리먼트에 텍스트 노드 연결 (텍스트도 자식임)
    const textNode = document.createTextNode("사전");
    document.querySelector("a").appendChild(textNode);

    //생성한 엘리먼트에 어트리뷰트 노드 연결
    const href = document.createAttribute("href");
    href.value = "https://ko.dict.naver.com/#/main";
    document.querySelector("a").setAttribute("href", href.value);
}
