//KUNSKAPSKONTROLL 2020-11-09

//1. En knapp som återställer allt till originalutseendet
        //Alla ändringar som du har gjort ska ändras tillbaka


/* let headerElement = document.querySelector('header');
console.log(headerElement);

let imgElement = document.querySelectorAll('img');
console.log(imgElement[0]);

imgElement[0].insertAdjacentHTML('afterend',
    `<button>buy</button>`);
 */

/* let header = document.querySelectorAll('header');
resetButton = header[1].children;
console.log(resetButton); */ 

/* let navElement = document.querySelector('#header-navigation');
console.log(navElement);

navElement = document.querySelectorAll('a');
let reset = navElement[2].insertAdjacentHTML('afterend',
    `<button>buy</button>`
);

console.log(reset);

 */
/* console.log(navElement[]); */


//väljer button-elementet för att kunna välja den nedan
let buttonElement = document.querySelectorAll('button');
console.log(buttonElement);

//skapar reset-button som ser likadan ut som de andra buttons
let resetButton = document.createElement('button');

//ger reset-button en class
resetButton.classList.add('reset-button');
//ger reset-button en text
resetButton.innerText = 'RESET';

console.log(resetButton);


let navElement = document.querySelector('#header-navigation');
console.log(navElement);

navElement = document.querySelectorAll('a');
let reset = navElement[2].insertAdjacentElement('afterend', resetButton);







//2. Byt ut minst ett foto
let figureElement = document.querySelectorAll('figure');
console.log(figureElement[1]);
let secondProduct = figureElement[1];
console.log(secondProduct);
let imgHoodie = secondProduct.children;
console.log(imgHoodie);
imgHoodie[0].remove();
secondProduct.insertAdjacentHTML('afterbegin', `<figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>`);


/* let imgElement = document.querySelectorAll('img');
console.log(imgElement[2]);
let firstProduct = imgElement[2];
console.log(firstProduct);
firstProduct.remove();

let newProduct = document.createElement('img');
console.log(newProduct);
console.log(firstProduct);

firstProduct.insertAdjacentHTML('afterend', `<figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>`); */

/* firstProduct.insertAdjacentHTML("afterbegin", `<figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>`); */


//3. Ändra bakgrundsfärg på minst ett element


//4. Ändra text på minst ett element

//5. Ändra färg på minst en knapp

//6. Ta bort minst 1 element (Måste läggas till igen när man trycker på återställningsknappen)

//7. Lägg till en lista var som helst i DOMen (måste tas bort med resetknappen)
        //Listan ska innehålla flera li element
        //Varje li element ska ha en synlig border. (Valfritt utseende)

