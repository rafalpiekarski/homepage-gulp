"use strict";

// service worker registration - remove if you're not going to use it

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


// 1. cwiczenie
// po kliklnieciu w button zmieni sie tytul w headerze
//

const button = document.querySelector('.header__button--js');
console.log(button);

// I sposob na wypisanie czegos w konsoli
button.addEventListener('click', handleClick);

// II sposob na wypisanie czegos w konsoli (fat arrow)
button.addEventListener('click', () => {
    console.log('hej funkcja fat arrow');
});
function handleClick() {
    console.log('hej');
}

// III sposob na wypisanie czegos - z parametrem domyslnym (e)
// nie musze wypisywac (e), bo jest to domyslne => ()
button.addEventListener('click', (e) => {
    //wywoluje (e) i tam sa parametry
    console.log(e);
    console.log('hej funkcja fat arrow z parametrem e');
});

// 2. cwiczenie
// podmiana header__title--js + dodanie klasy zmieniajacej kolor na czerwony
//
button.addEventListener('click', (e) => {
    const header = document.querySelector('.header__title--js');
    header.innerHTML = 'dobrze Cię widzieć na mojej stronie :)';
    header.classList.add('header__title--red');
});

// 3. cwiczenie
// przycisk zmieniający treść w sekcji JS
//
const buttonChange = document.querySelector('.article__button--js-change');
buttonChange.addEventListener('click', (e) => {
    const changing = document.querySelector('.article__content--js-change');
    changing.innerHTML = 'zmieniona tresc';
});

// 4. cwiczenie
// przycisk dodający klasę w sekcji JS - klasa zmieni kolor czcionki
//
const buttonAdd = document.querySelector('.article__button--js-add');
buttonAdd.addEventListener('click', (e) => {
    const adding = document.querySelector('.article__content--js-add');
    adding.classList.add('header__title--red');
});

// 5. cwiczenie
// przycisk żonglujący klasą w sekcji JS - klasa się przełącza
//
const buttonToggle = document.querySelector('.article__button--js-toggle');
buttonToggle.addEventListener('click', (e) => {
    const toggling = document.querySelector('.article__content--js-toggle');
    toggling.classList.toggle('header__title--red');
});

//
// hamburger menu - dodawanie odejmowanie klasy odpowiedzialnej za ikonke hamburgera
//
const navigationSwitcher = document.querySelector('.navigation__switcher--js');
navigationSwitcher.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.navigation__list--js');
    navigationList.classList.toggle('navigation__list--visible');
});

//
// Przykladowy obiekt i cwiczenia na nim
//

const deathStar = {
    diameter: 120000,
    fire: (target) => {
        console.log(`${target} destroyed`)
    },
    isOperating: true,
    levels: 357,
    name: 'Death Star',
    population: 10000,
    crew: {
        role: 'captain',
        name: 'deathstar captain'
    }
}

console.log(deathStar.name);
console.log(deathStar.level);
deathStar.fire('Aldebaran');

//jeżeli wynik isOperating = true, to wtedy wypisz console.log
if (deathStar.isOperating) {console.log('działa')};

deathStar.isOperating = false;
if (deathStar.isOperating) {console.log('działa')
}
else {console.log('nie dziala');
};
