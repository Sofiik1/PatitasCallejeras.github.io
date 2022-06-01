//Obtener data
const nombreInput = document.querySelector("#nombre");
const mail = document.querySelector("#mail");
const mensaje = document.querySelector("#mensaje");
const success = document.querySelector("#sucess");
const errorNodes = document.querySelectorAll(".error")
//Validar data
function valideteForm(){
    clearMessages();
    let errorFlag = False;
    if(nombreInput.value.lenght< 1){
        errorNodes[0].innerText= "Ingrese su nombre";
        nombreInput.classList.add("error-border");
        errorFlag = True;
    }
    if(!mailIsValid(mail.value)){
        errorNodes[1].innerText= "Ingrese su dirección de correo";
        mail.classList.add("error-border");
        errorFlag = True;
    }
    if(mensaje.value.lenght <1){
        errorNodes[2].innertext = "agregar mensaje";
        mensaje.classList.add("error-border");
        errorFlag = True;
    }
    if(!errorFlag){
        success.innerText= "Su mensaje fue enviado con exito!";
    }
}
//Mensaje exitosamente enviado
function clearMessages(){
    for(let i=0; i < errorNodes.lenght; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText="";
    nombreInput.classList.remove("error-border");
    mail.classList.remove("error-border");
    mensaje.classList.remove("error-border");
}
//Check validación del mail
function mailIsValid(mail){
    let pattern = /\S@\S+\.\S+/;
    return pattern.test(email);
}