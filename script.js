const grid = document.getElementById('snake-grid');
const start = document.getElementById('startsnake');
var itwillwork = 0;
if (document.getElementById('startsnake')) {
itwillwork = 1;
}
if(itwillwork==1){
start.addEventListener('click', snakegrid);

let snakeloc;
var Occelate = "white";
let snakedir;
window.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowLeft':
            console.log('Left arrow key pressed');
            snakedir = "left";
            break;
        case 'ArrowRight':
            console.log('Right arrow key pressed');
            snakedir = "right";
            break;
        case 'ArrowUp':
            console.log('Up arrow key pressed');
            snakedir = "up";
            break;
        case 'ArrowDown':
            console.log('Down arrow key pressed');
            snakedir = "down";
            break;
    }
});
let snakelife;
function snakegrid(){
    let gridItem;
for (let i = 0; i < 10; i++) {
    if (i%2 == 0){
        Occelate = "white";
    }
    else {
        Occelate = "black";
    }
    for (let r = 0; r < 10; r++) {
        gridItem = document.createElement('div');
        gridItem.style.left = ((i*43)+100).toString() + 'px';
        gridItem.style.top = ((r*43)+50).toString() + 'px';
        if (Occelate == "white") {
            Occelate = "black";
    }
    else {
        Occelate = "white";
    }
    if (Occelate == "white"){
        gridItem.style.backgroundColor = 'white';
    }
    else {
        gridItem.style.backgroundColor = "black";
        console.log('literllhy');
    }
    gridItem.className = 'asquare'; 
    i = i+1;
    gridItem.id =`${i}${r}`;
    i = i-1;
    grid.appendChild(gridItem);
    }
}
snakeloc = (Math.floor(Math.random()*100))+10;
snakelife = "safe";
}
let snakesegment = 1;
var foodlife = "uneaten";
var foodlocation = 10;
var newfood = "true";
var snakeloclist = [];
var snakegrowth = "no"
let onlyafterrun;
let snakecurloc2;
var startmove = "notyet";
var ultix = [];
var wegood = "yeah";
setInterval(snakemove, 350);
function snakemove(){
    if (snakelife == "dead"){
        const deadmaybe = document.getElementById("deadtype");
        deadmaybe.textContent = "DEAD!";

    }
        const snakecurloc5 = document.getElementById(`${ultix[0]}`)
        if(Math.floor((ultix[0])/10)% 2 != 0){
        if((ultix[0]) % 2 == 0){
            if (snakecurloc5) {
            snakecurloc5.style.backgroundColor = "black";
            if (foodlife == "uneaten"){ 
                snakecurloc5.classList.remove("apple");      
                }   
                snakecurloc5.classList.remove("snakebody");  
                snakecurloc5.classList.add("asquare"); 
        }
        }
        else{
            if (snakecurloc5) {
                snakecurloc5.style.backgroundColor = "white";
                if (foodlife == "uneaten"){ 
                    snakecurloc5.classList.remove("apple");  
                    }   
                    snakecurloc5.classList.remove("snakebody");  
                    snakecurloc5.classList.add("asquare");   
        }
    }
}
    if(Math.floor((ultix[0])/10)% 2 == 0){
        if((ultix[0]) % 2 == 0){
            if (snakecurloc5) {
                snakecurloc5.style.backgroundColor = "white";  
                if (foodlife == "uneaten"){ 
                    snakecurloc5.classList.remove("apple");       
                }   
                snakecurloc5.classList.remove("snakebody");  
                snakecurloc5.classList.add("asquare");  
        }
        }
        else{
            if (snakecurloc5) {
                snakecurloc5.style.backgroundColor = "black" ; 
                if (foodlife == "uneaten"){ 
                    snakecurloc5.classList.remove("apple");      
                    }       
                    snakecurloc5.classList.remove("snakebody");  
                    snakecurloc5.classList.add("asquare");   
        }
    }
}
    snakeloclist[0]=snakeloc;
    let foodcon;
if (foodlife == "uneaten"){
    foodlocation = (Math.floor(Math.random()*100))+10;
    foodcon = document.getElementById(`${foodlocation}`);
    console.log(foodlocation, foodcon);
    foodcon.classList.add("apple");
    foodcon.classList.remove("snakehead");
    foodcon.classList.remove("snakebody");
    foodcon.style.backgroundColor = '';
    foodlife = "eaten";
}
if(startmove == "true"){
for (let r = 0; r < snakeloclist.length; r++) {
        const bodyatm = document.getElementById(`${snakeloclist[r]}`);
        bodyatm.style.backgroundColor = '';
        bodyatm.classList.add("snakebody");
        bodyatm.classList.remove("asquare");
        bodyatm.classList.remove("snakehead");
        bodyatm.classList.remove("snaketail");
}
}
if(startmove == "true"){
    for (let r = 0; r < snakeloclist.length; r++) {
if(snakeloclist[r+1] == snakeloc){
    snakelife = "dead";
}
    }
    }
if (snakedir == "down"){
    snakeloc = snakeloc+1;
    startmove = "true";
    if (snakeloc == 10||snakeloc == 20||snakeloc == 30||snakeloc == 40||snakeloc == 50||snakeloc == 60||snakeloc == 70||snakeloc == 80||snakeloc == 90||snakeloc == 100){
        snakelife = "dead";
    }
}
if (snakedir == "up"){
    snakeloc = snakeloc-1;
    startmove = "true";
    if (snakeloc == 19||snakeloc == 29||snakeloc == 39||snakeloc == 49||snakeloc == 59||snakeloc == 69||snakeloc == 79||snakeloc == 89||snakeloc == 99||snakeloc == 109){
        snakelife = "dead";
    }
}
if (snakedir == "left"){
    snakeloc = snakeloc-10;
    startmove = "true";
}
if (snakedir == "right"){
    snakeloc = snakeloc+10;
    startmove = "true";
}
if (snakeloc == foodlocation){
    snakesegment = snakesegment+1;
    foodlife = "uneaten";
    console.log (snakeloc ,foodlocation)
    snakegrowth = "yes";
}
if (snakelife == "safe"){
const snakecurloc = document.getElementById(`${snakeloc}`)
snakecurloc.classList.add("snakehead");
snakecurloc.classList.remove("asquare");
snakecurloc.style.backgroundColor = '';
}
let snakelife2;
if(snakelife2 == "dead"){
snakelife = "dead";
}
if(snakeloc> 109|| snakeloc<10){
    console.log("death");
    snakelife2 = "dead";
}
onlyafterrun = "yes";
if(snakegrowth == "yes"){
    snakeloclist.push(snakeloc);
    snakegrowth ="no";
}
ultix[0] = snakeloclist[snakeloclist.length-1];
for (let r = snakeloclist.length - 1; r > 0; r--) {
    const snakecurloc4 = document.getElementById(`${snakeloclist[r]}`)
    snakeloclist[r] = snakeloclist[r - 1];
}
}
}

///clicker

const container = document.getElementById("container");
const timeframe = document.getElementById("timeframe");
const startclicker = document.getElementById("startclicker");
const messgae = document.getElementById("messagefinal");
var itwillwork2 = 0;
if (document.getElementById('startclicker')) {
itwillwork2 = 1;
}
if(itwillwork2==1){

startclicker.addEventListener("click", gamestart)
var counter = 0;
var ZAM = 0;
var cool = 0;
var newsquare = "Yes";
function gamestart(){
setInterval(gamerun, 2);
}
let timevalue; 
function gamerun( timevalue ){
    timevalue = (timeframe.value);
    if ((timevalue*1000) > cool){
    if(ZAM > 0 ){
        if(newsquare == "Yes"){
            console.log("cool");
            let square;
            square = document.createElement('div');
            square.style.left = (Math.floor(Math.random()*1000)+100) + 'px';
            square.style.top = (Math.floor(Math.random()*500)+100) + 'px';
            square.className = 'target';
            square.addEventListener('click', gamerun); 
            square.addEventListener('click', upcounter); 
            container.appendChild(square);
            newsquare = "no";
        }
    }
    ZAM = 1;
    cool = cool+4;
}
}
function upcounter(event){
    counter = counter+1;
    const counterstore = document.getElementById("scorebox");
    counterstore.textContent = counter;
    console.log(counter);
    newsquare = "Yes";
    const clickedElement = event.target;
    console.log(clickedElement.className)
    clickedElement.style.hight = "0px";
    clickedElement.style.width = "0px";
}
}

///mood board:

const emotion = document.getElementById('input');
const box = document.getElementById('colorbox');
var itwillwork3 = 0;
if (document.getElementById('colorbox')) {
itwillwork3 = 1;
}
if(itwillwork3==1){
emotion. addEventListener('input', colorchange);
function colorchange(){
    if (emotion.value == 'sad'){
        colorbox.style.backgroundColor = 'darkblue';
    }
    else if (emotion.value == 'angry'){
        colorbox.style.backgroundColor = 'red';
    }
    else if (emotion.value == 'hungry'){
        colorbox.style.backgroundColor = 'green';
    }
    else if (emotion.value == 'happy'){
        colorbox.style.backgroundColor = 'yellow';
    }
    else {
        colorbox.style.backgroundColor = 'gray';
    }
}
}

///pattern game

const color=document.getElementById('colordrop');
const height=document.getElementById('dropheight');
const width=document.getElementById('dropwidth');
const rebuild = document.getElementById('rebuild');
const square = document.getElementById('thesquare');
var itwillwork4 = 0;
if (document.getElementById('dropheight')) {
itwillwork4 = 1;
}
if(itwillwork4==1){
rebuild.addEventListener('click', rebuildranfunction); 
width.addEventListener('change', rebuildfunction)
height.addEventListener('change', rebuildfunction)
var colorvalue = 'aqua';
    function rebuildfunction(){
        let gridItem;
        colorvalue = colordrop.value;
        square.style.backgroundColor = colorvalue;
    for (let i = 0; i < height.value; i++) {
        for (let r = 0; r < width.value; r++) {
          gridItem = document.createElement('div');
          console.log(i,r); 
          gridItem.style.left = ((i*43)+100).toString() + 'px';
          gridItem.style.top = ((r*43)+50).toString() + 'px';
          gridItem.className = 'asquare2';
          gridItem.style.backgroundColor = colorvalue;
          gridItem.addEventListener('click', changecolor); 
          square.appendChild(gridItem);
        }
    }
    }
function rebuildranfunction(){
    let gridItem;
    colorvalue = colordrop.value;
    square.style.backgroundColor = colorvalue;
for (let i = 0; i < height.value; i++) {
    for (let r = 0; r < width.value; r++) {
      gridItem = document.createElement('div');
      gridItem.style.left = ((i*43)+100).toString() + 'px';
      gridItem.style.top = ((r*43)+50).toString() + 'px';
      gridItem.className = 'asquare2';
      const RE = Math.floor(Math.random()*255);
      const GR = Math.floor(Math.random()*255);
      const BL = Math.floor(Math.random()*255);
      gridItem.style.backgroundColor = `rgb(${RE},${GR},${BL})`;
      gridItem.addEventListener('click', changecolor); 
      square.appendChild(gridItem);
    }
}
}

function changecolor(event){
colorvalue = colordrop.value;
event.target.style.backgroundColor = colorvalue;
}
}

//guessing game

const numberBox = document.getElementById('guess');
const outputBox = document.getElementById('output');
const newNumber = Math.floor(Math.random()*10000);
const numberBox2 = document.getElementById('numberfuntion');
const outputBox2 = document.getElementById('output2');
const functionsdrop = document.getElementById('functionsdrop');
var itwillwork5 = 0;
if (document.getElementById('guess')) {
itwillwork5 = 1;
}
if(itwillwork5==1){
numberBox.addEventListener('change', checkNumber);
function checkNumber() {
    const guess = numberBox.value;
    if(guess < newNumber){
        outputBox.innerText = 'thats too low!';
    }
    if(guess > newNumber){
        outputBox.innerText = 'thats too high!';
    }
    if(guess == newNumber){
        outputBox.innerText = 'thats just right!';
    }
}

//number squared

numberBox2.addEventListener('change', checkNumber2);
var newNumber2;
function checkNumber2() {
    const varriable = numberBox2.value;
    if (functionsdrop.value === 'cubed'){
    newNumber2 = (varriable)**3;
    }
    else if (functionsdrop.value === '2x+7'){
    newNumber2 = ((varriable)*2)+7;
    }
    else if (functionsdrop.value === 'squared'){
    newNumber2 = (varriable)**2;
    }
    else if (functionsdrop.value === 'Dubbled'){
    newNumber2 = (varriable)*2;
    }
    outputBox2.innerText = newNumber2;
} 
}

// sound board

const boom =  document.getElementById("key1");
const yippie =  document.getElementById("key2");
const clang =  document.getElementById("key3");
const exqusite =  document.getElementById("key4");
const key =  document.getElementById("key5");
const runaway =  document.getElementById("key6");

if(document.getElementById("key1")){
    boom.addEventListener("click", playboom)
    yippie.addEventListener("click", playyip)
    clang.addEventListener("click", playclang)
    exqusite.addEventListener("click", playexqusite)
    key.addEventListener("click", playkey)
    runaway.addEventListener("click", playrun)
    var audio1 = document.getElementById("boomsound");
    var audio2 = document.getElementById("yipsound");
    var audio3 = document.getElementById("clangaudio");
    var audio4 = document.getElementById("exqusite");
    var audio5 = document.getElementById("keysound");
    var audio6 = document.getElementById("playrun");
    function playboom() {
        audio1.play();
      }
      function playyip() {
        audio2.play();
      }
      function playclang() {
        audio3.play();
      }
      function playexqusite() {
        audio4.play();
      }
      function playkey() {
        audio5.play();
      }
      function playrun() {
        audio6.play();
      }


}