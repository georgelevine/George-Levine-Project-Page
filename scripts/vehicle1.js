var x="";
var vehicles;
var k = 0;
window.onload = function() {
document.getElementById("go").onclick=showAvailable
}


     function showAvailable(){
   var textarea=document.getElementById('mytextarea');
 //  textarea.innerHTML=ANIMATIONS["Exercise"] + ANIMATIONS["Juggler"];
      vehicles = VEHICLES[x].split(",\n");

     //  textarea.innerHTML=pictures[1];

     textarea.innerHTML=pictures[k];

   }
