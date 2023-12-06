@namespace
class SpriteKind:
    FireSource = SpriteKind.create()

def on_on_created(sprite):
    sprite.set_position(randint(0, scene.screen_width()),
        randint(0, scene.screen_height()))
sprites.on_created(SpriteKind.FireSource, on_on_created)

def on_a_pressed():
    global projectile
    info.stop_countdown()
    while info.life() > 1:
        projectile = sprites.create_projectile_from_sprite(img("""
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
            """),
            mySprite,
            randint(0, 100),
            randint(0, 100))
        info.change_score_by(1)
        info.change_life_by(-1)
        pause(100)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap(sprite2, otherSprite):
    info.change_life_by(5)
    sprites.destroy(otherSprite)
sprites.on_overlap(SpriteKind.player, SpriteKind.FireSource, on_on_overlap)

fire: Sprite = None
projectile: Sprite = None
mySprite: Sprite = None
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(mySprite, 50, 50)
mySprite.set_stay_in_screen(True)
info.set_life(15)
info.start_countdown(3)

def on_update_interval():
    global fire
    fire = sprites.create(img("""
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
        """),
        SpriteKind.FireSource)
game.on_update_interval(500, on_update_interval)
