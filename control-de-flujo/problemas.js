// //PROBLEMA 1
// /*
// edad del gato 
// 0-2 años tiene 24 años
// cada año extra 4 años
// */
let edadGato=3;
let resultado =0;
function añosGato(edadGato) {
    if (edadGato >= 0 && edadGato<= 2){
        console.log("24 años");
    } else {
       resultado = 24 + (edadGato - 2) * 4;
        console.log("la edad del gato es : " + resultado);
    }
}


// ///////PROBLEMA 2 ////
let num = 26;
(num % 2 === 0) ? console.log("el numero " + num + " es par") :  console.log("el numero " + num + " es impar");

let numerito = 131563;

if (numerito % 2 == 0){
    console.log(`El numero${numerito} es par`);
} else {
    console.log(`El numero${numerito} es impar`);
}

// /////////// PROBLEMA 3 //////////////



let añoActual=today.getFullYear();
añoNacimiento=1999;
const today= new Date();
edad=añoActual-añoNacimiento

if(edad >= 18){
    if(edad <65){
        console.log(`Es un adulto`);
    }
} else if (edad>=12){
    console.log(`Es un adolecente`);
} else if (edad>=3){
    console.log(`Es un niño`);
}else{
    console.log(`Es un bby`);
}
console.log("tiene "+edad+ " años");

///prblema 4///
// let saldo=1000;
// let divisas=0;
// let beneficiencia=true;
// let conversion=false;
// console.log("tu saldo actual es de : "+saldo+"pesos mexicanos");
// if(beneficiencia==true){
//     saldoNuevo=saldo-10;
//     console.log(saldoNuevo)
// }else{
//     console.log(saldo)
// }
// if(conversion==true){
//     saldoNuevo=saldo/18;
//     console.log("tu nuevo saldo en dolares es "+saldoNuevo)
// }else{
//     console.log(saldo)
// }
let saldo=1000;
function BancoMIRAJI(opcion){
    if(opcion==1){////REVISION DE SALDO
        console.log("tu saldo actual es de : "+saldo+"pesos mexicanos");
    }else if(opcion==2){//DONAR $10
        saldoNuevo=saldo-10;
        console.log("tu nuevo saldo es de :"+saldoNuevo+" pesos Gracias!! por donar a programadores en formacion")
    }else if(opcion==3){// CAMBIAR TU DINERO A DIVISAS
        saldoNuevo=saldo/18;
        console.log("tu nuevo saldo en dolares es "+saldoNuevo)
    }else{//VALOR INVALIDO
        console.log("eligue una opcion valida 1 saldo, 2 donar, 3 divisas")
    }
}
BancoMIRAJI(3);