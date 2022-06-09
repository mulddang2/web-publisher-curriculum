// 모든 콘텐츠 출력 textContent
var tc= document.getElementById("title").textContent;
console.log(tc); //console.dir(tc)로 출력하면, 사용가능한 모든 property가 나옴

// 브라우저에 표시되는 텍스트만 출력 innerText
var it = document.getElementById("title").innerText;
console.log(it)

// html 태그를 포함한 텍스트 출력 innerHTML
var ih = document.getElementById("title").innerHTML;
console.log(ih)
