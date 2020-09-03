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
var leftplayer = new Image();
var rightplayer = new Image();
var a_pressed = false;
var d_pressed = false;
var left_pressed = false;
var right_pressed = false;
var left_player_x = 120;
var right_player_x = 1000;
var left_player_y = 600;
var right_player_y = 600;
var leftscore = 0;
var rightscore = 0;

// jump

var r_grr=0, l_grr=0;
var jump_speed=5;
var jump_left =false;
var jump_right=false;

// velocities
var h_vel = 5.5;
var v_vel = 5.5;
//var g = 0.07;


//AUDIO FILES
var audioElement = new Audio('assests/introsong.mp3');


audioElement.currentTime = 0;
audioElement.pause();

img.src = '../Images/shuttle.svg';
leftplayer.src = '../Images/left.png';
rightplayer.src = '../Images/right.png'


document.addEventListener("keydown", keydownF, false);
document.addEventListener("keyup", keyUpHandler, false);
//document.addEventListener('keydown', clear_shot_forward);
document.addEventListener('mousedown', mouseact, false);


function mouseact(ob) {
    //alert(ob.clientX, " , ", ob.screenX, ',', ob.pageX);
    alert(ob.clientY- 110);
}

animationstart = requestAnimationFrame(draw);


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x_pos, y_pos, 30, 30);
    LeftPlayer();
    RightPlayer();
    net_collision();
    Jump_left();
    Jump_right();
    
    // if(y_pos > height ){
    //       cancelAnimationFrame(animationstart);
       
    //  }


   // else 
     animationstart = requestAnimationFrame(draw);

    
    

    if (flag == 0 ) {
        // add  a body movement
        
      //  console.log();
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
//  CONTROLS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function keydownF(ob) {

    if(ob.keyCode==32){     //spacebar
        jump_left=true;
    }
    if(ob.key =="0"){      
        jump_right=true;
    }

    if (ob.key == "a") {
        a_pressed = true;
    }
    if (ob.key == "d") {
        d_pressed = true;
    }
    if (ob.key == "ArrowLeft") {
        left_pressed = true;
    }
    if (ob.key == "ArrowRight") {
        right_pressed = true;
    }

    if (ob.key === 'e') {
 
        Distance = distance(left_player_x,left_player_y,x_pos,y_pos);
        jump_left=true;
        if(Distance<=200 && left_player_x<=x_pos) {
            flag=0;
            gr = 0;
        }


    }

    if (ob.key === '4') {
        Distance = distance(right_player_x,right_player_y,x_pos,y_pos);

        if(Distance<=200 && right_player_x >= x_pos) {
            flag=1;
            gr = 0;
        }

    }


    if (ob.key === 'r') {
        Distance = distance(left_player_x,left_player_y,x_pos,y_pos);
        if(Distance<=200 && left_player_x<=x_pos) {
            flag=2;
            gr = 0;
        }
    }

    if (ob.key === '5') {
         Distance = distance(right_player_x,right_player_y,x_pos,y_pos);
        if(Distance<=200 && right_player_x>=x_pos) {
            flag=3;
            gr = 0;
        }
    }


    if (ob.key === 'y') {
        Distance = distance(left_player_x,left_player_y,x_pos,y_pos);
        if(Distance<=200 && left_player_x<=x_pos) {
            flag=4;
            gr = 0;
        }
    }

    if (ob.key === '+') {
       Distance = distance(right_player_x,right_player_y,x_pos,y_pos);
        
        if(Distance<=200 && right_player_x>=x_pos) {
            flag=5;
            gr = 0;
        }

                        }
    } // end of keydown function

function keyUpHandler(ob) {
    if (ob.key == "a") {
        a_pressed = false;
    }
    if (ob.key == "d") {
        d_pressed = false;
    }
    if (ob.key == "ArrowLeft") {
        left_pressed = false;
    }
    if (ob.key == "ArrowRight") {
        right_pressed = false;
    }

}

//////////////////////////////////          END OF CONTROLS          ///////////////////////////////////////////////// 
function LeftPlayer() {
    ctx.beginPath();
    ctx.drawImage(leftplayer, left_player_x, left_player_y, 120, 120);
    ctx.closePath();
    if (d_pressed && left_player_x < 580) {
        left_player_x += 6;
    }
    if (a_pressed && left_player_x >= 100) {
        left_player_x += -6;
    }

}
function RightPlayer() {
    ctx.beginPath();
    ctx.drawImage(rightplayer, right_player_x, right_player_y, 120, 120);
    ctx.closePath();
    if (left_pressed && right_player_x > 710) {
        right_player_x += -6;
    }
    if (right_pressed && right_player_x <= 1100) {
        right_player_x += 6;
    }

}

function Jump_left(){
    if(jump_left) {

    ctx.beginPath();
    ctx.drawImage(leftplayer, left_player_x, left_player_y, 120, 120);
    ctx.closePath();

    left_player_y-=jump_speed;
    left_player_y+=l_grr;
    l_grr+=0.1;

    if(left_player_y >600){
        left_player_y = 600;
        l_grr=0;
        //jump_speed=0;
        jump_left=false;
        }
    }
}


function Jump_right(){
    if(jump_right) {

    ctx.beginPath();
    ctx.drawImage(rightplayer, right_player_x, right_player_y, 120, 120);
    ctx.closePath();

    right_player_y-=jump_speed;
    right_player_y+=r_grr;
    r_grr+=0.1;

    if(right_player_y >600){
       right_player_y = 600;
        r_grr=0;
        jump_right=false;
        }
    }
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

function distance(x1,y1,x2,y2){
    return Math.sqrt( Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2) );
      
}

function net_collision(){
    if( y_pos >=530 && x_pos > 690 && x_pos <720) { //690 720
        //alert("you hit the net");
        location.reload();
    }
}
