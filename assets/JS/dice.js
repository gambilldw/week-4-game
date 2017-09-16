var enemywizard = {};


var bravery = 6;

var goblinbravery = 5;
var goblinhealth = 10;
//var goblincurrenthealth = {goblinhealth-enemydmg};

var currentwounds = 30;


function monitorHealth() {
  // if goblin health less than 0 you win increment win loss
  //else if your health less than 0 you lose increment win loss

  // reset game stats to play again if win or loss determined
}

var d3 = {
    sides: 3,
    roll: function() {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
};

var d6 = {
    sides: 6,
    roll: function() {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
};



//Prints dice roll to the page

function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
}

var b1 = document.getElementById('b1');

b1.onclick = function() {
    var result = d6.roll() + d6.roll();
    printNumber(result);
    if (result < 4) {
        $("#castResult").html("Failed to cast!");
    } else {
        $("#castResult").html("Successful cast!");
    }
};

var b2 = document.getElementById('b2');

b2.onclick = function() {
    var result = d6.roll() + d6.roll();
    printNumber(result);
    if (result < 8) {
        $("#castResult").html("Failed to cast!");
    } else {
        $("#castResult").html("Successful cast!");
    }
};
var b3 = document.getElementById('b3');

b3.onclick = function() {
    var result = d6.roll() + d6.roll();
    printNumber(result);
    if (result < 8) {
        $("#castResult").html("Failed to cast!");
    } else {
        $("#castResult").html("Successful cast!");
    }
};

var b4 = document.getElementById('b4');

b4.onclick = function() {
    var result = d6.roll() + d6.roll();
    printNumber(result);
    if (result < 8) {
        $("#castResult").html("Failed to cast!");
    } else {
        $("#castResult").html("Successful cast!");
    }
};

var b5 = document.getElementById('b5');

b5.onclick = function() {
    var result = d6.roll() + d6.roll();
    printNumber(result);
    if (result < 8) {
        $("#castResult").html("Failed to cast!");
    } else {
        $("#castResult").html("Successful cast!");
    }
};

var b6 = document.getElementById('b6');

b6.onclick = function() {
    var result = d6.roll() + d6.roll();
    printNumber(result);
    if (result < 5) {
        $("#castResult").html("Failed to cast!");
    } else {
        $("#castResult").html("Successful cast!");
        result = d6.roll();
        if (result <= 2) {
          goblinhealth -= 1;
            console.log("1 damage");
        } else if (result <= 4) {
          goblinhealth -= d3.roll();
            console.log("d3 damage");
        } else {
          goblinhealth -= d6.roll();
            console.log("d6 damage");
        }
        console.log (goblinhealth);
        healthMonitor();
    }
};

var b7 = document.getElementById('b7');

b7.onclick = function() {
    var result = d6.roll() + d6.roll();
    printNumber(result);
    if (result < 8) {
        $("#castResult").html("Failed to cast!");
    } else {
        $("#castResult").html("Successful cast!");
    }
};

var b8 = document.getElementById('b8');

b8.onclick = function() {
    var result = d6.roll() + d6.roll();
    printNumber(result);
    if (result < 8) {
        $("#castResult").html("Failed to cast!");
    } else {
        $("#castResult").html("Successful cast!");
    }
};