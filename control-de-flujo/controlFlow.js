/*
//EXPRESIONES CONDICIONALES
conjunto de instrucciones que se ejecutan si se cumple una condicion

--if =
--else=
--else if=
--switch=

declaracion if
if (condition){
    Bloque de codigo que se ejecutara si la condicion es verdadera
}
*/ //EJEMPLO PARA VALIDAR LA MAYORIA DE EDAD
let edadMartin= 18;

// if(edadMartin>=18){
//     console.log("es mayor de edad");
// }

//DECLARACION ELSE
/* se utiliza como instruccion para especificar un bloque de codigo que se ejecutara si la condicion es falsa.

if (condition){
    Bloque de codigo que se ejecutara si la condicion es verdadera
} else{
    //bloque de codigo que se ejecutara si es falsa
}
*/
if(edadMartin>=18){
    console.log("es mayor de edad");
} else{
    console.log("es menor de edad")
}

// ejemplo de delcaracion if-else entre dos variables
let num1=2710;
let num2=1995;
if(num1>num2){
    console.log(`el numero ${num1} es mayor que ${num2}`);
} else{
    console.log(`el numero ${num1} es menor que ${num2}`) 
}
//segunda forma
let resultado;

if(num1>num2){
    resultado=`el numero ${num1} es mayor que ${num2}`;
} else{
    resultado= "el numero "+ num1+ " es menor que "+ num2;
}
console.log(resultado);
//determinar si un numero es par o impar
let numerito= 18978;

if(numerito%2===0){
    console.log("el numero"+ numerito+" es par")
}else{
    console.log(`el numero ${numerito} no es par`)
}
/*************** OPERADOR TERNARIO**************
son una forma concisa de escribir una expresion condicional en un lenguaje de programacion. se puede utilizar para realizar la misma tarea de una declaracion if-else completa.

sintaxis
(condicion)? expresion_true: expresion_false;

*/
//determinar si un numero es par o impar  con operador ternario
(numerito % 2 ===0)? console.log("el numero"+ numerito+" es par") :  console.log(`el numero ${numerito} no es par`)

// se puede hacer como una  variable

let operadorTernario=(numerito % 2 ===0)? ("el numero"+ numerito+" es par") :  (`el numero ${numerito} no es par`);
console.log(operadorTernario)

/* /////////////////////SENTENCIA ELSE-IF///////////////////
se  utiliza para especificar una nueva condicion si la primera condicion es falsa.(no se cumple).

sintaxis
 if(condicion){
    // se ejecuta este bloque 
 } else-if(condicion2){
    // si se  cumple ejecuta este codigo
 }else-if(condicion3){
    //si se cumple esta ejecuta este codigo
 }else{
    //se ejecuta si no se cumplio ninguna de las condiciones anteriores
 }

//DETERRMINAR QUE DIA DE LA SEMANA CORRESPONDE AL NUMERO SEGUN LA SIGUIENTE TABLA
1-LUNES
2-MARTES
3-MIERCOLES
4-JUEVES
5-VIERNES
*/
let dia= 8;
if(dia===1){
    console.log("ES LUNES")
}else if(dia===2){
    console.log("ES MARTES")
}else if(dia===3){
    console.log("ES MIERCOLES")
}else if(dia===4){
    console.log("ES JUEVES")
}else if(dia===5){
    console.log("ES VIERNES")
}else if(dia>5 && dia<=7){
    console.log("ES FIN DE SEMANA")
}else{
    console.log("numero invalido")
}

//CREA UN PROGRAMA EN JS  en donde muestres al usuario si es de madrugada, mañana, tarde o noche
/*requerimientos:
-la hora almacenada en una variable
-establecer el formato de 24hrs
-tabla para determinar los horarios mañana, tarde y noche.
6-12 mañana (hora>=6 && hora <=12)
13-18 tarde (hora>=13 && hora <=18)
19-23 noche (hora>=19 && hora <=23)
0-5 madrugada (hora>=0 && hora <=5)*/
let hora=2;
if (hora>=6 && hora <=12){
    console.log('es de mañana')
}else if  (hora>=13 && hora <=18){
    console.log('es de tarde')
} else if (hora>=19 && hora <=23){
    console.log('es de noche')
}else if (hora>=0 && hora <=5){
    console.log('es de madrugada aun que nadie da las buenas madrugadas')
} else{
    console.log("numero invalido ingresa un valor entre 0 y 23")
}
////////////////SENTENCIAS ANIDADAS/////////////
//crear un programa para determinar si es mayor de edad o menor de edad   si es mayor de edad y mas de 65 años  catalogarlo como adulto mayor mayor menor de 65 es adulto
let edadGiovani=1;

if (edadGiovani>=18){
    if (edadGiovani<65){
    console.log('es un adulto')
    }else{
        console.log('es un adulto mayor')
    }
}else if(edadGiovani>=12){
console.log("es un adolecente")
}else if(edadGiovani>=4){
    console.log("es un niño")
} else{
    console.log('es un bebe')
}
//VERFICAR LA HORA DEL DIA 
const today= new Date(); //nuevo objeto con un constructor date(), sirve para traer la fecha y hora actual.
console.log(today)
let hour = today.getHours();// metodo para invocar la hora del di en entero con formato de 24 hrs
//today.toLocaleDateString// para hora minuto y segundo
console.log(hour)

function greeting(){
    if (hour>=6 && hour <=12){
        console.log('es de mañana')
    }else if  (hour>=13 && hour <=18){
        console.log('es de tarde')
    } else if (hour>=19 && hour <=23){
        console.log('es de noche')
    }else if (hour>=0 && hour <=5){
        console.log('es de madrugada aun que nadie da las buenas madrugadas')
    } else{
        console.log("numero invalido ingresa un valor entre 0 y 23")
    }
}
greeting()

//verificar la hora del dia mediante una funcion pero de otra manera 
function saludo(){
    let mensaje= 'Error';
    if (hour>=6 && hour <=12){
        mensaje= 'buenos dias'
    }else if  (hour>=13 && hour <=18){
        mensaje='buenas tardes'
    } else if (hour>=19 && hour <=23){
        mensaje='buenas noches'
    }else{
        mensaje='es de madrugada aun que nadie da las buenas madrugadas'
    } 
    return mensaje;
}
console.log(saludo());
//crear un programa  en javascript donde vamos a evaluar si un dia corresponde a un dia de la semana o si es fin de semana
//Crear un programa en JavaScript que evalúe si un día corresponde a día de la semana (L-V) o fin de semana (S y D).

const checarDia = (diaDeSemana) =>{
    let finDeSemana = diaDeSemana === "Sábado" || diaDeSemana === "Domingo";

    if(finDeSemana){
        return "Es fin de semana";
    }else{
        return "Es día de semana (Lunes a viernes)"
    }
};

console.log(checarDia("Domingo"));

//========SWITCH==========
/*permite evaluar la exresion haciendo coincidir el valor de la expresion. cn una etiqueta case, si la encuentra,ejecuta la delcaracion

sintaxis
switch(expresion){
    case etiquet1:
        declaracion1;
        break;
    case etiquet2:
        declaracion2;
        break;
    case etiquet3:
        declaracion3;
        break;
    case etiquet...:
        declaracion...;
        break;

/*Determinar mediante un programa sentencia switch qué día de la semana corresponde al número, según la siguiente tabla:
    - 1 = Lunes
    - 2 = Martes
    - 3 = Miércoles
    - 4 = Jueves
    - 5 = Viernes
    - 6 = Sábado
    - 7 = Domingo
*/
let diaSemana=3;

switch(diaSemana){
    case 1:
        console.log("el dia es lunes");
        break;
    case 2:
        console.log("el dia es martes");
        break;
    case 3:
        console.log("el dia es miercoles");
        break;
    case 4:
        console.log("el dia es jueves");
        break;
    case 5:
        console.log("el dia es viernes");
        break;
    case 6:
        console.log("el dia es sabado");
        break;
    case 7:
        console.log("el dia es domingo");
        break;
    default:
        console.log('numero de la semana invalido')
}
let fruta="platano";
switch (fruta.toLowerCase()) {
    case 'naranjas':
    console.log('El kilogramo de naranjas cuesta $0.59.');
    break;
    case 'manzanas':
    console.log('El kilogramo de manzanas cuesta $0.32.');
    break;
    case 'platanos':
    console.log('El kilogramo de platanos cuesta $0.48.');
    break;
    case 'cerezas':
    console.log('El kilogramo de cerezas cuesta $3.00.');
    break;
    case 'mangos':
    case 'papayas':
    console.log('El kilogramo de mangos y papayas cuesta $2.79.');
    break;
    default:
    console.log('Lo lamentamos, por el momento no disponemos de ' + fruta + '.');
}

console.log("¿Hay algo más que te quisiera consultar?");

/////programa de calificaciones//////

let calificacion=6;
switch(calificacion){
    case (calificacion<=5.4):
        console.log("ya fuiste maestro!! un pomitoy vemos");
        break;
    case (calificacion>=5.5):
        console.log("felicidades tienes "+ calificacion)
        break;
}
