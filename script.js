function validar() {

    // Obtener los datos escritos en el formulario
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;

    // Comprobar usuario y contraseña
    if (usuario == "admin" && contrasena == "12345") {

        alert("Bienvenido al sistema");

        document.getElementById("login").style.display = "none";
        document.getElementById("bienvenida").style.display = "block";

        return false;

    } else {

        alert("Usuario o contraseña incorrectos");
        return false;

    }
}

function entrar() {

    document.getElementById("bienvenida").style.display = "none";
    document.getElementById("tienda").style.display = "block";

}

function comprar() {

    let articulo1 = Number(document.getElementById("articulo1").value);
    let articulo2 = Number(document.getElementById("articulo2").value);
    let articulo3 = Number(document.getElementById("articulo3").value);

    let total = articulo1 + articulo2 + articulo3;

    document.getElementById("resultado").innerHTML =
    "Total de prendas seleccionadas: " + total;

}