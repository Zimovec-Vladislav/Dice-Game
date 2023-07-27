var cwidth = 400
var cheight = 300

var dicex = 50
var dicey = 50

var diceWidth = 100
var diceHeight = 100

var dotDadius = 6
var ctx

var dx
var dy

function throwDice() {
    var ch = 1+Math.floor(Marh.random()*6)

    dx = dicex
    dy = dicey

    drawFace(ch)

    dx = dicex + 150

    ch = 1 + Math.floor(Math.random()*6)
    drawFace(ch)
}

function drawFace(n) {
    ctx = document.getElementById('canvas').getContext('2d')
    ctx.lineWidth = 5

    ctx.clearRect(dx, dy, diceWidth, diceHeight)
    ctx.strokeRect(dx, dy, diceWidth, diceHeight)

    var dotx
    var doty

    ctx.fillStyle = '#009966'

    switch(n) {
        case 1: draw1();
        break;
        case 2: draw2();
        break;
        case 3: draw2(); draw1();
        break;
        case 4: draw4();
        break;
        case 5: draw4(); draw1();
        break;
        case 6: draw4(); draw2mid();
        break;
    }
}

function draw1() {
    var dotx
    var doty

    ctx.beginPath()
    
    dotx = dx + .5*diceWidth
    doty = dy + .5*diceHeight

    ctx.arc(dotx, doty, dotrad, 0, Math.PI*2, true)
    ctx.closePath()
    ctx.fill()
}

function draw2() {
    var dotx
    var doty

    ctx.beginPath()

    dotx = dx + 3*dotrad
    doty = dx + 3*dotrad

    ctx.arc(dotx, doty, dotrad, 0, Math.PI*2, true)

    dotx = dx + diceWidth - 3*dotrad
    doty = dy + diceHeight - 3*dotrad

    ctx.arc(dotx, doty, dotrad, 0, Math.PI*2, true)

    ctx.closePath()
    ctx.fill()
}

function draw4() {
    draw2()

    var dotx
    var doty

    ctx.beginPath()

    dotx = dx + 3*dotrad
    doty = dy + diceHeight - 3*dotrad

    ctx.arc(dotx, doty, dotrad, 0, Math.PI*2, true)

    dotx = dx + diceWidth - 3*dotrad
    doty = dy + 3*dotrad

    ctx.arc(dotx, doty, dotrad, 0, Math.PI*2, true)

    ctx.closePath()
    ctx.fill()
}

function draw2mid() {
    var dotx
    var doty

    ctx.beginPath()

    dotx = dx + 3*dotrad
    doty = dy + .5*diceHeight

    ctx.arc(dotx, doty, dotrad, 0, Math.PI*2, true)

    dotx = dx + diceWidth - 3*dotrad
    doty = dy + .5*diceHeight

    ctx.arc(dotx, doty, dotrad, 0, Math.PI*2, true)
    ctx.closePath()
    ctx.fill()
}

