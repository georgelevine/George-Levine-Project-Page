var x= "";

window.onload = function() {
document.getElementById("startButton").onclick=showAnimation;
document.getElementById("animation").onchange = changeAnimation;
document.getElementById('size').onchange=sizeAnimation;

}
function showAnimation(){
  var textarea=document.getElementById('mytextarea');
//  textarea.innerHTML=ANIMATIONS["Exercise"] + ANIMATIONS["Juggler"];
    var pictures = ANIMATIONS[x].split("=====\n");
    textarea.innerHTML=pictures[0];
      textarea.innerHTML=pictures[1];
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
