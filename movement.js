function move2D(ball, div) {
    ball.positionX += ball.velocityX;
    div.style.left = ball.positionX + 'px';

    ball.positionY += ball.velocityY;
    div.style.top = ball.positionY + 'px';
}

function setEdges(ball) {
    const velocityX = ball.velocityX;
    const velocityY = ball.velocityY;

    let newPosX = ball.positionX + velocityX;
    let newPosY = ball.positionY + velocityY;

    // outer boundary collision
    if(newPosX >= rightEdge ||  newPosX <= leftEdge) {
        ball.velocityX = velocityX*-1;
        ball.nearEdge = true;
    }
    if(newPosY >= bottomEdge || newPosY <= topEdge) {
        ball.velocityY = velocityY*-1;
        ball.nearEdge = true;
    }

}