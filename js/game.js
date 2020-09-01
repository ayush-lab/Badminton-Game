 var canvas = document.getElementById('game');
 var ctx = canvas.getContext('2d');
 var height=canvas.height/1.2;
 var flag=0;

 var x_pos=180;
 var y_pos=height-1;
 var gr=0;
 var angle=(45*(Math.PI)/180);

 var img = new Image();   
 



img.src = '../Images/shuttle.svg';

//img.onload = draw;
window.requestAnimationFrame(draw);
document.addEventListener("keydown", keydownF, false);
//document.addEventListener('keydown', clear_shot_forward);



var h_vel=5.5;
var v_vel=5.5;
var g=0.07;

 function draw() {
   

    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.drawImage(img,x_pos,y_pos,30,30);

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
  
    window.requestAnimationFrame(draw);

  
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
    }

    if(ob.key === '+'){
        flag=5;
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
    y_pos+=v_vel;
    y_pos-=gr;
   // console.log('okkk');
    }



function clear_shot_f(){
    gr+=0.07;
}

function clear_shot_b(){
    gr-=0.07;
}



function drop_shot_f_f(){     //drop shot from front to front (forward)
    gr+=0.35;
}

function drop_shot_f_b(){     //drop shot from front to front (backward)
    gr-=0.35;
}



function drop_shot_b_f(){     //drop shot from back to front (forward)
    gr+=0.1;
}

function drop_shot_b_b(){     //drop shot from back to front (backward)
    gr-=0.1;
}

