//all of the js code
var s = 8;
var n = 6;
function varSet() {
     s = document.getElementById("sides").value;
     n = document.getElementById("numberDice").value;
     //var rng = Math.floor(Math.random() * 3) + 1;
     /*switch (rng) {
          default:
               document.getElementById("rngQuote").value="Take a chance roll the dice";
               break;
          case 1:
               document.getElementById("rngQuote").value="You visciously tap the enemy";
               break;
          case 2:
               document.getElementById("rngQuote").value="You land a powerful strike with deadly precision...on the enemy's shield";
               break;
          case 3:
               document.getElementById("rngQuote").value="You succesfully dodge the air next to the enemy's fist...unfortunately the fist hurts more";
               break;*/
     if (n > 9999 || n < 1) { 
          alert("By decree of Bahamut the wise, in all his wisdom, rolling more than 9999 or less than 1 dice is forbidden at this time."); 
     } else { 
          dTower(s,n); 
     }   
}
function dTower(sides,number) {
     var output = "";
     var sum = 0;
     var critCheck = document.getElementById("critBox").checked;
     for (i = 1; i <= number; i++) {
          var roll = Math.floor(Math.random() * (sides)) + 1;
          output += roll + ", ";
          sum += roll;
          if (i % 15 == 0) {
               output += "\n";
          } 
     }
     if (critCheck == 1) {
          var critDmg = sum*2;
          var maxQ = document.getElementById("numberDice").value * document.getElementById("sides").value
          if(sum == maxQ) {
               document.getElementById("total").value="2 x (" + sum + ") = " + critDmg + "Now that's a lot of damage!"
               document.getElementById("result").value=output
          } else {
               document.getElementById("total").value="2 x (" + sum + ") = " + critDmg
               document.getElementById("result").value=output
          }
     } else {
          document.getElementById("total").value=sum
          document.getElementById("result").value=output
     }
}
