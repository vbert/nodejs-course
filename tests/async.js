/*
// Ponieważ node nie posiada funkcji fetch (przeglądarki ją mają) 
// należy zasymulować tą funkcję

const fetch = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({
            user: 'Jon',
            age: 28
        }), 1000); // 1000 => timeuot = 1 sek
    });
}

// lub użyć biblioteki z npm
*/

// const fetch = require('node-fetch'); // "type": "commonjs",
import fetch from 'node-fetch'; // "type": "module",

/*
const data = fetch('https://jsonplaceholder.typicode.com/todos/1');
console.log(data);

// powyższe zwraca: Promise { <pending> } 
// - promis jest w trakcie pracy (zostało zrzucone na bok 
// i jeszcze się nie skończyło)
// Aby pomyślnie wykonsolować zwrócony wynik należy:

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => console.log(res));

// .then - tzn. później chciałbym wykonsolować odpowiedź
// Nowszy zapis przez await:
// await => oznacza: poczekaj aż się wykona, ale aby zadziałało
// musi być użyte w funkcji asynchronicznej (async)
*/

const asyncFunc = async () => {
    let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    data = await data.json();
    console.log(data);
}
asyncFunc();
