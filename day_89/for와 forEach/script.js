let closeBtn = document.querySelector('#close'),
faqDiv = document.querySelectorAll('.faq'),
question = document.querySelectorAll('.question'),
answer = document.querySelectorAll('.answer');

//이 함수는 answer를 여닫는 일을 합니다.
openIt();

function openIt() {
    //answer 배열의 엘리먼트마다 반복
    answer.forEach(hideAnswer);
    function hideAnswer(elem) {
        elem.style.display = 'none'
    }
    let getAnswer = document.querySelector('.faq.getAnswer .answer')
    getAnswer.style.display = 'block';
}

//배열.forEach( 함수명 ) 포이치는 배열에서만 사용가능한 반복문.
question.forEach(setClassList);
function setClassList(elem) {
    elem.addEventListener('click', function(ev){
        faqDiv.forEach(function(faq){
            faq.classList.remove('getAnswer');
        })
        ev.target.parentNode.classList.add('getAnswer')
        openIt();
    })

}


//모두 닫기 (모든 answer 에 display: none)
closeBtn.addEventListener('click', function(){
    answer.forEach(function(elem){
        elem.style.display = 'none';
    })
})