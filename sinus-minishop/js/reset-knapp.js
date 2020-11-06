
//console.log('check');

// resetAll();

//Återställningsknappen
let btns = document.querySelectorAll('button');
let reset = btns[2];

console.log(reset);
reset.innerText = 'RESET';

//sätt en event listener på reset-knappen
reset.addEventListener('click', resetAll);

//sätt event listener för första knappen
let knapp1 = btns[0];
knapp1.addEventListener('click', 
    function(event){
        changeArt1toHotPink();
        changeH2inArt2();
    }
);


function resetAll(){
    let art1 = document.querySelector('.art-1');
        art1.style.backgroundColor = 'white';
        
        //reset candyfloss till Sinus Hoodie
        let h2 = document.querySelector('.art-2 h2');
        h2.innerText = 'Sinus Hoodie';
}

//ändra h2 på art-2 vid click
function changeH2inArt2(){
    let h2 = document.querySelector('.art-2 h2');
    h2.innerText = 'Candyfloss';
}

//ändrar art-1 bakgrundsfärgen till hot pink
function changeArt1toHotPink(){
    let art1 = document.querySelector('.art-1');
        art1.style.backgroundColor = 'hotpink';
}
