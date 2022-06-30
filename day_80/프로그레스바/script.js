window.onload = function() {
    var progress = document.querySelector('.progress'),
    num = document.querySelector('.num');

    function getPercent() {
        //현재 문서의 높이
        var scrollHeight = document.documentElement.offsetHeight,
        //창 내부높이 제외
        scrollRealHeight = scrollHeight - window.innerHeight,
        //현재 스크롤의 위치
        winScrollTop = window.pageYOffset,
        //백분율 계산
        scrollPercent = (winScrollTop / scrollRealHeight) * 100,
        //소수점반올림
        textPercent = Math.round(scrollPercent);

        //h2에 글씨 삽입
        num.innerText = textPercent + '%';
        //.progress의 width값 수정
        progress.style.width = scrollPercent + '%';
    }
    window.addEventListener('scroll', getPercent);

} 