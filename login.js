var mybtn=document.getElementById('mybtn1');
var mybtn1=document.getElementById('mybtn2');
var mymodal=document.getElementById('mymodal1');
var mymodal1=document.getElementById('mymodal2');
var close=document.querySelector('.close');
var send=document.querySelector('.send');
var test=false;
function openmodal(){
    mymodal.style.display="block";
}
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("message")) {
    openmodal();
}
else if(urlParams.has("login")){
    openmodal();
}
mybtn.onclick=function(){
    mymodal.style.display="block";
}
close.onclick=function(){
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
function verfication(){
    var username1=document.forms['myf']['user'];
    var pass1=document.forms['myf']['pass'];

    if(username1.value==""){
        document.getElementById('eu').innerHTML="Invalid Username!"
        username1.focus();
        return false
    }   
    else if(pass1.value==""){
        document.getElementById('ep').innerHTML="Invalid Password!"
        document.getElementById('eu').innerHTML="";
        pass1.focus();
        return false
    }
    return true;
}  
    