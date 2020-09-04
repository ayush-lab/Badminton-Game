var arena;
var bird;
var pig;
var arenaChoose = false;
var birdChoose = false;
var pigChoose = false;
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
    window.location = "#pigs";
}
function Pigs(strl) {
    if (strl== "pig_green")
    {
        pig =strl;
        pigChoose=true;
    }
    if (strl== "pig_she")
    {
        pig =strl;
        pigChoose=true;
    }
    if (strl== "pig_hitler")
    {
        pig =strl;
        pigChoose=true;
    }
    if (strl== "pig_zombie")
    {
        pig =strl;
        pigChoose=true;
    }

if (arenaChoose && birdChoose && pigChoose) {
    sessionStorage.setItem("Arena", arena);
    sessionStorage.setItem("Bird", bird);
    sessionStorage.setItem("Pig", pig);
    window.location = "/game.html";
}
}
