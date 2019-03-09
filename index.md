<html>
     <head>
          <script type="text/javascript" src="tower.js"></script>
     </head>
     <body>
          <form  name="input" id="input" action="">
               <br>
               <label for="numberDice">Number of dice:</label>
               <input type="number" name="numberDice" id="numberDice" value="6" max="999" min="1">
               <br>
               <label for="sides">Number of sides:</label>
               <input type="number" name="sides" id="sides" value="8" max="999" min="1">
               <br>
               <label for="critBox">Critical: </label>
               <input type="checkbox" id="critBox" name="critBox" value="1">
               <br>
               <button type="button" onClick="varSet()">Roll the dice!</button>
               <label for="mods">+ ( </label>
               <input type="number" name="mods" id="mods" value="0" max="999" min="-999"> )
               <br>
               <button type="button" onClick="statRoll()">Roll Stats</button>
               <select name="rollType" id="rollType">
                    <option value="fourDSixDrop">4d6 Drop Lowest</option>
                    <option value="threeDSix">3d6</option>
                    <option value="threeDSixDropPT">3d6 Drop Lowest + 3</option>
                    <option value="insanity">1d20 (use at your own risk)</option>
               </select>
               <br>
               <output name="rngQuote" id="rngQuote" value="I am a creature of the night"></output>
               <br>
               <label for="total">Sum: </label>
               <output name="total" id="total"></output>
               <br>
               <label for="result">Result: </label>
               <output name="result" id="result"></output>
          </form>
     </body>
</html>
