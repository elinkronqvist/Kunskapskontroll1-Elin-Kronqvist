// Code here!

/* console.log(document);

let headerNav = document.getElementById('header-navigation');

console.log(headerNav); */

//1. Byt namn på första hoodien från Ash till Potato.
let h3Element = document.querySelectorAll('h3');
h3Element[0].innerText = 'Potato';

//ELLER:
/* let h3Element = document.querySelector('h3');
h3Element.innerText = 'Potato';

console.log(h3Element); */

//2. Byt namn på Home till Start.
let navElement = document.querySelector('#header-navigation');
let navElementChildren = navElement.children;
navElementChildren[0].innerText = 'Start';

console.log(navElementChildren[0]);

//3. Byt namn på Contact till Mail Us.
navElementChildren[2].innerText = 'Mail us';

//4. Byt ut informationen om Sinus Hoodie - Fire.
/* let pElement = document.querySelectorAll('p');
pElement[1].innerText = 'I ett hus vid skogens slut, liten tomte tittar ut, haren skuttar fram så fort, knackar på dess port. Hjälp ack, hjälp ack, hjälp du mig, jag vill bara värma mig. Kom ja kom i stugan in, räck mig handen din!'; */

//ELLER

let pElement = document.querySelectorAll('p');
let pElementChildren = pElement[1].innerText = 'I ett hus vid skogens slut, liten tomte tittar ut, haren skuttar fram så fort, knackar på dess port. Hjälp ack, hjälp ack, hjälp du mig, jag vill bara värma mig. Kom ja kom i stugan in, räck mig handen din!';


//5. Byt bakgrundsfärg och text på en knapp.
let buttonElement = document.querySelectorAll('button');
buttonElement[2].style.backgroundColor = 'hotpink';
buttonElement[2].innerText = 'Buuuuy';

//6. Byt bakgrundsfärg på någon av produkterna.
/* let artOne = document.querySelector('.art-1');
artOne.style.backgroundColor = 'lightgreen'; */

let figureElement = document.querySelectorAll('figure');
figureElement[0].style.backgroundColor = 'lightgreen';

//7. Byt ut adressen på sidan.
pElement[3].innerText = 'Sinus skateboards \n Stora vägen 123 \n 123 45, Staden'

//8. Byt färg på samtliga <p>.
for (let i = 0; i < pElement.length; i++){
    pElement[i].style.color = 'hotpink';
}

//9. Ändra text på samtliga knappar till add to cart.
for (let i = 0; i < buttonElement.length; i++)
buttonElement[i].innerText = 'add to cart';

//10. Lägg till classen active på menyalternativet home.
let aElement = document.querySelectorAll('a');
aElement[3].classList.add('active');

//EXTRA använt .children istället
/* let articleElement = document.querySelectorAll('article');
let articleElementChildren = articleElement[3].children;

console.log(articleElementChildren); */

//11. Ta bort classen logo på logotypen.

let imgElement = document.querySelectorAll('img');
imgElement[0].classList.remove('logo');
//console.log(imgElement[0]);

//12. Lägg till ett nytt menyalternativ.
let articleElement = document.querySelectorAll('article');
let menu = articleElement[3].children;
let newMenuItem = document.createElement('a');
articleElement[3].appendChild(newMenuItem);
newMenuItem.innerText = 'About us';
newMenuItem.href = '#';

console.log(menu);
console.log(newMenuItem);

//ALTERNATIV LÖSNING:
/* let menyElement = document.querySelectorAll('#header-navigation a');
let nyttMenyElement = document.createElement('a');
nyttMenyElement.innerText = 'nytt element';
nyttMenyElement.href = '#';
//nyttMenyElement.setAttribute('href', '#');

menyElement[2].insertAdjacentElement('afterend', nyttMenyElement);

console.log(menyElement); */


//13. Lägg till en ny produkt med följande info.

/* el	beskrivning
img	hoodie-forrest.png
h2	Sinus Hoodie
h3	Forrest
p	Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores. */

/* let mainElement = document.querySelector('main');
console.log(mainElement);

let newProduct = document.createElement('article');
mainElement.appendChild(newProduct);
newProduct.classList.add('art-4');

let newfigureElement = document.createElement('figure');
newProduct.appendChild(newFigureElement);
 */

 // Hämtar art-3 från HTML och döper till lastProduct
 let newProduct = document.querySelector('.art-3');

 // Använder insertAdjacentHTML med HTML-kod för att 
// lägga till efter art-3
 newProduct.insertAdjacentHTML('afterend', 
 `<article class="art-4">
            <figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>
            <h2>Sinus Hoodie</h2>
            <h3>Forrest</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos saepe ratione possimus nobis?</p>
            <button>buy</button>
        </article>`);

        // Skapar varibel för art-4
        let forrestHoodie = document.querySelector('.art-4');

        // Skapar variabel för art 4 p-element
        let forrestP = document.querySelector('.art-4 p');

        // Ändrar texten på p-elemenet
        forrestP.innerText = 'Ny text!';

        // Skapar ett nytt h2-element och lägger till text
        let newHeading = document.createElement('h2');
        newHeading.innerText = 'New H2';
        //forrestHoodie.appendChild(newHeading);

        // Lägger till newHeading efter forrestP
        forrestP.insertAdjacentElement('afterend', newHeading);

        console.log(forrestP);