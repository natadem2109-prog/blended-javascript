/*Створи дві змінні firstName і lastName.
Присвой їм своє ім'я та прізвище.
Обєднай ці два рядки в один, з пробілом між ними. Запиши результат в змінну fullName.
Виведи fullName в консоль.*/
const firstName = "Natasha";
const lastName = "Demchenko";
const fullName = firstName + " " + lastName;
console.log(fullName);

/*Створи дві змінні a і b, присвой їм якісь цілі числа.
Виконай над ними додавання, віднімання, множення і ділення.
Запиши результати в змінні sum, difference, product, quotient.
Виведи всі ці результати в консоль.*/
const a = 20;
const b = 30;
const sum = a + b;
const difference = a - b;
const product = a * b;
const quotient = a/ b;
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

/*Створи змінну radius і присвой їй деяке значення(наприклад, 5).
Використай формулу площі кола (π * r²) для обчислення площі кола з радіусом, який було встановлено.
Використовуй значення π = 3.14. Запиши результат у змінну area.
Виведи area в консоль.*/
const radius = 5;
const pi = 3.14;
const area = pi * radius ** 2;
console.log("Area:", area);

/*Створи змінну someString і присвой їй будь-який рядок.
Обчисли довжину цього рядка, використовуючи властивість .length.
Виведи довжину рядка в консоль.
const someString = "welcome my room"
const someStringLength = someString.length;
console.log(someStringLength);*/

/*Створи змінну someString і присвой їй будь-який рядок.
Створи змінну firstLetter і присвой їй першу літеру рядка someString.
Створи змінну lastLetter і присвой їй останню літеру рядка someString.*/
const someString = "welcome my room"
const firstLetter = someString[0];
const lastLetter = someString [someString.length - 1];
console.log("First letter:", firstLetter); 
console.log("Last letter:", lastLetter); 

/*Створи дві змінних str1 та str2.
Отримай з кожної змінної останню літеру
Створи третю змінну де обєднай попередні літери
Приклад: для рядків "HELLO" та "WORLD" результатом буде рядок "OD"*/
const str1 = "HELLO";
const str2 = "WORLD";
const combined = str1[str1.length - 1] + str2[str2.length - 1];
console.log(combined);

/*Створи змінну userValue та запиши до неї будь-яке число.

Створи нову змінну до якої потрібно записати результат математичної операції а саме:
userValue помножити на число 5 у степені (кількість цифр у змінній userValue).

Приклади:
для числа 1 = 1 * 5^1 = 5;
для числа 2 = 2 * 5^1 = 10;
для числа 12 = 12 * 5^2 = 300;
для числа 512 = 512 * 5^3 = 64000;
*/
const userValue = 512;
const digitsCount = userValue.toString().length;
const result = userValue * 5 ** digitsCount;
console.log(result);

/*Виведіть на екран загальну кількість яблок і винограду. Різницю яблока і винограду теж виведіть у консоль.

const apples = 47;
const grapes = 135;
const total = ;
console.log(total)
const diff = ;
console.log(diff)
*/
const apples = 47;
const grapes = 135;
const total = apples+grapes;
console.log(total)
const diff = grapes-apples;
console.log(diff);

/*Замінити вираз перевизначення комбінованим оператором `+=`.


let students = 100;
students = students + 50;
console.log(students);*/
let students = 100;
students += 50;
console.log(students);

/*Склади фразу за допомогою шаблонних рядків `A has B bots in stock`, де A, B -
змінні вставлені у рядок.


const companyName = "Cyberdyne Systems";
const repairBots = 150;
const defenceBots = 50;
const message = ``;
console.log(message); // "Cyberdyne Systems has 200 bots in stock"*/
const companyName = "Cyberdyne Systems";
const repairBots = 150;
const defenceBots = 50;
const message = `${companyName} has ${repairBots} repair bots and ${defenceBots} defence bots.`;
console.log(message);