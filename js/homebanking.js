//Declaración de variables
var nombreUsuario="Ciro Uriel";
var saldoCuenta= 50000;
var limiteExtraccion=10000;
var dinero;
var saldoAnterior;
var agua= 350;
var telefono= 425;
var luz= 210;
var internet= 570;
var servicio;
var cuentaAmiga1=1234567;
var cuentaAmiga2=7654321;
var clave=1234;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//Funciones de validación
function haySaldo(dinero){
    if (dinero<saldoCuenta){
        return true;
    }
    else{
        alert("No puedes extraer más dinero del disponible en la cuenta");
        return false;
    }
}
function validaExtraccion(dinero){
    if (dinero<=limiteExtraccion){
        return true;
    }
    else{
        alert("No se puede extraer más dinero que el del límite de extracción");
        return false;
    }
}
function esCien(dinero){
    if (dinero%100===0){
        return true;
    }
    else{
        alert("Sólo pueden retirarse billetes de 100 pesos");
        return false;
    }
}
function esNumero(dinero){
    if (isNaN(dinero)|| (dinero<0)){
        alert("Por favor ingrese un número válido");
        return false;
    }
    else{
        return true;
    }
}

//Funciones propias
function sumarSaldo(dinero){
        saldoAnterior=saldoCuenta;
        saldoCuenta+=dinero;
        actualizarSaldoEnPantalla();
        alert ("Has depositado: $"+dinero+"\n Saldo anterior: $"+saldoAnterior+"\n Saldo Actual: $"+saldoCuenta);
}
function restarSaldo(dinero){
    saldoAnterior=saldoCuenta;
    saldoCuenta-=dinero;
    actualizarSaldoEnPantalla();
    alert ("Has extraído: $"+dinero+"\n Saldo anterior: $"+saldoAnterior+"\n Saldo Actual: $"+saldoCuenta);
}
function pagarAgua(){
   if (agua<=saldoCuenta){
        saldoAnterior=saldoCuenta;
        saldoCuenta-=agua;
        actualizarSaldoEnPantalla();
        alert("Has pagado el servicio de Agua.\n Saldo Anterior: $"+saldoAnterior+"\n Dinero descontado: $"+agua+"\n Saldo Actual: $"+saldoCuenta);
   }
   else{
       alert("No hay dinero suficiente para pagar el servicio");
       return false;
   }
}
function pagarLuz(){
    if (luz<=saldoCuenta){
        saldoAnterior=saldoCuenta;
        saldoCuenta-=luz;
        actualizarSaldoEnPantalla();
        alert("Has pagado el servicio de Luz.\n Saldo Anterior: $"+saldoAnterior+"\n Dinero descontado: $"+luz+"\n Saldo Actual: $"+saldoCuenta);
   }
   else{
       alert("No hay dinero suficiente para pagar el servicio");
       return false;
   }
}
function pagarInternet(){
    if (internet<=saldoCuenta){
        saldoAnterior=saldoCuenta;
        saldoCuenta-=internet;
        actualizarSaldoEnPantalla();
        alert("Has pagado el servicio Internet.\n Saldo Anterior: $"+saldoAnterior+"\n Dinero descontado: $"+internet+"\n Saldo Actual: $"+saldoCuenta);
   }
   else{
       alert("No hay dinero suficiente para pagar el servicio");
       return false;
   }
}
function pagarTelefono(){
    if (telefono<=saldoCuenta){
        saldoAnterior=saldoCuenta;
        saldoCuenta-=telefono;
        actualizarSaldoEnPantalla();
        alert("Has pagado el servicio de Teléfono.\n Saldo Anterior: $"+saldoAnterior+"\n Dinero descontado: $"+telefono+"\n Saldo Actual: $"+saldoCuenta);
   }
   else{
       alert("No hay dinero suficiente para pagar el servicio");
       return false;
   }
}
function transferir(){ 
    if ((cuenta==cuentaAmiga1)||(cuenta==cuentaAmiga2)){
        saldoAnterior=saldoCuenta;
        saldoCuenta-=transferencia;
        alert("Se han transferido: $"+transferencia+"\n Cuenta destino: "+cuenta);
        actualizarSaldoEnPantalla();
    }
    else{
        alert("Solo puede transferirse a cuentas amigas");
        return false;
    }
}
//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    limiteExtraccion = prompt("Ingrese el nuevo limite de extracción: ");
    if (limiteExtraccion != undefined){
        dinero = parseInt (limiteExtraccion);
        if (esNumero(dinero)){
            actualizarLimiteEnPantalla();
            alert ("El nuevo límite de extracción es: "+limiteExtraccion);
        }
    } else{
        return false;
    }
}
function extraerDinero() {
    monto = prompt("¿Cuánto dinero desea extraer?");
    if (monto != undefined){
        dinero = parseInt (monto);
        if (esNumero(dinero)&&
            validaExtraccion(dinero)&&
            esCien(dinero)&&
            haySaldo(dinero)){
            restarSaldo(dinero);
            }
    }else{
        return false;
    }
}

function depositarDinero() {
    monto = prompt("¿Cuánto dinero vas a depositar?");
    if (monto != undefined){
        dinero= parseInt(monto);
        if (esNumero(dinero)){
           sumarSaldo(dinero);
        }
    }else{
        return false;
    }
}

function pagarServicio() {
    numero = prompt("Ingresá el número que corresponda con el servicio que querés pagar: \n 1-Agua \n 2-Luz \n 3-Internet \n 4-Teléfono");
    if (numero != undefined){
        servicio= parseInt(numero);
        switch (servicio){
            case 1:
                pagarAgua();
                break;
            case 2:
                pagarLuz();
                break;
            case 3:
                pagarInternet();
                break;
            case 4:
                pagarTelefono();
                break;
            default:
                alert("Ingrese un servicio válido");
                return false;
        }
    }else{
        return false;
    }
}
function transferirDinero() {
    transferencia=prompt("Cuanto dinero vas a transferir?");
    if (transferencia != undefined){
        dinero= parseInt(transferencia);
        if (esNumero(dinero)&&
            haySaldo(dinero)){
                cuenta= prompt("Ingresá el número de cuenta a transferir:");
                if (cuenta != undefined){
                    transferir(cuenta);                   
            }else{
                return false;
            }
        }
    }else{
        return false;
    }
}

function iniciarSesion() {
    entrada=prompt("Ingresá tu clave: ");
        if (entrada==clave){
            alert("Bienvenido/a "+nombreUsuario+" ya puedes comenzar a realizar operaciones.");
        }
        else{
            alert("Código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad.");
            saldoCuenta=0;
            actualizarSaldoEnPantalla();
        }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}