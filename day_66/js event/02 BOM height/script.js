var box1 = document.querySelector(".box1"),
box1_client = document.querySelector(".box1_client"),
box1_offset = document.querySelector(".box1_offset"),
box1_scroll = document.querySelector(".box1_scroll");

box1_client.innerText = "clientHeight " + box1.clientHeight;
box1_offset.innerText = "offsetHeight " + box1.offsetHeight;
box1_scroll.innerText = "scrollHeight " + box1.scrollHeight;
console.log(box1.scrollHeight);