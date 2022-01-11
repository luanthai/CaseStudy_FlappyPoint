
class Circle {
    x
    y
    radius

    constructor(x, y, radius) {
        this.x = x
        this.y = y
        this.radius = radius
    }

    drop() {
        this.y += 1
    }

    jump(){
        this.y -= 10
    }

    drawCir() {
        let cvs = document.getElementById("myCanvas");
        let ctx = cvs.getContext("2d");
        ctx.beginPath()
        ctx.fillStyle = "purple"
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2)
        ctx.fill()
        ctx.closePath()
    }
}