//console.log('check');

//mouse event -> enter and leave
let btn = document.querySelector('button');
let firstProduct = document.querySelector('.art-1');

/* btn.addEventListener('click',

function(event){
    //console.log('Nu har vi klickat!');
    //firstProduct.style.backgroundColor = 'blue';
    firstProduct.classList.toggle('bg-blue')
    }
);
 */


 /* //mouse click

let btn = document.querySelector('button');
btn.addEventListener('click',
    function(event){
        console.log('Klick på första knappen');
    }
); */


/* btn.addEventListener('mouseenter',

function(event){
    event.target.classList.add('bg-blue'); //istället för btn.classList.add() event.target hittar själv
    console.log(event.target);
    }
);

btn.addEventListener('mouseleave',

function(event){
    event.target.classList.remove('bg-blue');
    }
);


//console.dir(btn);
//console.log(btn); */


//Mouse move
let secondProduct = document.querySelector('.art-2');
//console.log(secondProduct);

secondProduct.addEventListener('mousemove',
function (event){
    let hue = event.x/3+100;
    let saturation = event.y/5;
    secondProduct.style.backgroundColor = `hsl(${hue}, ${saturation}%, 40%)`;
    //console.log(event.x, hue);
    //console.log(event.y, saturation);
    console.log(event.x, event.y);
}
)


