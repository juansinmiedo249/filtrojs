
import {autenticar} from "./../model/get.js"
const btIngresar = document.querySelector("#ingresar")



btIngresar.addEventListener("click", function(){
    const user = document.querySelector("#ced").value;
    const clave = document.querySelector("#passw").value;
    autenticar(user,clave)
});
