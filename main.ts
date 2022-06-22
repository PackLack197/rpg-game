scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . b b b b . . . . . . . . 
    . . . b 3 3 3 3 b b b b . . . . 
    . . b b 3 3 3 3 3 1 1 b b c c . 
    . . b 1 1 3 3 3 3 3 1 1 3 3 c c 
    . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
    . . c 3 3 3 3 3 3 3 c c c b b f 
    . c 3 3 3 3 3 b b b b c c c b f 
    c 3 3 3 3 b b d d d d d c c b f 
    c 3 3 c b d d d d d d c d c c . 
    f 3 c c c d d c d d d c d b c . 
    f b c c c d d d c d d d d d f . 
    f b c c c d d d d d b b b d f . 
    f f b b c b d d d d d d d c . . 
    . f f f f b c c d d d d f f . . 
    . . f b d d b c c f f b b f f . 
    . . f d d d b . . f f b b b f . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
mySprite.setStayInScreen(true)
