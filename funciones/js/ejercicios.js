// Ejercicios

/*

Realizar una función que realice o saatisfaga los siguientes escenarios

Realizar en manera de función general y funcion flecha.

1. Calcular el cuadrado de un número.

2. Escribir un código que convierta de grados celsius
a grados farenheit

3. Realizar una función que calcule el valor de
Voltaje, recibiendo como entradas o parámetros
Resistencia y Corriente.

4. Elaborar una función que calcule el volumen de
un cubo, recibiendo como dato de entrada Lado.

5. Calcular el área de un triángulo

6. Calcular el volumen de una esfera

7. Convertir una cadena de texto a mayúsculas, usando el método .toUpperCase()

*/

// NUMERO AL CUADRADO

function cuadradoDeNumero(numero){//normal
    return "el numero al cuadrado es:"+numero*2
} 

const cuadradoDeNumeroFlecha= numero => "el numero al cuadrado es:"+ numero*2//flecha

// TRANSFORMAR DE GRADOS CELCIUS A GRADOS FARENHEID

function gradosFarenheid(gradosCentigrados) {//normal
let constante=  32;
let primerValor= gradosCentigrados*1.8;
let resultado= primerValor+constante;
return "el resultado de centigrados a farenheid es : "+ resultado
}

const gradosFarenheidFlecha=gradosCentigrados =>{//flecha
let constante=  32;
let primerValor= gradosCentigrados*1.8;
let resultado= primerValor+constante;
return "el resultado de centigrados a farenheid es : "+ resultado
}

// CALCULO DE VOLTAJE

function calculoDeVoltaje(corriente,resistencia){//normal
    return "el valor del voltaje es :" + corriente*resistencia + "ohm-m"
}
const calcularVoltajeFlecha=(corriente,resistencia)=> "el resultado del voltaje es"+corriente*resistencia;//flecha

//CALCULO DE AREA DE UN CUBO
function areaCubo (l1,l2,l3){
    let  L1y2 = l1*l2
    let resultado =L1y2*l3
    return "el resultado del area es igual a :"+ resultado+"metros"
}

const areaCuboFlecha=(l1,l2,l3)=>{
    let  L1y2 = l1*l2
    let resultado =L1y2*l3
    return "el resultado del area es igual a :"+ resultado+" metros"
}

//CALCULO DEL AREA DE UN TRIANGULO

const areaTrianguloFlecha=(base,altura)=>{//flecha
let constante= 2;
let baseXaltura= base*altura
let resultado= baseXaltura/constante
return "el area de un triangulo es igual a :"+ resultado + " metros cuadrados"
}

function areaTriangulo(base,altura){//normal
let constante= 2;
let baseXaltura= base*altura
let resultado= baseXaltura/constante
return "el area de un triangulo es igual a :"+ resultado + " metros cuadrados"
}
