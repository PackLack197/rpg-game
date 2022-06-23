controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    DownPressed = false
    LeftPressed = false
    RightPressed = false
    UpPressed = true
    animation.runImageAnimation(
    playerMushroom,
    assets.animation`mushroomBackWalk`,
    200,
    true
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (LeftPressed) {
        projectile = sprites.createProjectileFromSprite(assets.image`arrowLeft`, playerMushroom, -150, 0)
    } else if (DownPressed) {
        projectile = sprites.createProjectileFromSprite(assets.image`arrowDown`, playerMushroom, 0, 150)
    } else if (RightPressed) {
        projectile = sprites.createProjectileFromSprite(assets.image`arrowRight`, playerMushroom, 150, 0)
    } else if (UpPressed) {
        projectile = sprites.createProjectileFromSprite(assets.image`arrowUp`, playerMushroom, 0, -150)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Level2Teleporter`, function (sprite, location) {
    if (level1Done) {
        tiles.setCurrentTilemap(tilemap`level2`)
    } else {
        game.splash("Whoa, whoa, whoa! You haven't finished level 1!")
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    DownPressed = false
    LeftPressed = true
    RightPressed = false
    UpPressed = false
    animation.runImageAnimation(
    playerMushroom,
    assets.animation`mushroomWalkLeft`,
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    if (game.askForNumber("What is 2+2?", 1) == 4) {
        game.showLongText("Correct! Go to level 2!", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`teleportBase`)
        level1Done = true
    } else {
        game.showLongText("That's wrong. Try again!", DialogLayout.Bottom)
    }
    pause(2000)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    DownPressed = false
    LeftPressed = false
    RightPressed = true
    UpPressed = false
    animation.runImageAnimation(
    playerMushroom,
    assets.animation`mushroomWalkRight`,
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Level1Teleporter`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level1`)
    snake1level1 = sprites.create(assets.image`enemySnake`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(snake1level1, sprites.castle.tileDarkGrass2)
    snake1level1.follow(playerMushroom, 50)
    snake2level1 = sprites.create(assets.image`enemySnake`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(snake2level1, sprites.castle.tileDarkGrass2)
    snake2level1.follow(playerMushroom, 50)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    DownPressed = true
    LeftPressed = false
    RightPressed = false
    UpPressed = false
    animation.runImageAnimation(
    playerMushroom,
    assets.animation`myAnim`,
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 500)
    sprite.destroy()
})
let snake2level1: Sprite = null
let snake1level1: Sprite = null
let level1Done = false
let projectile: Sprite = null
let UpPressed = false
let RightPressed = false
let LeftPressed = false
let DownPressed = false
let playerMushroom: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`teleportBase`)
playerMushroom = sprites.create(assets.image`mushroom`, SpriteKind.Player)
controller.moveSprite(playerMushroom, 100, 100)
scene.cameraFollowSprite(playerMushroom)
playerMushroom.setStayInScreen(true)
info.setLife(1000)
game.showLongText("You know you can't stall any longer. Your one goal is to DESTROY THE SNAKES!", DialogLayout.Bottom)
game.showLongText("Step on the 1 to go to the first level!", DialogLayout.Bottom)
