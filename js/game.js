var canvas = document.getElementById('game');
 var ctx = canvas.getContext('2d');
 var height=canvas.height/1.2;
 var flag=0;
 var x_pos=180;
 var y_pos=height-1;
 var gr=0;
 var angle=(45*(Math.PI)/180);
 var requestAnimationFrame  = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitCancelAnimationFrame;   
 var cancelAnimationFrame   = window.cancelAnimationFrame  || window.mozCancelAnimationFrame;    
 var animationstart;
 var img = new Image();   
 
 //AUDIO FILES
var audioElement= new Audio('assests/introsong.mp3');


audioElement.currentTime=0;
audioElement.pause();

img.src = '../Images/shuttle.svg';


document.addEventListener("keydown", keydownF, false);
//document.addEventListener('keydown', clear_shot_forward);
document.addEventListener('mousedown', mouseact, false);


function mouseact(ob){
    //alert(ob.clientX, " , ", ob.screenX, ',', ob.pageX);
    alert(ob.clientX -75);
}

animationstart = requestAnimationFrame(draw);

var h_vel=5.5;
var v_vel=5.5;
var g=0.07;

 function draw() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.drawImage(img,x_pos,y_pos,30,30);

    if(y_pos >= height || x_pos<180 || x_pos >1160){
        cancelAnimationFrame(animationstart);
    }


    else    animationstart = requestAnimationFrame(draw);



    if(flag==0){ 
        forward();
        clear_shot_f();
    }

    else if(flag==1) {
        backward();
        clear_shot_b();
    }


    else if(flag==2){
        forward();
        drop_shot_f_f();
        console.log("forward ->", gr);
    
    }
    
    else if(flag==3){
        backward();
        drop_shot_f_b();
        console.log("backward->", gr);
    
    }
    else if(flag==4){
        forward();
        drop_shot_b_f();

    }
    else if(flag==5){
        backward();
        drop_shot_b_b();
        
    }
  
 
  
}

//  CONTROLS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function keydownF(ob){
    
    if(ob.key ==='e'){
        flag=0;
        gr=0;

    }
    
    if(ob.key==='4'){
        flag=1;
        gr=0;
  
    }


    if(ob.key === 'r'){
        flag=2;
        gr=0;
    }

    if(ob.key === '5'){
        flag=3;
        gr=0;
    }


    if(ob.key === 'y'){
        flag=4;
        gr=0;
    }

    if(ob.key === '+'){
        flag=5;
        gr=0;
    }


}

//////////////////////////////////          END OF CONTROLS          ///////////////////////////////////////////////// 


 function forward(){
    x_pos+=h_vel;
    y_pos-=v_vel;
    y_pos+=gr;
   // console.log(y_pos, "->" ,x_pos);
}

 function backward(){
  
    x_pos-=h_vel;
    y_pos-=v_vel;
    y_pos+=gr;
   // console.log('okkk');
    }



function clear_shot_f(){
    gr+=0.07;
}

function clear_shot_b(){
    gr+=0.07;
}



function drop_shot_f_f(){     //drop shot from front to front (forward)
    gr+=0.2;
}

function drop_shot_f_b(){     //drop shot from front to front (backward)
    gr+=0.15;
}



function drop_shot_b_f(){     //drop shot from back to front (forward)
    gr+=0.15;
}

function drop_shot_b_b(){     //drop shot from back to front (backward)
    gr+=0.1;
}