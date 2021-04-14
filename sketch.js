//돌아다니는 원 잡기

let x = 0;
let y = 0;
let speed1 = 3;
let speed2 = 8; 
let state = 0 

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
}

function draw() {
    background(100, 130, 200);
    ellipse(x, y, 80);

    let d = dist (mouseX, mouseY, x, y)

    if(state == 0){ // 위 > 왼쪽 경우
        x = x + speed2;
        y = y + speed1;
        if(y > height - 40) {
            state = 1; // 왼 > 아래
        }else if (x > width -40){
            state = 3; // 왼 > 오른쪽
        }
    }else if (state == 1){ // 왼 > 아래 경우
        x = x + speed2;
        y = y - speed1;
        if(x > width - 40){
            state = 2; // 아래 > 오른쪽 
        }else if (y < 40){
            state = 0; // 아래 > 위
        }
    }else if (state == 2){ // 아래 > 오른쪽 경우
        x = x - speed2;
        y = y - speed1;
        if(y < 40){
            state = 3; // 오른쪽 > 위
        }else if (x < 40){
            state = 1; // 오른쪽 > 위 왼쪽
        }
    }else if (state == 3){ // 오른쪽 > 위 경우
        x = x - speed2;
        y = y + speed1; 
        if(x < 40){
            state = 0; // 위 > 왼쪽
        }else if (y > height - 40){
            state = 2; // 위 > 아래
        }
    }
    
    if (d < 40 && mouseIsPressed){
        fill(250, 70, 100);
        speed1 = 0;
        speed2 = 0;
    }else {
        fill(150, 200, 0);
        speed1 = 3;
        speed2 = 8;
    }

}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}