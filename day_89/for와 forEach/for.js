let closeBtn = document.querySelector('#close'),
faqDiv = document.querySelectorAll('.faq'),
question = document.querySelectorAll('.question'),
answer = document.querySelectorAll('.answer');

// 이 함수는 answer를 여닫는 일을 합니다.
openIt();

function openIt(){
    // answer배열의 엘리먼트마다 반복
    for ( var i = 0; i < answer.length; i++) {
        answer[i].style.display = 'none';
    }
    let getAnswer = document.querySelector('.faq.getAnswer .answer');
    getAnswer.style.display = 'block';
}

// 배열명.forEach(함수명) 포이치는 배열에서만 사용가능한 반복문.
for (var a = 0; a < question.length; a++) {
    question[a].addEventListener('click', function(ev){
        for(var x = 0; x < faqDiv.length; x++) {
            faqDiv[x].classList.remove('getAnswer')
        }
        ev.target.parentNode.classList.add('getAnswer');
        openIt();
    })
}

// 모두 닫기 (모든 answer에 display:none)
closeBtn.addEventListener('click', function(){
    for(var i = 0; i < answer.length; i++) {
        answer[i].style.display = 'none';
    }
})






