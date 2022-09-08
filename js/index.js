//script para acceso por usaurio y contraseña

let entrada = prompt("ingrese su nombre");

while(entrada !== "Alexis"){
    let mensaje = "Nombre de usuario incorrecto";
    alert(mensaje);
    entrada = prompt("ingrese su nombre");
}

let entrada2 = prompt`Bienvenido, ingrese su contraseña`;

while(entrada2){
    if(entrada2 === "123456"){
        let mensaje2 = `${entrada} ingresaste al sistema`;
        alert(mensaje2);
        break;
    }
    let mensaje1 = "Contraseña incorrecta";
    alert(mensaje1);
    entrada2 = prompt("ingrese su contraseña");
}