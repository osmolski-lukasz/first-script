// plik scripts.js

/*

var a = prompt('Podaj długość boku trójkąta'),
    h = prompt('Podaj wysokość trójkąta');
alert('Pole Twojego trójkąta wynosi ' + a*h/2);
console.log('Pole Twojego trójkąta wynosi ' + a*h/2);

//alert('Ten komunikat nie wyświetli się')

*/

var a,
    b,
    value = (a * a) + (2 * a * b) - (b * b);
console.log(value);

value = value > 0 ?
    console.log('Wynik dodatni')
    : console.log('Wynik ujemny');

value = value === 0 ?
    console.log('Jest równe 0')
    : console.log('Jest różne od zera');