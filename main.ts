namespace SpriteKind {
    export const FireSource = SpriteKind.create()
    export const thing = SpriteKind.create()
}
sprites.onCreated(SpriteKind.FireSource, function (sprite) {
    sprite.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    stuff()
})
sprites.onCreated(SpriteKind.thing, function (sprite) {
    sprite.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
})
function stuff () {
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
        pause(200)
    }
    while (info.score() < 150) {
        thingsprite = sprites.create(img`
            . . . . . . . 8 . 8 . . . . . . 
            . . . . . . . 8 9 8 . . . . . . 
            . . . . . . . 8 9 8 . . . . . . 
            . . . . . . . 8 9 8 . . . . . . 
            . . . . . . . 6 9 6 . . . . . . 
            . . . . . . 8 6 9 6 8 . . . . . 
            . . . . . . 8 9 9 9 8 . . . . . 
            . . . . . . 8 9 9 9 6 . . . . . 
            . . . . . . 6 9 9 9 6 . . . . . 
            . . . . . . 6 9 9 9 6 . . . . . 
            . . . . . . 6 9 9 9 6 . . . . . 
            . . . . . . 8 6 9 6 8 . . . . . 
            . . . . . . . 8 8 8 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.thing)
        pause(2000)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.thing, function (sprite2, otherSprite) {
    info.changeScoreBy(-1)
    info.changeLifeBy(-10)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.FireSource, function (sprite2, otherSprite) {
    info.changeLifeBy(5)
    sprites.destroy(otherSprite)
})
let fire: Sprite = null
let thingsprite: Sprite = null
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
game.onUpdateInterval(500, function () {
    if (info.score() > 150) {
        game.gameOver(true)
        game.setGameOverEffect(true, effects.confetti)
        game.setGameOverScoringType(game.ScoringType.HighScore)
    }
})
game.onUpdateInterval(500, function () {
    if (info.life() < 2) {
        game.gameOver(false)
        game.setGameOverEffect(false, effects.melt)
    }
})
