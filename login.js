gvar mybtn=document.getElementById('mybtn1');
var mybtn1=document.getElementById('mybtn2');

var mymodal=document.getElementById('mymodal1');
var mymodal1=document.getElementById('mymodal2');


var close=document.querySelector('.close');
var send=document.querySelector('.send');
var test=false;

mybtn.onclick=function(){
    mymodal.style.display="block";
}
close.onclick=function(){
    mymodal.style.display="none";
}
send.onclick=function(){
    mymodal.style.display="none";
}
window.onclick=function(event){ /*maajoula bech ki nenzlou hors el formulaire tetsaker */
    if (event.target==mymodal){
        mymodal.style.display="none"
    }
    if (event.target==mymodal1){
        mymodal1.style.display="none"
    }

}

function show(){
    if (test){
        document.getElementById('pass').setAttribute("type","password");
        test=false;
    }else{
        document.getElementById('pass').setAttribute("type","text");
        test=true;
    }
}