!function(n){var c={};function l(e){if(c[e])return c[e].exports;var o=c[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=n,l.c=c,l.d=function(n,c,e){l.o(n,c)||Object.defineProperty(n,c,{enumerable:!0,get:e})},l.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},l.t=function(n,c){if(1&c&&(n=l(n)),8&c)return n;if(4&c&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&c&&"string"!=typeof n)for(var o in n)l.d(e,o,function(c){return n[c]}.bind(null,o));return e},l.n=function(n){var c=n&&n.__esModule?function(){return n.default}:function(){return n};return l.d(c,"a",c),c},l.o=function(n,c){return Object.prototype.hasOwnProperty.call(n,c)},l.p="",l(l.s=0)}([function(module,exports,__webpack_require__){"use strict";eval(" \r\n\r\n// // // service worker registration - remove if you're not going to use it\r\n\r\n if ('serviceWorker' in navigator) {\r\n   window.addEventListener('load', function() {\r\n     navigator.serviceWorker.register('serviceworker.js').then(function(registration) {\r\n       // Registration was successful\r\n       console.log('ServiceWorker registration successful with scope: ', registration.scope);\r\n     }, function(err) {\r\n      // registration failed :(\r\n      console.log('ServiceWorker registration failed: ', err);\r\n    });\r\n  });\r\n}\r\n\r\n// place your code below\r\n\r\n\r\n// // 1. cwiczenie\r\n// // po kliklnieciu w button zmieni sie tytul w headerze\r\n// //\r\n\r\n// const button = document.querySelector('.header__button--js');\r\n// console.log(button);\r\n\r\n// // I sposob na wypisanie czegos w konsoli\r\n// button.addEventListener('click', handleClick);\r\n\r\n// // II sposob na wypisanie czegos w konsoli (fat arrow)\r\n// button.addEventListener('click', () => {\r\n//     console.log('hej funkcja fat arrow');\r\n// });\r\n// function handleClick() {\r\n//     console.log('hej');\r\n// }\r\n\r\n// // III sposob na wypisanie czegos - z parametrem domyslnym (e)\r\n// // nie musze wypisywac (e), bo jest to domyslne => ()\r\n// button.addEventListener('click', (e) => {\r\n//     //wywoluje (e) i tam sa parametry\r\n//     console.log(e);\r\n//     console.log('hej funkcja fat arrow z parametrem e');\r\n// });\r\n\r\n// // 2. cwiczenie\r\n// // podmiana header__title--js + dodanie klasy zmieniajacej kolor na czerwony\r\n// //\r\n// button.addEventListener('click', (e) => {\r\n//     const header = document.querySelector('.header__title--js');\r\n//     header.innerHTML = 'dobrze Cię widzieć na mojej stronie :)';\r\n//     header.classList.add('header__title--red');\r\n// });\r\n\r\n// // 3. cwiczenie\r\n// // przycisk zmieniający treść w sekcji JS\r\n// //\r\n// const buttonChange = document.querySelector('.article__button--js-change');\r\n// buttonChange.addEventListener('click', (e) => {\r\n//     const changing = document.querySelector('.article__content--js-change');\r\n//     changing.innerHTML = 'zmieniona tresc';\r\n// });\r\n\r\n// // 4. cwiczenie\r\n// // przycisk dodający klasę w sekcji JS - klasa zmieni kolor czcionki\r\n// //\r\n// const buttonAdd = document.querySelector('.article__button--js-add');\r\n// buttonAdd.addEventListener('click', (e) => {\r\n//     const adding = document.querySelector('.article__content--js-add');\r\n//     adding.classList.add('header__title--red');\r\n// });\r\n\r\n// // 5. cwiczenie\r\n// // przycisk żonglujący klasą w sekcji JS - klasa się przełącza\r\n// //\r\n// const buttonToggle = document.querySelector('.article__button--js-toggle');\r\n// buttonToggle.addEventListener('click', (e) => {\r\n//     const toggling = document.querySelector('.article__content--js-toggle');\r\n//     toggling.classList.toggle('header__title--red');\r\n// });\r\n\r\n// //\r\n// // hamburger menu - dodawanie odejmowanie klasy odpowiedzialnej za ikonke hamburgera\r\n// //\r\n// const navigationSwitcher = document.querySelector('.navigation__switcher--js');\r\n// navigationSwitcher.addEventListener('click', (e) => {\r\n//     const navigationList = document.querySelector('.navigation__list--js');\r\n//     navigationList.classList.toggle('navigation__list--visible');\r\n// });\r\n\r\n// //\r\n// // Przykladowy obiekt i cwiczenia na nim\r\n// //\r\n\r\n// const deathStar = {\r\n//     diameter: 120000,\r\n//     fire: (target) => {\r\n//         console.log(`${target} destroyed`)\r\n//     },\r\n//     isOperating: true,\r\n//     levels: 357,\r\n//     name: 'Death Star',\r\n//     population: 10000,\r\n//     crew: {\r\n//         role: 'captain',\r\n//         name: 'deathstar captain'\r\n//     }\r\n// }\r\n\r\n// console.log(deathStar.name);\r\n// console.log(deathStar.level);\r\n// deathStar.fire('Aldebaran');\r\n\r\n// //jeżeli wynik isOperating = true, to wtedy wypisz console.log\r\n// if (deathStar.isOperating) {console.log('działa')};\r\n\r\n// deathStar.isOperating = false;\r\n// if (deathStar.isOperating) {console.log('działa')\r\n// }\r\n// else {console.log('nie dziala');\r\n// };\r\n\r\n// //\r\n// // tablice\r\n// //\r\n\r\n// // definiowanie tablicy stringów z 3 elementami\r\n// const hardware=['keyboard', 'mouse', 'tower'];\r\n\r\n// // definiowanie tablicy obiektów\r\n// const news = [\r\n//     {title: 'wtf',\r\n//      content: 'lorem ipsum dolor'\r\n//     },\r\n//     {title: 'co ten frontend',\r\n//     content: 'lorem ipsum dolor',\r\n//     link: 'https://cotenfrontend.pl'\r\n//     }\r\n// ]\r\n\r\n// //\r\n// // pętle\r\n// //\r\n\r\n// // pętla for\r\n// for (let i=0; i<3; i++) {\r\n//     console.log(`${i+1} wykonań pętli`);\r\n// }\r\n\r\n// // wypisanie elementów tablicy dzięki pętli for\r\n\r\n// // const foundationBooks = ['preludium fundacji', 'narodziny fundacji', 'fundacja'];\r\n// // for (j = 0; j < foundationBooks.length; i++) {\r\n// //     console.log(`Na miejscu ${j} znajduje się element: ${foundationBooks[j]}`);\r\n// // };\r\n\r\n// for (k=0; k < cookBooks.length; k++) {\r\n//     console.log(`element o indeksie ${k} ma treść ${cookBooks[k]}`);\r\n// };\r\n\r\n// pętla while\r\n\r\n// let whileA = 3;\r\n// while (whileA < 9) {\r\n//     console.log(whileA);\r\n//     whileA = whileA+3;\r\n// }\r\n// console.log(whileA);\r\n\r\n// // pętla do-while\r\n// let doWhileA = 9;\r\n// do {\r\n//     console.log(doWhileA);\r\n//     n=n+3;\r\n// }   while (doWhileA < 9);\r\n// console.log(doWhileA);\r\n\r\n// //pętla for in\r\n// const personForIn = {\r\n//     name: 'Rafal',\r\n//     age: 31,\r\n// }\r\n// for (let propertyName in personForIn) {\r\n//     console.log(`${propertyName}: ${personForIn[propertyName]}`);\r\n// }\r\n\r\n// //pętla for of - prostsza of for do wypisania elementów tablicy\r\n// const loopForOf = ['element1', 'element2', 'element3'];\r\n// for (let element of loopForOf) {\r\n//     console.log(element);\r\n// }\r\n\r\n//\r\n// przechowywanie danych\r\n//\r\n\r\n// //cookies\r\n// //wstawianie pary klucz - wartość do cookies\r\n// document.cookie = \"testoweCiacho = jakaśWartość\";\r\n// console.log(document.cookie);\r\n// //wstawianie drugiej pary klucz - wartość. Nie nadpisuje się a dodaje\r\n// document.cookie = \"testoweCiacho = drugieCookies\";\r\n// console.log(document.cookie);\r\n\r\n\r\n// // local storage\r\n// localStorage.setItem('name', 'wartość pierwsza');\r\n// console.log(localStorage);\r\n// localStorage.setItem('name', 'wartość druga, dopisuje się a nie nadpisuje');\r\n// console.log(localStorage);\r\n// localStorage.removeItem('name');\r\n// console.log(localStorage);\r\n// localStorage.setItem('name', 'wartość trzecia');\r\n// console.log(localStorage);\r\n\r\n// //deklaracja przykładowego obiektu do wstawiania go do Local Storage\r\n// const book = {\r\n//     name: 'book of contamination',\r\n//     size: '47 x 44',\r\n//     year: 1999\r\n// };\r\n\r\n// //próba wstawienia obiektu do localStorage\r\n// //nie uda się - w localStorage będzie [object object]\r\n// localStorage.setItem('book', book);\r\n// console.log(JSON.stringify(book));\r\n\r\n// //używam JSON.stringify aby dostać ciąg stringów JSONowy\r\n// const bookString = JSON.stringify(book);\r\n// console.log(bookString);\r\n// //wrzucam dane w formacie JSONowym do localStorage - teraz OK\r\n// localStorage.setItem('book', bookString);\r\n\r\n// //pobieranie klucza i wartosci z localStorage\r\n// //nie ma problemu - pojedyncza wartość pobrana\r\n// console.log(localStorage.getItem('name')); //wartość trzecia\r\n\r\n// //pobieranie klucza i wartości obiektu z localStorage\r\n// //pobrany ciąg znaków w formacie JSONa - taki jak tam był\r\n// console.log(localStorage.getItem('book'));\r\n\r\n// //zamiana stringa JSONowego na obiekt\r\n// const bookObject = localStorage.getItem('book');\r\n// console.log(bookObject);\r\n// const newBookObject = JSON.parse(bookObject);\r\n// console.log(newBookObject);\r\n\r\n// wstawianie danych do inputa odpornych na odświeżanie\r\n// dzięki trzymaniu tego, co wpisuję w Local Storage\r\n\r\n// // 1. Pobieram inputa\r\n// const focusInput = document.querySelector('.form__focus--js');\r\n// // 2. podnoszę klawisz czyli akcja 'keyup'\r\n// // do Local Storage ma się zapisać wartość z inputa\r\n// // console.log - aby zobaczyć o co chodzi\r\n// focusInput.addEventListener('keyup', (e) => {\r\n//     console.log(e.target);\r\n// });\r\n// // e.target daje w wyniku cały element\r\n// // zastosujemy więc e.target.value\r\n// // console.log - aby zobaczyć o co chodzi\r\n// focusInput.addEventListener('keyup', (e) => {\r\n//     console.log(e.target.value);\r\n// });\r\n// // wartość zapisuję do Local Storage\r\n// // za każdym razem jak puszcze klawisz, to wartośc => localStorage\r\n// focusInput.addEventListener('keyup', (e) => {\r\n//     localStorage.setItem('focusInput', e.target.value);\r\n// });\r\n// // wartość mamy w Local Storage, \r\n// // ale po wczytaniu strony nie są jeszcze pobierane\r\n// if (localStorage.getItem('focusInput').length > 0) {\r\n//     focusInput.value = localStorage.getItem('focusInput');\r\n// };\r\n\r\n// //Fetch API\r\n// fetch('https://api.github.com/users/rafalpiekarski/repos')\r\n// .then(resp => resp.json()) //zamienamy resp na jsona\r\n// .then(resp => {             //podmieniony json tu już jest\r\n//     console.log(resp)\r\n// })\r\n// .catch(error => {\r\n//     console.log('error')\r\n// })\r\n// console.log('test 2');\r\n// //teraz można wypisac sobie pobrane repozytoria\r\n// const list = document.querySelector('.list--js');\r\n// fetch('https://api.github.com/users/rafalpiekarski/repos?sort=updated&direction=asc')\r\n// .then(resp => resp.json()) //zamienamy resp na jsona\r\n// .then(resp => {             //podmieniony json tu już jest\r\n//     const repos = resp;\r\n//     for (const repo of repos) {\r\n//         //console.log(repo); //wszystko wypisze\r\n//         console.log(repo.name); //tylko nazwy repozytoriow\r\n//         console.log(repo.html_url);\r\n//         console.log(`repozytorium o nazwie: ${repo.name} ma adres: ${repo.html_url}`);\r\n//         list.innerHTML += `<li>${repo.name} <a href=\"${repo.html_url}\"> ${repo.html_url}</a></li>`;\r\n//     }\r\n// })\r\n// .catch(error => {\r\n//     console.log('error')\r\n// })\r\n\r\n//\r\n//Destrukturyzacja\r\n//\r\n\r\n// const person = {\r\n//     name: 'Rafal', age: 31\r\n// }\r\n// //mam obiekt person, do ktorego elementow chce sie odwołać.\r\n// console.log(`${person.name} ${person.age}`);\r\n// //Odwoływanie się jest jednak długie. Zastosuję więc zmienne.\r\n// const name = person.name;\r\n// const age = person.age;\r\n// console.log(`${name} ${age}`);\r\n// //Można jednak użyć desktrukturyzacji\r\n// const {name, age} = person;\r\n// console.log(`${name} ${age}`);\r\n// //Można stosować na tablicach\r\n// const food = ['pizza', 'burger', 'wrap'];\r\n// console.log(food);\r\n// const [firstFood, secondFood] = food;\r\n// console.log(firstFood);\r\n// console.log(secondFood);\r\n\r\n// //\r\n// //Spread operator - do łączenia\r\n// //\r\n// const contactData = {\r\n//     email: 'test@email.com',\r\n//     phone: 55553525\r\n// };\r\n// const contactAddress = {\r\n//     zipCode: '15-555',\r\n//     postCode: '435425'\r\n// };\r\n// //Chcę połączyć te dwa obiekty\r\n// const personData = {\r\n//     ...contactData,\r\n//     ...contactAddress\r\n// };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLENBQWM7O0FBRWQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE9BQU87QUFDakMsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0I7O0FBRS9CO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1IsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixLQUFLO0FBQ3JCLHNCQUFzQixJQUFJO0FBQzFCOztBQUVBOztBQUVBO0FBQ0EsaUJBQWlCLDRCQUE0QjtBQUM3QyxvQ0FBb0MsRUFBRSx5QkFBeUIsbUJBQW1CO0FBQ2xGOztBQUVBLFlBQVksc0JBQXNCO0FBQ2xDLHlDQUF5QyxFQUFFLFlBQVksYUFBYTtBQUNwRTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsYUFBYSxJQUFJLDBCQUEwQjtBQUNqRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkM7O0FBRTdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLCtCQUErQjtBQUMvQixrQ0FBa0M7QUFDbEM7QUFDQSxpREFBaUQsVUFBVSxhQUFhLGNBQWM7QUFDdEYsb0NBQW9DLFVBQVUsWUFBWSxjQUFjLEtBQUssY0FBYztBQUMzRjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWSxHQUFHLFdBQVc7QUFDNUM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLEtBQUssR0FBRyxJQUFJO0FBQzlCO0FBQ0EsVUFBVSxVQUFVO0FBQ3BCLGtCQUFrQixLQUFLLEdBQUcsSUFBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIC8vIC8vIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiAtIHJlbW92ZSBpZiB5b3UncmUgbm90IGdvaW5nIHRvIHVzZSBpdFxyXG5cclxuIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XHJcbiAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3NlcnZpY2V3b3JrZXIuanMnKS50aGVuKGZ1bmN0aW9uKHJlZ2lzdHJhdGlvbikge1xyXG4gICAgICAgLy8gUmVnaXN0cmF0aW9uIHdhcyBzdWNjZXNzZnVsXHJcbiAgICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCB3aXRoIHNjb3BlOiAnLCByZWdpc3RyYXRpb24uc2NvcGUpO1xyXG4gICAgIH0sIGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAvLyByZWdpc3RyYXRpb24gZmFpbGVkIDooXHJcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6ICcsIGVycik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gcGxhY2UgeW91ciBjb2RlIGJlbG93XHJcblxyXG5cclxuLy8gLy8gMS4gY3dpY3plbmllXHJcbi8vIC8vIHBvIGtsaWtsbmllY2l1IHcgYnV0dG9uIHptaWVuaSBzaWUgdHl0dWwgdyBoZWFkZXJ6ZVxyXG4vLyAvL1xyXG5cclxuLy8gY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYnV0dG9uLS1qcycpO1xyXG4vLyBjb25zb2xlLmxvZyhidXR0b24pO1xyXG5cclxuLy8gLy8gSSBzcG9zb2IgbmEgd3lwaXNhbmllIGN6ZWdvcyB3IGtvbnNvbGlcclxuLy8gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xyXG5cclxuLy8gLy8gSUkgc3Bvc29iIG5hIHd5cGlzYW5pZSBjemVnb3MgdyBrb25zb2xpIChmYXQgYXJyb3cpXHJcbi8vIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuLy8gICAgIGNvbnNvbGUubG9nKCdoZWogZnVua2NqYSBmYXQgYXJyb3cnKTtcclxuLy8gfSk7XHJcbi8vIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xyXG4vLyAgICAgY29uc29sZS5sb2coJ2hlaicpO1xyXG4vLyB9XHJcblxyXG4vLyAvLyBJSUkgc3Bvc29iIG5hIHd5cGlzYW5pZSBjemVnb3MgLSB6IHBhcmFtZXRyZW0gZG9teXNsbnltIChlKVxyXG4vLyAvLyBuaWUgbXVzemUgd3lwaXN5d2FjIChlKSwgYm8gamVzdCB0byBkb215c2xuZSA9PiAoKVxyXG4vLyBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4vLyAgICAgLy93eXdvbHVqZSAoZSkgaSB0YW0gc2EgcGFyYW1ldHJ5XHJcbi8vICAgICBjb25zb2xlLmxvZyhlKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKCdoZWogZnVua2NqYSBmYXQgYXJyb3cgeiBwYXJhbWV0cmVtIGUnKTtcclxuLy8gfSk7XHJcblxyXG4vLyAvLyAyLiBjd2ljemVuaWVcclxuLy8gLy8gcG9kbWlhbmEgaGVhZGVyX190aXRsZS0tanMgKyBkb2RhbmllIGtsYXN5IHptaWVuaWFqYWNlaiBrb2xvciBuYSBjemVyd29ueVxyXG4vLyAvL1xyXG4vLyBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4vLyAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fdGl0bGUtLWpzJyk7XHJcbi8vICAgICBoZWFkZXIuaW5uZXJIVE1MID0gJ2RvYnJ6ZSBDacSZIHdpZHppZcSHIG5hIG1vamVqIHN0cm9uaWUgOiknO1xyXG4vLyAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fdGl0bGUtLXJlZCcpO1xyXG4vLyB9KTtcclxuXHJcbi8vIC8vIDMuIGN3aWN6ZW5pZVxyXG4vLyAvLyBwcnp5Y2lzayB6bWllbmlhasSFY3kgdHJlxZvEhyB3IHNla2NqaSBKU1xyXG4vLyAvL1xyXG4vLyBjb25zdCBidXR0b25DaGFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZV9fYnV0dG9uLS1qcy1jaGFuZ2UnKTtcclxuLy8gYnV0dG9uQ2hhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuLy8gICAgIGNvbnN0IGNoYW5naW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFydGljbGVfX2NvbnRlbnQtLWpzLWNoYW5nZScpO1xyXG4vLyAgICAgY2hhbmdpbmcuaW5uZXJIVE1MID0gJ3ptaWVuaW9uYSB0cmVzYyc7XHJcbi8vIH0pO1xyXG5cclxuLy8gLy8gNC4gY3dpY3plbmllXHJcbi8vIC8vIHByenljaXNrIGRvZGFqxIVjeSBrbGFzxJkgdyBzZWtjamkgSlMgLSBrbGFzYSB6bWllbmkga29sb3IgY3pjaW9ua2lcclxuLy8gLy9cclxuLy8gY29uc3QgYnV0dG9uQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFydGljbGVfX2J1dHRvbi0tanMtYWRkJyk7XHJcbi8vIGJ1dHRvbkFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbi8vICAgICBjb25zdCBhZGRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZV9fY29udGVudC0tanMtYWRkJyk7XHJcbi8vICAgICBhZGRpbmcuY2xhc3NMaXN0LmFkZCgnaGVhZGVyX190aXRsZS0tcmVkJyk7XHJcbi8vIH0pO1xyXG5cclxuLy8gLy8gNS4gY3dpY3plbmllXHJcbi8vIC8vIHByenljaXNrIMW8b25nbHVqxIVjeSBrbGFzxIUgdyBzZWtjamkgSlMgLSBrbGFzYSBzacSZIHByemXFgsSFY3phXHJcbi8vIC8vXHJcbi8vIGNvbnN0IGJ1dHRvblRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnRpY2xlX19idXR0b24tLWpzLXRvZ2dsZScpO1xyXG4vLyBidXR0b25Ub2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4vLyAgICAgY29uc3QgdG9nZ2xpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZV9fY29udGVudC0tanMtdG9nZ2xlJyk7XHJcbi8vICAgICB0b2dnbGluZy5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXJfX3RpdGxlLS1yZWQnKTtcclxuLy8gfSk7XHJcblxyXG4vLyAvL1xyXG4vLyAvLyBoYW1idXJnZXIgbWVudSAtIGRvZGF3YW5pZSBvZGVqbW93YW5pZSBrbGFzeSBvZHBvd2llZHppYWxuZWogemEgaWtvbmtlIGhhbWJ1cmdlcmFcclxuLy8gLy9cclxuLy8gY29uc3QgbmF2aWdhdGlvblN3aXRjaGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb25fX3N3aXRjaGVyLS1qcycpO1xyXG4vLyBuYXZpZ2F0aW9uU3dpdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4vLyAgICAgY29uc3QgbmF2aWdhdGlvbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbl9fbGlzdC0tanMnKTtcclxuLy8gICAgIG5hdmlnYXRpb25MaXN0LmNsYXNzTGlzdC50b2dnbGUoJ25hdmlnYXRpb25fX2xpc3QtLXZpc2libGUnKTtcclxuLy8gfSk7XHJcblxyXG4vLyAvL1xyXG4vLyAvLyBQcnp5a2xhZG93eSBvYmlla3QgaSBjd2ljemVuaWEgbmEgbmltXHJcbi8vIC8vXHJcblxyXG4vLyBjb25zdCBkZWF0aFN0YXIgPSB7XHJcbi8vICAgICBkaWFtZXRlcjogMTIwMDAwLFxyXG4vLyAgICAgZmlyZTogKHRhcmdldCkgPT4ge1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGAke3RhcmdldH0gZGVzdHJveWVkYClcclxuLy8gICAgIH0sXHJcbi8vICAgICBpc09wZXJhdGluZzogdHJ1ZSxcclxuLy8gICAgIGxldmVsczogMzU3LFxyXG4vLyAgICAgbmFtZTogJ0RlYXRoIFN0YXInLFxyXG4vLyAgICAgcG9wdWxhdGlvbjogMTAwMDAsXHJcbi8vICAgICBjcmV3OiB7XHJcbi8vICAgICAgICAgcm9sZTogJ2NhcHRhaW4nLFxyXG4vLyAgICAgICAgIG5hbWU6ICdkZWF0aHN0YXIgY2FwdGFpbidcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gY29uc29sZS5sb2coZGVhdGhTdGFyLm5hbWUpO1xyXG4vLyBjb25zb2xlLmxvZyhkZWF0aFN0YXIubGV2ZWwpO1xyXG4vLyBkZWF0aFN0YXIuZmlyZSgnQWxkZWJhcmFuJyk7XHJcblxyXG4vLyAvL2plxbxlbGkgd3luaWsgaXNPcGVyYXRpbmcgPSB0cnVlLCB0byB3dGVkeSB3eXBpc3ogY29uc29sZS5sb2dcclxuLy8gaWYgKGRlYXRoU3Rhci5pc09wZXJhdGluZykge2NvbnNvbGUubG9nKCdkemlhxYJhJyl9O1xyXG5cclxuLy8gZGVhdGhTdGFyLmlzT3BlcmF0aW5nID0gZmFsc2U7XHJcbi8vIGlmIChkZWF0aFN0YXIuaXNPcGVyYXRpbmcpIHtjb25zb2xlLmxvZygnZHppYcWCYScpXHJcbi8vIH1cclxuLy8gZWxzZSB7Y29uc29sZS5sb2coJ25pZSBkemlhbGEnKTtcclxuLy8gfTtcclxuXHJcbi8vIC8vXHJcbi8vIC8vIHRhYmxpY2VcclxuLy8gLy9cclxuXHJcbi8vIC8vIGRlZmluaW93YW5pZSB0YWJsaWN5IHN0cmluZ8OzdyB6IDMgZWxlbWVudGFtaVxyXG4vLyBjb25zdCBoYXJkd2FyZT1bJ2tleWJvYXJkJywgJ21vdXNlJywgJ3Rvd2VyJ107XHJcblxyXG4vLyAvLyBkZWZpbmlvd2FuaWUgdGFibGljeSBvYmlla3TDs3dcclxuLy8gY29uc3QgbmV3cyA9IFtcclxuLy8gICAgIHt0aXRsZTogJ3d0ZicsXHJcbi8vICAgICAgY29udGVudDogJ2xvcmVtIGlwc3VtIGRvbG9yJ1xyXG4vLyAgICAgfSxcclxuLy8gICAgIHt0aXRsZTogJ2NvIHRlbiBmcm9udGVuZCcsXHJcbi8vICAgICBjb250ZW50OiAnbG9yZW0gaXBzdW0gZG9sb3InLFxyXG4vLyAgICAgbGluazogJ2h0dHBzOi8vY290ZW5mcm9udGVuZC5wbCdcclxuLy8gICAgIH1cclxuLy8gXVxyXG5cclxuLy8gLy9cclxuLy8gLy8gcMSZdGxlXHJcbi8vIC8vXHJcblxyXG4vLyAvLyBwxJl0bGEgZm9yXHJcbi8vIGZvciAobGV0IGk9MDsgaTwzOyBpKyspIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKGAke2krMX0gd3lrb25hxYQgcMSZdGxpYCk7XHJcbi8vIH1cclxuXHJcbi8vIC8vIHd5cGlzYW5pZSBlbGVtZW50w7N3IHRhYmxpY3kgZHppxJlraSBwxJl0bGkgZm9yXHJcblxyXG4vLyAvLyBjb25zdCBmb3VuZGF0aW9uQm9va3MgPSBbJ3ByZWx1ZGl1bSBmdW5kYWNqaScsICduYXJvZHppbnkgZnVuZGFjamknLCAnZnVuZGFjamEnXTtcclxuLy8gLy8gZm9yIChqID0gMDsgaiA8IGZvdW5kYXRpb25Cb29rcy5sZW5ndGg7IGkrKykge1xyXG4vLyAvLyAgICAgY29uc29sZS5sb2coYE5hIG1pZWpzY3UgJHtqfSB6bmFqZHVqZSBzacSZIGVsZW1lbnQ6ICR7Zm91bmRhdGlvbkJvb2tzW2pdfWApO1xyXG4vLyAvLyB9O1xyXG5cclxuLy8gZm9yIChrPTA7IGsgPCBjb29rQm9va3MubGVuZ3RoOyBrKyspIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKGBlbGVtZW50IG8gaW5kZWtzaWUgJHtrfSBtYSB0cmXFm8SHICR7Y29va0Jvb2tzW2tdfWApO1xyXG4vLyB9O1xyXG5cclxuLy8gcMSZdGxhIHdoaWxlXHJcblxyXG4vLyBsZXQgd2hpbGVBID0gMztcclxuLy8gd2hpbGUgKHdoaWxlQSA8IDkpIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKHdoaWxlQSk7XHJcbi8vICAgICB3aGlsZUEgPSB3aGlsZUErMztcclxuLy8gfVxyXG4vLyBjb25zb2xlLmxvZyh3aGlsZUEpO1xyXG5cclxuLy8gLy8gcMSZdGxhIGRvLXdoaWxlXHJcbi8vIGxldCBkb1doaWxlQSA9IDk7XHJcbi8vIGRvIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKGRvV2hpbGVBKTtcclxuLy8gICAgIG49biszO1xyXG4vLyB9ICAgd2hpbGUgKGRvV2hpbGVBIDwgOSk7XHJcbi8vIGNvbnNvbGUubG9nKGRvV2hpbGVBKTtcclxuXHJcbi8vIC8vcMSZdGxhIGZvciBpblxyXG4vLyBjb25zdCBwZXJzb25Gb3JJbiA9IHtcclxuLy8gICAgIG5hbWU6ICdSYWZhbCcsXHJcbi8vICAgICBhZ2U6IDMxLFxyXG4vLyB9XHJcbi8vIGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiBwZXJzb25Gb3JJbikge1xyXG4vLyAgICAgY29uc29sZS5sb2coYCR7cHJvcGVydHlOYW1lfTogJHtwZXJzb25Gb3JJbltwcm9wZXJ0eU5hbWVdfWApO1xyXG4vLyB9XHJcblxyXG4vLyAvL3DEmXRsYSBmb3Igb2YgLSBwcm9zdHN6YSBvZiBmb3IgZG8gd3lwaXNhbmlhIGVsZW1lbnTDs3cgdGFibGljeVxyXG4vLyBjb25zdCBsb29wRm9yT2YgPSBbJ2VsZW1lbnQxJywgJ2VsZW1lbnQyJywgJ2VsZW1lbnQzJ107XHJcbi8vIGZvciAobGV0IGVsZW1lbnQgb2YgbG9vcEZvck9mKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuLy8gfVxyXG5cclxuLy9cclxuLy8gcHJ6ZWNob3d5d2FuaWUgZGFueWNoXHJcbi8vXHJcblxyXG4vLyAvL2Nvb2tpZXNcclxuLy8gLy93c3Rhd2lhbmllIHBhcnkga2x1Y3ogLSB3YXJ0b8WbxIcgZG8gY29va2llc1xyXG4vLyBkb2N1bWVudC5jb29raWUgPSBcInRlc3Rvd2VDaWFjaG8gPSBqYWthxZtXYXJ0b8WbxIdcIjtcclxuLy8gY29uc29sZS5sb2coZG9jdW1lbnQuY29va2llKTtcclxuLy8gLy93c3Rhd2lhbmllIGRydWdpZWogcGFyeSBrbHVjeiAtIHdhcnRvxZvEhy4gTmllIG5hZHBpc3VqZSBzacSZIGEgZG9kYWplXHJcbi8vIGRvY3VtZW50LmNvb2tpZSA9IFwidGVzdG93ZUNpYWNobyA9IGRydWdpZUNvb2tpZXNcIjtcclxuLy8gY29uc29sZS5sb2coZG9jdW1lbnQuY29va2llKTtcclxuXHJcblxyXG4vLyAvLyBsb2NhbCBzdG9yYWdlXHJcbi8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCduYW1lJywgJ3dhcnRvxZvEhyBwaWVyd3N6YScpO1xyXG4vLyBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpO1xyXG4vLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbmFtZScsICd3YXJ0b8WbxIcgZHJ1Z2EsIGRvcGlzdWplIHNpxJkgYSBuaWUgbmFkcGlzdWplJyk7XHJcbi8vIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XHJcbi8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCduYW1lJyk7XHJcbi8vIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XHJcbi8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCduYW1lJywgJ3dhcnRvxZvEhyB0cnplY2lhJyk7XHJcbi8vIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XHJcblxyXG4vLyAvL2Rla2xhcmFjamEgcHJ6eWvFgmFkb3dlZ28gb2JpZWt0dSBkbyB3c3Rhd2lhbmlhIGdvIGRvIExvY2FsIFN0b3JhZ2VcclxuLy8gY29uc3QgYm9vayA9IHtcclxuLy8gICAgIG5hbWU6ICdib29rIG9mIGNvbnRhbWluYXRpb24nLFxyXG4vLyAgICAgc2l6ZTogJzQ3IHggNDQnLFxyXG4vLyAgICAgeWVhcjogMTk5OVxyXG4vLyB9O1xyXG5cclxuLy8gLy9wcsOzYmEgd3N0YXdpZW5pYSBvYmlla3R1IGRvIGxvY2FsU3RvcmFnZVxyXG4vLyAvL25pZSB1ZGEgc2nEmSAtIHcgbG9jYWxTdG9yYWdlIGLEmWR6aWUgW29iamVjdCBvYmplY3RdXHJcbi8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdib29rJywgYm9vayk7XHJcbi8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGJvb2spKTtcclxuXHJcbi8vIC8vdcW8eXdhbSBKU09OLnN0cmluZ2lmeSBhYnkgZG9zdGHEhyBjacSFZyBzdHJpbmfDs3cgSlNPTm93eVxyXG4vLyBjb25zdCBib29rU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoYm9vayk7XHJcbi8vIGNvbnNvbGUubG9nKGJvb2tTdHJpbmcpO1xyXG4vLyAvL3dyenVjYW0gZGFuZSB3IGZvcm1hY2llIEpTT05vd3ltIGRvIGxvY2FsU3RvcmFnZSAtIHRlcmF6IE9LXHJcbi8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdib29rJywgYm9va1N0cmluZyk7XHJcblxyXG4vLyAvL3BvYmllcmFuaWUga2x1Y3phIGkgd2FydG9zY2kgeiBsb2NhbFN0b3JhZ2VcclxuLy8gLy9uaWUgbWEgcHJvYmxlbXUgLSBwb2plZHluY3phIHdhcnRvxZvEhyBwb2JyYW5hXHJcbi8vIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCduYW1lJykpOyAvL3dhcnRvxZvEhyB0cnplY2lhXHJcblxyXG4vLyAvL3BvYmllcmFuaWUga2x1Y3phIGkgd2FydG/Fm2NpIG9iaWVrdHUgeiBsb2NhbFN0b3JhZ2VcclxuLy8gLy9wb2JyYW55IGNpxIVnIHpuYWvDs3cgdyBmb3JtYWNpZSBKU09OYSAtIHRha2kgamFrIHRhbSBiecWCXHJcbi8vIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdib29rJykpO1xyXG5cclxuLy8gLy96YW1pYW5hIHN0cmluZ2EgSlNPTm93ZWdvIG5hIG9iaWVrdFxyXG4vLyBjb25zdCBib29rT2JqZWN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Jvb2snKTtcclxuLy8gY29uc29sZS5sb2coYm9va09iamVjdCk7XHJcbi8vIGNvbnN0IG5ld0Jvb2tPYmplY3QgPSBKU09OLnBhcnNlKGJvb2tPYmplY3QpO1xyXG4vLyBjb25zb2xlLmxvZyhuZXdCb29rT2JqZWN0KTtcclxuXHJcbi8vIHdzdGF3aWFuaWUgZGFueWNoIGRvIGlucHV0YSBvZHBvcm55Y2ggbmEgb2TFm3dpZcW8YW5pZVxyXG4vLyBkemnEmWtpIHRyenltYW5pdSB0ZWdvLCBjbyB3cGlzdWrEmSB3IExvY2FsIFN0b3JhZ2VcclxuXHJcbi8vIC8vIDEuIFBvYmllcmFtIGlucHV0YVxyXG4vLyBjb25zdCBmb2N1c0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX2ZvY3VzLS1qcycpO1xyXG4vLyAvLyAyLiBwb2Rub3N6xJkga2xhd2lzeiBjenlsaSBha2NqYSAna2V5dXAnXHJcbi8vIC8vIGRvIExvY2FsIFN0b3JhZ2UgbWEgc2nEmSB6YXBpc2HEhyB3YXJ0b8WbxIcgeiBpbnB1dGFcclxuLy8gLy8gY29uc29sZS5sb2cgLSBhYnkgem9iYWN6ecSHIG8gY28gY2hvZHppXHJcbi8vIGZvY3VzSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xyXG4vLyB9KTtcclxuLy8gLy8gZS50YXJnZXQgZGFqZSB3IHd5bmlrdSBjYcWCeSBlbGVtZW50XHJcbi8vIC8vIHphc3Rvc3VqZW15IHdpxJljIGUudGFyZ2V0LnZhbHVlXHJcbi8vIC8vIGNvbnNvbGUubG9nIC0gYWJ5IHpvYmFjennEhyBvIGNvIGNob2R6aVxyXG4vLyBmb2N1c0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcclxuLy8gICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuLy8gfSk7XHJcbi8vIC8vIHdhcnRvxZvEhyB6YXBpc3VqxJkgZG8gTG9jYWwgU3RvcmFnZVxyXG4vLyAvLyB6YSBrYcW8ZHltIHJhemVtIGphayBwdXN6Y3plIGtsYXdpc3osIHRvIHdhcnRvxZtjID0+IGxvY2FsU3RvcmFnZVxyXG4vLyBmb2N1c0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcclxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmb2N1c0lucHV0JywgZS50YXJnZXQudmFsdWUpO1xyXG4vLyB9KTtcclxuLy8gLy8gd2FydG/Fm8SHIG1hbXkgdyBMb2NhbCBTdG9yYWdlLCBcclxuLy8gLy8gYWxlIHBvIHdjenl0YW5pdSBzdHJvbnkgbmllIHPEhSBqZXN6Y3plIHBvYmllcmFuZVxyXG4vLyBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZvY3VzSW5wdXQnKS5sZW5ndGggPiAwKSB7XHJcbi8vICAgICBmb2N1c0lucHV0LnZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZvY3VzSW5wdXQnKTtcclxuLy8gfTtcclxuXHJcbi8vIC8vRmV0Y2ggQVBJXHJcbi8vIGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL3JhZmFscGlla2Fyc2tpL3JlcG9zJylcclxuLy8gLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSkgLy96YW1pZW5hbXkgcmVzcCBuYSBqc29uYVxyXG4vLyAudGhlbihyZXNwID0+IHsgICAgICAgICAgICAgLy9wb2RtaWVuaW9ueSBqc29uIHR1IGp1xbwgamVzdFxyXG4vLyAgICAgY29uc29sZS5sb2cocmVzcClcclxuLy8gfSlcclxuLy8gLmNhdGNoKGVycm9yID0+IHtcclxuLy8gICAgIGNvbnNvbGUubG9nKCdlcnJvcicpXHJcbi8vIH0pXHJcbi8vIGNvbnNvbGUubG9nKCd0ZXN0IDInKTtcclxuLy8gLy90ZXJheiBtb8W8bmEgd3lwaXNhYyBzb2JpZSBwb2JyYW5lIHJlcG96eXRvcmlhXHJcbi8vIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC0tanMnKTtcclxuLy8gZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvcmFmYWxwaWVrYXJza2kvcmVwb3M/c29ydD11cGRhdGVkJmRpcmVjdGlvbj1hc2MnKVxyXG4vLyAudGhlbihyZXNwID0+IHJlc3AuanNvbigpKSAvL3phbWllbmFteSByZXNwIG5hIGpzb25hXHJcbi8vIC50aGVuKHJlc3AgPT4geyAgICAgICAgICAgICAvL3BvZG1pZW5pb255IGpzb24gdHUganXFvCBqZXN0XHJcbi8vICAgICBjb25zdCByZXBvcyA9IHJlc3A7XHJcbi8vICAgICBmb3IgKGNvbnN0IHJlcG8gb2YgcmVwb3MpIHtcclxuLy8gICAgICAgICAvL2NvbnNvbGUubG9nKHJlcG8pOyAvL3dzenlzdGtvIHd5cGlzemVcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXBvLm5hbWUpOyAvL3R5bGtvIG5hend5IHJlcG96eXRvcmlvd1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHJlcG8uaHRtbF91cmwpO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGByZXBvenl0b3JpdW0gbyBuYXp3aWU6ICR7cmVwby5uYW1lfSBtYSBhZHJlczogJHtyZXBvLmh0bWxfdXJsfWApO1xyXG4vLyAgICAgICAgIGxpc3QuaW5uZXJIVE1MICs9IGA8bGk+JHtyZXBvLm5hbWV9IDxhIGhyZWY9XCIke3JlcG8uaHRtbF91cmx9XCI+ICR7cmVwby5odG1sX3VybH08L2E+PC9saT5gO1xyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG4vLyAuY2F0Y2goZXJyb3IgPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2coJ2Vycm9yJylcclxuLy8gfSlcclxuXHJcbi8vXHJcbi8vRGVzdHJ1a3R1cnl6YWNqYVxyXG4vL1xyXG5cclxuLy8gY29uc3QgcGVyc29uID0ge1xyXG4vLyAgICAgbmFtZTogJ1JhZmFsJywgYWdlOiAzMVxyXG4vLyB9XHJcbi8vIC8vbWFtIG9iaWVrdCBwZXJzb24sIGRvIGt0b3JlZ28gZWxlbWVudG93IGNoY2Ugc2llIG9kd2/FgmHEhy5cclxuLy8gY29uc29sZS5sb2coYCR7cGVyc29uLm5hbWV9ICR7cGVyc29uLmFnZX1gKTtcclxuLy8gLy9PZHdvxYJ5d2FuaWUgc2nEmSBqZXN0IGplZG5hayBkxYJ1Z2llLiBaYXN0b3N1asSZIHdpxJljIHptaWVubmUuXHJcbi8vIGNvbnN0IG5hbWUgPSBwZXJzb24ubmFtZTtcclxuLy8gY29uc3QgYWdlID0gcGVyc29uLmFnZTtcclxuLy8gY29uc29sZS5sb2coYCR7bmFtZX0gJHthZ2V9YCk7XHJcbi8vIC8vTW/FvG5hIGplZG5hayB1xbx5xIcgZGVza3RydWt0dXJ5emFjamlcclxuLy8gY29uc3Qge25hbWUsIGFnZX0gPSBwZXJzb247XHJcbi8vIGNvbnNvbGUubG9nKGAke25hbWV9ICR7YWdlfWApO1xyXG4vLyAvL01vxbxuYSBzdG9zb3dhxIcgbmEgdGFibGljYWNoXHJcbi8vIGNvbnN0IGZvb2QgPSBbJ3BpenphJywgJ2J1cmdlcicsICd3cmFwJ107XHJcbi8vIGNvbnNvbGUubG9nKGZvb2QpO1xyXG4vLyBjb25zdCBbZmlyc3RGb29kLCBzZWNvbmRGb29kXSA9IGZvb2Q7XHJcbi8vIGNvbnNvbGUubG9nKGZpcnN0Rm9vZCk7XHJcbi8vIGNvbnNvbGUubG9nKHNlY29uZEZvb2QpO1xyXG5cclxuLy8gLy9cclxuLy8gLy9TcHJlYWQgb3BlcmF0b3IgLSBkbyDFgsSFY3plbmlhXHJcbi8vIC8vXHJcbi8vIGNvbnN0IGNvbnRhY3REYXRhID0ge1xyXG4vLyAgICAgZW1haWw6ICd0ZXN0QGVtYWlsLmNvbScsXHJcbi8vICAgICBwaG9uZTogNTU1NTM1MjVcclxuLy8gfTtcclxuLy8gY29uc3QgY29udGFjdEFkZHJlc3MgPSB7XHJcbi8vICAgICB6aXBDb2RlOiAnMTUtNTU1JyxcclxuLy8gICAgIHBvc3RDb2RlOiAnNDM1NDI1J1xyXG4vLyB9O1xyXG4vLyAvL0NoY8SZIHBvxYLEhWN6ecSHIHRlIGR3YSBvYmlla3R5XHJcbi8vIGNvbnN0IHBlcnNvbkRhdGEgPSB7XHJcbi8vICAgICAuLi5jb250YWN0RGF0YSxcclxuLy8gICAgIC4uLmNvbnRhY3RBZGRyZXNzXHJcbi8vIH07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")}]);