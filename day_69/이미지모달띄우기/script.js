document.addEventListener("click", gallery);

function gallery(ev) {
    var clicked = ev.target,
        dimDiv = document.querySelector("#dimDiv"),
        dimImg = document.querySelector("#dimImg"),
        clickedId = clicked.getAttribute("id"), //속성 가져올 때
        layerImg = new Image();

    if (clicked.hasAttribute("data-cat")) {
        //hasAttribute 뜻? '가지고 있냐?' 가지고 있으면 true, 없으면 false

        layerImg.src = clicked.getAttribute("data-cat");
        layerImg.addEventListener("load", function () {
            dimImg.src = this.src;
        });

        dimDiv.classList.add("visible");
    }
    //클릭되고 있는 애가 딤일때
    if (clicked.getAttribute("id")) {
        dimDiv.classList.remove("visible");
    }
    // if( clickedId === "dimDiv"|| clickdId === "dimImg") {
    //     dimDiv.classList.remove('visible')
    // }
}
