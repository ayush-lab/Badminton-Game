
function LeftPlayer() {
    ctx.beginPath();
    if(rotate_flag_left) rotate_racket_left();
    else  
    ctx.drawImage(leftplayer_racket, left_player_x-20, left_player_y - 60, 120, 120);

    ctx.drawImage(leftplayer, left_player_x, left_player_y, 120, 120);
    ctx.drawImage(imgleftplayer, left_player_x, left_player_y, 120, 120);
    ctx.closePath();
    if (d_pressed && left_player_x < 580 && s_pressed) {
        left_player_x +=10;
    }
    if (a_pressed && left_player_x >= 100 && s_pressed) {
        left_player_x += -10;
    }

}

function RightPlayer() {
    ctx.beginPath();

    if(rotate_flag_right) rotate_racket_right();
    else  ctx.drawImage(rightplayer_racket, right_player_x-10, right_player_y - 60, 120, 120);

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



function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

}

function net_collision() {
    if (y_pos >= 530 && x_pos > 690 && x_pos < 720) { //690 720
        location.reload();
    }
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