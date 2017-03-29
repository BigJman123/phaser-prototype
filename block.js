var Block = {};

Block.preload = function() {
    game.load.spritesheet('block', 'assets/block.png');
}

Block.locations = {
    left: {x: 0, y: -50},
    right: {x: 160, y: 100}
};

function randBlock() {
    
}

Block.create = function() {
    leftblock = blocks.create(0, -50, 'block');
    leftblock.body.immovable = true;
    
    leftblock.body.gravity.y = 25;
    leftblock.body.velocity.y = 250;
    
    rightblock = blocks.create(160, 100, 'block');
    rightblock.body.immovable = true;
    
    rightblock.body.gravity.y = 25;
    // rightblock.body.velocity.y = ;
}

Block.update = function() {
    
}