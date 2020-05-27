// FizzBuzz
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz

// stampiamo i numeri fino a 100

// (     appunti       )

// var x = 1;
// for (i = 1; i <= 100; i++) {

//     // stampo le iterazioni del ciclo
//     var x = console.log(i)
//     var y;

//     y = 10 % 5 == 0;
//     console.log(y);

//     y = 9 % 3 == 0;
//     console.log(y);

//     if (x % 3 == 0) {
//         x == 'fizz';
//     }
//     console.log(x);

// }

//  (     fine appunti          )

// var numero;
// for (i = 1; i <= 100; i++) {
//     var numero = console.log(i);

//     if ()


// }

// (numero % 3 == 0) && (numero % 5 == 0))

var arrayCento = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

for (i = 0; i < arrayCento.length; i++  ) {
    
    var numero = arrayCento[i];

    if ((numero % 3 == 0) && (numero % 5 == 0)) {
        numero = 'FizzBuzz';
    }
    
    else if (numero % 5 == 0) {
        numero = 'Buzz';
    }

    else if (numero % 3 == 0) {
        numero = 'Fizz';
    } 

    console.log(numero);
}

// var numero = 99;
// var numero = 100;
// var numero = 43;

// if (numero % 3 == 0) {
//     numero = 'fizz';
//     console.log(numero);

//     // se un numero è divisibile per 5 scrivi buzz
// } else if (numero % 5 == 0) {
//     numero = 'buzz';
//     console.log(numero);

//     // altrimenti scrivi il numero
// } else {
//     (console.log(numero));
// }