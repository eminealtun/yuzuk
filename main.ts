let say = 0
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        music.playTone(262, music.beat(BeatFraction.Double))
        say += 1
        basic.showNumber(say)
    } else {
        music.stopMelody(MelodyStopOptions.All)
    }
})
