function unknown_vehicle(){
    if (document.getElementById("Unknown").checked){
        
        document.getElementById("drugo_vozilo").disabled = false;
        return true;
    }
    else{
        document.getElementById("drugo_vozilo").disabled = true;
        return false;
    }
}


function Check_Name(){
    var name = document.getElementById("iname");
    var check = document.getElementById("ncheck");
    var regExpName = /^[A-Za][a-z]+\s{1,2}[A-Z][a-z]+$/;
    if (regExpName.test(name.value)===false || name.value==""){
        check.style.fontSize="15px";
        check.style.color="red";
        check.style.fontWeight="bold";
        check.innerHTML="✖";
        
        return false;
    }
    else if (regExpName.test(name.value)===true){
        check.style.fontSize="15px";
        check.style.color="green";
        check.style.fontWeight="bold";
        check.innerHTML="✔";
        return true;
    }
}

function Check_Email(){
    var email = document.getElementById("email");
    var check = document.getElementById("echeck");
    var regExpEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (regExpEmail.test(email.value)===false || email.value==""){
        check.style.fontSize="15px";
        check.style.color="red";
        check.style.fontWeight="bold";
        check.innerHTML="✖";
        
        return false;
    }
    else if (regExpEmail.test(email.value)===true){
        check.style.fontSize="15px";
        check.style.color="green";
        check.style.fontWeight="bold";
        check.innerHTML="✔";
        return true;
    }
}

function Check_Phone(){
    var phone = document.getElementById("phone");
    var check = document.getElementById("pcheck");
    var regExpPhone = /^[\+]?[0-9]{3}[-\s]?[0-9]{3}[-\s]?[0-9]{4,6}$/
    if (regExpPhone.test(phone.value)===false || phone.value==""){
        check.style.fontSize="15px";
        check.style.color="red";
        check.style.fontWeight="bold";
        check.innerHTML="✖";
        
        return false;
    }
    else if (regExpPhone.test(phone.value)===true){
        check.style.fontSize="15px";
        check.style.color="green";
        check.style.fontWeight="bold";
        check.innerHTML="✔";
        return true;
    }
}


function Check_Select(){
    if (document.getElementById("year").value==-1){
        let ycheck = document.getElementById("ycheck");
        ycheck.style.fontSize="15px";
        ycheck.style.color="red";
        ycheck.style.fontWeight="bold";
        ycheck.innerHTML="✖";
        
        return false;
        
    }
    else{
        ycheck.style.fontSize="15px";
        ycheck.style.color="green";
        ycheck.style.fontWeight="bold";
        ycheck.innerHTML="✔";
        return true;
    }
}

function range(){
    var rangeVal = document.querySelector("#accident").value;
    document.querySelector("#acheck").innerHTML= rangeVal;
}



function validateForm(){
    //Name
    if (Check_Name()==false){
        document.getElementById("iname").focus();
        return false;
    }
    //Email
    if (Check_Email()==false){
        document.getElementById("email").focus();
        return false;
    }
    //Phone
    if (Check_Phone()==false){
        document.getElementById("phone").focus();
        return false;
    }
    //Year
    if (Check_Select()==false){
        document.getElementById("year").focus();
        return false;
    }
    //Radio buttons
   if (unknown_vehicle()==true){
    let regExpUv = /^[A-Za-z\s]+[.,\sA-Za-z\s0-9]+?$/;
    let textUv=document.getElementById("drugo_vozilo");
    let vcheck=document.getElementById("vcheck");
    if (regExpUv.test(textUv.value)==false || textUv.value==""){
        document.getElementById("drugo_vozilo").focus();
        vcheck.style.fontSize="15px";
        vcheck.style.color="red";
        vcheck.style.fontWeight="bold";
        vcheck.innerHTML="✖";
        return false;
    }
    else{
        vcheck.style.fontSize="15px";
        vcheck.style.color="green";
        vcheck.style.fontWeight="bold";
        vcheck.innerHTML="✔";
    }
   }
    alert(`Hvala! Pozvaćemo vas u toku dana!`)
    return true;
}

