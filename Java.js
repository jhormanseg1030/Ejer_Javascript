/*Flecha*/
var Inicio = 5;
var Fin = 20;
const Fibonacci = (Inicio, Fin) =>{
    var a = Inicio;
    var b = Inicio + 1;
    var result;
    while ( a <= Fin ){
        console.log (a)
        result = a + b;
        a = b;
        b = result
    }
};
Fibonacci(Inicio, Fin);

/*Array Ejemplo Profe :3*/
// var Inicio = 10;
// var Fin = 30;
// const Fibonacci2 = (Inicio, Fin )=> {
//     const rest2 = [Inicio, Inicio + 1];
//     let sum = Inicio + Inicio + 1;
//     while (sum <= Fin) {
//         rest2.push(sum);
//         const n = rest2.slice(rest2.length - 2)
//         sum = n.reduce ((acumula, itera) => acumula + itera );
//     }
//     return rest2
// }
// console.log (Fibonacci2(Inicio, Fin));

/*Array Propio >:3*/

const Fibonacci3 = (Inicio, Fin) =>{
    var a = Inicio;
    var b = Inicio + 1;
    var resul;
    var Arra = [];
    while (a <= Fin) {
        Arra.push (a);
        resul = a + b;
        a = b;
        b = resul;
    }
    console.log ("La operacion de la array es ", Arra);
};
Fibonacci3(Inicio,Fin);

/*set*/

const Fibo = (Inicio, Fin) => {
    var a = Inicio;
    var b = Inicio + 1;
    var resulta;
    var fibo = new Set();

    while (a < Fin) {
            fibo.add(a);
            resulta = a + b;
            a = b;
            b = resulta
    }
    console.log ("La Operacion es ",(fibo))
}
Fibo(Inicio,Fin);

/*Map*/
const Fibo3 = (Inicio, Fin) => {
    var a = Inicio;
    var b = Inicio + 1;
    res = 0
    let map = new Map();
    let i = 0;
    map.set(i++, a)
    map.set(i++, b)
    res = a + b;
    while (res < Fin) {
        map.set(i++,res)
        a = b;
        b = res
        res = a + b;
    }
    return map
}
console.log(Fibo3(Inicio, Fin));
