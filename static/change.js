function Tool(){
    document.getElementById("event").innerHTML="";
    document.getElementById("result").innerHTML="Used Tool";
}

function Flee(){
    document.getElementById("event").innerHTML="";
    document.getElementById("result").innerHTML="Fled.";
    setTimeout(redirect, 5000);
}

function redirect(){
    window.location.href="/newtool";
}