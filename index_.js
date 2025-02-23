var randomnum1 = Math.floor(Math.random() * 6) + 1 ;
var diceimg = "dice" + randomnum1 + ".png";
var source = "./camp_photos/images/" + diceimg;
var changer =   document.querySelectorAll("img")[0];
changer.setAttribute("src" , source);

var randomnum2 = Math.floor(Math.random() * 6) + 1 ;
var diceimg2 = "dice" + randomnum2 + ".png";
var source2 = "./camp_photos/images/" + diceimg2;
var changer2 =   document.getElementsByClassName("img2")[0];
changer2.setAttribute("src" , source2);

if(source > source2)
{
    document.querySelector("h1").innerHTML = "Player 1 is winner!";
}
else if(source < source2)
{
    document.querySelector("h1").innerHTML = "Player 2 is winner!";
}
else
{
    document.querySelector("h1").innerHTML = "It's a tie!"
}