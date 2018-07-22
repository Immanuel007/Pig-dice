//business logic
function rollDice()
{
    var myDie1 = document.getElementById("myDie1");
    var myDie2 = document.getElementById("myDie2");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1 + d2;
    myDie1.innerHTML = d1;
    myDie2.innerHTML = d2;
    status.innerHTML = "You rolled" +diceTotal+",";
    if(d1 == d2)
    {
      status.innerHTML += " DOUBLES! You got a free turn!";
    }
}

//User-interface logic

$(document).ready(function () {
    $("#flip").click(function(){
        $("#myDie1").slideToggle("slow");
    });
});
