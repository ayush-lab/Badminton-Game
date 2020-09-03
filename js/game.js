var canvas = document.getElementById('game');
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

var r_grr = 0, l_grr = 0;
var jump_speed = 5;
var jump_left = false;
var jump_right = false;

// velocities
var h_vel = 5.5;
var v_vel = 5.5;
//var g = 0.07;


//images
var img = new Image();
var leftplayer = new Image();
var rightplayer = new Image();
var leftplayer_racket = new Image();
var rightplayer_racket = new Image();

img.src = '../Images/shuttle.svg';
leftplayer.src = '../Images/left.png';
rightplayer.src = '../Images/right.png';

leftplayer_racket.src='../Images/racket.png';
rightplayer_racket.src='../Images/racket.png';

leftplayer_racket.src = '../Images/racket1.png';
rightplayer_racket.src = '../Images/racket1.png';


var racket_x=0;
var x_movement=0;
var racket_y=0;


var isCollide = false;
img.src = '../Images/shuttle.svg';
imgleftplayer.src = '../Images/left.png';
imgrightplayer.src = '../Images/right.png'
egg.src = '../Images/egg.png'


document.addEventListener('mousedown', mouseact, false);

function mouseact(ob) {
    alert(ob.clientY - 110);
}
animationstart = requestAnimationFrame(draw);


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (flag == 0 || flag == 2 || flag == 4) ctx.drawImage(img, x_pos, y_pos, 30, 30);
    else rotate_shuttle();
    LeftPlayer();
    RightPlayer();
    net_collision();
    Jump_left();
    Jump_right();
    rotate_racket();
 
    // if(y_pos > height ){
    //       cancelAnimationFrame(animationstart);
       
    //  }


    CheckGround();
    ControlCheck();
    EggLeft();
    EggRight();


  /* For Knowing ShuttlePosition
    var DisLeft = distance(left_player_x, left_player_y, x_pos, y_pos);
    var DisRight = distance(right_player_x, right_player_y, x_pos, y_pos);
    if (DisLeft<=200)
    {
        console.log("LEFT  "+DisLeft);
    }
    if(DisRight<=200)
    {
        console.log("RIGHT  "+DisRight);
    }*/
}

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

function ResetPosition() {
    setTimeout(function () {
        location.reload();
    }, 2000)

}

function rotate_shuttle() {
    ctx.save();
    ctx.translate(40, 40);
    ctx.rotate(180 * (Math.PI / 180));
    ctx.drawImage(img, -x_pos, -y_pos, 30, 30);
    ctx.restore();
}

function rotate_racket(){
   
    ctx.save();
    //ctx.translate(left_player_x/2,left_player_y/2);
    ctx.translate(left_player_x,left_player_y);
    ctx.fillStyle='black';
    ctx.arc(0,0,1000,0, Math.PI*2);
   
    ctx.rotate(racket_x * Math.PI/180);
    ctx.drawImage(leftplayer_racket,30,-60, 120, 120);
    ctx.restore();
    racket_x+=1;
    x_movement+=0.1;
}


function EggLeft() {
    var l_a = ctx.drawImage(egg, 60, 10, 70, 70);
    var l_b = ctx.drawImage(egg, 120, 10, 70, 70);
    var l_c = ctx.drawImage(egg, 180, 10, 70, 70);
    var l_d = ctx.drawImage(egg, 240, 10, 70, 70);
    var l_e = ctx.drawImage(egg, 300, 10, 70, 70);
}
function EggRight() {
    var r_a = ctx.drawImage(egg, 938, 10, 70, 70);
    var r_b = ctx.drawImage(egg, 998, 10, 70, 70);
    var r_c = ctx.drawImage(egg, 1058, 10, 70, 70);
    var r_d = ctx.drawImage(egg, 1118, 10, 70, 70);
    var r_e = ctx.drawImage(egg, 1178, 10, 70, 70);
}

function CheckGround() {
    if (x_pos <= 100 || x_pos >= 1300) {
        cancelAnimationFrame(animationstart);
        alert("Outside");
        ResetPosition();
    }
    else if (y_pos >= canvas.height - 100) {

        cancelAnimationFrame(animationstart);
        ResetPosition();
        if (x_pos <= canvas.width / 2) {
            console.log("Left");
            alert("Right Player Win");
            rightscore++;
        
        }

        else if (x_pos >= canvas.width / 2) {
            console.log("Right");
            alert("Left Player Win");
            leftscore++;
        }
    }
    else {
        animationstart = requestAnimationFrame(draw);
    }
}


function LeftPlayer() {
    ctx.beginPath();
    ctx.drawImage(leftplayer_racket, left_player_x, left_player_y - 60, 120, 120);
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
function RightPlayer() {
    ctx.beginPath();
    ctx.drawImage(rightplayer_racket, right_player_x, right_player_y - 60, 120, 120);
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
function Collide() {
    location.reload();
}

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



function forward() {
    x_pos += h_vel;
    y_pos -= v_vel;
    y_pos += gr;
}

function backward() {

    x_pos -= h_vel;
    y_pos -= v_vel;
    y_pos += gr;
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


function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

}

function net_collision() {
    if (y_pos >= 530 && x_pos > 690 && x_pos < 720) { //690 720
        location.reload();
    }
}
