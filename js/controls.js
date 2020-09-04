document.addEventListener("keydown", keydownF, false);
document.addEventListener("keyup", keyUpHandler, false);

function keydownF(ob) {



    if (ob.key == "w") {
        jump_left = true;
    }
    if (ob.key == "ArrowUp") {
        jump_right = true;
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


    if (ob.key === 'q') {
        racket_left=0;
        racket_left_x=0;
        racket_left_y=-60;
        rotate_flag_left=true;

        Distance = distance(left_player_x, left_player_y, x_pos, y_pos);
    
        if (Distance <= 200 && x_pos<=left_player_x+120 ) {
            flag = 0;
            gr = 0;
        }


    }

    if (ob.key === '4') { 
        racket_right=0;
        racket_right_x=0;
        racket_right_y=-60;
        rotate_flag_right=true;

        Distance = distance(right_player_x, right_player_y, x_pos, y_pos);
        if (Distance <= 200 && x_pos<=right_player_x+120) {
            flag = 1;
            gr = 0;
        }

    }


    if (ob.key === 'e') {
        racket_left=0;
        racket_left_x=0;
        racket_left_y=-60;
        rotate_flag_left=true;
        Distance = distance(left_player_x, left_player_y, x_pos, y_pos);
        if (Distance <= 200 && left_player_x <= x_pos) {
            flag = 2;
            gr = 0;
        }
    }

    if (ob.key === '5') {
        racket_right=0;
        racket_right_x=0;
        racket_right_y=-60;
        rotate_flag_right=true;
        Distance = distance(right_player_x, right_player_y, x_pos, y_pos);
        if (Distance <= 200 && right_player_x >= x_pos) {
            flag = 3;
            gr = 0;
        }
    }


    if (ob.key === 't') {
        racket_left=0;
        racket_left_x=0;
        racket_left_y=-60;
        rotate_flag_left=true;
        Distance = distance(left_player_x, left_player_y, x_pos, y_pos);
        if (Distance <= 200 && left_player_x <= x_pos) {
            flag = 4;
            gr = 0;
        }
    }

    if (ob.key === '+') {
        racket_right=0;
        racket_right_x=0;
        racket_right_y=-60;
        rotate_flag_right=true;
        Distance = distance(right_player_x, right_player_y, x_pos, y_pos);

        if (Distance <= 200 && right_player_x >= x_pos) {
            flag = 5;
            gr = 0;
        }


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


}
