function playerCreate(x, y) {
    player = game.add.sprite(x, y, 'player');
    player.enableBody = true;
    player.body.collideWorldBounds = true;
    player.body.gravity.x = 0;
    player.body.gravity.y = 0;
}

function playerUpdate() {
    if (cursors.left.isDown) {
        game.add.tween(player).to( { x: 70 }, 0, null, false, 0, 0, false);
    }
    
    if (cursors.right.isDown) {
        game.add.tween(player).to( { x: 230 }, 0, null, false, 0, 0, false);
    }
}