//KUNSKAPSKONTROLL 2020-11-09

/* ------------------------------------------------------------------------------ */
            //1. En knapp som återställer allt till originalutseendet
                //Alla ändringar som du har gjort ska ändras tillbaka
/* ------------------------------------------------------------------------------ */

//skapar ett button-element
let buttonElement = document.querySelectorAll('button');
/* console.log(buttonElement); */

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

/* console.log(resetButton); */

//skapar nav-element i header-navigation
let navElement = document.querySelector('#header-navigation');
/* console.log(navElement); */

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
/* console.log(footerElement); */

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

//skapar ett element för headern
let headerElement = document.querySelectorAll('header img');
//skapar ett element för Sinus-logon
let logoImg = headerElement[0];
/* console.log(logoImg); */

//skapar ett event med klick som ändrar H2 under produktbilderna
logoImg.addEventListener('click', changeTextH2);

//skapar en array som ska namnge de nya rubrikerna genom en loop
let hoodies = ['Grey Hoodie', 'Green Hoodie', 'Blue Hoodie'];

//skapar en funktion med en loop som namnger de nya h2
function changeTextH2(){
    //skapar elementet
    let h2Elements = document.querySelectorAll('h2');
    for (let i = 0; i < h2Elements.length; i++){
        h2Elements[i].innerText = hoodies[i];
    }
}

//skapar en funktion som ändrar tillbaka H2 till ordinarie text
function changeTextH2Back(){
    //skapar elementet
    let h2Elements = document.querySelectorAll('h2');
    for (let i = 0; i < h2Elements.length; i++){
        h2Elements[i].innerText = 'Sinus Hoodie';
    }
}

/* ------------------------------------------------------------------------------ */
//5. Ändra färg på minst en knapp
/* ------------------------------------------------------------------------------ */

//skapar ett element för hela HTML
let htmlElement = document.querySelector('html');


//skapar ett event med keydown som ändrar bakgrundsfärg på bodyn
htmlElement.addEventListener('keydown', changeBackgroundColor);


//skapar funktionen som ändrar färg på bodyn när man skriver "Sinus"
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

    //skapar funktionen som ändrar tillbaka bodyn till vit
    function changeBackgroundColorBack(){
        let bodyElement = document.querySelector('body');
        bodyElement.style.backgroundColor = 'white';
    }


/* ------------------------------------------------------------------------------ */
//6. Ta bort minst 1 element (Måste läggas till igen när man trycker på återställningsknappen)
/* ------------------------------------------------------------------------------ */

//skapar ett element för alla h3
let sectionElement = document.querySelectorAll('section article h3');

//skapar ett element för h3: social media
let socialMediaElement = sectionElement[2];

//skapar ett event som tar bort main-elementet när man klickar på h3-elementet social media
socialMediaElement.addEventListener('click', removeMain);

//skapar funktionen som tar bort main-elementet
function removeMain(){
    //skapar ett element för main
    let mainElement = document.querySelector('main');
    /* console.log(mainElement); */

    //lägger till ett if statement som endast tar bort main om main-elementet finns
    if (mainElement == mainElement){
        mainElement.remove();
    }
    //denna funkar inte? får felmeddelande i consolen
    else if (mainElement == null){
        return null;
    }
    
}

//skapar en funktion som lägger tillbaka main
function addMain(){
    //skapar element för main
    let mainElement = document.querySelector('main');

    //skapar ett if statement som endast lägger till main om det inte redan finns. Finns det, ska den inte returnera något
    if (mainElement == null){
        //skapar element för header där jag vill lägga in main igen
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

//skapar ett element för navElement
navElement = document.querySelector('#header-navigation');
/* console.log(navElement); */

//skapar ett element för varukorgs-ikonen i nav:en
let cartElement = document.querySelector('nav img')
cartElement.style.padding = '2rem';

//skapar två events som visar kundkorgen (en ul med 10 li:s) när jag håller musen över och döljer när jag tar bort musen
cartElement.addEventListener('mouseenter', showMyCart);
cartElement.addEventListener('mouseleave', removeMyCart)

//skapar funktionen som skapar en ul med li:s och sedan namnger dem
function showMyCart(){
    //skapar ett element för kundkorgen (ul)
    let myCart = document.createElement('ul');

    //skapar en loop som gör 10 li:s 
for (let i = 0; i < 10; i++){
    let item = document.createElement('li');
    item.style.border = 'darkgrey solid .2rem';
    item.style.margin = '.2rem';
    //lägger till alla li:s till ul
    myCart.appendChild(item);
}

console.log(myCart);
myCart.style.backgroundColor = 'lightgrey';
myCart.style.border = 'solid darkgrey .15rem'
myCart.style.borderRadius = '.2rem'
myCart.style.boxShadow = '.2rem .5rem 1rem grey';
myCart.style.padding = '.5rem';
myCart.style.listStyle = 'none';
myCart.style.width = '18.5%';
myCart.style.margin = '0 0 0 59rem';
myCart.style.display = 'flex';
myCart.style.flexDirection = 'column';
myCart.style.fontSize = '.9rem';


//skapar element för main
let mainElement = document.querySelector('main');

//lägger till produkterna i kundkorgen (myCart-elementet) före mainElementet
mainElement.insertAdjacentElement('beforebegin', myCart);

//skapar en array som ska namnge alla li:s genom en loop
let shop = ['Your cart:', 'Sinus Hoodie', 'Sinus Skateboard', 'Sinus Socks', 'Sinus Snapback', 'Sinus Bottle', 'Sinus T-shirt', 'Sinus Sneakers', 'Sinus Stickers', 'Sinus Sunglasses'];

//skapar li-element av ul (myCart), för att kunna hitta dem i loopen
let myItems = myCart.children; 

/* console.log(myItems); */

//skapar loopen som namnger alla li:s (ger dem ett value)
for (let i = 0; i < myItems.length; i++){
    myItems[i].innerText = shop[i];
    myItems[i].style.padding = '.3rem';
    } 
}

//skapar en funktion som tar bort kundkorgen 
function removeMyCart(){
    let myCart = document.querySelector('ul');
    myCart.remove();
}


