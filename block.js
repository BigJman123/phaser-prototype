var Block = {};

Block.preload = function() {
    game.load.spritesheet('block', 'assets/block.png');
}

Block.create = function() {
    leftblock = blocks.create(0, 250, 'block');
    leftblock.body.immovable = true;
    
    leftblock.body.gravity.y = 25;
    // leftblock.body.velocity.y = 10;
    
    rightblock = blocks.create(160, 100, 'block');
    rightblock.body.immovable = true;
    
    rightblock.body.gravity.y = 25;
    // rightblock.body.velocity.y = ;
}