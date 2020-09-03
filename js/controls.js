//  CONTROLS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
document.addEventListener("keydown", keydownF, false);
document.addEventListener("keyup", keyUpHandler, false);

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
    if (ob.key == "s") {
        s_pressed = true;
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

//////////////////////////////////          END OF CONTROLS          //////////////////////////0/////////////////////// 
