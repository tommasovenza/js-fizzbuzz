// FizzBuzz
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz



// stampiamo i numeri fino a 100
var arrayCento = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1617, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

for (i = 0; i < arrayCento.length; i++  ) {
    
    var numero = arrayCento[i];

    // se è divisibile per 3 e per 5 scrivi FizzBuzz
    if ((numero % 3 == 0) && (numero % 5 == 0)) {
        numero = 'FizzBuzz';
    }
    // se è divisibile per 5 scrivi buzz
    else if (numero % 5 == 0) {
        numero = 'Buzz';
    }
    // se è divisibile per 3 scrivi
    else if (numero % 3 == 0) {
        numero = 'Fizz';
    } 

    console.log(numero);
}

