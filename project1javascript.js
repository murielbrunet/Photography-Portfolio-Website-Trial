

function  circle1 () {
    /*document.getElementById("circle1").style.opacity = '0.6';*/

    document.getElementById("circle1").innerHTML='VERMONT';
    document.getElementById("circle1").style.background="black";

}
function circle1Out() {
    document.getElementById("circle1").innerHTML='';
    document.getElementById("circle1").style.background = '';
   /* document.getElementById("circle1").style.opacity = '1.0';*/  
}


function  circle2 () {
    document.getElementById("circle2").innerHTML='FRANCE';
    document.getElementById("circle2").style.background="black";
}

function circle2Out() {
    document.getElementById("circle2").innerHTML='';
    document.getElementById("circle2").style.background = '';
}


function  circle3 () {
    document.getElementById("circle3").innerHTML='SPAIN';
    document.getElementById("circle3").style.background = "black";
}
function circle3Out() {
    document.getElementById("circle3").innerHTML='';
    document.getElementById("circle3").style.background = '';
}


function  circle4 () {
    document.getElementById("circle4").innerHTML='JAPAN';
    document.getElementById("circle4").style.background = "black";
} 
function circle4Out() {
    document.getElementById("circle4").innerHTML='';
    document.getElementById("circle4").style.background = '';
}


function  circle5 () {
    document.getElementById("circle5").innerHTML='ARGENTINA';
    document.getElementById("circle5").style.background = "black";
}
function circle5Out() {
    document.getElementById("circle5").innerHTML='';
    document.getElementById("circle5").style.background = '';
}



function  circle6 () {
    document.getElementById("circle6").innerHTML='TURKEY';
    document.getElementById("circle6").style.background = "black";
}
function circle6Out() {
    document.getElementById("circle6").innerHTML='';
    document.getElementById("circle6").style.background = '';
}


document.getElementById("circle1").addEventListener("mouseover", circle1);
document.getElementById("circle1").addEventListener("mouseout", circle1Out);

document.getElementById("circle2").addEventListener("mouseover", circle2);
document.getElementById("circle2").addEventListener("mouseout", circle2Out);

document.getElementById("circle3").addEventListener("mouseover", circle3);
document.getElementById("circle3").addEventListener("mouseout", circle3Out);

document.getElementById("circle4").addEventListener("mouseover", circle4);
document.getElementById("circle4").addEventListener("mouseout", circle4Out);

document.getElementById("circle5").addEventListener("mouseover", circle5);
document.getElementById("circle5").addEventListener("mouseout", circle5Out);

document.getElementById("circle6").addEventListener("mouseover", circle6);
document.getElementById("circle6").addEventListener("mouseout", circle6Out);



