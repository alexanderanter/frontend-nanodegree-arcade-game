/*
*@author: alexanderanter
*version: 1.0.0
*/

// Enemies our player must avoid
var Enemy = function(loc, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.loc = loc;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    this.x = 40;
    this.y = 50;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.loc *= dt;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.



var Player = function(loc) {
    this.loc = loc;
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 420;
};
Player.prototype.update = function(dt) {
    this.loc = this.loc * dt;
};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(keys) {
    if (keys === "left") {
        this.x -= 30;
    }else if (keys === "right") {
        this.x += 30;
    }else if (keys === "up") {
        this.y -= 30;
    }else if (keys === "down") {
        this.y += 30;
    }

};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
var enemy1 = new Enemy(4,5);
allEnemies.push(enemy1);

var player = new Player(4);
player.handleInput();
player.update(4);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
