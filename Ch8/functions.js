function buttonPress(){
  var push = document.getElementById('action11');
/*
  push.innerHTML="";
*/
push.style.fontSize="20pt";
push.style.background="orange";

}

function popUp(){
  alert("Hello!");
  alert("How are you?");
  alert("Lorem");
}

window.onload = function(){
  document.getElementById("action1").onclick = buttonPress;
  document.getElementById("action2").onclick = clearParagraph;
  document.getElementById("compute").onclick = subtract;
}

function clearParagraph(){

  var clearParagraph = document.getElementById("action11");

  clearParagraph.style.background="white";
}
function compute() {
  var input1 = document.getElementById("num1");
  var input2 = document.getElementById("num2");
  var answer = document.getElementById("answer");
  var result = parseInt(input1.value) * parseInt(input2.value);
  answer.innerHTML = result;
}

function subtract() {
  var input1 = document.getElementById("num1");
  var input2 = document.getElementById("num2");
  var result = input1.value - input2.value;
  answer.innerHTML = result;
}
