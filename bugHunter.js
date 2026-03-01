
console.log("EJERCICIO 1");
//Ejercicio: Un cliente necesita una función que cuente cuántas vocales hay en un texto, pero nos dice 
//que siempre cuenta de menos. No nos da más detalles, solo el código.

//1ra version:

function countVowels (text){
    const vowels = ["a", "e", "i", "o", "u"];
    let counter = 0;

    for (let i = 0; i < text.length; i++) {
        if(vowels.includes(text[i])){
            counter++;
        }
    }
    return counter;
}


const phrase = "Antes no programaba. Ahora si!";
const result = countVowels(phrase);
console.log(`La frase tiene ${result} vocales`);


//1. Identifica el bug - ¿Qué está mal?

//el array de vocales contiene unicamente minusculas y por esa razon
//ignora las vocales en mayuscula del texto que se le pasa a la funcion.

//2. Explica el problema - ¿Por qué no cuenta todas las vocales? 

// cuando estamos por ejemplo, en el indice de la primera vocal en
// mayuscula que corresponde a la letra "A" se hace la validacion, 
// vowels incluye la letra "A"? ---> no la incluye 
// (ya que en nuestro arraglo hay unicamente vocales en minusculas), 
// entonces el contador no aumenta y se descarta esa vocal.



//3. Codigo arreglado:

function countVowels2 (text){
    const vowels = ["a", "e", "i", "o", "u"];
    let counter = 0;

    const normalizedText = text.toLowerCase();

    for (let i = 0; i < normalizedText.length; i++) {
        if(vowels.includes(normalizedText[i])){
            counter++;
        }
    }
    return counter;
}

const phrase2 = "Antes no programaba. Ahora si!";
const result2 = countVowels2(phrase2);
console.log(`La frase tiene ${result2} vocales`);

const phrase3 = "programming is really FUN!";
const result3 = countVowels2(phrase3);
console.log(`La frase tiene ${result3} vocales`);

const phrase4 = "Keep going, STAY FOCUSED!";
const result4 = countVowels2(phrase4);
console.log(`La frase tiene ${result4} vocales`);



/*
2.2 Un cliente necesita una función que duplique cada número en un array (multiplicar por 2), 
pero nos dice que el array original también se está modificando y no quiere eso. 

1. Identifica el bug - ¿Por qué se modifica el array original? 
-- Se modifica el original ya que duplicateNumbers modifica el parametro directamente al no trabajar con 
-- una copia. A pesar de que la funcion se asigna a una nueva variable, esta apunta al array original y cada numero 
-- es reasignado por el resultado de la operacion, por tanto duplicated, no es una copia, es otra referencia.

2. Explica el concepto - ¿Qué significa "pasar por referencia"? 
--Significa que cuando se asignan a una funcion o nuevas variables todas apuntan al mismo lugar en memoria
(se referencian) en lugar de copiarse, por tanto, cualquier modificacion afecta la fuente.

3. Arregla el código - Haz que NO modifique el original 
4. Bonus: Reescríbelo usando .map()

*/

//1ra version:
console.log("EJERCICIO 2");

function duplicateNumbers(numbers) {
    for(let i = 0; i < numbers.length; i++){
        numbers[i] = numbers[i] * 2
    }
    return numbers
}

const original = [1, 2, 3, 4, 5];
const duplicated = duplicateNumbers(original)

console.log("Original:", original);
console.log("Duplicated:", duplicated);


//Codigo sin bug usando un nuevo array dentro de la funcion:

function duplicateNumbers2(numbers){
    const duplicated = [];
    for(let i = 0; i < numbers.length; i++){
        duplicated.push(numbers[i] * 2);
    }
    return duplicated;
}

const original2 = [6, 7, 8, 9, 10];
const duplicated2 = duplicateNumbers2(original2);

console.log("Original 2:", original2);
console.log("Duplicated 2:", duplicated2);

// Codigo sin bug usando map:

const duplicated3 = original2.map(num => num * 2);
console.log("Original 3:", original2);
console.log("Duplicated 3", duplicated3);

