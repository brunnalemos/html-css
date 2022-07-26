let biasList = [];
let btnLisa = document.getElementById('lisa');
let lisaPic = document.getElementById('lisaPic');
let btnJennie = document.getElementById('jennie');
let jenniePic = document.getElementById('jenniePic');
let btnJisoo = document.getElementById('jisoo');
let jisooPic = document.getElementById('jisooPic');
let btnRose = document.getElementById('rose');        
let rosePic = document.getElementById('rosePic');
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
 nextPage.href="final.html";
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
btnLisa.addEventListener("click", function (){
    let bias = {
        name: "Lisa",
        img: '<img src="'+ lisaPic.src+'">'}
    biasList.push(bias);
});
btnJennie.addEventListener("click", function (){
    let bias = {
        name: "Jennie",
        img: '<img src="'+ jenniePic.src+'">'}
    biasList.push(bias);
});
btnJisoo.addEventListener("click", function (){
    let bias = {
        name: "Jisoo",
        img: '<img src="'+ jisooPic.src+'">'}
    biasList.push(bias);
});
btnRose.addEventListener("click", function (){
    let bias = {
        name: "Rosé",
        img: '<img src="'+ rosePic.src+'">'}
    biasList.push(bias);
});