var a;
var b;
var op;

window.onload = function(){
document.getElementById('compute').onclick = compute1;

}
function compute1(){
  a = document.getElementById('value1');
b = document.getElementById('value2');
console.log(a.value);

op=document.getElementById('operation')
console.log(op.value);
if (op.value=="addition") {
 console.log("addition");

     result.innerHTML = parseInt(a.value)+parseInt(b.value);
    }
  if (op.value=="subtraction") {
     console.log("subtraction");
   result.innerHTML = parseInt(a.value) - parseInt(b.value);
 }
 if(op.value=="multiply"){
   console.log("multiplication");
   console.log(a)
   result.innerHTML = parseInt(a.value) * parseInt(b.value);
 }
 if(op.value=="division"){
   console.log("division");
   console.log(a)
   result.innerHTML = parseInt(a.value) / parseInt(b.value);
}
}
