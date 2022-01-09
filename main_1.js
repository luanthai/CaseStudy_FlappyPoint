let cvs = document.getElementById("myCanvas");
let ctx = cvs.getContext("2d");
let myPoint = new circle(50, 300, 10)
let gapPole = 100;
let spacePole = 150;
let topPole = [new Obstacle(cvs.width + 100, Math.floor(Math.random()*150-300))];
let botPole = [new Obstacle(cvs.width + 100, topPole[0].y + topPole[0].height + gapPole)];


function moveSelection(e){
    if (e.keyCode === 32){
        myPoint.y -= 50
    }
}
//bat dau game, ve diem
function start() {
    ctx.clearReact(0, 0 , cvs.width, cvs.height);
    myPoint.drawCir();
    myPoint.drop();
    window.addEventListener("keydown", jumpPoint);
}

//ve cot, chay cot
function drawPole(i){
    topPole[i].drawObstacle();
    botPole[i].drawObstacle();
    topPole[i].moveLeft();
    botPole[i].moveLeft();

    if (topPole[i].x === spacePole){
        let randomY = Math.floor(Math.random()*150 - 300);
        topPole.push(new Obstacle(cvs.width + 50, randomY));
        botPole.push(new Obstacle(csv.width + 50, randomY + 380 + gapPole));
    }
}

function jumpPoint(){
    myPoint.jump()
}

function pause() {
    
}

function restart(){

}
