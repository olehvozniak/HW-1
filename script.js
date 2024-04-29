/* 1 */
// Якщо змінна більше нуля - виведіть true, менше - false
// Перевірте це на варіантах 1, 0, -3.

// let variable;
// variable = 1;
// if (variable > 0) {
//     console.log(true);
// } else if (variable < 0) {
//     console.log(false);
// }

// variable = 0;
// if (variable > 0) {
//     console.log(true);
// } else if (variable < 0) {
//     console.log(false);
// }

// variable = -3;
// if (variable > 0) {
//     console.log(true);
// } else if (variable < 0) {
//     console.log(false);
// }

/* 2 */
// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test', "qwerty", true

// let variable;
// variable = 'test';
// if (variable === 'test') {
//     console.log(true);
// }

// variable = "qwerty";
// if (variable === 'test') {
//     console.log(true);
// }

// variable = true;
// if (variable === 'test') {
//     console.log(true);
// }

/* 3 */
// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.

// let variable;
// variable = 1;
// if (variable > 10) {
//     variable = variable - 5;
// } else if (variable < 5) {
//     variable = variable + 5;
// }
// console.log(variable);

// variable = 10;
// if (variable > 10) {
//     variable = variable - 5;
// } else if (variable < 5) {
//     variable = variable + 5;
// }
// console.log(variable);

// variable = 13;
// if (variable > 10) {
//     variable = variable - 5;
// } else if (variable < 5) {
//     variable = variable + 5;
// }
// console.log(variable);

/* 4 */
//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const monthNum = Number(prompt("Enter month number"));
// let month;

// switch (monthNum) {
//     case 1:
//         month = "January";
//         break;
//     case 2:
//         month = "February";
//         break;
//     case 3:
//         month = "March";
//         break;
//     case 4:
//         month = "April";
//         break;
//     case 5:
//         month = "May";
//         break;
//     case 6:
//         month = "June";
//         break;
//     case 7:
//         month = "July";
//         break;
//     case 8:
//         month = "August";
//         break;
//     case 9:
//         month = "September";
//         break;
//     case 10:
//         month = "October";
//         break;
//     case 11:
//         month = "November";
//         break;
//     case 12:
//         month = "December";
//         break;
// }

// if (month) {
//     console.log(month);
// } else {
//     console.log("Wrong input");
// }

/* 5 */
//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// const number = Number(prompt("Input 3-digit numberber"));

// if (number && number > 99 && number < 1000) {
//     a = Math.floor(number / 100);
//     b = Math.floor((number - a * 100) / 10);
//     c = number - a * 100 - b * 10;
//     console.log(a + b + c);
// } else {
//     console.log("Wrong input");
// }
