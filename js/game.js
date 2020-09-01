 var canvas = document.getElementById('game');
 var ctx = canvas.getContext('2d');
 var height=canvas.height/1.2;
 var flag=0;

 var x_pos=100;
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
    if(flag==1) {
        x_pos-=h_vel;
        y_pos+=v_vel;
        gr-=0.07;
        y_pos-=gr;
        console.log('okkk');
    }
    else if(flag==0){ 
        x_pos+=h_vel;
        y_pos-=v_vel;
        gr+=0.05 ;
        y_pos+=gr;
        console.log(y_pos, "->" ,x_pos);  }
  
    window.requestAnimationFrame(draw);

  
}


function keydownF(ob){
    if(ob.key =="Left" || ob.key =="ArrowLeft"){
        flag=1;
    }

    if(ob.key =="Right" || ob.key =="ArrowRight"){
        flag=0;
    }
}


//



// function clear_shot_forward(){
//     flag=1;
//     x_pos-=h_vel;
//     y_pos+=v_vel;
//     gr+=0.07;
//     y_pos-=gr;
//     console.log('ok');
// }

// function clear_shot_backward(){
//     flag=0;
//     x_pos+=h_vel;
//     y_pos-=v_vel;
//     gr+=0.07;
//     y_pos+=gr;
//     console.log(y_pos, "->" ,x_pos);   
// }