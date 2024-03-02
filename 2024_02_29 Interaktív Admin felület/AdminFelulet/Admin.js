
aktivalo.addEventListener("click",checkBox);

function checkBox(){
    let elemLista=document.querySelectorAll(".allapot");
    for(let i=0;i<elemLista.length;i++)
    {
        if(elemLista[i].checked)
        {
        elemLista[i].checked=false;
        document.querySelector("#aktivalo").classList.remove("btn-danger");
        document.querySelector("#aktivalo").classList.add("btn-success");
        document.querySelector("#aktivalo").innerHTML="Mindenkit aktivál"
        }
         else{
            elemLista[i].checked=true;
            document.querySelector("#aktivalo").classList.remove("btn-success");
            document.querySelector("#aktivalo").classList.add("btn-danger");
            document.querySelector("#aktivalo").innerHTML="Mindenkit deaktivál"
            }
    }
}

csikozas.addEventListener("click", SavozasBe);

function SavozasBe() {
    let kivalasztottTabla = document.querySelector("table");
    
	if(kivalasztottTabla.classList.contains("table-striped")){
    kivalasztottTabla.classList.remove("table-striped");
    document.querySelector("#csikozas").classList.remove("btn-info");
    document.querySelector("#csikozas").classList.add("btn-primary");
    document.querySelector("#csikozas").innerHTML="Táblázat sávozásának bekapcsolása";
    
    }
    else{
    kivalasztottTabla.classList.add("table-striped");
    document.querySelector("#csikozas").classList.remove("btn-primary");
    document.querySelector("#csikozas").classList.add("btn-info");
    document.querySelector("#csikozas").innerHTML="Táblázat sávozásának kikapcsolása";
}
}

lightMode.addEventListener("click", LightMode);
function LightMode() {
    let kivalasztottTabla = document.querySelector("table");

    if(kivalasztottTabla.classList.contains("table-light")){
    kivalasztottTabla.classList.remove("table-light");
    kivalasztottTabla.classList.add("table-dark");
    document.querySelector("#lightMode").innerHTML="LightMODE ON";
    document.querySelector("#lightMode").classList.remove("btn-dark");
    document.querySelector("#lightMode").classList.add("btn-light");
    }

    else{
    kivalasztottTabla.classList.remove("table-dark");
    kivalasztottTabla.classList.add("table-light");
    document.querySelector("#lightMode").innerHTML="DarkMODE ON";
    document.querySelector("#lightMode").classList.remove("btn-light");
    document.querySelector("#lightMode").classList.add("btn-dark");
    }
}
    
tesztSor.addEventListener("click",tesztSorBeszur);

function tesztSorBeszur(){
    let kivalasztottTabla=document.querySelector("table");
    let sor=kivalasztottTabla.insertRow();
    let vezNevCella=sor.insertCell();
    let kerNevCella=sor.insertCell();
    let emailCella=sor.insertCell();
    let telefonCella=sor.insertCell();
    let beosztasCella=sor.insertCell();
    let aktivalCella=sor.insertCell();

    vezNevCella.innerHTML="teszt";
    kerNevCella.innerHTML="teszt";
    emailCella.innerHTML="teszt";
    telefonCella.innerHTML="teszt";
    beosztasCella.innerHTML="teszt";
    aktivalCella.innerHTML="<input type=\"checkbox\" class=\"allapot\">";
    
}


function adatFeltolto(){
    let kivalasztottTabla=document.querySelector("table");
    let sor=kivalasztottTabla.insertRow();
    let vezNevCella=sor.insertCell();
    let kerNevCella=sor.insertCell();
    let emailCella=sor.insertCell();
    let telefonCella=sor.insertCell();
    let beosztasCella=sor.insertCell();
    let aktivalCella=sor.insertCell();

    vezNevCella.innerHTML=document.querySelector("#vezNev").value;
    kerNevCella.innerHTML=document.querySelector("#kerNev").value;
    emailCella.innerHTML=document.querySelector("#email").value;
    telefonCella.innerHTML=document.querySelector("#tel").value;
    beosztasCella.innerHTML=document.querySelector("#beosztas").value;
    aktivalCella.innerHTML="<input type=\"checkbox\" class=\"allapot\">";
    
}

function validalas(){
    var vezNev = document.querySelector("#vezNev").value;
    var kerNev = document.querySelector("#kerNev").value;
    var email = document.querySelector("#email").value;
    var tel = document.querySelector("#tel").value;

    var vezNevRegex = /^[A-ZÁÉÓÖŐÚÜŰÍ]{1}[a-záéóöőúüűí]*$/;
    var kerNevRegex =/^[A-ZÉÓÖŐÚÜŰÍ]{1}[a-záéóöőúüűí]*$/;
    var emailRegex =/^[A-ZÉÓÖŐÚÜŰÍa-záéóöőúüűí0-9.,-]*[/@/]{1}[A-Za-z0-9]*[/./]{1}[a-z]{3}$/;
    var telRegex = /^[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

    var vezNevValid = vezNevRegex.test(vezNev);
    var kerNevValid = kerNevRegex.test(kerNev);
    var emailValid = emailRegex.test(email);
    var telValid = telRegex.test(tel);

    if(vezNevValid == false)
        {
        document.querySelector("#vezNev").style.border = "red solid 3px";
    }
    else{
        document.querySelector("#vezNev").style.border = "rgb(13, 165, 38) solid 3px";    
        }
    
    if(kerNevValid == false){
        document.querySelector("#kerNev").style.border = "red solid 3px";
        }
    else{
        document.querySelector("#kerNev").style.border = "rgb(13, 165, 38) solid 3px";    
        }

    if(emailValid == false){
        document.querySelector("#email").style.border = "red solid 3px";
        }
    else{
        document.querySelector("#email").style.border = "rgb(13, 165, 38) solid 3px";    
        }

    if(telValid == false){
        document.querySelector("#tel").style.border = "red solid 3px";
        }
    else{
        document.querySelector("#tel").style.border = "rgb(13, 165, 38) solid 3px";    
        }
}