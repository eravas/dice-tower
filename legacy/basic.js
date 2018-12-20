//the following is the basic javascript code used to generate the random numbers and output them

function dTower (sides,amount) {
     var output = "";
     for (i = 1; i <= amount; i++) {
          var roll = Math.floor(Math.random() * (sides)) + 1;
          output += "+" + roll + "";
     }
     alert(output);
}

//the first number sets the number of sides on the dice. the second is the number of dice "rolled"
// for example: dTower(8,6) "rolls" an eight sided die six times
