var cuentas = {
    nombre: 'MALI',
    nombredos: 'GERA',
    nombretres: 'MAUI'
};

var password = {
    passwordMali: 1234,
    passwordGera: 5678,
    passwordMaui: 7788
};

function recibir() {
    var usuario = document.getElementById("text").value;
    usuario = usuario.toUpperCase();
    var nip = document.getElementById("password").value;

    if (usuario != "" || nip != "") {
        var i = 1;
        var llave = 0;
        var encontroUsuario = 0;

        for (const property in cuentas) {
            var nombre = (`${cuentas[property]}`);
            llave = (`${i}`);
            var z = 1;
            if (usuario == nombre) {
                encontroUsuario = 1;
                for (const property in password) {
                    var contraseña = (`${password[property]}`);
                    let clavePassword = (`${z}`);
                    if (llave == clavePassword) {
                        if (nip == contraseña) {
                            window.open("indexUsuario.html.");
                            guardarUsuario(usuario);
                        } else {
                            alert("Nip Incorrecto");
                        }
                    }
                    z++;
                }
            }
            i++;
        }
    } else {
        alert("Favor de capturar un Usuario y un Password");
    }

    if (encontroUsuario == 0) {
        alert("Usuario y/o contraseña incorrecta");
    }
    document.getElementById("form1").reset();
}

function guardarUsuario(usuario) {
    var id = 0;

    if (usuario == "MALI") {
        id = 0;
    } else if (usuario == "GERA") {
        id = 1;
    } else if (usuario == "MAUI") {
        id = 2;
    }

    localStorage.setItem("id", id);

}

