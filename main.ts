input.onGesture(Gesture.TiltRight, function () {
    sprite.turn(Direction.Right, 90)
})
input.onButtonPressed(Button.A, function () {
    sprite.move(1)
})
input.onGesture(Gesture.TiltLeft, function () {
    sprite.turn(Direction.Left, 90)
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("D D - C - - - - ", 200)
    game.gameOver()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(game.score())
})
let sprite: game.LedSprite = null
game.setLife(99999)
sprite = game.createSprite(randint(0, 2), randint(0, 2))
let faenger = game.createSprite(randint(0, 2), randint(0, 2))
basic.forever(function () {
    if (sprite.isTouchingEdge()) {
        sprite.delete()
        sprite = game.createSprite(randint(0, 2), randint(0, 2))
    }
    if (faenger.isTouchingEdge()) {
        faenger.delete()
        faenger = game.createSprite(randint(0, 2), randint(0, 2))
    }
    if (sprite.isTouchingEdge()) {
        sprite.delete()
        basic.pause(50)
        sprite = game.createSprite(3, 2)
        basic.pause(100)
        game.removeLife(1)
    }
    if (sprite.isTouching(faenger)) {
        faenger.delete()
        music.playMelody("C5 C - - - - - - ", 120)
        faenger = game.createSprite(randint(0, 2), randint(0, 2))
        game.addScore(1)
        if (faenger.isTouchingEdge()) {
            faenger.delete()
            faenger = game.createSprite(randint(0, 2), randint(0, 2))
        }
    }
    if (game.score() == 10) {
        music.playMelody("A F E F D G E F ", 120)
        basic.showString("YOU WIN")
        game.gameOver()
    }
})
