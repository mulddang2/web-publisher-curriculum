var btn = document.querySelector('.run-code-btn'),
grid = document.querySelector('#grid-container'),
value1 = document.querySelector('.value1'),
value2 = document.querySelector('.value2'),
value3 = document.querySelector('.value3'),
value4 = document.querySelector('.value4'),
value5 = document.querySelector('.value5'),
// value6 = document.querySelector('.value6'),
// value7 = document.querySelector('.value7'),
// value8 = document.querySelector('.value8'),
// value9 = document.querySelector('.value9'),
testItem = document.querySelector('.item1');


function runCode1() {
    grid.className = "";
    grid.classList.add('grid-template-2');
}
function runCode2() {
    grid.className = "";
    grid.classList.add('grid-template-repeat');
}
function runCode3() {
    grid.className = "";
    grid.classList.add('grid-template-minmax');
}
function runCode4() {
    grid.className = "";
    grid.classList.add('grid-template-naming');
}
function runCode5() {
    grid.className = "";
    grid.classList.add('grid-template-fraction');
}
function runCode6() {
    grid.className = "";
    grid.classList.add('grid-template-fraction2');
}
function runCode7() {
    grid.className = "";
    grid.classList.add('grid-area');
}

//(열)align-items
function alignItems1() {
    grid.style.alignItems = 'start';
    value1.innerText = 'start';
}
function alignItems2() {
    grid.style.alignItems = 'center';
    value1.innerText = 'center';
}
function alignItems3() {
    grid.style.alignItems = 'end';
    value1.innerText = 'end';
}
function alignItems4() {
    grid.style.alignItems = 'stretch';
    value1.innerText = 'stretch';
}
//(item1) align-self
function alignSelf1() {
    testItem.style.alignSelf = 'start';
    value2.innerText = 'start';
}
function alignSelf2() {
    testItem.style.alignSelf = 'center';
    value2.innerText = 'center';
}
function alignSelf3() {
    testItem.style.alignSelf = 'end';
    value2.innerText = 'end';
}
function alignSelf4() {
    testItem.style.alignSelf = 'stretch';
    value2.innerText = 'stretch';
}
//(행)justify-content
function justifyItems1() {
    grid.style.justifyItems = 'start';
    value3.innerText = 'start';
}
function justifyItems2() {
    grid.style.justifyItems = 'center';
    value3.innerText = 'center';
}
function justifyItems3() {
    grid.style.justifyItems = 'end';
    value3.innerText = 'end';
}
function justifyItems4() {
    grid.style.justifyItems = 'stretch';
    value3.innerText = 'stretch';
}
//(item1) justify-self 
function justifySelf1() {
    testItem.style.justifySelf = 'start';
    value4.innerText = 'start';
}
function justifySelf2() {
    testItem.style.justifySelf = 'center';
    value4.innerText = 'center';
}
function justifySelf3() {
    testItem.style.justifySelf = 'end';
    value4.innerText = 'end';
}
function justifySelf4() {
    testItem.style.justifySelf = 'stretch';
    value4.innerText = 'stretch';
}
// (레이아웃) justify-content
function justifyContent1(){
    grid.style.justifyContent = 'flex-start';
    value5.innerText = 'flex-start';
}
function justifyContent2(){
    grid.style.justifyContent = 'center';
    value5.innerText = 'center';
}
function justifyContent3(){
    grid.style.justifyContent = 'flex-end';
    value5.innerText = 'flex-end';
}
function justifyContent4(){
    grid.style.justifyContent = 'space-between';
    value5.innerText = 'space-between';
}
function justifyContent5(){
    grid.style.justifyContent = 'space-around';
    value5.innerText = 'space-around';
}
function justifyContent6(){
    grid.style.justifyContent = 'space-evenly';
    value5.innerText = 'space-evenly';
}
//(레이아웃) align-content
function alignContent1(){
    grid.style.alignContent = 'flex-start';
    value6.innerText = 'flex-start';
}
function alignContent2(){
    grid.style.alignContent = 'center';
    value6.innerText = 'center';
}
function alignContent3(){
    grid.style.alignContent = 'flex-end';
    value6.innerText = 'flex-end';
}
function alignContent4(){
    grid.style.alignContent = 'space-between';
    value6.innerText = 'space-between';
}
function alignContent5(){
    grid.style.alignContent = 'space-around';
    value6.innerText = 'space-around';
}
function alignContent6(){
    grid.style.alignContent = 'space-evenly';
    value6.innerText = 'space-evenly';
}