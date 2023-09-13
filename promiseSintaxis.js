
/* <--------------------------EJEMPLO BASICO-----------------------------> */
// se instancia el objeto promise y como parametro se le pasa un callback
// el callback tiene como parametro resolve and reject
const promise = new Promise((resolve, reject) => {
    // cuando la condicion de la promesa se cumple, se llama a resolve
    const condition = false;
    if (condition) {
        resolve("se ejecuto bien");
    }
    // cuando no se cumple, se llama a reject  
    else {
        reject("no se cumple la condicion");
    }

});

// Para ejecutar a la promesa, hay q llamarla. Recordar que tienen metodos!!
promise.then((response) => {
    // response llama a resolve de la promesa
    console.log(response)
}).catch((err) => {
    // el metodo .catch se encarga de devolver el reject de la promesa
    console.log(err);
});

/* <---------------------- PROMESA MAS COMPLEJA -------------------------> */

const promiseDos = new Promise((resolve, reject) => {
    // cuando la condicion de la promesa se cumple, se llama a resolve
    const condition = true;
    const objetoDevolvible = {
        name: "objeto",
        desc: "bla bla"
    }
    if (condition) {
        //  se puede devolver objetos, arrays, etc, no solo strings
        resolve(objetoDevolvible);
    }
    // cuando no se cumple, se llama a reject  
    else {
        reject("no se cumple la condicion");
    }

});

// Para ejecutar a la promesa, hay q llamarla. Recordar que tienen metodos!!
promiseDos.then((response) => {
    return response;
}).then((response) => {
    // anidar metodos, permite concatenar respuestas y pasarlas de un .then al siguiente
    console.log("esto es una anidacion de responses", response)
});


// Las promesas son ASINCRONAS asiq todo lo q sea sincronico va a suceder primero y una vez q
// la promesa cambia de estado ==> se ejecuta su resolve, reject

// DECLARAR UNA PROMESA ES SINCRONICO, INVOCARLA ES ASINCRONICO!!!!!!

/* <---------------------- TMB SE ESCRIBE ASI UNA PROMESA -------------------------> */
const promiseTres = () => {
    return new Promise((resolve, reject) => {
        const condition = true;
        const objetoComplejo = {
            name: "objeto",
            numero: 12,
            array: ["aa", "bb"]
        }
        if (condition) {
            resolve(objetoComplejo.name);
        } else {
            reject("ño");
        }
    })
}

promiseTres().then(response => {
    console.log(response);
}).catch(err => {
    console.log(err);
})