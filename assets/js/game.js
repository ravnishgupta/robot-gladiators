var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
//console.log(playerName, playerAttack, playerHealth);

var enemyName = "";
var enemyHealth = 50;
var enemyAttack = 12;

var enemyBots = ["oi", "yo", "itthe", "yahan", "idhar", "udhar", "kidhar", "patta"];

var fight = function(enemyName) {
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  if ((promptFight.toUpperCase() !== "FIGHT") && (promptFight.toUpperCase() !== "SKIP")) {
      alert("Please type either 'fight' or 'skip'");
  }
  else {
    if (promptFight.toUpperCase() === "FIGHT") {
        
        window.alert(playerName + " will be fighting " + enemyName);
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;

        //We then check to see if that last attack destroyed our robot and 
        //got its health down to zero or below by using a conditional statement.
        //debugger;
        if (enemyHealth <= 0) {
            alert( enemyName + " has lost and is dead");
        }
        else alert(enemyName + " can still fight");

        // Log a resulting message to the console so we know that it worked.
        console.log("enemyHealth: " + enemyHealth);

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack
        if (playerHealth <= 0) {
            alert(playerName + " has lost and is dead");
        }
        else alert(playerName + " can still fight");
    }
    else {
        if (confirm("Do you really want to quit?")){
          playerMoney -= 2;
          alert ("You have been fined $2. Your balance is " + playerMoney.toString() + ".");
        }
        else fight(enemyName);
    }
  }
}


// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//fight();

var startGame = function () {
  for (var i=0; i<enemyBots.length; i++) {
    if (playerHealth>0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i+1));
      enemyHealth = 50;
      fight(enemyBots[i]);
    }
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
}

var endGame = function() {
  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  } 
  else {
    window.alert("You've lost your robot in battle.");
  }
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    // restart the game
    startGame();
  } 
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
}

var shop = function () {

}

startGame();