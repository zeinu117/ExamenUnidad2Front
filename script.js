var Examen = /** @class */ (function () {
    function Examen() {
    }
    Examen.prototype.holaMundo = function (hola) {
        alert("Hola mundo");
    };
    Examen.prototype.almacenarHola = function (hola) {
        hola = "hola mundo almacenada en una variable";
        alert(hola);
        return hola;
    };
    Examen.prototype.saludar = function (nombre) {
        nombre = prompt("ingrese tu nombre");
        nombre = alert("Hola " + nombre);
        return nombre;
    };
    Examen.prototype.nombreDuplicado = function (nombre, numero) {
        nombre = prompt("Ingresa tu nombre");
        numero = prompt("Ingresa un numero");
        numero = parseFloat(numero);
        for (var i = 0; i < numero; i++) {
            document.write(nombre + "<br>");
        }
    };
    Examen.prototype.nombreCompleto = function (nombre) {
        nombre = prompt("Ingresa tu nombre completo");
        document.write(nombre.toLowerCase() + "<br>");
        document.write(nombre.toUpperCase() + "<br>");
        document.write(nombre.replace(/\b[a-z]/g, function (c) { return c.toUpperCase(); }));
    };
    Examen.prototype.Edad = function (edad) {
        edad = prompt("ingrese tu edad");
        if (edad >= 18) {
            alert("Eres mayor de edad");
        }
        else {
            alert("Eres menor de edad");
        }
    };
    Examen.prototype.password = function (pass, contrasena) {
        contrasena = "contraseña";
        pass = prompt("Ingresa la contraseña");
        pass = pass.toLowerCase();
        if (contrasena == pass) {
            alert("La contraseña es correcta");
        }
        else {
            alert("La contraseña es incorrecta");
        }
    };
    Examen.prototype.repetir = function (numero) {
        numero = prompt("ingrese una palabra");
        for (var i = 0; i < 10; i++) {
            document.write(numero + "<br>");
        }
    };
    Examen.prototype.cumpleaños = function (cumple) {
        cumple = prompt("Ingresa tu cuantos años tienes");
        for (var i = 0; i < cumple; i++) {
            document.write((i + 1) + " Años " + "<br>");
        }
    };
    Examen.prototype.inversion = function (invertir, interes, anos) {
        invertir = prompt("ingrese la cantidad  a invertir");
        invertir = parseFloat(invertir);
        interes = prompt("ingrese el interes porcentual anual");
        interes = parseFloat(interes);
        anos = prompt("ingrese los años");
        for (var i = 0; i < anos; i++) {
            invertir *= 1 + interes / 100;
            document.write("Capital tras " + (i + 1) + " años: " + invertir);
        }
    };
    Examen.prototype.ejecutar = function () {
        var hola;
        var nombre;
        var numero;
        var edad;
        var pass;
        var cumple;
        var contrasena;
        var invertir;
        var interes;
        var anos;
        var opcion = prompt("Selecciona la operacion que quieres hacer: \n                                    1.- Ejercicio 1  \n                                    2.- Ejercicio 2\n                                    3.- Ejercicio 3\n                                    4.- Ejercicio 4\n                                    5.- Ejercicio 5\n                                    6.- Ejercicio 6\n                                    7.- Ejercicio 7\n                                    8.- Ejercicio 8\n                                    9.- Ejercicio 9\n                                    10.- Ejercicio 10\n                                    ");
        opcion = parseInt(opcion);
        switch (opcion) {
            case 1:
                this.holaMundo(hola);
                break;
            case 2:
                this.almacenarHola(hola);
                break;
            case 3:
                this.saludar(nombre);
                break;
            case 4:
                this.nombreDuplicado(nombre, numero);
                break;
            case 5:
                this.nombreCompleto(nombre);
                break;
            case 6:
                this.Edad(edad);
                break;
            case 7:
                this.password(pass, contrasena);
                break;
            case 8:
                this.repetir(numero);
                break;
            case 9:
                this.cumpleaños(cumple);
                break;
            case 10:
                this.inversion(interes, invertir, anos);
                break;
        }
    };
    return Examen;
}());
var Unidad2 = new Examen();
Unidad2.ejecutar();
