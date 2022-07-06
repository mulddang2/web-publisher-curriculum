$(".portfolio-item").isotope({
    itemSelector: ".item"
});

//class name active
var lists = document.querySelectorAll(".portfolio-menu li");
for (var i = 0; i < lists.length; i++) {
    lists[i].addEventListener("click", function (ev) {
        another();
        ev.target.classList.add("active");
        var hashtag = ev.target.getAttribute('data-filter');
        $(".portfolio-item").isotope({
            filter: hashtag
        });
    }); 
}

//active class remove function 
function another() {
    for (var i = 0; i < lists.length; i++) {
        lists[i].classList.remove("active");
    }
}
