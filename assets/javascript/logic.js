var checked1 = false;
var checked2 = false;

function checkbox1(){

    if (checked1 === false){
        checked1 = true;
        $("#card-inner-div-card2").css("visibility", "visible");
        $("#card-inner-div-card4").css("visibility", "visible");
    }
    else if (checked1 === true){
        checked1 = false;
        $("#card-inner-div-card2").css("visibility", "hidden");
        $("#card-inner-div-card4").css("visibility", "hidden");

    }
}

function checkbox2(){
    if (checked2 === false){
        checked2 = true;
        $("#card-inner-div-card1").css("visibility", "visible");
        $("#card-inner-div-card3").css("visibility", "visible");
    }
    else if (checked2 === true){
        checked2 = false;
        $("#card-inner-div-card1").css("visibility", "hidden");
        $("#card-inner-div-card3").css("visibility", "hidden");

    }
}

