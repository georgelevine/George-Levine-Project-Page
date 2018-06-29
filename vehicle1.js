var x="";
var vehicles ;
var k = 0;
window.onload = function() {
    console.log(vehicles + "XXX");
document.getElementById("go").onclick=showAvailable;
document.getElementById("make").onchange = changeMake;
}


function showAvailable(){
   var textarea=document.getElementById('mytextarea');
 //  textarea.innerHTML=ANIMATIONS["Exercise"] + ANIMATIONS["Juggler"];
      vehicles = VEHICLES.split("\n");
     for(k = 0 ; k < vehicles.length; k++){
       var makeCar = vehicles[k].split(",");
       console.log("makeCar[0]=" + makeCar[0]);
       if (x.trim() == makeCar[0].trim()){
       textarea.innerHTML += vehicles[k] + "\n";
      // textarea.innerHTML +=vehicles[k] + "\n";
       }
           console.log(vehicles[k]);
     }


    console.log(vehicles[0]);
   }


   function changeMake(){
      x = document.getElementById("make").value;
      console.log("x=" + x);
   }
