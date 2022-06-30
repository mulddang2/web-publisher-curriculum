function b() {
    function a() {
        var varA = 'a'
        console.log(varA)
    }
    var varB = 'b';
    console.log(varB);
    a();
}
b();
console.log('글로벌')