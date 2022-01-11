let cvs = document.getElementById("myCanvas");
let ctx = cvs.getContext("2d");
let myPoint = new Circle(50, 300, 10)
let gapPole = 100;
let spacePole = 150;
let topPole = [new Obstacle(100, Math.floor(Math.random()*150-300))];
let botPole = [new Obstacle(100, topPole[0].y + topPole[0].height + gapPole)];


// function moveSelection(e){
//     if (e.keyCode === 32){
//         myPoint.y -= 50
//     }
// }
//bat dau game, ve diem
function start() {
    ctx.clearRect(0, 0 , cvs.width, cvs.height);
    myPoint.drawCir();
    myPoint.drop();
    for (let i = 0; i < topPole.leength; i++){
        drawPole(i);
        if (checkPole(i) === false){
            return;
        }
        if (topPole[i].x === myPoint.x - 50){
            score++;
        }
    }
    window.addEventListener("keydown", jumpPoint);
    ctx.fillStyle = "#090909";
    ctx.font = "24px Dancing Script";
    ctx.fillText("Score : " + score, 20, cvs.height - 50);
    ctx.fillText("High Score : " + sessionStorage['high_score' + (sessionStorage.length - 1)], 140, cvs.height - 50);
    checkHighScore();
    setInterval(start, 1000)
}


//ve cot, chay cot
function drawPole(i){
    topPole[i].drawObstacle(ctx);
    botPole[i].drawObstacle(ctx);
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

function checkHighScore() {
    for (let j = 0; j < sessionStorage.length; j++) {
        if (sessionStorage['high_score' + (sessionStorage.length - 1)] < score) {
            highScore = score;
            sessionStorage.setItem('high_score' + (j + 1), highScore);
        }
    }
}

function pause() {
    
}

function restart(){

}

//Check va cham
