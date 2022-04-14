input.onButtonPressed(Button.A, function () {
    while (count > -1) {
        basic.pause(1000)
        basic.showIcon(IconNames.Happy)
        strip.clear()
        range5 = strip.range(count - 15, 15)
        range4 = strip.range(0, count)
        range5.showColor(neopixel.colors(NeoPixelColors.Black))
        range4.showColor(neopixel.rgb(randint(0, 65), randint(0, 65), randint(0, 65)))
        range4.show()
        range5.show()
        count = count - 1
    }
    if (count == -1) {
        for (let index = 0; index < 10; index++) {
            strip.clear()
            basic.pause(100)
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            basic.pause(100)
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
        }
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
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
let range4: neopixel.Strip = null
let range5: neopixel.Strip = null
let count = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
count = 10
let range = strip.range(0, 5)
let range2 = strip.range(5, 10)
let range3 = strip.range(10, 15)
range.showColor(neopixel.rgb(randint(0, 10), randint(10, 20), randint(20, 30)))
range2.showColor(neopixel.rgb(randint(30, 60), randint(30, 40), randint(40, 60)))
range3.showColor(neopixel.rgb(randint(20, 30), randint(0, 65), randint(0, 20)))
for (let index = 0; index < 15; index++) {
    strip.rotate(1)
    strip.show()
    basic.pause(50)
}
basic.showString("Hot Potato")
basic.showLeds(`
    . # . . .
    # . # . .
    # # . # #
    # . . . #
    . # # # .
    `)
range.showColor(neopixel.rgb(randint(0, 10), randint(10, 20), randint(20, 30)))
range2.showColor(neopixel.rgb(randint(30, 60), randint(30, 40), randint(40, 60)))
range3.showColor(neopixel.rgb(randint(20, 30), randint(0, 65), randint(0, 20)))
while (!(input.buttonIsPressed(Button.A))) {
    strip.rotate(1)
    strip.show()
    basic.pause(50)
}
basic.forever(function () {
	
})
