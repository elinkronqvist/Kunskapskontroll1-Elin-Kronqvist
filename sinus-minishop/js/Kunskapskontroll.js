//KUNSKAPSKONTROLL 2020-11-09

/* ------------------------------------------------------------------------------ */
            //1. En knapp som återställer allt till originalutseendet
                //Alla ändringar som du har gjort ska ändras tillbaka
/* ------------------------------------------------------------------------------ */

//skapar ett button-element
let buttonElement = document.querySelectorAll('button');
console.log(buttonElement);

//skapar reset-button som ser likadan ut som de andra buttons
let resetButton = document.createElement('button');

//ger reset-button en class
resetButton.classList.add('reset-button');

//ger reset-button en text
resetButton.innerText = 'RESET';

//stylar reset-button
resetButton.style.backgroundColor = 'hotpink';
resetButton.style.color = 'purple';
resetButton.style.fontSize = '1.5rem';
resetButton.style.padding = '.5rem 1.5rem .5rem 1.5rem';
resetButton.style.marginRight = '2rem';
resetButton.style.borderRadius = '.2rem';
resetButton.style.border = '.5rem solid orange';
resetButton.style.boxShadow = '.2rem .5rem 1rem grey';


console.log(resetButton);

//skapar nav-element i header-navigation
let navElement = document.querySelector('#header-navigation');
console.log(navElement);

//skapar element för länkarna för att kunna placera ut resetButton före första elementet 
navElement = document.querySelectorAll('a');
let reset = navElement[0].insertAdjacentElement('afterbegin', resetButton);

//skapar ett klick-event för resetButton
resetButton.addEventListener('click', resetAll);

//skapar funktionen för resetButton som vi använder i klick-eventet
function resetAll(){
    changeSecondImgToFire(); 
    changeFooterElementToLightGrey();
    changeTextH2Back();
    changeBackgroundColorBack();
    addMain();
    removeMyCart();
}



/* ------------------------------------------------------------------------------ */
                        //2. Byt ut minst ett foto 
/* ------------------------------------------------------------------------------ */

//skapar ett element för img i figure
let productImg = document.querySelectorAll('figure img');

//skapar ett element för den andra bilden
let secondImg = productImg[1];

//skapar ett event för den andra bilden och använder funktionen som ändrar bilden till Forrest Hoodie
secondImg.addEventListener('click', changeSecondImgToForrest);

//funktion som ändrar andra bilden till Forrest Hoodie
function changeSecondImgToForrest(){
    let secondImg = productImg[1];
    secondImg.src = 'img/hoodie-forrest.png'; 
}

//funktion som ändrar andra bilden till Fire Hoodie
function changeSecondImgToFire(){
    let secondImg = productImg[1];
    secondImg.src = 'img/hoodie-fire.png'; 
}

/* ------------------------------------------------------------------------------ */
                //3. Ändra bakgrundsfärg på minst ett element
/* ------------------------------------------------------------------------------ */

//skapar ett footer-element
let footerElement = document.querySelector('footer');
console.log(footerElement);

//skapar ett event som ändrar bakgrundsfärgen på footern 
footerElement.addEventListener('mouseenter', changeFooterElementToBlue)

//skapar funktionen som ändrar bakgrundsfärgen på footern
function changeFooterElementToBlue(){
    let footerElement = document.querySelector('footer');
    footerElement.style.backgroundColor = 'lightblue'
}

//skapar funktionen som ändrar tillbaka bakgrundsfärgen på footern
function changeFooterElementToLightGrey(){
    let footerElement = document.querySelector('footer');
    footerElement.style.backgroundColor = 'rgba(0, 0, 0, .03)'
}


/* ------------------------------------------------------------------------------ */
//4. Ändra text på minst ett element
/* ------------------------------------------------------------------------------ */

//skapar ett element 
let headerElement = document.querySelectorAll('header img');
let logoImg = headerElement[0];
console.log(logoImg);

logoImg.addEventListener('click', changeTextH2);

let hoodies = ['Grey Hoodie', 'Green Hoodie', 'Blue Hoodie'];

function changeTextH2(){
    let h2Elements = document.querySelectorAll('h2');
    for (let i = 0; i < h2Elements.length; i++){
        h2Elements[i].innerText = hoodies[i];
    }
}

function changeTextH2Back(){
    let h2Elements = document.querySelectorAll('h2');
    for (let i = 0; i < h2Elements.length; i++){
        h2Elements[i].innerText = 'Sinus Hoodie';
    }
}

/* ------------------------------------------------------------------------------ */
//5. Ändra färg på minst en knapp
/* ------------------------------------------------------------------------------ */


let htmlElement = document.querySelector('html');

htmlElement.addEventListener('keydown', changeBackgroundColor);

    function changeBackgroundColor(event){
        console.log(event.key);
        let bodyElement = document.querySelector('body');
        if (event.key === 's' || event.key === 'S'){
            bodyElement.style.backgroundColor = 'coral';
        }
        else if (event.key === 'i' || event.key === 'I'){
            bodyElement.style.backgroundColor = 'lightgreen';
        }
        else if (event.key === 'n' || event.key === 'N'){
            bodyElement.style.backgroundColor = 'lightpink';
        }
        else if (event.key === 'u' || event.key === 'U'){
            bodyElement.style.backgroundColor = 'purple';
        }
    }

    function changeBackgroundColorBack(){
        let bodyElement = document.querySelector('body');
        bodyElement.style.backgroundColor = 'white';
    }


/* ------------------------------------------------------------------------------ */
//6. Ta bort minst 1 element (Måste läggas till igen när man trycker på återställningsknappen)
/* ------------------------------------------------------------------------------ */


let sectionElement = document.querySelectorAll('section article h3');
    socialMediaElement = sectionElement[2];

    socialMediaElement.addEventListener('mouseenter', removeMain);


function removeMain(){
    let mainElement = document.querySelector('main');
    console.log(mainElement);

    if (mainElement == mainElement){
        mainElement.remove();
    }
    else if (mainElement == null){
        //hur löser man detta? gör inget om elementet inte finns
        return 'null';
    }
    
}

function addMain(){
    let bodyElement = document.querySelector('body');
    let mainElement = document.querySelector('main');

    if (mainElement == null){
        let headerElement = document.querySelector('header');
        headerElement.insertAdjacentHTML('afterend', `<main>
        <article class="art-1">
            <figure><img src="img/hoodie-ash.png" alt="hoodie"></figure>
            <h2>Sinus Hoodie</h2>
            <h3>Ash</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus enim!</p>
            <button>buy</button>
        </article>
        <article class="art-2">
            <figure><img src="img/hoodie-fire.png" alt="hoodie"></figure>
            <h2>Sinus Hoodie</h2>
            <h3>Fire</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione neque sint quaerat consequatur laudantium!</p>
            <button>buy</button>
        </article>
        <article class="art-3">
            <figure><img src="img/hoodie-ocean.png" alt="hoodie"></figure>
            <h2>Sinus Hoodie</h2>
            <h3>Water</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos saepe ratione possimus nobis?</p>
            <button>buy</button>
        </article>
    </main>`);
    }
    

    else { 
        return null;
    }


}


/* ------------------------------------------------------------------------------ */
//7. Lägg till en lista var som helst i DOMen (måste tas bort med resetknappen)
        //Listan ska innehålla flera li element
        //Varje li element ska ha en synlig border. (Valfritt utseende)
/* ------------------------------------------------------------------------------ */

navElement = document.querySelector('#header-navigation');
console.log(navElement);

let cartElement = document.querySelector('nav img')

cartElement.addEventListener('click', showMyCart);

/* showMyCart(); */

function showMyCart(){
    let myCart = document.createElement('ul');

for (let i = 0; i < 10; i++){
    let item = document.createElement('li');
    item.style.border = 'darkgrey solid .2rem';
    item.style.margin = '.2rem';
    myCart.appendChild(item);

}

console.log(myCart);
myCart.style.backgroundColor = 'lightgrey';
myCart.style.border = 'solid darkgrey .15rem'
myCart.style.borderRadius = '.2rem'
myCart.style.boxShadow = '.2rem .5rem 1rem grey';
myCart.style.padding = '.5rem';
myCart.style.marginLeft = '3rem';
myCart.style.listStyle = 'none';
myCart.style.display = 'block';
myCart.style.flexDirection = 'column';
myCart.style.fontSize = '.9rem';

let cartElement = document.querySelector('nav img')
console.log(cartElement);


cartElement.insertAdjacentElement('afterend', myCart); 

let shop = ['Your cart:', 'Sinus Hoodie', 'Sinus Skateboard', 'Sinus Socks', 'Sinus Snapback', 'Sinus Bottle', 'Sinus T-shirt', 'Sinus Sneakers', 'Sinus Stickers', 'Sinus Sunglasses'];
//console.log(shop);

let myItems = myCart.children; 

console.log(myItems);

// let liElements = document.querySelectorAll('li');
//console.log(liElements);

for (let i = 0; i < myItems.length; i++){
    myItems[i].innerText = shop[i];
    myItems[i].style.padding = '.3rem';
} 


}


function removeMyCart(){
    let myCart = document.querySelector('ul');
    myCart.remove();
}


