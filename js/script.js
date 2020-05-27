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



//  se un numero è divisibile per 3, dando resto zero
//  scrivi la parola fizz

var numero = 3;

if ( numero % 3 == 0) {
    numero = 'fizz';
    console.log(numero);
}

// se un numero è divisibile per 5 scrivi buzz


// altrimenti scrivi il numero

