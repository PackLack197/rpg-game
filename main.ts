scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    if (level2Done) {
        tiles.setCurrentTilemap(tilemap`level0`)
        for (let index = 0; index < 10; index++) {
            snakelevel3 = sprites.create(assets.image`enemySnake`, SpriteKind.Enemy)
            tiles.placeOnRandomTile(snakelevel3, sprites.dungeon.collectibleInsignia)
            snakelevel3.follow(playerMushroom, 50)
        }
    } else {
        game.splash("Whoa, whoa, whoa! You haven't finished level 2!")
    }
})
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`level2Chest`, function (sprite, location) {
    if (game.askForNumber("What is 2x10?", 2) == 20) {
        game.showLongText("Correct! Go to level 3!", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`teleportBase`)
        level2Done = true
    } else {
        game.showLongText("That's wrong. Try again!", DialogLayout.Bottom)
        pause(2000)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (LeftPressed) {
        projectile = sprites.createProjectileFromSprite(assets.image`arrowUp0`, playerMushroom, -150, 0)
    } else if (DownPressed) {
        projectile = sprites.createProjectileFromSprite(assets.image`arrowUp2`, playerMushroom, 0, 150)
    } else if (RightPressed) {
        projectile = sprites.createProjectileFromSprite(assets.image`arrowUp1`, playerMushroom, 150, 0)
    } else if (UpPressed) {
        projectile = sprites.createProjectileFromSprite(assets.image`arrowUp`, playerMushroom, 0, -150)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Level2Teleporter`, function (sprite, location) {
    if (level1Done) {
        tiles.setCurrentTilemap(tilemap`level2`)
        snake1level2 = sprites.create(assets.image`enemySnake`, SpriteKind.Enemy)
        tiles.placeOnRandomTile(snake1level2, sprites.dungeon.collectibleInsignia)
        snake1level2.follow(playerMushroom, 50)
        snake2level2 = sprites.create(assets.image`enemySnake`, SpriteKind.Enemy)
        tiles.placeOnRandomTile(snake2level2, sprites.dungeon.collectibleInsignia)
        snake2level2.follow(playerMushroom, 50)
        snake3level2 = sprites.create(assets.image`enemySnake`, SpriteKind.Enemy)
        tiles.placeOnRandomTile(snake3level2, sprites.dungeon.collectibleInsignia)
        snake3level2.follow(playerMushroom, 50)
        snake4level2 = sprites.create(assets.image`enemySnake`, SpriteKind.Enemy)
        tiles.placeOnRandomTile(snake4level2, sprites.dungeon.collectibleInsignia)
        snake4level2.follow(playerMushroom, 50)
        snake5level2 = sprites.create(assets.image`enemySnake`, SpriteKind.Enemy)
        tiles.placeOnRandomTile(snake5level2, sprites.dungeon.collectibleInsignia)
        snake5level2.follow(playerMushroom, 50)
        snake6level2 = sprites.create(assets.image`enemySnake`, SpriteKind.Enemy)
        tiles.placeOnRandomTile(snake6level2, sprites.dungeon.collectibleInsignia)
        snake6level2.follow(playerMushroom, 50)
        snake7level2 = sprites.create(assets.image`enemySnake`, SpriteKind.Enemy)
        tiles.placeOnRandomTile(snake7level2, sprites.dungeon.collectibleInsignia)
        snake7level2.follow(playerMushroom, 50)
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`level3Chest`, function (sprite, location) {
    if (game.askForNumber("What are the first 3 digits of pi?", 4) == 3.14) {
        game.showLongText("Good job! You're done!", DialogLayout.Bottom)
        game.over(true)
    } else {
        game.showLongText("Uh oh! You got it wrong! Try again!", DialogLayout.Bottom)
        pause(2000)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    if (game.askForNumber("What is 2+2?", 1) == 4) {
        game.showLongText("Correct! Go to level 2!", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`teleportBase`)
        level1Done = true
    } else {
        game.showLongText("That's wrong. Try again!", DialogLayout.Bottom)
        pause(2000)
    }
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false)
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
    snake3level1 = sprites.create(assets.image`enemySnake`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(snake3level1, sprites.castle.tileDarkGrass2)
    snake3level1.follow(playerMushroom, 50)
    snake4level1 = sprites.create(assets.image`enemySnake`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(snake4level1, sprites.castle.tileDarkGrass2)
    snake4level1.follow(playerMushroom, 50)
    snake5level1 = sprites.create(assets.image`enemySnake`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(snake5level1, sprites.castle.tileDarkGrass2)
    snake5level1.follow(playerMushroom, 50)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -1
    scene.cameraShake(4, 500)
    pause(2000)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    DownPressed = true
    LeftPressed = false
    RightPressed = false
    UpPressed = false
    animation.runImageAnimation(
    playerMushroom,
    assets.animation`mushroomFrontWalk`,
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`heartTile`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    statusbar.value = 100
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 500)
    sprite.destroy()
})
let snake5level1: Sprite = null
let snake4level1: Sprite = null
let snake3level1: Sprite = null
let snake2level1: Sprite = null
let snake1level1: Sprite = null
let snake7level2: Sprite = null
let snake6level2: Sprite = null
let snake5level2: Sprite = null
let snake4level2: Sprite = null
let snake3level2: Sprite = null
let snake2level2: Sprite = null
let snake1level2: Sprite = null
let level1Done = false
let projectile: Sprite = null
let UpPressed = false
let RightPressed = false
let LeftPressed = false
let DownPressed = false
let snakelevel3: Sprite = null
let level2Done = false
let statusbar: StatusBarSprite = null
let playerMushroom: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`teleportBase`)
playerMushroom = sprites.create(assets.image`mushroom`, SpriteKind.Player)
controller.moveSprite(playerMushroom, 100, 100)
scene.cameraFollowSprite(playerMushroom)
playerMushroom.setStayInScreen(true)
game.showLongText("You know you can't stall any longer. Your one goal is to DESTROY THE SNAKES!", DialogLayout.Bottom)
game.showLongText("Step on the 1 to go to the first level!", DialogLayout.Bottom)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(playerMushroom, 5, 0)
