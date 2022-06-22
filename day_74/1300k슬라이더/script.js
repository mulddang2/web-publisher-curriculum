$(document).ready(function(){
    $('.slick-visual').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        dotsClass: "slick-dots",
        prevArrow: $('.prevArrow'), //이전 화살표 클래스
        nextArrow: $('.nextArrow'), //다음 화살표 클래스
        customPaging: function(slider, i){
            $(slider.$slides[i]).data();
            if( i == '0') {
                i = "더블더블케이";
            } else if ( i == '1') {
                i = "상반기결산"
            } else if (i == '2') {
                i = "썸머 페스티벌"
            } else if (i == '3') {
                i = "푸드위크"
            } else if (i == '4') {
                i = "빅브랜드 페스타"
            } else if (i == '5') {
                i = "일간작가전"
            } else if (i == '6') {
                i = "보다나"
            } else if (i == '7') {
                i = "왕자행거"
            } else if (i == '8') {
                i = "홈갤러리 할인전"
            } 
            // else if (i == '9') {
            //     i = "금주의 신상";
            // }

            return'<a class = "dot">' + i + '</a>';
        }
    })
});