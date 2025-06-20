//Ejemplo del profe
/*
const tarea = () => {
    return new Promise((resolve, reject) => {
        const tiempo = Math.floor(Math.random() * 4000);
        console.log(tiempo)
        setTimeout(() => {
            if (tiempo <= 2000) {
                resolve("tarea completada")
            }
            else{
                reject("tarea no completada")
            }
        }, tiempo);
    });
}
tarea().then((resultado) => {
    console.log(resultado);
}).catch ((error) => {
    console.error("error", error);
});
*/


// Crea una función que devuelva una promesa que se resuelva si el número es par y se rechace si es impar
/*
const Num = () => {
    return new Promise((resolve, reject) => {
        const Numero = Math.floor(Math.random() * 100);
        console.log (Numero)
        if (Numero % 2 === 0 ) {
            resolve("El numero es par")
        }
        else{
            reject("el numero es impar")
        }
    })
}
Num().then ((resultado) =>{
    console.log(resultado);
} ).catch((error) => {
    console.error("Impar =", error);
});
*/

// Se crea una promesa que se coloque una contraseña si es valida o no

/*
const Contra = () => {
    return new Promise((resolve, reject) => {
        const Contraseña = "secret"
        if (Contraseña === "secret") {
            resolve ("Bienvenido")
        } else {
            reject("Acceso denegado")
        }
    })
}
Contra().then((respuesta) => {
    console.log (respuesta);
}).catch((error) => {
    console.error("Invasor", error)
})
*/

//Crea una funcion que valida si pasa o no la materia
/*
const Nota= () => {
    return new Promise ((resolve, reject) => {
        const nota = 2.0
        if(nota >= 3.0){
            resolve ("Paso la materia")
        } else{
            reject ("NO paso la materia")
        }
    })
}
Nota().then ((pasa) =>{
    console.log ("definitiva:", pasa);
}).catch((nopaso) =>{
    console.log ("definitiva:",nopaso);
});
*/