var a = 1;
function outer() {
    console.log(a);
    function inner() {
        console.log(a)
    }
    inner();
    console.log(a);
}
outer();
console.log(a);