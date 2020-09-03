var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');
var height = canvas.height / 1.2;
var flag = 0;
var x_pos = 180;
var y_pos = height - 1;
var gr = 0;
var angle = (45 * (Math.PI) / 180);
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitCancelAnimationFrame;
var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
var animationstart;
var img = new Image();
var imgleftplayer = new Image();
var imgrightplayer = new Image();
var egg = new Image();
var a_pressed = false;
var s_pressed = false;
var d_pressed = false;
var left_pressed = false;
var right_pressed = false;
var down_pressed = false;
var left_player_x = 120;
var right_player_x = 1000;
var left_player_y = 600;
var right_player_y = 600;
var leftscore = 0;
var rightscore = 0;
var isCollide = false;
img.src = '../Images/shuttle.svg';
imgleftplayer.src = '../Images/left.png';
imgrightplayer.src = '../Images/right.png'
egg.src = '../Images/egg.png'
document.addEventListener("keydown", keydownF, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener('mousedown', mouseact, false);

function mouseact(ob) {
    //alert(ob.clientX, " , ", ob.screenX, ',', ob.pageX);
    console.log(ob.clientX);
}

animationstart = requestAnimationFrame(draw);

var h_vel = 5.5;
var v_vel = 5.5;
var g = 0.07;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x_pos, y_pos, 30, 30);
    EggLeft();
    EggRight();
    LeftPlayer();
    RightPlayer();
    StartMatch();
    CheckGround();

}
//  CONTROLS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function keydownF(ob) {
    if (ob.key == "a") {
        a_pressed = true;
    }
    if (ob.key == "d") {
        d_pressed = true;
    }
    if (ob.key == "s") {
        s_pressed = true;
    }
    if (ob.key == "ArrowLeft") {
        left_pressed = true;
    }
    if (ob.key == "ArrowRight") {
        right_pressed = true;
    }



}
function keyUpHandler(ob) {
    if (ob.key == "a" || ob.key == "A") {
        a_pressed = false;
    }
    if (ob.key == "d" || ob.key == "D") {
        d_pressed = false;
    }

    if (ob.key == "ArrowLeft") {
        left_pressed = false;
    }
    if (ob.key == "ArrowRight") {
        right_pressed = false;
    }
    if (ob.key == "ArrowDown") {
        right_pressed = false;
    }

}

//////////////////////////////////          END OF CONTROLS          ///////////////////////////////////////////////// 
function EggLeft() {
    var l_a = ctx.drawImage(egg, 0, 10, 70, 70);
    var l_b = ctx.drawImage(egg, 60, 10, 70, 70);
    var l_c = ctx.drawImage(egg, 120, 10, 70, 70);
    var l_d = ctx.drawImage(egg, 180, 10, 70, 70);
    var l_e = ctx.drawImage(egg, 240, 10, 70, 70);
}
function EggRight() {
    var r_a=ctx.drawImage(egg, 938, 10, 70, 70);
    var r_b=ctx.drawImage(egg, 998, 10, 70, 70);
    var r_c=ctx.drawImage(egg, 1058, 10, 70, 70);
    var r_d=ctx.drawImage(egg, 1118, 10, 70, 70);
    var r_e=ctx.drawImage(egg, 1178, 10, 70, 70);
}
function ResetPosition() {

}
function CheckGround() {
    if (y_pos >= canvas.height - 100) {

        cancelAnimationFrame(animationstart);
        ResetPosition();
        if (x_pos <= canvas.width / 2) {
            console.log("Left");
            alert("Right Win");
        }

        else if (x_pos >= canvas.width / 2) {
            console.log("Right");
            alert("Left Win");
        }
    }
    else {
        animationstart = requestAnimationFrame(draw);
    }
}
function StartMatch() {
    if (s_pressed) {
        forward();
        clear_shot_f();
    }

}
function LeftPlayer() {
    ctx.beginPath();
    ctx.drawImage(imgleftplayer, left_player_x, left_player_y, 120, 120);
    ctx.closePath();
    if (d_pressed && left_player_x < 580) {
        left_player_x += 10;
    }
    if (a_pressed && left_player_x >= 100) {
        left_player_x += -10;
    }

}
function RightPlayer() {
    ctx.beginPath();
    ctx.drawImage(imgrightplayer, right_player_x, right_player_y, 120, 120);
    ctx.closePath();
    if (left_pressed && right_player_x > 750) {
        right_player_x += -10;
    }
    if (right_pressed && right_player_x <= 1100) {
        right_player_x += 10;
    }

}
function Collide() {

}


function forward() {
    x_pos += h_vel;
    y_pos -= v_vel;
    y_pos += gr;
    // console.log(y_pos, "->" ,x_pos);
}

function backward() {

    x_pos -= h_vel;
    y_pos -= v_vel;
    y_pos += gr;
    // console.log('okkk');
}



function clear_shot_f() {
    gr += 0.07;
}

function clear_shot_b() {
    gr += 0.07;
}



function drop_shot_f_f() {     //drop shot from front to front (forward)
    gr += 0.2;
}

function drop_shot_f_b() {     //drop shot from front to front (backward)
    gr += 0.15;
}



function drop_shot_b_f() {     //drop shot from back to front (forward)
    gr += 0.15;
}

function drop_shot_b_b() {     //drop shot from back to front (backward)
    gr += 0.1;
}
function leftplayer() {

}