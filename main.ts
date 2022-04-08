input.onButtonPressed(Button.A, function () {
    while (count > -1) {
        basic.pause(1000)
        basic.showIcon(IconNames.Happy)
        count = count - 1
    }
    if (count == -1) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            # . . . #
            # # . # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # . . . #
            # # . # #
            . # . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # . # #
            # # . # #
            . # . # .
            `)
        basic.pause(1000)
        basic.showString("You Lose")
    }
})
let count = 0
count = 10
basic.showString("Hot Potato")
basic.showLeds(`
    . # . . .
    # . # . .
    # # . # #
    # . . . #
    . # # # .
    `)
