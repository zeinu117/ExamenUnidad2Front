class Examen {
    public holaMundo(hola : string) : void  {
        alert("Hola mundo");
    }
    public almacenarHola(hola : string) : string {
        hola = "hola mundo almacenada en una variable"
        alert(hola);
        return hola;
    }
    public saludar(nombre : any) : string {
        nombre = prompt("ingrese tu nombre");
        nombre = alert("Hola " + nombre)
        return nombre;
    }
    public nombreDuplicado(nombre : any, numero : any) :any {
        nombre = prompt("Ingresa tu nombre")
        numero = prompt("Ingresa un numero")
        numero = parseFloat(numero);
        for (let i = 0; i < numero; i++) {
            document.write(nombre + "<br>")
        }
    }
    public nombreCompleto(nombre : any ) : any{
        nombre = prompt("Ingresa tu nombre completo")
        document.write(nombre.toLowerCase() + "<br>")
        document.write(nombre.toUpperCase() + "<br>")
        document.write(nombre.replace(/\b[a-z]/g, (c: string)=>c.toUpperCase()));
        
    }
    public Edad(edad : any) : any{
        edad = prompt("ingrese tu edad")
        if (edad >= 18) {
            alert("Eres mayor de edad")
        } else {
            alert("Eres menor de edad")
        }
    }
    public password(pass : any, contrasena : any) : any{
        contrasena = "contraseña";
        pass = prompt("Ingresa la contraseña")
        pass = pass.toLowerCase()
        if (contrasena == pass) {
            alert("La contraseña es correcta")
        } else {
            alert("La contraseña es incorrecta")
        }
    }
    public repetir(numero : any) : any{
        numero = prompt("ingrese una palabra")
        for (let i = 0; i < 10; i++) {
            document.write(numero + "<br>")
            
        }
    }
    public cumpleaños(cumple : any) : any{
        cumple = prompt("Ingresa tu cuantos años tienes")
        for (let i = 0; i < cumple; i++) {
            document.write((i + 1) + " Años " + "<br>")
            
        }
    }
    public inversion(invertir: any, interes : any, anos : any ) : any{
        invertir = prompt("ingrese la cantidad  a invertir")
        invertir = parseFloat(invertir);
        interes = prompt("ingrese el interes porcentual anual")
        interes = parseFloat(interes);
        anos = prompt("ingrese los años")
        for (let i = 0; i < anos; i++) {
            invertir *= 1 + interes / 100;
            document.write("Capital tras " + (i+1) + " años: " + invertir)
        }
    }
    public ejecutar() : void {
        let hola : any;
        let nombre: any;
        let numero: any;
        let edad: any;
        let pass: any;
        let cumple: any;
        let contrasena: any;
        let invertir : any;
        let interes : any;
        let anos : any;
        let opcion : any = prompt(`Selecciona la operacion que quieres hacer: 
                                    1.- Ejercicio 1  
                                    2.- Ejercicio 2
                                    3.- Ejercicio 3
                                    4.- Ejercicio 4
                                    5.- Ejercicio 5
                                    6.- Ejercicio 6
                                    7.- Ejercicio 7
                                    8.- Ejercicio 8
                                    9.- Ejercicio 9
                                    10.- Ejercicio 10
                                    `);
        opcion = parseInt(opcion);
        switch(opcion) {
            case 1:
                this.holaMundo(hola)
                break;
            case 2:
                this.almacenarHola(hola)
                break;
            case 3:
                this.saludar(nombre)
                break;
            case 4:
                this.nombreDuplicado(nombre,numero)
                break;
            case 5:
                this.nombreCompleto(nombre)
                break;
            case 6:
                this.Edad(edad)
                break;
            case 7:
                this.password(pass,contrasena)
                break;
            case 8:
                this.repetir(numero)
                break;
            case 9:
                this.cumpleaños(cumple)
                break;
            case 10:
                this.inversion(interes,invertir,anos)
                break;
        }
        
    }
}
const Unidad2 = new Examen();
Unidad2.ejecutar();