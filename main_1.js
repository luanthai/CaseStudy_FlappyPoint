let cvs = document.getElementById("myCanvas");
let ctx = cvs.getContext("2d");
let myPoint = new Circle(50, 300, 20)
let gapPole = 120;
let spacePole = 120;
let topPole = [new Obstacle(cvs.width + 50, Math.floor(Math.random()*150-300))];
let botPole = [new Obstacle(cvs.width + 50, topPole[0].y + topPole[0].height + gapPole)];
let score = 0;
let highScore = 0;
sessionStorage.setItem('high_score0', highScore);
let time;

// function moveSelection(e){s
//     if (e.keyCode === 32){
//         myPoint.y -= 50
//     }
// }
//bat dau game, ve diem
function play(){
    ctx.clearRect(0, 0 , cvs.width, cvs.height);
    myPoint.drawCir();
    myPoint.drop();
    window.addEventListener("keydown", jumpPoint);

    for (let i = 0; i < topPole.length; i++){
        drawPole(i);
        if (checktopPole(i) === false || checkBotPole(i) === false){
            return;
        }
        if (topPole[i].x === myPoint.x - 50){
            score++;
        }
    }

    ctx.fillStyle = "#090909";
    ctx.font = "24px Dancing Script";
    ctx.fillText("Score : " + score, 20, cvs.height - 50);
    ctx.fillText("High Score : " + sessionStorage['high_score' + (sessionStorage.length - 1)], 140, cvs.height - 50);
    checkHighScore();

    requestAnimationFrame(play)
}

window.onload = function() {
    play()
}

// function start() {
//     time = setInterval(play, 100);
// }

//ve cot, chay cot
function drawPole(i){
    topPole[i].drawObstacle(ctx);
    botPole[i].drawObstacle(ctx);
    topPole[i].moveLeft();
    botPole[i].moveLeft();

    if (topPole[i].x === spacePole){
        let randomY = Math.floor(Math.random()*150 - 300);
        topPole.push(new Obstacle(cvs.width + 50, randomY));
        botPole.push(new Obstacle(cvs.width + 50, randomY + 380 + gapPole));
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

// function restart(){
//     score = 0;
//     myPoint = new Circle(40, 120);
//     topPole = [new Obstacle(cvs.width + 50, Math.floor(Math.random()*150-300))];
//     botPole = [new Obstacle(cvs.width + 50, topPole[0].y + topPole[0].height + gapPole)];
//     play();
// }

function stop(){
    // document.getElementById('score_title').innerHTML = `${score}`;
    alert('Your Score is' + score)
}

//Check va cham
// check với cạnh canvas
// check với cột trên topPole: check 2 cạnh và đáy
// Check với cột dưới botPole: check 2 cạnh và đỉnh

// function checkPointVsCanvas() {
//     if (myPoint.y - myPoint.radius <= 0 || myPoint.y + myPoint.radius >= cvs.height){
//         alert('You die!');
//         return false;
//     }
// }

function checktopPole(i) {
    let Ax = myPoint.x;
    let Ay = myPoint.y;    

    let pole_left = topPole[i].x;
    let pole_right = topPole[i].x + topPole[i].width;
    let topPole_bottom = topPole[i].y + topPole[i].height;
    let topPole_top = topPole[i].y;

    if (myPoint.x < pole_left)
        Ax = pole_left;
    else if (myPoint.x > pole_right)
        Ax = pole_right;

    if (myPoint.y < topPole_top)
        Ay = topPole_top;
    else if (myPoint.y > topPole_bottom)
        Ay = topPole_bottom;

    let dx = myPoint.x - Ax;
    let dy = myPoint.y - Ay;
    

    if (myPoint.y - myPoint.radius <= 0 || myPoint.y + myPoint.radius >= cvs.height || ((dx * dx + dy * dy) <= Math.pow(myPoint.radius,2))){
        // stop();
        window.removeEventListener('keydown',jumpPoint);
        alert('You die!');
        return false;
        
    }
}

function checkBotPole(i) {
    let Bx = myPoint.x;
    let By = myPoint.y;    

    let pole_left_1 = botPole[i].x;
    let pole_right_1 = botPole[i].x + botPole[i].width;
    let botPole_bottom_1 = botPole[i].y + botPole[i].height;
    let botPole_top_1 = botPole[i].y;

    if (myPoint.x < pole_left_1)
        Bx = pole_left_1;
    else if (myPoint.x > pole_right_1)
        Bx = pole_right_1;

    if (myPoint.y < botPole_top_1)
        By = botPole_top_1;
    else if (myPoint.y > botPole_bottom_1)
        By = botPole_bottom_1;

    let dx1 = myPoint.x - Bx;
    let dy1 = myPoint.y - By;
    

    if (((dx1 * dx1 + dy1 * dy1) <= Math.pow(myPoint.radius,2))){
        // stop();
        window.removeEventListener('keydown',jumpPoint);
        alert('You die!');
        return false;
        
    }  
}