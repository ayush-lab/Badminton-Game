var arena;
var bird;
var arenaChoose = false;
var birdChoose = false;
function Arena(str) {
    if (str == "Arena1") {
        arena = str;
        arenaChoose = true;
    }
    else if (str == "Arena2") {
        arena = str;
        arenaChoose = true;
    }
    else if (str == "Arena3") {
        arena = str;
        arenaChoose = true;
    }
    window.location = "#birds";
}
function Birds(strn) {
    if (strn == "Bird_blue") {
        bird = strn;
        birdChoose = true;
    }
    if (strn == "Bird_she") {
        bird = strn;
        birdChoose = true;
    }
    if (strn == "Bird_red") {
        bird = strn;
        birdChoose = true;
    }
    if (strn == "Bird_black") {
        bird = strn;
        birdChoose = true;
    }
    if (strn == "Bird_yellow") {
        bird = strn;
        birdChoose = true;
    }
    if (strn == "Bird_white") {
        bird = strn;
        birdChoose = true;
    }
    if (arenaChoose && birdChoose) {
        sessionStorage.setItem("Arena", arena);
        sessionStorage.setItem("Bird", bird);
        window.location = "/game.html";
    }
}