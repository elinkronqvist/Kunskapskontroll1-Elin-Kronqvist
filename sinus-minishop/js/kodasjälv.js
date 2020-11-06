//console.log('check');

//1. Klicka på ett element -> ändra texten på ett annat element
let btn = document.querySelector('button');
console.log(btn);

btn.addEventListener('click',
    function(event){
        //console.log('hej nu har vi klickat');
        let pElement = document.querySelector('p');
        pElement.innerText = 'heeello';
    }
);

//2. För musen över ett element -> ändra bakgrundsfärgen för samma element

let figureElement = document.querySelectorAll('figure');
let figureTwo = figureElement[1];

console.log(figureTwo);

figureTwo.addEventListener('mousemove',
    function(event){
        figureTwo.style.backgroundColor = 'pink';
    }
);



//3. Ta bort musen från ett element -> lägg till ett nytt element i menyn
let navElement = document.querySelector('#header-navigation');
console.log(navElement);
let navLinks = navElement.children;
console.log(navLinks);
console.log(navLinks[0]);

let navLinkThree = navLinks[2];
console.log(navLinkThree);

//let newMenuItem = document.querySelector('a');

navLinks[0].addEventListener('mouseleave',
    function(event){
        console.log('heeeeeej');
        navLinkThree.insertAdjacentHTML('afterend', 
        `<a href="#">About us</a>`);
    }
);


//4. Använd mousemove eventet -> ändra bakgrundsfärg på ett element med hjälp av event.x eller event.y





/* KODA SJÄLV */


//1. Ändra textfärgen på en knapp när du trycker på ‘f’ eller ‘F’

//2. Ändra fotot på första produkten när du trycker på ‘i’ eller ‘I’
