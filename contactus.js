const form=document.querySelector('.formbox');
statustxt=form.querySelector('.statustxt');

form.onsubmit = (e)=>{
    e.preventDefault(); // prevent the form from submitting ki yebda feragh
    statustxt.style.color="green";
    statustxt.style.display="block";

    let xhr = new XMLHttpRequest(); //creation mta3 request
    xhr.open("POST","contactus.php",true); // open("get wala post","file","asynchronic=true/false")
    xhr.onload=()=>{ // houni ysir load mtta3 ajax (asynchornic java and xml)
        if(xhr.readyState==4 && xhr.status==200){
            let response = xhr.response ;// bech yekhou el reponse mta3 contactus.php
            if(response.indexOf("All fileds are required!")!=-1 || response.indexOf("Enter a valid email adress!")!=-1 || response.indexOf("Sorry, failed to send your message!")!=-1){
                statustxt.style.color="red";
            }
            else{
                form.reset();   // ()=>{ ---- } c'est une fonction menghir esm 
                setTimeout(()=>{statustxt.style.display="none";},3000)// settimeout(fonction, nb de secondes 3000=3secondes)

            }
            statustxt.innerText = response;
        }    
    }
    let formdata= new FormData(form);// c'est un objet form maj3oul chnebaathouh fel send
    xhr.send(formdata); 
}