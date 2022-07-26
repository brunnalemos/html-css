let biasList = [];
let myDocument = document.getElementById('txt-page')
let btnSoobin = myDocument.getElementById('soobin');
let soobinPic = myDocument.getElementById('soobinPic');
let btnYeonjun = document.getElementById('yeonjun');
let yeonjunPic = document.getElementById('yeonjunPic');
let btnTaehyun = document.getElementById('taehyun');
let taehyunPic = document.getElementById('taehyunPic');
let btnBeomgyu = document.getElementById('beomgyu');
let beomgyuPic = document.getElementById('beomgyuPic');
let btnKai = document.getElementById('kai');        
let kaiPic = document.getElementById('kaiPic');
let textBox = document.getElementById('content')
let imageBox = document.getElementById('images')
let biasNames = [];
let biasPics = [];
let title = document.querySelector('h1');
let subtitle = document.querySelector('h2');
const logArrayInfo = (item) => { biasNames.push(item.name);
biasPics.push(item.img);};
let btnSubmit = document.getElementById('submit');
function firstClick (){
    btnSubmit.classList.remove("biaswrecker");
    btnSubmit.classList.add("nextgroup");
 btnSubmit.replaceWith(document.createElement('a'));
 let nextPage = document.querySelector('a');
 nextPage.href="bp.html";
 nextPage.setAttribute("rel","next");
 nextPage.classList.add("button"); 
 nextPage.textContent = "Next";   
};
btnSubmit.addEventListener("click", function (){
    biasList.forEach(logArrayInfo);
    textBox.textContent = "Bias: " + biasNames;
    imageBox.innerHTML = biasPics;
    title.textContent = "Now, select your bias wrecker:"
    subtitle.textContent = '';
    if (btnSubmit.classList.contains("biaswrecker")) {firstClick();}
    else {secondClick();}
}
);
btnSoobin.addEventListener("click", function (){
    let bias = {
        name: "Soobin",
        img: '<img src="'+ soobinPic.src+'">'}
    biasList.push(bias);
});
btnYeonjun.addEventListener("click", function (){
    let bias = {
        name: "Yeonjun",
        img: '<img src="'+ yeonjunPic.src+'">'}
    biasList.push(bias);
});
btnTaehyun.addEventListener("click", function (){
    let bias = {
        name: "Taehyun",
        img: '<img src="'+ taehyunPic.src+'">'}
    biasList.push(bias);
});
btnBeomgyu.addEventListener("click", function (){
    let bias = {
        name: "Beomgyu",
        img: '<img src="'+ beomgyuPic.src+'">'}
    biasList.push(bias);
});
btnKai.addEventListener("click", function (){
    let bias = {
        name: "Huening Kai",
        img: '<img src="'+ kaiPic.src+'">'}
    biasList.push(bias);
});


