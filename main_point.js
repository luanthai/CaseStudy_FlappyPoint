class circle {
    x
    y
    radius

    constructor(x, y, radius) {
        this.x = x
        this.y = y
        this.radius = radius
    }

    drop() {
        this.y += 5
    }

    jump(){
        this.y -= 20
    }

    drawCir() {
        ctx.beginPath()
        ctx.fillStyle = "purple"
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2)
        ctx.fill()
        ctx.closePath()
    }
}