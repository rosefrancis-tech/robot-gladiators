var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
    // Enter the fight
    window.alert("Welcome to Robot Gladiators!");
    // Option to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")
    console.log(promptFight);
    // check player intention
    if (promptFight === "FIGHT" || promptFight === "fight") {
        // Player robot attacked enemy
        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        if (enemyHealth <= 0) {
            window.alert(enemyName + "has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        // Enemy robot attacked player
        playerHealth = playerHealth - enemyAttack;
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        if (playerHealth <= 0)
        {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
    // skip to fight
    else if (promptFight === "SKIP" || promptFight === "skip") {
        var confirmSkip = window.confirm("Do you want to skip fight and loose money?");
        if(confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight");
            playerMoney = playerMoney - 2;
            console.log(playerName, playerAttack, playerHealth, playerMoney);
        }
        else {
            fight();
        }
    }
    // invalid option to fight or skip
    else {
        window.alert("Choose a valid option!");
    }
    
    
    
}

fight();

