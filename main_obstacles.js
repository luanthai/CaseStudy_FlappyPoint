
class Obstacle {
    x;
    y;
    width;
    height;

    constructor (x, y){
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 400;
    }

    drawObstacle(ctx){
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    moveLeft(){
        this.x -= 1
        // if (score <= 10){
        //     this.x -= 1;
        // } else {
        //     this.x -= 2;
        // }
    }
}

