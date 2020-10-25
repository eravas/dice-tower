<html>
     <head>
          <script type="text/javascript" src="tower.js"></script>
     </head>
     <body  onload="initQuote()">
          <form  name="input" id="input" action="">
               <br>
               <label for="numberDice">Number of dice:</label>
               <input type="number" size="5" name="numberDice" id="numberDice" value="6" min="1">
               <br>
               <label for="sides">Number of sides:</label>
               <input type="number" size="5" name="sides" id="sides" value="8" min="2">
               <br>
               <label for="critBox">Critical: </label>
               <input type="checkbox" id="critBox" name="critBox" value="1">
               <br>
               <button type="button" onClick="varSet()">Roll the dice!</button>
               <br>
               <br>
               <small>Format: ![name],[number of dice],[dice type],[dice type versatile],[damage type] (For example:"!longsword,1,8,10,sharp!greatsword,2,6,6,sharp" will add a longsword and a greatsword option)</small>
               <br>
               <label for="setPreset">Custom Preset Code: </label>
               <input name="setPreset" id="setPreset">
               <button type="button" onClick="preSet()">Submit</button>
               <br>
               <button type="button" onClick="rollSet()">Roll</button>
               <select name="presetMenu" id="presetMenu">
               </select>
               <label for="versBox">Versatile: </label>
               <input type="checkbox" id="versBox" name="versBox" value="1">
               <br>
               <br>
               <label for="mods">Modifier: </label>
               <input type="number" size="5" name="mods" id="mods" value="0" max="999" min="-999">
               <br>
               <button type="button" onClick="statRoll()">Roll Stats</button>
               <select name="rollType" id="rollType">
                    <option value="fourDSixDrop">4d6 Drop Lowest</option>
                    <option value="threeDSix">3d6</option>
                    <option value="threeDSixDropPT">3d6 Drop Lowest + 3</option>
                    <option value="insanity">1d20 (use at your own risk)</option>
               </select>
               <br>
               <br>
               <output name="rngQuote" id="rngQuote"></output>
               <br>
               <br>
               <label for="total">Sum: </label>
               <output name="total" id="total"></output>
               <br>
               <label for="result">Result: </label>
               <output name="result" id="result"></output>
          </form>
     </body>
</html>
