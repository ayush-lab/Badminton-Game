var canvas = document.getElementById('game');
//////////////////////////////////////////////////////////////
var ctx = canvas.getContext('2d');
var height = canvas.height / 1.2;
var flag = 0;
var Distance;
var x_pos = 180;
var y_pos = height - 1;
var gr = 0;
var angle = (45 * (Math.PI) / 180);
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitCancelAnimationFrame;
var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
var animationstart;
var left_player_x = 120;
var right_player_x = 1000;
var left_player_y = 600;
var right_player_y = 600;
var leftscore = 0;
var rightscore = 0;
var r_grr = 0, l_grr = 0;
var jump_speed = 5;
var h_vel = 5.5;
var v_vel = 5.5;
var racket_left = 0;
var racket_left_x = 0;
var racket_left_y = -60;
var racket_right = 0;
var racket_right_x = 0;
var racket_right_y = -60;
///////////////////////////////////////////////////////////////
var a_pressed = false;
var s_pressed = false;
var d_pressed = false;
var left_pressed = false;
var right_pressed = false;
var down_pressed = false;
var jump_left = false;
var jump_right = false;
var rotate_flag_right = false;
var rotate_flag_left = false;
///////////////////////////////////////////////////////////////
var whistle = new Audio('/assests/whistle.mp3');
var hit = new Audio('/assests/hit.mp3');
///////////////////////////////////////////////////////////////
var img = new Image();
var imgleftplayer = leftplayer = new Image();
var imgrightplayer = rightplayer = new Image();
var egg = new Image(); 
var no_egg =new Image();
var img = new Image();
var leftplayer_racket = new Image();
var rightplayer_racket = new Image();
///////////////////////////////////////////////////////////////
img.src = '../Images/shuttle.svg';
leftplayer_racket.src = '../Images/racket-left.png';
rightplayer_racket.src = '../Images/racket-right.png';
img.src = '../Images/shuttle.svg';
imgleftplayer.src = '../Images/left.png';
imgrightplayer.src = '../Images/right.png';
egg.src = '../Images/egg.png';
no_egg.src='../Images/blank.png';
////////////////////////////console.log(Arena);////////////////
var Arena = sessionStorage.getItem("Arena");
if (Arena == "Arena1") {
    canvas.style.backgroundImage = "url('/Images/back1.png')"
}
else if (Arena == "Arena2") {
    canvas.style.backgroundImage = "url('/Images/back2.png')"
}
else if (Arena == "Arena3") {
    canvas.style.backgroundImage = "url('/Images/back3.png')"
}
////////////////////////////console.log(Bird);////////////////
var Bird = sessionStorage.getItem("Bird");
if (Bird == "Bird_blue") {
    imgleftplayer.src = '../Images/left.png';
}
else if (Bird == "Bird_she") {
    imgleftplayer.src = '../Images/left_she.png';
}
else if (Bird == "Bird_red") {
    imgleftplayer.src = '../Images/left_red.png';
}
else if (Bird == "Bird_black") {
    imgleftplayer.src = '../Images/left_black.png';
}
else if (Bird == "Bird_yellow") {
    imgleftplayer.src = '../Images/left_yellow.png';
}
else if (Bird == "Bird_white") {
    imgleftplayer.src = '../Images/left_white.png';
}
////////////////////////////console.log(Pig);////////////////
var Pig =sessionStorage.getItem("Pig");
if (Pig=="pig_green")
{
    imgrightplayer.src='../Images/right.png';
}
else if (Pig=="pig_she")
{
    imgrightplayer.src='../Images/right_she.png';
}
else if (Pig=="pig_hitler")
{
    imgrightplayer.src='../Images/right_old.png';
}
else if (Pig=="pig_zombie")
{
    imgrightplayer.src='../Images/right_zombie.png';
}
///////////////////////////////////////////////////////////////
animationstart = requestAnimationFrame(draw);
///////////////////////////////////////////////////////////////
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (flag == 0 || flag == 2 || flag == 4) ctx.drawImage(img, x_pos, y_pos, 30, 30);
    else rotate_shuttle();

    LeftPlayer();
    RightPlayer();
    net_collision();
    Jump_left();
    Jump_right();
    CheckGround();
    ControlCheck();
    EggLeft();
    EggRight();
    win_logic()

}
///////////////////////////////////////////////////////////////
function ResetPosition() {
    setTimeout(function () {
        location.reload();
    }, 2000)

}
///////////////////////////////////////////////////////////////
function rotate_shuttle() {
    ctx.save();
    ctx.translate(40, 40);
    ctx.rotate(180 * (Math.PI / 180));
    ctx.drawImage(img, -x_pos, -y_pos, 30, 30);
    ctx.restore();
}
///////////////////////////////////////////////////////////////
function rotate_racket_left() {
    ctx.save();
    ctx.translate(left_player_x - 60, left_player_y);
    if (racket_left_x < 50) {
        ctx.rotate(racket_left * Math.PI / 180);
        ctx.drawImage(leftplayer_racket, racket_left_x, racket_left_y, 120, 120);
    }
    else rotate_flag_left = false;
    racket_left += 1;
    racket_left_x += 2;
    racket_left_y -= 2;
    ctx.restore();
}

///////////////////////////////////////////////////////////////
function rotate_racket_right() {
    ctx.save();
    ctx.translate(right_player_x - 60, right_player_y);
    if (racket_right_x < 50) {
        ctx.rotate(racket_right * Math.PI / 180);
        ctx.drawImage(rightplayer_racket, racket_right_x + 50, racket_right_y, 120, 120);
    }
    else rotate_flag_right = false;
    racket_right += 1;
    racket_right_x += 2;
    racket_right_y -= 2;
    ctx.restore();
}
///////////////////////////////////////////////////////////////
function CheckGround() {
    if (x_pos <= 100 || x_pos >= 1300) {
        cancelAnimationFrame(animationstart);
        msgShownFN("Outside");
        ResetPosition();
    }
    else if (y_pos >= canvas.height - 100) {

        cancelAnimationFrame(animationstart);
        ResetPosition();
        if (x_pos <= canvas.width / 2) {
            console.log("Left");
            msgShownFN("Point");
            if (localStorage.getItem("RS")!=null)
            {
                rightscore=localStorage.getItem("RS");
            }
            rightscore++;
            console.log("Right Score : "+rightscore);
            localStorage.setItem("RS", rightscore);
        }

         if (x_pos >= canvas.width / 2) {
            console.log("Right");
            msgShownFN("Point");
            if (localStorage.getItem("LS")!=null)
            {
                leftscore=localStorage.getItem("LS");
            }
            leftscore++;
            console.log("Left Score : "+leftscore);
            localStorage.setItem("LS", leftscore);
        }
    }
    else {
        animationstart = requestAnimationFrame(draw);
    }
}
///////////////////////////////////////////////////////////////
function msgShownFN(str) {
    ctx.save();
    ctx.translate(-canvas.width / 2, -100);
    ctx.beginPath();
    ctx.rect(canvas.width / 2, canvas.height / 2 + 60, canvas.width, 120);
    ctx.fillStyle = '#191970';
    ctx.fill();
    ctx.restore();
    ctx.font = "70px Bree Serif";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(str, canvas.width / 2, canvas.height / 2 + 50);
    whistle.play();
    setTimeout(function () {
        ctx.fill("", -canvas.width / 2, -canvas.height / 2);
        msgShown = false;
    }, 2000)
}
///////////////////////////////////////////////////////////////
function LeftPlayer() {
    ctx.beginPath();
    if (rotate_flag_left) rotate_racket_left();
    else
        ctx.drawImage(leftplayer_racket, left_player_x - 20, left_player_y - 60, 120, 120);

    ctx.drawImage(leftplayer, left_player_x, left_player_y, 120, 120);
    ctx.drawImage(imgleftplayer, left_player_x, left_player_y, 120, 120);
    ctx.closePath();
    if (d_pressed && left_player_x < 580 && s_pressed) {
        left_player_x += 10;
    }
    if (a_pressed && left_player_x >= 100 && s_pressed) {
        left_player_x += -10;
    }

}
///////////////////////////////////////////////////////////////
function RightPlayer() {
    ctx.beginPath();

    if (rotate_flag_right) rotate_racket_right();
    else ctx.drawImage(rightplayer_racket, right_player_x + 10, right_player_y - 60, 120, 120);

    ctx.drawImage(rightplayer, right_player_x, right_player_y, 120, 120);
    ctx.drawImage(imgrightplayer, right_player_x, right_player_y, 120, 120);
    ctx.closePath();
    if (left_pressed && right_player_x > 750) {
        right_player_x += -10;
    }
    if (right_pressed && right_player_x <= 1100) {
        right_player_x += 10;
    }

}
///////////////////////////////////////////////////////////////
function Jump_left() {
    if (jump_left && s_pressed) {

        ctx.beginPath();
        ctx.drawImage(leftplayer, left_player_x, left_player_y, 120, 120);
        ctx.closePath();

        left_player_y -= jump_speed;
        left_player_y += l_grr;
        l_grr += 0.1;

        if (left_player_y > 600) {
            left_player_y = 600;
            l_grr = 0;
            //jump_speed=0;
            jump_left = false;
        }
    }
}

///////////////////////////////////////////////////////////////
function Jump_right() {
    if (jump_right) {

        ctx.beginPath();
        ctx.drawImage(rightplayer, right_player_x, right_player_y, 120, 120);
        ctx.closePath();

        right_player_y -= jump_speed;
        right_player_y += r_grr;
        r_grr += 0.1;

        if (right_player_y > 600) {
            right_player_y = 600;
            r_grr = 0;
            jump_right = false;
        }
    }
}
///////////////////////////////////////////////////////////////
function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

}
///////////////////////////////////////////////////////////////
function net_collision() {
    if (y_pos >= 530 && x_pos > 690 && x_pos < 720) {
        msgShownFN("Net ");
        location.reload();
    }
}
///////////////////////////////////////////////////////////////
function EggLeft() {
    if(localStorage.getItem("RS") >=5)ctx.drawImage(no_egg, 60, 10, 70, 70);
    else ctx.drawImage(egg, 60, 10, 70, 70);

    if(localStorage.getItem("RS") >=4)ctx.drawImage(no_egg, 120, 10, 70, 70);
    else ctx.drawImage(egg, 120, 10, 70, 70);

    if(localStorage.getItem("RS") >=3)ctx.drawImage(no_egg, 180, 10, 70, 70);
    else ctx.drawImage(egg, 180, 10, 70, 70);
    
    if(localStorage.getItem("RS") >=2)ctx.drawImage(no_egg, 240, 10, 70, 70);
    else ctx.drawImage(egg, 240, 10, 70, 70);
  
    if(localStorage.getItem("RS") >=1)ctx.drawImage(no_egg, 300, 10, 70, 70);
    else ctx.drawImage(egg, 300, 10, 70, 70);
}
///////////////////////////////////////////////////////////////
function EggRight() {
    if(localStorage.getItem("LS") >=5)ctx.drawImage(no_egg, 938, 10, 70, 70);
    else ctx.drawImage(egg, 938, 10, 70, 70);

    if(localStorage.getItem("LS") >=4)ctx.drawImage(no_egg, 998, 10, 70, 70);
    else ctx.drawImage(egg, 998, 10, 70, 70);
    
    if(localStorage.getItem("LS") >=3)ctx.drawImage(no_egg, 1058, 10, 70, 70);
    else ctx.drawImage(egg, 1058, 10, 70, 70);
    
    if(localStorage.getItem("LS") >=2)ctx.drawImage(no_egg, 1118, 10, 70, 70);
    else ctx.drawImage(egg, 1118, 10, 70, 70);

    if(localStorage.getItem("LS") >=1)ctx.drawImage(no_egg, 1178, 10, 70, 70);
    else ctx.drawImage(egg, 1178, 10, 70, 70);
}
///////////////////////////////////////////////////////////////
function ControlCheck() {
    if (flag == 0 && s_pressed) {
        forward();
        clear_shot_f();

    }

    if (flag == 1) {
        backward();
        clear_shot_b();
    }
    if (flag == 2) {
        forward();
        drop_shot_f_f();
        console.log("forward ->", gr);

    }

    if (flag == 3) {
        backward();
        drop_shot_f_b();
        console.log("backward->", gr);

    }
    if (flag == 4) {
        forward();
        drop_shot_b_f();

    }
    if (flag == 5) {
        backward();
        drop_shot_b_b();

    }
}
///////////////////////////////////////////////////////////////
function forward() {
    x_pos += h_vel;
    y_pos -= v_vel;
    y_pos += gr;
}
///////////////////////////////////////////////////////////////
function backward() {

    x_pos -= h_vel;
    y_pos -= v_vel;
    y_pos += gr;
}
///////////////////////////////////////////////////////////////
function clear_shot_f() {
    gr += 0.07;
}
///////////////////////////////////////////////////////////////

function clear_shot_b() {
    gr += 0.07;
}
///////////////////////////////////////////////////////////////
function drop_shot_f_f() {     //drop shot from front to front (forward)
    gr += 0.2;
}
///////////////////////////////////////////////////////////////

function drop_shot_f_b() {     //drop shot from front to front (backward)
    gr += 0.15;
}
///////////////////////////////////////////////////////////////
function drop_shot_b_f() {     //drop shot from back to front (forward)
    gr += 0.15;
}
///////////////////////////////////////////////////////////////
function drop_shot_b_b() {     //drop shot from back to front (backward)
    gr += 0.1;
}


function win_logic(){
    if(rightscore ==5){
        msgShownFN("Bad Piggy has won the game!");
        localStorage.setItem("RS", 0);
        localStorage.setItem("LS", 0);

    }

    else if(leftscore ==5){
        msgShownFN("Angry Bird has won the game!"); 
        localStorage.setItem("RS", 0);
        localStorage.setItem("LS", 0);
    }
}