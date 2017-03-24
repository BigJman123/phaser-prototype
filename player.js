// function playerCreate(x, y) {
//     player = game.add.sprite(x, y, 'player');
//     player.enableBody = true;
//     player.body.collideWorldBounds = true;
//     player.body.gravity.x = 0;
//     player.body.gravity.y = 0;
// }
var locations = [
    {x: 70, y: 450},
    {x: 230, y: 450}
];

function playerCreate(x, y) {
    player = game.add.sprite(x, y, 'player');
    player.enableBody = true;
    player.body.collideWorldBounds = true;
    player.body.gravity.x = 0;
    player.body.gravity.y = 0;
}

function playerUpdate() {
    if (cursors.left.isDown) {
        playerCreate(locations[0].x, locations[0].y);
    }
    
    if (cursors.right.isDown) {
        playerCreate(locations[1].x, locations[1].y);
    }
}