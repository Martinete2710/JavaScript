//SESION DE FUNCIONES

/* 

Hoisting:

Es fundamental en el entendimiento de la forma en que se ejecuta nuestro
código de JS, esto aplica tanto para variables como para funciones.

Como tal, la traducción de Hoisting es elevación, a partir de aquí, su entendimiento es
mucho más intuitivo, lo que hace a grandes rasgos es "elevar" las funciones y variables 
declaradas dentro del código.

Yo puedo invocar una función antes de siquiera declararla.
JS cuando es ejecutado por el motor js del navegador primero lee e interpreta las variables y las funciones declaradas
*/

// Funciones, invocación y declaracióm

//Declaración de una función

/*

palabra reservada - function

nombre de la funcion - nombreFuncion
establecer parametros -recibe de 0 a n parametros y se encasillan
dentro un paréntesis ()

establecer el bloque de código sobre el que vamos a trabajar
lo hacemos mediante llaves {
codigo a ejecutar
}


*/
function nuevaFuncion(){
    console.log("Buenos días CH28");
}

/*

Scope : 

El concepto scope hace referencia al alcance que tiene
una variable dentro de un código JS.

var, let y const.

var : global - quiere decir que se puede utilizar o
trabajar con esta variable dentro de cualquier
parte del código

let : porque además de funcionar de manera global
en caso de ser requerida, también puede solo ser
utilizada de manera local.

const : se refiere, por su nombre tan intuitivo,
a la palabra constante, esto quiere decir que su
valor no puede ser reasignado.

El uso de la palabra reservada 'var' no es tan recomendado
por el comportamiento y la poca adaptabilidad de una
variable.

Entonces, se implementan let y const como una 
alternativa mucho más eficiente para determinar el 
Scope o alcance que tiene una variable.

*/
// Ejemplo de función pero no retorna ningún valor
// No recibe ningún parámetro
function nuevaFuncion(){
    console.log("Buenos días CH28");
}

nuevaFuncion();

// Ejemplo de función que si retorna un valor
// Tamién recibe un parámetro
function holaMundo(nombre){
    return "Hola " + nombre; // Si retorna un valor
}

//holaMundo("Fernando");
//console.log(holaMundo("Fernando"));

/*

Elaborar una función que calcule la velocidad 
de un objeto

-velocidad = distancia / tiempo

- function

- calcularVelocidad
(distancia, tiempo)

- elaborar el bloque de código

*/
function calcularVelocidad(distancia, tiempo){ // Inicio 
    let velocidad = distancia / tiempo;
    return "la velocidad calculada es "+ velocidad + "m/s";
} // Cierre

console.log(calcularVelocidad(45,20));//entre parentecis  el valor 


function calculoDeLaGravedad(masa,aceleracion){
    let gravedad= masa*aceleracion;
    return "la gravedad es: " +gravedad;
}


// Funciones dentro de JS

/*

Funciones flecha  | Fat arrow   | Funciones lambda

Funciones anonimas
Funciones CallBack - Que recoben otras funciones como parametros

Promesas

Funciones async - await


*/
///////////////////////////////////////////////////////////////////////////////////
//FUNCIONES FLECHA

/* son una manera mas compacta y sencilla de escribir una funcion normal.

no son lo mismo que una funcion general, se utiliza en otro tipo de contextos funciones callback que requieren funciones anonimas*/
//DECLARACION DE UNA FUNCION FLECHA

/*
-var,let,const
const - buena practica utilizar const para declarar funciones flecha o lambda
-nombre de funcion
-parametros
-establecer el bloque de codigo o procesos que va a ejecutar esta funcion
=> - fat arrow
*/

// Funcion general
function funcionNormal (parametro){
    return "Hola " + parametro;
}

// Funcion flecha - Arrow Function

//Funcion flecha más general
const funcionFlecha = parametro => "Hola " + parametro;

//Funciones flecha con más parámetros
const funcionVariosParametros = (datoA, datoB) => {
    let datoC = datoA + datoB;
    return "La suma de datoA + datoB = " + datoC;
}

//Funciones flecha sin recibir un parámetro
const funcionSinParametros = () => {
    return "Funcion flecha que no recibe parametros";
}
