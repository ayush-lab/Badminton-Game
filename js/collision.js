
///////////////////////////////////////////////////////////////
function EggLeft() {
    if(localStorage.getItem("RS") >=5)ctx.drawImage(no_egg, 60, 10, 70, 70);
    else ctx.drawImage(egg, 60, 10, 70, 70);

    if(localStorage.getItem("RS") >=4)ctx.drawImage(no_egg, 120, 10, 70, 70);
    else ctx.drawImage(egg, 120, 10, 70, 70);

    if(localStorage.getItem("RS") >=3)ctx.drawImage(no_egg, 180, 10, 70, 70);
    else ctx.drawImage(egg, 180, 10, 70, 70);
    
    if(localStorage.getItem("RS") >=2)ctx.drawImage(no_egg, 240, 10, 70, 70);
    else ctx.drawImage(egg, 240, 10, 70, 70);
  
    if(localStorage.getItem("RS") >=1)ctx.drawImage(no_egg, 300, 10, 70, 70);
    else ctx.drawImage(egg, 300, 10, 70, 70);
}
///////////////////////////////////////////////////////////////
function EggRight() {
    if(localStorage.getItem("LS") >=5)ctx.drawImage(no_egg, 938, 10, 70, 70);
    else ctx.drawImage(egg, 938, 10, 70, 70);

    if(localStorage.getItem("LS") >=4)ctx.drawImage(no_egg, 998, 10, 70, 70);
    else ctx.drawImage(egg, 998, 10, 70, 70);
    
    if(localStorage.getItem("LS") >=3)ctx.drawImage(no_egg, 1058, 10, 70, 70);
    else ctx.drawImage(egg, 1058, 10, 70, 70);
    
    if(localStorage.getItem("LS") >=2)ctx.drawImage(no_egg, 1118, 10, 70, 70);
    else ctx.drawImage(egg, 1118, 10, 70, 70);

    if(localStorage.getItem("LS") >=1)ctx.drawImage(no_egg, 1178, 10, 70, 70);
    else ctx.drawImage(egg, 1178, 10, 70, 70);
}


