// Practical task: console
// 
// 1. Write a program for brewing drinks
// 
// The script takes two arguments: name and size
// 
const argv = process.argv.slice(2);
const dbDrinks = {
    'juice': 'Sok',
    'coffe': 'Kawę'
};
const drink = {};

argv.forEach(item => {
    drink[item.split('=')[0]] = item.split('=')[1];
});

console.log(`Przygotowuję ${dbDrinks[drink.name]} o pojemności ${drink.size}ml`);
