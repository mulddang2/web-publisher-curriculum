const pText = document.querySelectorAll("p");
for(var i = 0; i < pText.length; i++) {
    pText[i].addEventListener("click", function(){
        // console.log(this) //사용자가 클릭한 것 가리킴
        if ( this.style.color === "pink") {
            this.style.color = "black";
        } else {
            this.style.color = "pink";
        }
    })
}