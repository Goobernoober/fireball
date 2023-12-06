namespace SpriteKind {
    export const FireSource = SpriteKind.create()
}
sprites.onCreated(SpriteKind.FireSource, function (sprite) {
    sprite.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.stopCountdown()
    while (info.life() > 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . . 5 5 5 5 5 5 . . . . . . 
            . . . . 5 4 4 4 4 5 . . . . . . 
            . . . . 5 4 2 2 2 4 5 . . . . . 
            . . . . 5 4 4 2 2 4 5 . . . . . 
            . . . . 5 5 4 2 4 4 5 . . . . . 
            . . . . . 5 5 4 5 5 5 . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, randint(0, 100), randint(0, 100))
        info.changeScoreBy(1)
        info.changeLifeBy(-1)
        pause(100)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.FireSource, function (sprite2, otherSprite) {
    info.changeLifeBy(5)
    sprites.destroy(otherSprite)
})
let fire: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . 3 . . . . . . . . . . . 4 . . 
    . 3 3 . . . . . . . . . 4 4 . . 
    . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
    . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
    . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
    . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
    . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
    . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
    . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
    . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
    . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
    . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
    . 4 4 d d 4 d d d 4 3 d d 4 . . 
    . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
    . 4 5 4 . . 4 4 4 . . . 4 4 . . 
    . 4 4 . . . . . . . . . . 4 4 . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 50, 50)
mySprite.setStayInScreen(true)
info.setLife(15)
info.startCountdown(3)
game.onUpdateInterval(500, function () {
    fire = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 2 . . 5 5 . . . . . 
        . . . 2 . . 2 2 5 5 . . . . . . 
        . . . 2 2 2 2 2 2 . . . . . . . 
        . . . 2 f 2 2 f 2 . . . . . . . 
        . . . 2 f 2 f f 2 . . . . . . . 
        . . . 2 2 f f 2 2 . . . . . . . 
        . . . 2 2 f 2 2 2 . . . . . . . 
        . . . 2 f f f 2 2 . . . . . . . 
        . . . 2 f 2 f f 2 . . . . . . . 
        . . . 2 2 2 2 f 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.FireSource)
})
