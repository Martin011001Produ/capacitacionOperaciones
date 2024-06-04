const _ = require("lodash");
const moment = require("moment");

// 1) Armar una función que me muestre por consola la fecha y la hora actual. 
console.log("---------------- 1 ---------------")

const date = moment()

console.log(date.format('YYYY-MM-DD HH:mm:ss'))


// 2) Usar lodash para que dado un string, reemplazar los caracteres con tildes por el mismo sin tilde. Contemplar 'à', 'á'.
console.log("---------------- 2 ---------------")

const text = "àá"

console.log(_.deburr(text))

// 3) Usar moment para que dada una fecha (ej "2021-09-01") le reste un día y 
//    devuelva la fecha en este formato: "MMM Do YY". (ej: "Aug 31st 21")
console.log("---------------- 3 ---------------")

console.log(date.format('YYYY-MM-DD HH:mm:ss'))

const yesterday = date.subtract(1, 'days')

console.log(date.format('MMM-DD-YY'))


// 4) Mirar estos dos casos y entender las diferencias

/* const cuentaBancaria = {
    saldo: 100000
};
function saldoSiPagara(monto, cuenta) {
    return cuenta.saldo - monto;
}
const montoAPagar = 5000;
const saldoRestante = saldoSiPagara(montoAPagar, cuentaBancaria);
console.log("Si pagara", montoAPagar, "el saldo restante seria de", saldoRestante); */

//---------------------------
//En el primer caso la function saldoSipagara esta retornando el valor 
//que queda en la cuenta luego de la operacion y lo guarda para luego mostrarlo.

//En el segundo caso este no es devuelto por la funcion y se muestra directamente el saldo de la misma por pantalla

/* const cuentaBancaria = {
    saldo: 100000
};
function pagar(monto, cuenta) {
    cuenta.saldo = cuenta.saldo - monto;
}
pagar(20000, cuentaBancaria);  

console.log(cuentaBancaria.saldo); */


// 5)

console.log("---------------- 5 ---------------")

const arrayEnteros = [1, 3, 5, 34, 7, 4, 3, 7, 4]

let arrayNumObj = arrayEnteros.map(function (num) {
    return { numero: num }
})

console.log(arrayNumObj)
let arrayRandom = []
arrayNumObj.map(function (obj) {
    arrayRandom.push(Object.assign(obj, { random: true }))
})

console.log(arrayRandom)

// 6)

console.log("---------------- 6 ---------------")

function multiplos(num) {
    const array = [];
    let max = 100;
    let resul = 0;
    let i = 1;
    while (resul < max) {
        array.push(resul);
        resul = num * i;
        i++;
    }

    return array;
}

const arrayMostrar = multiplos(9)
console.log(arrayMostrar);

// 7)

console.log("---------------- 7 ---------------")

const depositos = [{ warehouse: "Default", quantity: 10 },
{ warehouse: "Otro depósito", quantity: 7 },
{ warehouse: "Ola k ase", quantity: 4 },
{ warehouse: "La casa de mi vecino", quantity: 30 },
{ warehouse: "No se inunda más!", quantity: 3 },
{ warehouse: "Mi galpon", quantity: 0 },
{ warehouse: "No es el Default", quantity: 1 },
{ warehouse: "Si la inflamacion no se va, el dolor vuelve? ", quantity: 9 }
];

function filtro(array) {
    const arrayResul = array.filter((x) => x.warehouse == "Default" || x.warehouse == "La casa de mi vecino")
    
    return arrayResul
}

console.log(filtro(depositos))