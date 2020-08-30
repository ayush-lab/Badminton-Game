 var canvas = document.getElementById('game');
 var ctx = canvas.getContext('2d');
 var height=canvas.height;

 var x_pos=100;
 var y_pos=height+1;
 var gr=0;
 var angle=(45*(Math.PI)/180);

 var img = new Image();   
 



img.src = '../Images/shuttle.svg';

img.onload = draw;

addEventListener('keydown', clear_sshot);


var h_vel=5.5;
var v_vel=5.5;
var g=0.07;

 function draw() {
   

    ctx.clearRect(0,0,canvas.width, canvas.height);
    
    ctx.drawImage(img,x_pos,y_pos,30,30);

    if(y_pos>=height){
    
    }

    x_pos+=h_vel;
    y_pos-=v_vel;
    gr+=0.07;
    y_pos+=gr;
    console.log(y_pos, "__>" ,height);

    requestAnimationFrame(draw);
  
}
var flag=1;


function clear_sshot(){
    flag=1;
    clear_shot();
}

function clear_shot(){
    
    if(flag){ para();}
    flag=0;
    ctx.clearRect(0,0,canvas.width, canvas.height);
    
    ctx.drawImage(img,x_pos,y_pos,30,30);

    if(y_pos>=height){
    //location.reload();
    }

    x_pos+=h_vel;
    y_pos-=v_vel;
    gr+=0.07;
    y_pos+=gr;
    console.log(y_pos, "__>" ,height);

    requestAnimationFrame(draw);
    console.log("it works");
}


function para(){

    var x_pos=100;
    var y_pos=height+1;
    var h_vel=5.5;
    var v_vel=5.5;
    var g=0.07;
}