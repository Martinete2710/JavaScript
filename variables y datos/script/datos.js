//TIPOS DE DATOS Y VARIABLES EN JS
/* DECLARACION DE VARIABLES.

var: utilizamos esta palabra reservada para variables globales

let: la utilizamos para variables locales- se puede utilizar en un bloque especifico de codigo

const: esta palabra la utilizamos para datos o informacion que no pueden cambiar su valor 

var nombreDeVariable = x;
*/

//TIPO DE DATO NUMERICO (numbrer)

var edad = 27;
var altura = 1.82;
var añoDeNacimiento = 1995;
var diaDeLaSemana = 5;

var edadTexto ="27"
var nuevaEdad = Number(edadTexto)

//tipo de dato de cadena de texto (string)

/*los tipos de datos string o cadena de texto utiliza comillas doblees o sensillas para asignar un valor
son un tipo de dato summamente flexible sin embargo hay que utilizarlo con cuidado.
*/

var nombre="Martin"
var ciudad="CDMX"
var colorFav="cafe"


var edadString= String(edad)


//TIPO DE DATO BOOLEANO (boleano)

var esChilango= true;
var escuchaMusica=true;


var condicion= Boolean(10>5); //es true 
var condicion2= Boolean(10<5); //es false

/*los tipos de datos booleanos solo arrojan dos resultados true o false se les puede poner condiciones y que haga diferentes cosas dependiendo del resultado*/

var nuevaVariable;
//undefine es una variable no definida 

/*diferenciqa entre null y undefine 
null si es un valor undefine es que le falta un valor y se puede agregar despues*/

//null - nulo representa la ausensia de un valor
var variableNull= null;

//constantes
const pi=3.141592; // no pueden cambiar despues su valor siempre va a valer lo mismo

//RETO
//DIEZ VARIABLES DE CADA  TIPO DE DATO  NUMERICO,TEXT Y BOOLEAN
//NUMERICAS
var edad= 27;
var Estatura= 1.82;
var añoActual= 2023;
var mes= 10;
var dia= 27;
var numeroFavorito= 27;
var numeroDeSuerte= 7;
var año= 1995;
var perros= 2;
var gatos= 0;
// TEXTO
var EdadTexto="veninticiete";
var EstaturaTexto="uno punto ochenta y dos";
var AñoActualTexto="dos mil veinti tres";
var mesTexto="octubre ";
var diaTexto="viernes ";
var numeroFavoritoTexto="veinticiete  ";
var numeroDeSuerteTexto="ciete ";
var añoTexto="mil novecientos noventa y cinco ";
var perrosTexto="dos";
var gatosTexto="cero";
// BOOLEANAS
var lentes=true;
var compu=true;
var cel=true;
var CDMX=true;
var pumasFutbol=true;
var cadenas =false;
var libreta=false;
var animo=true;
var pasion=true;
var ganas=true;
//CONDICIONALES 
var condicion3= Boolean(11>5); //es true 
var condicion4= Boolean(12<5); //es false

////////////////////////////////////////////////

//ARRAYS Y OBJETOS

/* array tambien concocido como arreglo es un tipo de dato que pertenece  a  js en el cual almacena una coleccion de elementos de manera odernada.

Primer elemento = indice 0.
Hasta n cantidad de indices.
*/

var ejemploDeArray =["que onda","como estas", "que tal", "saludos"]
var otroArray=[34,22,15,55,45]
/* OBJETOS, los encontramos con object, son tipos de datos similares a los arrays sin embargo no son lo mismo y su estructura y semantica indican al motor de js del navegador como trabaujar estos elementos 
key = llave
value = valor
No tienen un orden
Formato JSON

*/

var ejemploObjeto={
    nombre: "martin",
    apellido:"Reyes",
    edad: 27,
    estudiante:true
}