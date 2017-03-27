var Player = {};

Player.locations = [
    {x: 70, y: 450},
    {x: 230, y: 450}
];

Player.currentLocation = 0;

Player.create = function() {
    player = game.add.sprite(Player.locations[Player.currentLocation].x, Player.locations[Player.currentLocation].y, 'player');
    // player.enableBody = true;
    player.body.collideWorldBounds = true;
    player.body.gravity.x = 0;
    player.body.gravity.y = 0;
}

// Make this Player.Update

function playerLocation(x, y) {
    if (cursors.left.isDown) {
        Player.moveLeft();
    }
    
    if (cursors.right.isDown) {
        Player.moveRight()
    }
}
// above

Player.moveLeft = function() {
    if (Player.currentLocation === 0) {
        return false;
    }
    
    Player.currentLocation -= 1;
    Player.render();
}

Player.moveLeft = function() {
    if (Player.currentLocation === 4) {
        return false;
    }
    
    Player.currentLocation += 1;
    Player.render();
}

Player.render = function() {
    player.x = Player.locations[Player.currentLocation].x;
    player.y = Player.locations[Player.currentLocation].y;
}

