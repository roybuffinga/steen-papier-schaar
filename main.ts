radio.onReceivedNumber(function (receivedNumber) {
    ander = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    if (getal == ander) {
        basic.showIcon(IconNames.Asleep)
    } else {
        if (getal == 1) {
            if (ander == 2) {
                basic.showIcon(IconNames.Sad)
            } else {
                basic.showIcon(IconNames.Happy)
            }
        }
        if (getal == 2) {
            if (ander == 3) {
                basic.showIcon(IconNames.Sad)
            } else {
                basic.showIcon(IconNames.Happy)
            }
        }
        if (getal == 3) {
            if (ander == 1) {
                basic.showIcon(IconNames.Sad)
            } else {
                basic.showIcon(IconNames.Happy)
            }
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("3 2 1")
    getal = randint(1, 3)
    radio.sendNumber(getal)
    if (getal == 1) {
        basic.showIcon(IconNames.Target)
    } else if (getal == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
let getal = 0
let ander = 0
radio.setGroup(5)
