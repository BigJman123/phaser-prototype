var Player = {};

Player.preload = function() {
    game.load.image('player', 'assets/player.png');
}

Player.locations = {
    left: {x: 70, y: 450},
    right: {x: 230, y: 450},
};

Player.create = function() {
    player = game.add.sprite(Player.locations.left.x, Player.locations.left.y, 'player');
    // player.enableBody = true;
    player.body.collideWorldBounds = true;
    player.body.gravity.x = 0;
    player.body.gravity.y = 0;
}

Player.update = function(x, y) {
    if (cursors.left.isDown) {
        Player.moveLeft();
    }
    
    if (cursors.right.isDown) {
        Player.moveRight()
    }
}

Player.moveLeft = function() {
    player.x = Player.locations.left.x;
    player.y = Player.locations.left.y;
}

Player.moveRight = function() {
    player.x = Player.locations.right.x;
    player.y = Player.locations.right.y;
}