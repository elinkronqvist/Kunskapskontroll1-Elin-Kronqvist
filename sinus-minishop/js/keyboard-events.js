
// Gick igenom nedan när Elin var iväg
/* KEYBOARD EVENTS */
// Elementet vi vill använda för eventlyssnare
let htmlElement = document.querySelector('html');
// Lägger vi till i eventlyssnaren
// Keydown = vilken tangent vi trycker ner
// Keyup = vilken tangent man släpper
htmlElement.addEventListener('keydown',
    function (event) {
        // Loggar vad knapptryckningen har för "variabel"
        console.log(event.key);
        // Elementet vi vill ändra bakgrundsfärg på
        let art1 = document.querySelector('.art-1') 
        // Kör if-statement för att se om event.key === tangenten vi väljer
        if (event.key === 'b' || event.key === 'B') {
            art1.style.backgroundColor = 'lightblue';
        } else if (event.key === 'r' || event.key === 'R'){
            art1.style.backgroundColor = 'red';
        } else if (event.key === 'Alt') {
            art1.style.backgroundColor = 'hotpink';
        }
    }
)
// Visar vad HTML-elementet innehåller
console.dir(htmlElement);
// HTML-elementet skapas för att man ska ha fokus på hela 
// html-dokumentet när man gör en knapptryckning, typ haha.

// Till hit