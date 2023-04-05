var mybtn1=document.getElementById('mybtn2');
var mybtn=document.getElementById('mybtn1');

var mymodal=document.getElementById('mymodal1');
var mymodal1=document.getElementById('mymodal2');

var close1=document.querySelector('.close2');
var send1=document.querySelector('.send2');
var test1=false;

mybtn1.onclick=function(){
    mymodal1.style.display="block";
}
close1.onclick=function(){
    mymodal1.style.display="none";
}
/*send.onclick=function(){
    mymodal.style.display="none";
}*/
// hhhhh
window.onclick=function(event){ /*maajoula bech ki nenzlou hors el formulaire tetsaker */
if (event.target==mymodal){
    mymodal.style.display="none"
}
if (event.target==mymodal1){
    mymodal1.style.display="none"
}
}
function show(){
    if (test1){
        document.getElementById('pass2').setAttribute("type","password");
        document.getElementById('eye2').setAttribute('src','/img/imgsignup/hidden.png');
        test1=false;
    }else{
        document.getElementById('pass2').setAttribute("type","text");
        document.getElementById('eye2').setAttribute('src','/img/imgsignup/eye.png');
        test1=true;
    }
}
function validation(){
    var username=document.forms['myform2']['username2'];
    var genre=document.forms['myform2']['genre2'].selectedIndex;
    var pays=document.forms['myform2']['pays2'].selectedIndex;
    var pass=document.forms['myform2']['pass2'];
    var email=document.forms['myform2']['email2'];
    var posp=email.value.indexOf('.');
    var posat=email.value.indexOf('@');
    var lastposp=email.value.lastIndexOf('.');
    var l=email.value.length;
    var countat=email.value.split('@').length-1;
    var date=document.forms['myform2']['date12'];
    /*split ta9sem la chaine fi tableau telque le delimiteur
    howa el '@' donc par exemple ken fama un seul @ thot 
    deux eelement => length-1=1 donc fama un seul @*/
    if (genre==0){
        document.getElementById('errorg2').innerHTML="Invalid Sexe!";
        return false;
    }
    else {document.getElementById('errorg2').innerHTML="";}
    if (pays==0){
        document.getElementById('errorp2').innerHTML="Invalid Country!";
        return false;
    }
    else document.getElementById('errorp2').innerHTML="";
    if(date.value==""){
        document.getElementById('errord2').innerHTML="Invalid date!";
        date.focus();
        return false;
    }
    else document.getElementById('errord2').innerHTML="";
    if(pass.value==""){
        alert("Invalid Password!");
        pass.focus();
        return false
    }  
    if(username.value==""){
        document.getElementById('erroru2').innerHTML="Invalid Username!"
        username.focus();
        return false
    }   
    else  document.getElementById('erroru2').innerHTML="";
    if(countat !=1 || posp<1|| posp<1|| lastposp ==l-1||lastposp-popat<3){
        document.getElementById('errore2').innerHTML="Invalid Email!";
        email.focus();
        return false
    }
    else    document.getElementById('errore2').innerHTML="";
    return true;
}