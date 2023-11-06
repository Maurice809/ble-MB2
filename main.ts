input.onButtonPressed(Button.A, function () {
    radio.sendString("TEST")
    basic.showArrow(ArrowNames.North)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "TEST") {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        radio.sendString("CHECK")
    }
    if (receivedString == "CHECK") {
        basic.showIcon(IconNames.Yes)
    }
})
input.onButtonPressed(Button.B, function () {
    ecran = "TX" + tx
    basic.showString(ecran)
    tx += 1
    if (tx == 8) {
        tx = 1
    }
})
let ecran = ""
let tx = 0
radio.setGroup(1)
basic.showString("BLE")
tx += 1
radio.setTransmitPower(tx)
basic.forever(function () {
	
})
