var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
//console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
  window.alert("Welcome to Robot Gladiators!");
  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth - playerAttack;

  //We then check to see if that last attack destroyed our robot and 
  //got its health down to zero or below by using a conditional statement.
  if (enemyHealth <= 0) {
    alert("enemy has lost and is dead");
  }
  else alert("enemy can still fight");

  // Log a resulting message to the console so we know that it worked.
  console.log("enemyHealth: " + enemyHealth);

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  playerHealth = playerHealth - enemyAttack
  if (playerHealth <= 0) {
    alert("player has lost and is dead");
  }
  else alert("player can still fight");


  // Log a resulting message to the console so we know that it worked.
  console.log ("playerHealth: " + playerHealth);
};

fight();