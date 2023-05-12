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