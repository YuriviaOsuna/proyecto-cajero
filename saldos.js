var texto = "Su saldo actual es: $";
var saldosUsuarios = [];

var saldosGuardados = (localStorage.getItem("saldo0"));
if (saldosGuardados == null){
    saldosUsuarios = [200, 290, 67];
} else{
    let saldos0 = (localStorage.getItem("saldo0"));
    let saldos1 = (localStorage.getItem("saldo1"));
    let saldos2 = (localStorage.getItem("saldo2"));
    saldosUsuarios = [parseInt(saldos0), parseInt(saldos1), parseInt(saldos2)];
}

console.log(saldosUsuarios);
var id = (localStorage.getItem("id"));

consultar();

function consultar() {
    document.form1.text2.value = "";

    for (i = 0; i < saldosUsuarios.length; i++) {
        if (id == i) {
            document.form1.text.value = texto + saldosUsuarios[i];
        }
    }
}

function ingresar() {
    var ingresarSaldo = prompt("Monto a ingresar:");
    var nuevoSaldo = 0;
    var ingresar = 1;

    //valida que la cantidad ingresada del usuario  no sean letras, nulos o vacios
    if (!isNaN(ingresarSaldo) && ingresarSaldo != null && ingresarSaldo != "") {
        for (i = 0; i < saldosUsuarios.length; i++) {
            if (id == i) {
                //le sumo al saldo del usuario la cantidad que desea ingresar
                nuevoSaldo = saldosUsuarios[i] + parseInt(ingresarSaldo);

                if (nuevoSaldo > 990) {
                    alert("La cuenta no puede tener mas de 990 pesos");
                    ingresar = 0;
                }

                //Si cumple con la regla del negocio del saldo en la cuenta suma saldo al array
                if (ingresar == 1) {
                    saldosUsuarios[i] = saldosUsuarios[i] + parseInt(ingresarSaldo);
                    document.form1.text.value = texto + saldosUsuarios[i];
                    document.form1.text2.value = "Ingresado: $" + ingresarSaldo;
                }
            }
        }
    }
}

function retirar() {
    var retirarSaldo = prompt("Monto a retirar");
    var nuevoSaldo = 0;
    var retirar = 1;

    //valida que la cantidad ingresada del usuario no sean letras, nulos o vacios
    if (!isNaN(retirarSaldo) && retirarSaldo != null && retirarSaldo != "") {
        for (var i = 0; i < saldosUsuarios.length; i++) {
            if (id == i) {
                if (parseInt(retirarSaldo) <= saldosUsuarios[i]) {

                    //le resto al saldo del usuario la cantidad que desea retirar
                    nuevoSaldo = saldosUsuarios[i] - parseInt(retirarSaldo);
                    if (nuevoSaldo < 10) {
                        alert("La cuenta no puede tener menos de 10 pesos");
                        retirar = 0;
                    }

                    //Si cumple con la regla del negocio del saldo en la cuenta resta saldo al array
                    if (retirar == 1) {
                        saldosUsuarios[i] = saldosUsuarios[i] - parseInt(retirarSaldo);
                        document.form1.text.value = texto + saldosUsuarios[i];
                        document.form1.text2.value = "Retirado: $" + retirarSaldo;
                    }
                } else {
                    alert("No cuenta con saldo suficiente");
                }
            }
        }
    }
}

function salir() {
    window.close();
    localStorage.removeItem("id");
    guardarSaldosLocal();
}

function guardarSaldosLocal() {
    for (i = 0; i < saldosUsuarios.length; i++) {
        let saldo = saldosUsuarios[i];
        localStorage.setItem("saldo"+i, saldo);
    }
}