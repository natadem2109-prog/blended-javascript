// 1 - отримай body елемент і виведи його в консоль;
const bodyEl = document.body;
console.log(bodyEl);
// 2 - отримай елемент id="title" і виведи його в консоль;
const titleEl = document.getElementById("title");
console.log(titleEl);
// 3 - отримай елемент class="list" і виведи його в консоль;
const listEl = document.querySelector(".list");
console.log(listEl);
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const dataTopicEls = document.querySelectorAll("[data-topic]");
console.log(dataTopicEls);
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
console.log(dataTopicEls[0]);
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
console.log(dataTopicEls[dataTopicEls.length - 1]);
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
console.log(titleEl.nextElementSibling);
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const h3Els = document.querySelectorAll("h3");
console.log(h3Els);
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
h3Els.forEach(h3 => h3.classList.add("active"));
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const navItem = document.querySelector('[data-topic="navigation"]');
console.log(navItem);
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
navItem.style.backgroundColor = "yellow";
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const navParagraph = navItem.querySelector("p");
navParagraph.textContent = "Я змінив тут текст!";
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається
// у змінній currentTopic і виведи його в консоль;
const currentTopic = "manipulation";
const currentItem = document.querySelector(`[data-topic="${currentTopic}"]`);
console.log(currentItem);
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
currentItem.style.backgroundColor = "lightblue";
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const completedTitle = document.querySelector(".completed");
console.log(completedTitle);
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
completedTitle.closest("li").remove();
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
const newParagraph = document.createElement("p");
newParagraph.textContent = "Об'єктна модель документа (Document Object Model)";
titleEl.after(newParagraph);
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і
// помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI
// потім наповнити H3 та P і готову LI закинути у кінець списку
const newLi = document.createElement("li");
const newH3 = document.createElement("h3");
newH3.textContent = "Властивість innerHTML";
const newP = document.createElement("p");
newP.textContent =
  "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
newLi.append(newH3, newP);
listEl.append(newLi);
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
listEl.insertAdjacentHTML(
  "beforeend",
  `
  <li>
    <h3>Властивість innerHTML</h3>
    <p>
      Ще один спосіб створити DOM-елементи і помістити їх в дерево -
      це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу
    </p>
  </li>
`
);

// 20 - очисти список
listEl.innerHTML = "";

// Створіть контейнер div (з класом number-container) в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;
