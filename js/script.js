// Consegna:
// Dati tre array contenenti:
//  - una lista ordinata di 5 immagini,
//  - una lista ordinata dei relativi 5 luoghi e
//  - una lista di 5 news,
// creare un carosello come nella foto allegata.
// MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l’immagine grande a sinistra e le thumbnails sulla destra in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.
// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.
// MILESTONE 3
// Al click dell’utente sulle frecce verso l’alto o verso il basso, l’immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi:
//  - titolo e
//  - testo.
// Allo stesso tempo nelle miniature l’immagine attiva dovrà apparire in evidenza rispetto alle altre.
// BONUS:
// Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso l’alto, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso il basso.
// Prima di partire a scrivere codice:
// Non lasciamoci spaventare dalla complessità apparente dell’esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz’ora, così da non perdere di vista il focus dell’esercizio.
// :party_wizard: Consigli del giorno:
// 1. costruiamo del carosello una versione statica contenente un’immagine grande con del testo ben posizionato e una miniatura. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come “template”.
// 2. scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
// 3. Al momento giusto (starà a voi capire quale) rispondete a questa domanda: “Quanti cicli servono?”


const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const imagesRight = document.querySelector(".img-r");
const imagesLeft = document.querySelector(".img-l");


for (let i = 0; i < items.length; i++) {
    imagesRight.innerHTML += `<img src=${items[i]} alt="">`
    imagesLeft.innerHTML += `
    <div> 
        <img src=${items[i]} alt="">
        <div>
            <h1>${title[i]}</h1>
            <h2>${text[i]}</h2>
        </div>
    </div>
    `
}

const active = document.querySelectorAll(".img-l div");
const bright = document.querySelectorAll(".img-r img");




active[0].classList.add("active");
bright[0].classList.add("bright");

console.log( bright[0].classList);

const down = document.querySelector(".down");



// passo all'elemento successivo
down.addEventListener("click" , function () {
    const images = document.querySelector("img-r img");
    let falso = false;

     for (let i = 0; i < bright.length; i++) {
        
       

        if ( bright[i].classList.value == "bright") {
            falso = true;
        } else {
           
        }

        
   

     }

     if (falso == true) {
        images.nextElementSibling.classList.remove("bright")

    } else {
        images.nextElementSibling.classList.add("bright")
    }

     
    
    // const imgNext = imageActive.nextElementSibling;
    // const dotNext = dotActive.nextElementSibling;
    // imgNext.classList.add('active');
    // dotNext.classList.add('active');
})