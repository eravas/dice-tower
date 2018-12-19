<html>
     <head>
          <script type="text/javascript" src="tower.js"></script>
     </head>
     <body>
          Take a chance roll the dice
          <form  name="input" id="input" action="">
               <label for="numberDice">Number of dice:</label>
               <input type="number" name="numberDice" id="numberDice" value="6" max="999" min="1"><br>
               <label for="sides">Number of sides:</label>
               <input type="number" name="sides" id="sides" value="8" max="999" min="1"><br>
               <label for="critBox">Critical? (x2)</label>
               <input type="checkbox" id="critBox" name="critBox" value="1"><br>
               <button type="button" onClick="varSet()">Roll the dice!</button><br><br>
               <label for="result">Result: </label>
               <output name="result" id="result"></output>
          </form>
     </body>
</html>
