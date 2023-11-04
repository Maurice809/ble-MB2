input.onButtonPressed(Button.A, function () {
    radio.sendString("TEST")
    basic.showArrow(ArrowNames.North)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "TEST") {
        basic.showIcon(IconNames.Heart)
        radio.sendString("CHECK")
    }
    if (receivedString == "CHECK") {
        basic.showIcon(IconNames.Yes)
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    ecran = "TX = " + tx
    basic.showString(ecran)
    tx += 1
    if (tx == 8) {
        tx = 0
    }
    radio.setTransmitPower(tx)
})
let tx = 0
let ecran = ""
radio.setGroup(1)
basic.showString("BLE")
basic.forever(function () {
	
})
