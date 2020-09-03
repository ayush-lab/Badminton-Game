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


// racket movements

var racket_left=0;
var racket_left_x=0;
var racket_left_y=-60;
var rotate_flag_left=false;

var racket_right=0;
var racket_right_x=0;
var racket_right_y=-60;
var rotate_flag_right=false;






var isCollide = false;
img.src = '../Images/shuttle.svg';
imgleftplayer.src = '../Images/left.png';
imgrightplayer.src = '../Images/right.png'
egg.src = '../Images/egg.png'


// document.addEventListener('mousedown', mouseact, false);

// function mouseact(ob) {
//     alert(ob.clientY - 110);
// }
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
    CheckGround();
    ControlCheck();
    EggLeft();
    EggRight();
    
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

function rotate_racket_left(){
    
    ctx.save();
    ctx.translate(left_player_x-60,left_player_y);

    if(racket_left_x<50)  {
    ctx.rotate(racket_left * Math.PI/180);
    ctx.drawImage(leftplayer_racket,racket_left_x,racket_left_y, 120, 120);
    

                      }

    else rotate_flag_left=false;
    racket_left+=1;
    racket_left_x+=2;
    racket_left_y-=2; 
    ctx.restore();


  
}


function rotate_racket_right(){
    
    ctx.save();
    ctx.translate(right_player_x-60,right_player_y);

    if(racket_right_x<50)  {
    ctx.rotate(racket_right * Math.PI/180);
    ctx.drawImage(rightplayer_racket,racket_right_x,racket_right_y, 120, 120);
    

                      }

    else rotate_flag_right=false;

    racket_right+=1;
    racket_right_x+=2;
    racket_right_y-=2; 
    ctx.restore();


  
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


/////////////////////////////////////////////////////
//  shuttle movements 

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


