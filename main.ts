input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        sprite.move(-1)
        basic.pause(100)
    }
    sprite.turn(Direction.Right, 45)
    for (let index = 0; index < 4; index++) {
        sprite.move(1)
        basic.pause(100)
    }
    sprite.turn(Direction.Right, 45)
    for (let index = 0; index < 4; index++) {
        sprite.move(1)
        basic.pause(100)
    }
    sprite.turn(Direction.Right, 45)
})
let sprite: game.LedSprite = null
sprite = game.createSprite(5, 0)
