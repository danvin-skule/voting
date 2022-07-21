input.onPinPressed(TouchPin.P0, function () {
    if (за < против) {
        dctuj = "yes"
    }
    if (против < за) {
        dctuj = "no"
    }
    if (за == против) {
        dctuj = "draw"
    }
    if (dctuj == "draw") {
        basic.showString("draw")
        basic.showNumber(total)
    } else {
        basic.showString("yes" + за)
        basic.pause(2000)
        basic.showString("no" + против)
    }
})
input.onButtonPressed(Button.A, function () {
    за += 1
    basic.showIcon(IconNames.Yes)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    против += 1
    basic.showIcon(IconNames.Yes)
    basic.pause(2000)
    basic.clearScreen()
})
let total = 0
let dctuj = ""
let против = 0
let за = 0
basic.showString("A=yes B=no P0=info")
basic.forever(function () {
    total = за + против
})
