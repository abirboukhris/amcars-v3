var mybtn=document.getElementById('mybtn1');
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
        document.getElementById('passw').setAttribute("type","password");
        console.log("aaaaaaa");
        document.getElementById('eyes').setAttribute('src','/img/imgsignup/hidden.png');
        test=false;
    }else{
        document.getElementById('passw').setAttribute("type","text");
        console.log("bbbbb");
        document.getElementById('eyes').setAttribute('src','/img/imgsignup/eye.png');
        test=true;
    }
}