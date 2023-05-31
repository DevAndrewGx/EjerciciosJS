function saludar() {
    alert("Bienvenido Usuario :)");
    alert("Acontinuacion encontras algunos botones que ejecutan algoritmos hechos con js puro");
}


function suma() {
    let a = 0;
    let b = 0;
    let suma = 0;

    a = parseInt(prompt("Ingrese el primer valor a sumar: "));
    b = parseInt(prompt("Ingrese el segundo dato a sumar: "));
    suma = a + b

   alert("El resultado de la suma es: "+(b + a));
}

function operacionesBasicas() {
    let num1, num2, suma, resta, division, multiplicacion;

    num1 = parseInt(prompt("Ingrese el primer valor para las operaciones: "));
    num2 = parseInt(prompt("Ingrese el segundo valor para las operaciones: "));

    

    suma = num1 + num2;
    resta = num1 - num2;
    multiplicacion = num1 * num2;
    
    if(num2 == 0) { 
        alert("El segundo valor para division no puede ser 0 intentalo nuevamente");
        division = 0;
    }else { 
        division = num1/num2;
    }

    alert("El resultado de la suma es: "+suma);
    alert("El resultado de la resta es: "+resta);
    alert("El resultado de la multiplicacion es: " + multiplicacion);
    alert("El resultado de la division es: " + division);
}

function cuadradoNumero() { 
    let num1, cuadrado;
    
    num1 = parseInt(prompt("Ingrese un numero para el cuadrado: "));
    cuadrado = num1 ** 2;

    alert("El cuadrado del numero es: " + cuadrado);
}

function areaTriangulo() { 
    let base, altura, area;
    

    base = parseFloat(prompt("Ingrese la base del triangulo: "));
    altura = parseFloat(prompt("Ingrese la altura del triangulo: "));

    area = (base * altura) / 2;

    alert("El area del triangulo es: "+area);
}


function capital() { 
    let capital = 0, cantidadAnos, pagoBanco;

    capital = parseFloat(prompt("Ingrese la cantidad de capital que quiere invertir: "));
    cantidadAnos = parseInt(prompt("Ingrese la cantidad de años que desea invertir: "));

    pagoBanco = ((capital * 1.7)/ 100)*(cantidadAnos*12);

    alert("El capital que generara la inversion en el banco cuando transcurran "+cantidadAnos+" sera: "+pagoBanco);

}



function promedioNotas() {
    let cantidadNotas = 0, nota, promedio = 0, nombre, estado;


    // pedidmos que ingrese nombre del estudiante
    nombre = prompt("Ingrese nombre del estudiante: ");
    // pedimos la cantidad de notas del usuario.
    cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas que sacaste: "));
    
    
    for(let i = 0; i<cantidadNotas; i++) {
        
        nota = parseInt(prompt("Ingrese la nota "+(i+1)+" del estudiante "+nombre));

        promedio += (nota/cantidadNotas);

        alert(promedio);

        if(promedio<=3) {
            estado = "REPROBO";
        }else {
            estado = "APROBO";
        }
    }

    alert("El estudiante "+nombre+" con un promedio "+promedio+" en sus notas "+estado);
    
    
}

// mayor de dos numeros
function mayor2Numeros() {
    let numero1, numero2;

    numero1 = parseInt(prompt("Ingrese el numero1 por favor: "));
    numero2 = parseInt(prompt("Ingrese el numero2 por favor: "));

    if(numero1>numero2) {
        alert("El numero mayor es el numero1 "+numero1);
    }else {
        alert("El numero mayor es el numero2 "+numero2);
    }
}


function mayor3Numeros() {
    let numero1, numero2, numero3;
    
    //pedimos al usuario los valores por teclado
    numero1 = parseInt(prompt("Ingrese el numero1 por favor: "));
    numero2 = parseInt(prompt("Ingrese el numero2 por favor: "));
    numero3 = parseInt(prompt("Ingrese el numero2 por favor: "));

    // condicionamos cada uno de los casos
    if(numero1>numero2 && numero2>numero3) {
        alert("El numero menor es el numero3 ("+numero3+")"+"\nEl orden de los numeros es: "+numero1+" - "+numero2+" - "+numero3);
    }else if (numero1>numero3 && numero3>numero2){
        alert("El numero menor es el numero1 (" + numero2 + ")" + "\nEl orden de los numeros es: " + numero1 + " - " + numero3 + " - " + numero2);
    }else if(numero2>numero1 && numero1>numero3) {
        alert("El numero menor es el numero1 (" + numero3 + ")" + "\nEl orden de los numeros es: " + numero2 + " - " + numero1 + " - " + numero3);
    }else if (numero2 > numero3 && numero3 > numero1){
        alert("El numero menor es el numero1 (" + numero1 + ")" + "\nEl orden de los numeros es: " + numero2 + " - " + numero3 + " - " + numero1);
    }else if(numero3 > numero1 && numero1 > numero2) {
        alert("El numero menor es el numero1 (" + numero2 + ")" + "\nEl orden de los numeros es: " + numero3 + " - " + numero1 + " - " + numero2);
    }else if(numero3>numero2 && numero2>numero1) {
        alert("El numero menor es el numero1 (" + numero1 + ")" + "\nEl orden de los numeros es: " + numero3 + " - " + numero2 + " - " + numero1);
    }else {
        alert("Los numeros son iguales");
    }
}