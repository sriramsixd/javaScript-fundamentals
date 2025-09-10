/* Variables */

// const { name } = require("browser-sync");

// var a = 10;
// var b = 20;
// console.log("Sum:", a + b);

/* var, let, const */

// {
//     let a = 10;
// }

// console.log(a); a is error bec let can be accessed oly inside the brackets

// {
//     let a = 20;

//     console.log(a);
// }

// console.log(a);

// {
//     const a = 70;
//     console.log(a);

// }

// console.log(a); we can access const inside the brackets.

// {
//     var Price = 11;
//     var Product = "iphone";
//     var Tax = 5;
// }

// console.log(Product);

// var total = Price + Tax

// console.log(total);

// {
//     var FruitName = "Oranges"
//     var count = 5;
//     var Price = 25;
//     var total = count * Price;
// }

// console.log(FruitName + ' ' + total);

// var a = 10;
// a++
// a--
// ++a
// --a
// var b = a++
// console.log(b); // 10
// console.log(a); // 11

// var a = 10;
// a++
// a--
// ++a
// --a
// var b = ++a
// console.log(b); // 11
// console.log(a); // 11

/* Data Types */

// console.log(typeof(10));
// console.log(typeof("Apple"));

/* Functions */

// console.log('hi sriram!!!');

// var a = 10;
// var b = 20;

// function addition() {
//     console.log('Total =' + ' ' + (a + b));
// }

// addition()

// function add(){
//     var sum = a + b;
//     console.log('The addition of ' + a + ' and ' + b + ' is: ' + sum);
// }

// add();

// var factor = 'Kamal'
// var fplayer = 'Sachein'
// var fmovie = 'Anbe Sivam'

// function favourite() 
// {
//     console.log('Favourite Actor: ' + factor);
//     console.log('Favourite Player: ' + fplayer);
//     console.log('Favourite Movie: ' + fmovie);
// }

// favourite();

// function add(a,b)
// {
//     console.log(a+b);
// }

// add(10,20); //30

// function area(l,b)
// {
//     console.log("Area is: "+l*b);
// }

// area(2,4) // 8

// function myName()
// {
//     return "Sriram Subramanian"
// }

// var a = myName()

// console.log(a);

// function add(a,b)
// {
//     return a+b
// }

// var addition = add(10,10)

// console.log(addition); //20


// var rain = true

// if (rain) {
//     console.log('Take an Umbrella');
// } else {
//     console.log('Enjoy the sunshine');
// }

// var homework = false

// if (homework) {
//     console.log('Great Job');
// } else {
//     console.log('Finish your homework before playing');
// }

// var cookies = true

// if (cookies) {
//     console.log('Would you like a cookie');
// } else {
//     console.log('Time to bake more cookies');
// }

// var brush = false

// if (brush) {
//     console.log('Your teeth are clean');
// } else {
//     console.log('Go brush your teeth now');
// }

// var birthday = true

// if (birthday) {
//     console.log('Happy Birthday! Enjoy your special day!');
// } else {
//     console.log('Have a great day');
// }

// console.log(false && true && true);
// console.log(false || true || true);
// console.log(!false); // true
// console.log(!true); // false

// var color = 'green'

// if (color == 'red') 
// {
//     console.log('stop');
// } 

// if (color == 'yellow') 
// {
//     console.log('Get Ready');
// } 

// if (color == 'green') 
// {
//     console.log('Go');
// } 

// var season = 'winter'

// if (season == 'spring') 
// {
//     console.log('Enjoy the blooming flowers');
// }

// if (season == 'summer') 
// {
//     console.log('Have fun in the sun');
// }

// if (season == 'autumn') 
// {
//     console.log('Admire the colorful leaves');
// }

// if (season == 'winter') 
// {
//     console.log('Bundle up and stay warm');
// }

// var score = 90

// if (score <= 50) 
// {
//     console.log('You need to improve');
// }

// else if (score > 50 && score <= 70)
// {
//     console.log('Good Job');
// }

// else if (score > 70)
// {
//     console.log('Excellent Performance');
// }

/* Wrong Solution */

// var vowel = 'z'

// if (vowel = 'a' || 'e' || 'i' || 'o' || 'u')
// {
//     console.log("It's a vowel");
// } else 
// {
//     console.log("It's a consonant");
// }

/* Correct Solution */

// var vowel = 'z';

// if (vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u') {
//     console.log("It's a vowel");
// } else {
//     console.log("It's a consonant");
// }

// var vowel = 'a';

// if (['a', 'e', 'i', 'o', 'u'].includes(vowel)) {
//     console.log("It's a vowel");
// } else {
//     console.log("It's a consonant");
// }







































