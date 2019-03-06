
    
    var wins = 0;
    var losses = 0;
    var GuessesLeft = 9;
    var userChoice = []
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    var winsText = document.getElementById("wins");
    var lossesText = document.getElementById("losses");
    var GuessesLeftText = document.getElementById("GuessesLeft");
    var userChoiceText = document.getElementById("GuessesSoFar");
    var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      console.log(compGuess);
    // FUNCTIONS
    // ==============================================================================




    // MAIN PROCESS
    // ==============================================================================
    
    
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;
      // userGuess.push(userChoice);
      console.log(userGuess);

      


      // If they guess the correct answer, increase and update score, alert them they got it right.
      if (userGuess === compGuess && (GuessesLeft > 1)) {
        computerChoices.indexOf(userGuess) >= 0;
        alert("Correct!");
        wins++;
        GuessesLeft = 9;
        compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        userChoice = [];
        console.log(compGuess);

      }
      // If wrong, alert them they are wrong.
      else if ((userGuess !== compGuess) && (GuessesLeft > 1)) {
        computerChoices.indexOf(userGuess) >= 0;
        GuessesLeft--;
        userChoice.push(userGuess);
      }
      else {
        alert("You Lose");
        losses++;
        GuessesLeft = 9;
        compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        userChoice = [];
        console.log(compGuess);



        // Display the user and computer guesses, and wins/losses.

      }
      userChoiceText.textContent = "Your choices: " + userChoice;
      GuessesLeftText.textContent = "You have " + GuessesLeft + " guesses left.";
      winsText.textContent = "wins: " + wins;
      lossesText.textContent = "losses: " + losses;
    }
  