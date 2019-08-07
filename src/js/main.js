 "use strict";

// // // service worker registration - remove if you're not going to use it

 if ('serviceWorker' in navigator) {
   window.addEventListener('load', function() {
     navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
       // Registration was successful
       console.log('ServiceWorker registration successful with scope: ', registration.scope);
     }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


// // 1. cwiczenie
// // po kliklnieciu w button zmieni sie tytul w headerze
// //

// const button = document.querySelector('.header__button--js');
// console.log(button);

// // I sposob na wypisanie czegos w konsoli
// button.addEventListener('click', handleClick);

// // II sposob na wypisanie czegos w konsoli (fat arrow)
// button.addEventListener('click', () => {
//     console.log('hej funkcja fat arrow');
// });
// function handleClick() {
//     console.log('hej');
// }

// // III sposob na wypisanie czegos - z parametrem domyslnym (e)
// // nie musze wypisywac (e), bo jest to domyslne => ()
// button.addEventListener('click', (e) => {
//     //wywoluje (e) i tam sa parametry
//     console.log(e);
//     console.log('hej funkcja fat arrow z parametrem e');
// });

// // 2. cwiczenie
// // podmiana header__title--js + dodanie klasy zmieniajacej kolor na czerwony
// //
// button.addEventListener('click', (e) => {
//     const header = document.querySelector('.header__title--js');
//     header.innerHTML = 'dobrze Cię widzieć na mojej stronie :)';
//     header.classList.add('header__title--red');
// });

// // 3. cwiczenie
// // przycisk zmieniający treść w sekcji JS
// //
// const buttonChange = document.querySelector('.article__button--js-change');
// buttonChange.addEventListener('click', (e) => {
//     const changing = document.querySelector('.article__content--js-change');
//     changing.innerHTML = 'zmieniona tresc';
// });

// // 4. cwiczenie
// // przycisk dodający klasę w sekcji JS - klasa zmieni kolor czcionki
// //
// const buttonAdd = document.querySelector('.article__button--js-add');
// buttonAdd.addEventListener('click', (e) => {
//     const adding = document.querySelector('.article__content--js-add');
//     adding.classList.add('header__title--red');
// });

// // 5. cwiczenie
// // przycisk żonglujący klasą w sekcji JS - klasa się przełącza
// //
// const buttonToggle = document.querySelector('.article__button--js-toggle');
// buttonToggle.addEventListener('click', (e) => {
//     const toggling = document.querySelector('.article__content--js-toggle');
//     toggling.classList.toggle('header__title--red');
// });

// //
// // hamburger menu - dodawanie odejmowanie klasy odpowiedzialnej za ikonke hamburgera
// //
// const navigationSwitcher = document.querySelector('.navigation__switcher--js');
// navigationSwitcher.addEventListener('click', (e) => {
//     const navigationList = document.querySelector('.navigation__list--js');
//     navigationList.classList.toggle('navigation__list--visible');
// });

// //
// // Przykladowy obiekt i cwiczenia na nim
// //

// const deathStar = {
//     diameter: 120000,
//     fire: (target) => {
//         console.log(`${target} destroyed`)
//     },
//     isOperating: true,
//     levels: 357,
//     name: 'Death Star',
//     population: 10000,
//     crew: {
//         role: 'captain',
//         name: 'deathstar captain'
//     }
// }

// console.log(deathStar.name);
// console.log(deathStar.level);
// deathStar.fire('Aldebaran');

// //jeżeli wynik isOperating = true, to wtedy wypisz console.log
// if (deathStar.isOperating) {console.log('działa')};

// deathStar.isOperating = false;
// if (deathStar.isOperating) {console.log('działa')
// }
// else {console.log('nie dziala');
// };

// //
// // tablice
// //

// // definiowanie tablicy stringów z 3 elementami
// const hardware=['keyboard', 'mouse', 'tower'];

// // definiowanie tablicy obiektów
// const news = [
//     {title: 'wtf',
//      content: 'lorem ipsum dolor'
//     },
//     {title: 'co ten frontend',
//     content: 'lorem ipsum dolor',
//     link: 'https://cotenfrontend.pl'
//     }
// ]

// //
// // pętle
// //

// // pętla for
// for (let i=0; i<3; i++) {
//     console.log(`${i+1} wykonań pętli`);
// }

// // wypisanie elementów tablicy dzięki pętli for

// // const foundationBooks = ['preludium fundacji', 'narodziny fundacji', 'fundacja'];
// // for (j = 0; j < foundationBooks.length; i++) {
// //     console.log(`Na miejscu ${j} znajduje się element: ${foundationBooks[j]}`);
// // };

// for (k=0; k < cookBooks.length; k++) {
//     console.log(`element o indeksie ${k} ma treść ${cookBooks[k]}`);
// };

// pętla while

// let whileA = 3;
// while (whileA < 9) {
//     console.log(whileA);
//     whileA = whileA+3;
// }
// console.log(whileA);

// // pętla do-while
// let doWhileA = 9;
// do {
//     console.log(doWhileA);
//     n=n+3;
// }   while (doWhileA < 9);
// console.log(doWhileA);

// //pętla for in
// const personForIn = {
//     name: 'Rafal',
//     age: 31,
// }
// for (let propertyName in personForIn) {
//     console.log(`${propertyName}: ${personForIn[propertyName]}`);
// }

// //pętla for of - prostsza of for do wypisania elementów tablicy
// const loopForOf = ['element1', 'element2', 'element3'];
// for (let element of loopForOf) {
//     console.log(element);
// }

//
// przechowywanie danych
//

// //cookies
// //wstawianie pary klucz - wartość do cookies
// document.cookie = "testoweCiacho = jakaśWartość";
// console.log(document.cookie);
// //wstawianie drugiej pary klucz - wartość. Nie nadpisuje się a dodaje
// document.cookie = "testoweCiacho = drugieCookies";
// console.log(document.cookie);


// // local storage
// localStorage.setItem('name', 'wartość pierwsza');
// console.log(localStorage);
// localStorage.setItem('name', 'wartość druga, dopisuje się a nie nadpisuje');
// console.log(localStorage);
// localStorage.removeItem('name');
// console.log(localStorage);
// localStorage.setItem('name', 'wartość trzecia');
// console.log(localStorage);

// //deklaracja przykładowego obiektu do wstawiania go do Local Storage
// const book = {
//     name: 'book of contamination',
//     size: '47 x 44',
//     year: 1999
// };

// //próba wstawienia obiektu do localStorage
// //nie uda się - w localStorage będzie [object object]
// localStorage.setItem('book', book);
// console.log(JSON.stringify(book));

// //używam JSON.stringify aby dostać ciąg stringów JSONowy
// const bookString = JSON.stringify(book);
// console.log(bookString);
// //wrzucam dane w formacie JSONowym do localStorage - teraz OK
// localStorage.setItem('book', bookString);

// //pobieranie klucza i wartosci z localStorage
// //nie ma problemu - pojedyncza wartość pobrana
// console.log(localStorage.getItem('name')); //wartość trzecia

// //pobieranie klucza i wartości obiektu z localStorage
// //pobrany ciąg znaków w formacie JSONa - taki jak tam był
// console.log(localStorage.getItem('book'));

// //zamiana stringa JSONowego na obiekt
// const bookObject = localStorage.getItem('book');
// console.log(bookObject);
// const newBookObject = JSON.parse(bookObject);
// console.log(newBookObject);

// wstawianie danych do inputa odpornych na odświeżanie
// dzięki trzymaniu tego, co wpisuję w Local Storage

// // 1. Pobieram inputa
// const focusInput = document.querySelector('.form__focus--js');
// // 2. podnoszę klawisz czyli akcja 'keyup'
// // do Local Storage ma się zapisać wartość z inputa
// // console.log - aby zobaczyć o co chodzi
// focusInput.addEventListener('keyup', (e) => {
//     console.log(e.target);
// });
// // e.target daje w wyniku cały element
// // zastosujemy więc e.target.value
// // console.log - aby zobaczyć o co chodzi
// focusInput.addEventListener('keyup', (e) => {
//     console.log(e.target.value);
// });
// // wartość zapisuję do Local Storage
// // za każdym razem jak puszcze klawisz, to wartośc => localStorage
// focusInput.addEventListener('keyup', (e) => {
//     localStorage.setItem('focusInput', e.target.value);
// });
// // wartość mamy w Local Storage, 
// // ale po wczytaniu strony nie są jeszcze pobierane
// if (localStorage.getItem('focusInput').length > 0) {
//     focusInput.value = localStorage.getItem('focusInput');
// };

// //Fetch API
// fetch('https://api.github.com/users/rafalpiekarski/repos')
// .then(resp => resp.json()) //zamienamy resp na jsona
// .then(resp => {             //podmieniony json tu już jest
//     console.log(resp)
// })
// .catch(error => {
//     console.log('error')
// })
// console.log('test 2');
// //teraz można wypisac sobie pobrane repozytoria
// const list = document.querySelector('.list--js');
// fetch('https://api.github.com/users/rafalpiekarski/repos?sort=updated&direction=asc')
// .then(resp => resp.json()) //zamienamy resp na jsona
// .then(resp => {             //podmieniony json tu już jest
//     const repos = resp;
//     for (const repo of repos) {
//         //console.log(repo); //wszystko wypisze
//         console.log(repo.name); //tylko nazwy repozytoriow
//         console.log(repo.html_url);
//         console.log(`repozytorium o nazwie: ${repo.name} ma adres: ${repo.html_url}`);
//         list.innerHTML += `<li>${repo.name} <a href="${repo.html_url}"> ${repo.html_url}</a></li>`;
//     }
// })
// .catch(error => {
//     console.log('error')
// })

//
//Destrukturyzacja
//

const person = {
    name: 'Rafal', age: 31
}
//mam obiekt person, do ktorego elementow chce sie odwołać.
console.log(`${person.name} ${person.age}`);
//Odwoływanie się jest jednak długie. Zastosuję więc zmienne.
const name = person.name;
const age = person.age;
console.log(`${name} ${age}`);
//Można jednak użyć desktrukturyzacji
const {name, age} = person;
console.log(`${name} ${age}`);
//Można stosować na tablicach
const food = ['pizza', 'burger', 'wrap'];
console.log(food);
const [firstFood, secondFood] = food;
console.log(firstFood);
console.log(secondFood);

//
//Spread operator - do łączenia
//
const contactData = {
    email: 'test@email.com',
    phone: 55553525
};
const contactAddress = {
    zipCode: '15-555',
    postCode: '435425'
};
//Chcę połączyć te dwa obiekty
const personData = {
    ...contactData,
    ...contactAddress
};