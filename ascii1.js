var x= "";
var k = 0;
var pictures;
var time = 0;

window.onload = function() {
document.getElementById("startButton").onclick=showAnimation;
document.getElementById("animation").onchange = changeAnimation;
document.getElementById('size').onchange=sizeAnimation;
document.getElementById('stopButton').onclick = abortAnimation;
}
function showAnimation(){
  var textarea=document.getElementById('mytextarea');
//  textarea.innerHTML=ANIMATIONS["Exercise"] + ANIMATIONS["Juggler"];
     pictures = ANIMATIONS[x].split("=====\n");

    //  textarea.innerHTML=pictures[1];
    time = setInterval(increaseIndex, 300);
    textarea.innerHTML=pictures[k];
}
function changeAnimation(){
   x = document.getElementById("animation").value;

}
function sizeAnimation() {

  var textSize = document.getElementById("size").value;
  console.log(textSize);
  var textArea=document.getElementById('mytextarea');
  textArea.style.fontSize=textSize;
}
function increaseIndex(){
   k = (k + 1) % pictures.length;
var textarea=document.getElementById('mytextarea');
textarea.innerHTML=pictures[k];
   console.log(pictures.length);
   console.log(k);

}
function abortAnimation() {
  clearInterval(time);

}
