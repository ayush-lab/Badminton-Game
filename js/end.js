var Winner = sessionStorage.getItem("Win");
var msg=document.getElementById("msg");
if(Winner=="Pig")
{
    msg.innerHTML="Bad Piggy has won the game!";
}
else 
{
    msg.innerHTML="Angry Bird has won the game!";
}

