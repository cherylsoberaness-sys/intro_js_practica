/**EJERCICIO 4: Arreglar bug asíncrono 
El cliente está intentando obtener datos de un usuario usando su ID (el ID 1 debería existir), 
pero siempre obtiene undefined. Nos ha pasado el código para que lo revisemos y 
arreglemos. 
 
TAREAS: 
1. Identifica el problema (¿por qué da undefined?) 
--- la funcion esta retornando undefined debido a que retorna user antes de que el
--- setTimeOut termine.
2. Explica qué es la asincronía y por qué causa este problema 
--- JavaScript es de un solo hilo y la asincronia permite ejecutar tareas en segundo plano para no bloquear
--- el hilo principal. Como con getUser, la logica se pone dentro de un setTimeOut simulando una tarea pesada, 
--- eso permite que mientras el codigo externo corre de manera normal, el setTimeOut hace lo suyo, cuando
--- termina se incorpora al hilo. Como en este caso, el return devuelve la variable user antes de que termine
--- el setTimeOut.
3. Arréglalo usando Promises 
4. Arréglalo también usando async/await 
 
 
Código a arreglar, simula una llamada a un API que trae usuarios de una base de datos:  */


function getUser(id) {
    let user;
    setTimeout(() => {
        if(id === 1){
           user = {id: 1, name: "john Doe"}; 
        }
         
    }, 2000);
      return user;
}

const user = getUser(1);
console.log(user);


function getUser2(id){

    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(id === 1){
                resolve({id: 1, name: "John Doe"});   
            } else {
                reject("Id invalida");
            }
        }, 1000)
    });
}


getUser2(1)
    .then(user => console.log("Usuario:", user))
    .catch(err => console.log(err));



async function processUser() {
    try {
        const user = await getUser2(1);
        console.log("Usuario:", user);
    } catch (error){
        console.log(error);
    }
}
processUser();